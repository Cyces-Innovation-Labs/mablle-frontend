import AppText from "@/components/Commmon/AppText";
import { useOutletContext } from "react-router";
import { Phone, PhoneIncoming, PhoneOutgoing, PhoneMissed } from "lucide-react";
import AppAvatar from "@/components/Commmon/AppAvatar";

const ClientCallHistoryTab = () => {
  const client = useOutletContext<any>();

  // Mock call history data
  const callHistory = [
    { id: "call-1", type: "incoming", duration: "5:30", date: "Jan 6, 2025 10:30 AM", status: "completed" },
    { id: "call-2", type: "outgoing", duration: "3:15", date: "Jan 5, 2025 2:45 PM", status: "completed" },
    { id: "call-3", type: "missed", duration: "-", date: "Jan 4, 2025 9:20 AM", status: "missed" },
  ];

  const getCallIcon = (type: string, status: string) => {
    if (status === "missed") {
      return <PhoneMissed className="w-5 h-5 text-red-500" />;
    }
    return type === "incoming" ? (
      <PhoneIncoming className="w-5 h-5 text-green-500" />
    ) : (
      <PhoneOutgoing className="w-5 h-5 text-blue-500" />
    );
  };

  return (
    <div className="space-y-3">
      {callHistory.map((call) => (
        <div key={call.id} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                {getCallIcon(call.type, call.status)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <AppText type="p" className="font-medium text-gray-900">
                    {call.type === "incoming" ? "Incoming Call" : call.type === "outgoing" ? "Outgoing Call" : "Missed Call"}
                  </AppText>
                  {call.status === "completed" && (
                    <span className="text-sm text-gray-600">({call.duration})</span>
                  )}
                </div>
                <AppText type="span" className="text-sm text-gray-600">
                  {call.date}
                </AppText>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Phone className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientCallHistoryTab;

