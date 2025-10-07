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
        <div className="flex items-center mb-2">
          {!hideBackButton && (
            <Button
              variant={"ghost"}
              className="mr-1"
              onClick={handleBackNavigateTo}
            >
              <ArrowLeft className="size-[24px]" />
            </Button>
          )}
          <AppText type="h1" className="text-3xl font-bold text-gray-900">
            {title}
          </AppText>
        </div>

        {description && (
          <AppText type="p" className="text-gray-600">
            {description}
          </AppText>
        )}
      </div>
      {asideComp}
      {/* <AppText text={title} className="text-[28px] font-bold my-[28px]" /> */}
    </div>
  );
};

export default AppTitleWithBackButton;
