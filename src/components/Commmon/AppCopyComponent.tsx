import { CopyIcon } from "lucide-react";
import { Button } from "../ui/button";
import AppText from "./AppText";
import { Label } from "../ui/label";
import { toast } from "sonner";

const AppCopyComponent = ({
  textToCopy,
  label,
  labelClassName,
}: {
  textToCopy: string;
  label?: string;
  labelClassName?: string;
}) => {
  return (
    <div>
      {label && <Label className={`mb-[9px] ${labelClassName}`}>{label}</Label>}
      <div className="flex items-center gap-[20px]">
        <div className="flex items-center gap-[10px]">
          <AppText className="font-semibold" text={textToCopy} />
        </div>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => {
            navigator.clipboard.writeText(textToCopy);
            toast.success("Copied to clipboard");
          }}
        >
          <CopyIcon className="w-4 h-4 text-blue-tag" />
        </Button>
      </div>
    </div>
  );
};

export default AppCopyComponent;
