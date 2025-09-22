import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface InlineSlidingPanelProps {
  children: React.ReactNode;
  title?: string;
  trigger: React.ReactNode;
  isOpen: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  contentClassName?: string;
}

export function InlineSlidingPanel({
  children,
  // trigger,
  isOpen,
  contentClassName,
}: InlineSlidingPanelProps) {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={
              isOpen
                ? { width: "100%", maxWidth: "556px", opacity: 1 }
                : undefined
            }
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn("", contentClassName)}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
