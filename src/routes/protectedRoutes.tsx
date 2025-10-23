import AppLayout from "@/components/layout/MainLayout/AppLayout";
import {
  CLIENT_PAGE_URL,
  LEAD_PAGE_URL,
  LEAD_DETAIL_FORM_PAGE_URL,
  DESIGNER_PAGE_URL,
  DESIGNER_DETAIL_FORM_PAGE_URL,
} from "@/navigation/urls";
import AuthLayoutForProtectedRoutes from "@/Pages/ProtectedPaths/layout/AuthLayoutForProtectedRoutes";
import ClientsPage from "@/Pages/ProtectedPaths/Clients/ClientsPage";
import LeadDetailFormPage from "@/Pages/ProtectedPaths/Clients/LeadDetailFormPage";
import LeadsPage from "@/Pages/ProtectedPaths/Clients/LeadsPage";
import DesignerDetailFormPage from "@/Pages/ProtectedPaths/Designers/DesignerDetailFormPage";
import DesignersPage from "@/Pages/ProtectedPaths/Designers/DesignersPage";
import { Navigate, Route } from "react-router-dom";

export const protectedRoutes = () => {
  return (
    <Route element={<AuthLayoutForProtectedRoutes />}>
      <Route element={<AppLayout />}>
        {/* index route navigating to dashboard/client (optional) */}
        <Route index element={<Navigate to={CLIENT_PAGE_URL} />} />
        <Route path={CLIENT_PAGE_URL} element={<ClientsPage />} />
        
        <Route path={LEAD_PAGE_URL} element={<LeadsPage />} />
        <Route
          path={LEAD_DETAIL_FORM_PAGE_URL}
          element={<LeadDetailFormPage />}
        />
        <Route path={DESIGNER_PAGE_URL} element={<DesignersPage />} />
        <Route
          path={DESIGNER_DETAIL_FORM_PAGE_URL}
          element={<DesignerDetailFormPage />}
        />
      </Route>
    </Route>
  );
};
