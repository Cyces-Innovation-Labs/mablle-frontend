import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import AppText from "./AppText";
import { useNavigate } from "react-router";

const AppTitleWithBackButton = ({
  onClick = () => {},
  title,
  hideBackButton = false,
  onBackNavigateTo,
}: {
  onClick?: () => void;
  title: string;
  hideBackButton?: boolean;
  onBackNavigateTo?: string;
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
    <div className="flex items-center border-b mb-2">
      {!hideBackButton && (
        <Button
          variant={"ghost"}
          className="mr-1"
          onClick={handleBackNavigateTo}
        >
          <ArrowLeft className="size-[24px]" />
        </Button>
      )}
      <AppText text={title} className="text-[28px] font-bold my-[28px]" />
    </div>
  );
};

export default AppTitleWithBackButton;
