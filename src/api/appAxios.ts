import axios from "axios";
import getHostAPIUrl from "./appConfig";
import { setupAxiosInterceptors } from "./axiosInterceptor";
// import { setupAxiosInterceptors } from "./axiosInterceptor";

export default function appAxios() {
  const axiosInstance = axios.create({
    baseURL: getHostAPIUrl(),
    timeout: 30000,
    responseType: "json",
  });

  // Setup interceptors
  setupAxiosInterceptors(axiosInstance);

  return axiosInstance;
}
