import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const AppToolTip = ({ children, content, bodyClassName }: { children?: React.ReactNode, content: string, bodyClassName?: string }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {children || <Info size={14} className="text-text-secondary"/>}
      </TooltipTrigger>
      <TooltipContent className={`w-full text-sm max-w-[300px] ${bodyClassName}`}>
        <p>{content}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default AppToolTip;
