import AppLayout from "@/components/layout/MainLayout/AppLayout";
import {
  CLIENT_PAGE_URL,
  LEAD_PAGE_URL,
  LEAD_DETAIL_FORM_PAGE_URL,
  DESIGNER_PAGE_URL,
  DASHBOARD_PAGE_URL,
  PROJECT_NOTES_PAGE_URL,
  MANAGE_CLIENT_APP_PAGE_URL,
  SUPPORT_TICKETS_PAGE_URL,
  DESIGN_REQUEST_FORM_PAGE_URL,
  REPORTS_PAGE_URL,
  SETTINGS_PAGE_URL,
  LEAD_DETAIL_PAGE_URL,
} from "@/navigation/urls";
import AuthLayoutForProtectedRoutes from "@/Pages/ProtectedPaths/layout/AuthLayoutForProtectedRoutes";
import ClientsPage from "@/Pages/ProtectedPaths/Clients/ClientsPage";
import LeadDetailFormPage from "@/Pages/ProtectedPaths/Clients/LeadDetailFormPage";
import LeadsPage from "@/Pages/ProtectedPaths/Clients/LeadsPage";
import DesignersPage from "@/Pages/ProtectedPaths/Designers/DesignersPage";
import DashboardPage from "@/Pages/ProtectedPaths/Dashboard/DashboardPage";
import ProjectNotesPage from "@/Pages/ProtectedPaths/ProjectNotes/ProjectNotesPage";
import ManageClientAppPage from "@/Pages/ProtectedPaths/ManageClientApp/ManageClientAppPage";
import SupportTicketsPage from "@/Pages/ProtectedPaths/SupportTickets/SupportTicketsPage";
import DesignRequestFormPage from "@/Pages/ProtectedPaths/DesignRequestForm/DesignRequestFormPage";
import ReportsPage from "@/Pages/ProtectedPaths/Reports/ReportsPage";
import SettingsPage from "@/Pages/ProtectedPaths/Settings/SettingsPage";
import { Navigate, Route } from "react-router-dom";
import LeadDetailPage from "@/Pages/ProtectedPaths/Clients/LeadDetailPage";

export const protectedRoutes = () => {
  return (
    <Route element={<AuthLayoutForProtectedRoutes />}>
      <Route element={<AppLayout />}>
        {/* index route navigating to dashboard */}
        <Route index element={<Navigate to={DASHBOARD_PAGE_URL} />} />
        
        {/* Dashboard */}
        <Route path={DASHBOARD_PAGE_URL} element={<DashboardPage />} />
        
        {/* Clients */}
        <Route path={CLIENT_PAGE_URL} element={<ClientsPage />} />
        
        {/* Leads */}
        <Route path={LEAD_PAGE_URL} element={<LeadsPage />} />
        <Route path={LEAD_DETAIL_FORM_PAGE_URL} element={<LeadDetailFormPage />} />
        <Route path={LEAD_DETAIL_PAGE_URL} element={<LeadDetailPage />} />
        
        {/* Designers */}
        <Route path={DESIGNER_PAGE_URL} element={<DesignersPage />} />
        
        {/* Other Pages */}
        <Route path={PROJECT_NOTES_PAGE_URL} element={<ProjectNotesPage />} />
        <Route path={MANAGE_CLIENT_APP_PAGE_URL} element={<ManageClientAppPage />} />
        <Route path={SUPPORT_TICKETS_PAGE_URL} element={<SupportTicketsPage />} />
        <Route path={DESIGN_REQUEST_FORM_PAGE_URL} element={<DesignRequestFormPage />} />
        <Route path={REPORTS_PAGE_URL} element={<ReportsPage />} />
        <Route path={SETTINGS_PAGE_URL} element={<SettingsPage />} />
      </Route>
    </Route>
  );
};