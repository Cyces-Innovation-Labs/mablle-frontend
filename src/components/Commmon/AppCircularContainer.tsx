import { cn } from "@/lib/utils";

const AppCircularContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-[100%] bg-[#F4EBFF] size-[60px] border-[8px] border-[#F9F5FF]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default AppCircularContainer;
