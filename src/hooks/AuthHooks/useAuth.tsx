import { useState, useCallback } from "react";
import useAppStore from "@/store/authStore";
import { setTokenAndUserDataInCookies, getUserToken, clearTokenAndUserData } from "@/utils/tokenAndUserData";
import type { ILoginResponse, IUserData } from "@/components/Commmon/types";
import { useMutation } from "@tanstack/react-query";
import { authEndpoints } from "@/api/endpoints/endpoints";
import { handleApiError } from "@/lib/common-funnctions";
import { toast } from "sonner";
import makePostRequest from "@/api/makePostRequest";


const useAuth = () => {
  const { setTokens, setUserData } = useAppStore();
  const [isAuthenticated, setIsAuthenticated] = useState(!!getUserToken()?.refresh_token);

  const handleLoginSuccess = useCallback((response: ILoginResponse) => {
    try {

      const { access_token, refresh_token, ...userData } = response.data;

      // Store tokens in cookies and state
      setTokenAndUserDataInCookies({ access_token, refresh_token, userData, teams: userData.teams });
      setTokens({ accessToken: access_token, refreshToken: refresh_token });
      setUserData(userData as unknown as IUserData);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  }, [setTokens, setUserData]);

  const handleUserInfoSuccess = useCallback((response: IUserData) => {
    try {

      const userData = response;

      // Store tokens in cookies and state
      setUserData(userData as unknown as IUserData);

    } catch (error) {
      console.log(error);
    }
  }, [setUserData]);



  //usemutation for logout here
  const { mutate: logout, isPending: logoutPending } = useMutation({
    mutationFn: (body: { refresh_token: string }) => makePostRequest(authEndpoints.logout, body),
    onSuccess: ()=>{
      clearTokenAndUserData()
      toast.success("Logged out successfully");
      window.location.href = "/login";
    },
    onError: (error: any) => {
      console.error(error);
      handleApiError(error);
    }
  });

  const handleLogout = useCallback(() => {
    const refresh_token = getUserToken()?.refresh_token
    if (refresh_token) {
      logout({ refresh_token });
    }
  }, [logout]);


  return {
    handleLoginSuccess,
    handleUserInfoSuccess,
    isAuthenticated,
    logout,
    logoutPending,
    handleLogout
  };
};

export default useAuth;
