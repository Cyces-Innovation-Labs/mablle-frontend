import AppLayout from "@/components/layout/MainLayout/AppLayout";
import { USER_PAGE_URL, USER_DETAIL_FORM_PAGE_URL } from "@/navigation/urls";
import AuthLayoutForProtectedRoutes from "@/Pages/ProtectedPaths/layout/AuthLayoutForProtectedRoutes";
import UserDetailFormPage from "@/Pages/ProtectedPaths/Users/UserDetailFormPage";
import UsersPage from "@/Pages/ProtectedPaths/Users/UsersPage";
import { Navigate, Route } from "react-router-dom";

export const protectedRoutes = () => {
  return (
    <Route element={<AuthLayoutForProtectedRoutes />}>
      <Route element={<AppLayout />}>
        {/* index route navigating to dashboard/user (optional) */}
        <Route index element={<Navigate to={USER_PAGE_URL} />} />
        <Route path={USER_PAGE_URL} element={<UsersPage />} />
        <Route path={USER_DETAIL_FORM_PAGE_URL} element={<UserDetailFormPage />} />
      </Route>
    </Route>
  );
};
