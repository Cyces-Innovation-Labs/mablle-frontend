import { Inbox } from "lucide-react";

const NoData = ({ message = "No data to display." }: { message?: string }) => (
  <div className="flex flex-col items-center justify-center py-16 text-gray-400">
    <Inbox size={48} className="mb-4" />
    <div className="text-lg font-medium">{message}</div>
  </div>
);

export default NoData; 