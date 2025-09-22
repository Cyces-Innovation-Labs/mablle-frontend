import { LOGIN_PAGE_URL } from "@/navigation/urls";
import LoginPage from "@/Pages/AuthPages/LoginPage";
import { Route } from "react-router";

export const loginAndSignupRoutes = () => {
  return <Route path={LOGIN_PAGE_URL} element={<LoginPage />} />;
};
