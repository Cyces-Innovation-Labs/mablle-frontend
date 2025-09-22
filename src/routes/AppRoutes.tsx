import { Routes } from "react-router";
import { protectedRoutes } from "./protectedRoutes";
import { loginAndSignupRoutes } from "./loginAndSignupRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      {loginAndSignupRoutes()}
      {protectedRoutes()}
    </Routes>
  );
};

export default AppRoutes;
