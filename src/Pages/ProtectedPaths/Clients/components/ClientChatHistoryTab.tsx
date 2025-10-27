import AppText from "@/components/Commmon/AppText";
import { useOutletContext } from "react-router";
import AppAvatar from "@/components/Commmon/AppAvatar";
import { MessageCircle } from "lucide-react";

const ClientChatHistoryTab = () => {
  const client = useOutletContext<any>();

  // Mock chat history data
  const chatHistory = [
    { id: "chat-1", message: "When will the project be completed?", date: "Jan 6, 2025 10:30 AM", unread: 2 },
    { id: "chat-2", message: "Can we schedule a meeting?", date: "Jan 5, 2025 2:45 PM", unread: 0 },
    { id: "chat-3", message: "Thanks for the update!", date: "Jan 4, 2025 9:20 AM", unread: 0 },
  ];

  return (
    <div className="space-y-3">
      {chatHistory.map((chat) => (
        <div key={chat.id} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-start gap-3">
            <AppAvatar src={client.profileImage} fallback={client.clientName.charAt(0)} />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <AppText type="p" className="font-medium text-gray-900">
                  {client.clientName}
                </AppText>
                {chat.unread > 0 && (
                  <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {chat.unread}
                  </span>
                )}
              </div>
              <AppText type="p" className="text-sm text-gray-600 mb-1">
                {chat.message}
              </AppText>
              <AppText type="span" className="text-xs text-gray-500">
                {chat.date}
              </AppText>
            </div>
            <MessageCircle className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientChatHistoryTab;

