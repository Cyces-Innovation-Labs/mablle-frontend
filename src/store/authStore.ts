import type { IUserData } from "@/components/Commmon/types";
import { create } from "zustand";

interface AuthState {
  refreshToken: string;
  accessToken: string;
  userData: IUserData | null;
  setTokens: (data: { refreshToken: string; accessToken: string }) => void;
  setUserData: (data: IUserData) => void;
  clearAuth: () => void;
  isLogoutModalOpen: boolean;
  setIsLogoutModalOpen: (data: boolean) => void;
}

const initialState: Omit<
  AuthState,
  | "setTokens"
  | "setUserData"
  | "setTeams"
  | "clearAuth"
  | "setIsLogoutModalOpen"
> = {
  refreshToken: "",
  accessToken: "",
  userData: null,
  isLogoutModalOpen: false,
};

const useAppStore = create<AuthState>((set) => ({
  ...initialState,

  setTokens: (data: { refreshToken: string; accessToken: string }) => {
    set({ refreshToken: data.refreshToken, accessToken: data.accessToken });
  },
  setUserData: (data: IUserData) => {
    set({ userData: data });
  },
  clearAuth: () => {
    set(initialState);
  },
  setIsLogoutModalOpen: (data: boolean) => {
    set({ isLogoutModalOpen: data });
  },
}));

export default useAppStore;
