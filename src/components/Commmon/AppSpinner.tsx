import { Loader2Icon } from "lucide-react";

export default function AppSpinner({ size }: { size?: number }) {
  return <Loader2Icon size={size} className="animate-spin text-primary" />;
}
