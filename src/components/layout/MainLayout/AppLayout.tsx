import { Outlet } from "react-router";
import AppSidebar from "./AppSidebar";
import { AnimatePresence } from "framer-motion";
const AppLayout = () => {

  return (
    <div className="bg-root-background">
      <AppSidebar>
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </AppSidebar>
    </div>
  );
};

export default AppLayout;
