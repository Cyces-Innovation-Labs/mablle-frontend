import { LOGIN_PAGE_URL } from "@/navigation/urls";
import AuthLayoutForAuthRoutes from "@/Pages/AuthPages/layout/AuthLayoutForAuthRoutes";
import LoginPage from "@/Pages/AuthPages/LoginPage";
import { Route } from "react-router";

export const loginAndSignupRoutes = () => {
  return (
    <Route element={<AuthLayoutForAuthRoutes />}>
      <Route path={LOGIN_PAGE_URL} element={<LoginPage />} />
    </Route>
  );
};
