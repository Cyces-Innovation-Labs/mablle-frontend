import { Outlet } from "react-router";
import AppSidebar from "./AppSidebar";
import AppNavbar from "./AppNavbar";
import { AnimatePresence } from "framer-motion";

const AppLayout = () => {
  return (
    <div className="bg-root-background min-h-screen">
      <AppSidebar>
        <div className="flex flex-col h-screen">
          <AppNavbar />
          <main className="flex-1 overflow-auto no-scrollbar mb-[24px]">
            <AnimatePresence mode="wait">
              <Outlet />
            </AnimatePresence>
          </main>
        </div>
      </AppSidebar>
    </div>
  );
};

export default AppLayout;
