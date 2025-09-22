import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface SlidingPanelProps {
  children: React.ReactNode;
  title?: string;
  trigger: React.ReactNode;
  side?: "left" | "right";
  className?: string;
  contentClassName?: string;
}

export function SlidingPanel({
  children,
  title,
  trigger,
  side = "right",
  className,
  contentClassName,
}: SlidingPanelProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent
        side={side}
        className={cn("flex flex-col gap-4 p-6", contentClassName)}
      >
        {title && (
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
          </SheetHeader>
        )}
        <div className={cn("flex-1", className)}>{children}</div>
      </SheetContent>
    </Sheet>
  );
}
