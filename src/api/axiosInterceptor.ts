import axios, { AxiosError } from "axios";
import type { InternalAxiosRequestConfig } from "axios";
import useAppStore from "@/store/authStore";
import { authEndpoints } from "./endpoints/endpoints";
import makePostRequest from "./makePostRequest";
import { LOGIN_PAGE_URL } from "@/navigation/urls";
import {
  getUserToken,
  setTokenAloneInCookies,
  clearTokenAndUserData,
} from "@/utils/tokenAndUserData";

// Extend the AxiosRequestConfig type to include _retry
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

// Queue to store pending requests
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value?: unknown) => void;
  reject: (reason?: any) => void;
  config: CustomAxiosRequestConfig;
}> = [];

const processQueue = (error: any = null, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

// 1. List of endpoints to exclude (can be exact or use patterns)
const EXCLUDED_ENDPOINTS = [
  authEndpoints.login,
  authEndpoints.signup,
  authEndpoints.refresh,
];

// 2. Helper function to check if the request should be excluded
function isExcluded(url: string) {
  return EXCLUDED_ENDPOINTS.some((endpoint) => url.includes(endpoint));
}

export const setupAxiosInterceptors = (
  axiosInstance: ReturnType<typeof axios.create>
) => {
  // Request interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      // Only add token if not excluded
      if (config.url && !isExcluded(config.url)) {
        const accessToken = getUserToken().access_token;
        const token = useAppStore.getState().accessToken || accessToken;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as CustomAxiosRequestConfig;
      if (!originalRequest) {
        return Promise.reject(error);
      }

      // Handle 401 Unauthorized errors
      if (
        [401, 403].includes(error.response?.status as number) &&
        !originalRequest._retry
      ) {
        if (isRefreshing) {
          // If token refresh is in progress, queue the request
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject, config: originalRequest });
          })
            .then((token) => {
              originalRequest.headers.Authorization = `Bearer ${token}`;
              return axiosInstance(originalRequest);
            })
            .catch((err) => {
              return Promise.reject(err);
            });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          const refreshToken = getUserToken().refresh_token;
          if (!!refreshToken == false) window.location.href = LOGIN_PAGE_URL;
          // Attempt to refresh the token
          const response = await makePostRequest(authEndpoints.refresh, {
            refresh_token: refreshToken,
          });

          if (response.status === "success") {
            const { access_token, refresh_token, ...userData } = response.data;

            // Update tokens in store
            useAppStore.getState().setTokens({
              accessToken: access_token,
              refreshToken: refresh_token,
            });
            if (access_token && refresh_token)
              setTokenAloneInCookies({
                access_token: access_token,
                refresh_token: refresh_token,
              });
            useAppStore.getState().setUserData(userData);

            // Process queued requests
            processQueue(null, access_token);

            // Retry the original request
            originalRequest.headers.Authorization = `Bearer ${access_token}`;
            return axiosInstance(originalRequest);
          } else {
            throw new Error("Token refresh failed");
          }
        } catch (refreshError) {
          processQueue(refreshError, null);
          clearTokenAndUserData();
          window.location.href = LOGIN_PAGE_URL;
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }

      // Handle 403 Forbidden errors
      // if (error.response?.status === 403) {
      //   clearTokenAndUserData();
      //   window.location.href = "/login";
      // }

      return Promise.reject(error);
    }
  );
};
