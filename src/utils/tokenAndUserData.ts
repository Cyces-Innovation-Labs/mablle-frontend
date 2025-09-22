import Cookies from "js-cookie";
import type { ITeam, IUserData } from "@/components/Commmon/types";

const cookieAge = 30;

const setTokenAndUserDataInCookies = ({
  access_token,
  refresh_token,
  userData,
  teams,
}: {
  access_token: string;
  refresh_token: string;
  userData: IUserData;
  teams: ITeam[];
}) => {
  Cookies.set("access_token", access_token, { expires: cookieAge });
  Cookies.set("refresh_token", refresh_token, { expires: cookieAge });
  Cookies.set("user_data", JSON.stringify(userData), { expires: cookieAge });
  Cookies.set("teams", JSON.stringify(teams), { expires: cookieAge });
};

const setTokenAloneInCookies = ({
  access_token,
  refresh_token,
}: {
  access_token: string;
  refresh_token: string;
}) => {
  Cookies.set("access_token", access_token, { expires: cookieAge });
  Cookies.set("refresh_token", refresh_token, { expires: cookieAge });
};

const setTeamsInCookies = (teams: ITeam[]) => {
  Cookies.set("teams", JSON.stringify(teams), { expires: cookieAge });
};

const getUserToken = () => {
  return {
    access_token: Cookies.get("access_token") || null,
    refresh_token: Cookies.get("refresh_token") || null,
  };
};

const getUserData = (): IUserData | null => {
  const userData = Cookies.get("user_data");
  return userData ? JSON.parse(userData) : null;
};

const getTeams = () => {
  const teams = Cookies.get("teams");
  return teams ? JSON.parse(teams) : null;
};

const clearTokenAndUserData = () => {
  Cookies.remove("access_token");
  Cookies.remove("refresh_token");
  Cookies.remove("user_data");
  Cookies.remove("teams");
};

export {
  setTokenAndUserDataInCookies,
  clearTokenAndUserData,
  setTokenAloneInCookies,
  getUserToken,
  getUserData,
  getTeams,
  setTeamsInCookies,
};
