// import useAppStore from "@/store/authStore";
// import Cookies from "js-cookie";
// import { useEffect } from "react";
// import { LOGIN_PAGE_URL } from "@/navigation/urls";
import { Outlet } from "react-router";

const AuthLayoutForProtectedRoutes = () => {
  // const navigate = useNavigate();
  // const { setUserData } = useAppStore();
  // useEffect(() => {
  //   const userData = Cookies.get("user_data");
  //   if (!userData) {
      // navigate(LOGIN_PAGE_URL);
  //   } else {
  //     setUserData(JSON.parse(userData));
  //   }
  // }, []);
  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayoutForProtectedRoutes;
