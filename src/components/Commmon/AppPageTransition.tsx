import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AppPageTransitionProps {
  children: ReactNode;
  className?: string;
}

const AppPageTransition = ({ children, className = "" }: AppPageTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AppPageTransition; 