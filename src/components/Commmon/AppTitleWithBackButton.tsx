import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import AppText from "./AppText";
import { useNavigate } from "react-router";

const AppTitleWithBackButton = ({
  onClick = () => {},
  title,
  hideBackButton = false,
  onBackNavigateTo,
  description,
  asideComp,
}: {
  onClick?: () => void;
  title: string;
  hideBackButton?: boolean;
  onBackNavigateTo?: string;
  description?: string;
  asideComp?: React.ReactNode;
}) => {
  const navigate = useNavigate();
  const handleBackNavigateTo = () => {
    if (onBackNavigateTo) {
      navigate(onBackNavigateTo);
    } else {
      onClick();
    }
  };
  return (
    <div className="flex items-center justify-between my-6">
      <div className="">
      {!hideBackButton && (
            <div
              className="mr-1 flex items-center gap-2 !pl-0 mb-4 text-[#717182] cursor-pointer"
              onClick={handleBackNavigateTo}
            >
              <ArrowLeft className="size-[24px] self-start" /> Back
            </div>
          )}
        <div className="flex items-center mb-2">        
          <div>
            <AppText type="h1" className="text-2xl font-bold text-primary">
              {title}
            </AppText>
            {description && (
              <AppText type="p" className="text-[#504849] text-sm">
                {description}
              </AppText>
            )}
          </div>
        </div>
      </div>
      {asideComp}
      {/* <AppText text={title} className="text-[28px] font-bold my-[28px]" /> */}
    </div>
  );
};

export default AppTitleWithBackButton;
