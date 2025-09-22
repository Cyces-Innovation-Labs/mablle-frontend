import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import AppSpinner from "./AppSpinner";

const AppDeleteButton = ({ isLoading, onClick }: { isLoading?: boolean, onClick?: (value: any) => void }) => {
  return (
    <div className="flex items-center justify-center rounded-[100%] ">
      {isLoading ? (
        <AppSpinner />
      ) : (
        <Button variant={"ghost"} size={"icon"} onClick={onClick}>
          <Trash2 size={18} className="text-destructive" />
        </Button>
      )}
    </div>
  );
};

export default AppDeleteButton;
