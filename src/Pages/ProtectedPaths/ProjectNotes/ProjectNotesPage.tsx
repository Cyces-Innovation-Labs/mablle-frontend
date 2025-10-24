import AppPageWrapper from "@/components/Commmon/AppPageWrapper";
import AppTitleWithBackButton from "@/components/Commmon/AppTitleWithBackButton";
import AppText from "@/components/Commmon/AppText";
import AppAvatar from "@/components/Commmon/AppAvatar";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ProjectNotesPage = () => {
  const [activeFilter, setActiveFilter] = useState<'client' | 'executor'>('client');

  const mockNotes = [
    {
      id: 1,
      category: "Project Notes",
      categoryColor: "bg-yellow-100 text-yellow-800",
      sender: "RM Randy Dorwart",
      senderId: "#MID385626",
      avatar: "RM",
      timestamp: "32 mins ago",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      attachments: null
    },
    {
      id: 2,
      category: "Floorplan",
      categoryColor: "bg-pink-100 text-pink-800",
      sender: "RM Randy Dorwart",
      senderId: "#MID385626",
      avatar: "RM",
      timestamp: "32 mins ago",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      attachments: {
        type: "pdf",
        name: "3BHK Prestige Lakes.pdf",
        size: "2.6 MB"
      }
    },
    {
      id: 3,
      category: "3D Designs",
      categoryColor: "bg-gray-100 text-gray-800",
      sender: "Design Seller",
      senderId: "#MID385626",
      avatar: "DS",
      timestamp: "Yesterday at 10:26 pm",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      attachments: {
        type: "image",
        name: "3D Design Preview",
        thumbnail: "/api/placeholder/100/100"
      }
    },
    {
      id: 4,
      category: "Quotation",
      categoryColor: "bg-gray-100 text-gray-800",
      sender: "RM Randy Dorwart",
      senderId: "#MID385626",
      avatar: "RM",
      timestamp: "23rd sep 2025 at 3:00 pm",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      attachments: {
        type: "quotation",
        name: "Quotation 2"
      }
    },
    {
      id: 5,
      category: "Quotation",
      categoryColor: "bg-gray-100 text-gray-800",
      sender: "Design Seller",
      senderId: "#MID385626",
      avatar: "DS",
      timestamp: "23rd sep 2025 at 3:00 pm",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      attachments: {
        type: "quotation",
        name: "Quotation 2"
      }
    },
  ];

  return (
    <AppPageWrapper>
      <AppTitleWithBackButton
        hideBackButton
        title="Project Notes"
        description="Lorem ipsum dolor sit amet consectetur."
        asideComp={
          <Button variant="outline" className="flex items-center gap-2">
          <Download />  Export
          </Button>
        }
      />

      {/* Filters Row */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          {/* Toggle Switch Container */}
          <div className="flex items-center bg-white rounded-[12px] p-1 border border-[#D8DAD9]">
            <button
              onClick={() => setActiveFilter('client')}
              className={`px-4 py-2 rounded-md transition-all duration-200 cursor-pointer ${
                activeFilter === 'client'
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              Seller ↔ Client
            </button>
            <button
              onClick={() => setActiveFilter('executor')}
              className={`px-4 py-2 rounded-md transition-all duration-200 relative cursor-pointer ${
                activeFilter === 'executor'
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              Seller ↔ Executor
            </button>
          </div>
        </div>
        

      </div>

      {/* Notes List */}
      <div className="mb-8 rounded-sm">
        {mockNotes.map((note) => (
          <div key={note.id} className="bg-white border p-6">
            <div className="flex items-center gap-4">
              {/* Left side - Category and Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${note.categoryColor}`}>
                    {note.category}
                  </span>
                </div>
                
                <div className="flex items-center gap-3 mb-3">
                  <AppAvatar 
                    src="" 
                    fallback={note.avatar}
                  />
                  <div>
                    <AppText type="span" className="font-medium text-gray-900">
                      {note.sender} <span className="text-gray-500 text-xl">.</span>
                    </AppText>
                    <AppText type="span" className="text-gray-500 ml-2">
                      {note.senderId} <span className="text-gray-500 text-xl">.</span>
                    </AppText>
                    <AppText type="span" className="text-gray-500 text-sm ml-2">
                    {note.timestamp}
                  </AppText>
                  </div>
                  
                </div>
                
                <AppText type="p" className="text-gray-700 mb-3">
                  {note.message}
                </AppText>
              </div>
              
              {/* Right side - Attachments */}
              {note.attachments && (
                <div className="flex-shrink-0">
                  {note.attachments.type === "pdf" && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
                      <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <AppText type="p" className="text-sm font-medium text-gray-900">
                          {note.attachments.name}
                        </AppText>
                        <AppText type="p" className="text-xs text-gray-500">
                          {note.attachments.size}
                        </AppText>
                      </div>
                    </div>
                  )}
                  
                  {note.attachments.type === "image" && (
                    <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16 bg-gray-300 rounded flex items-center justify-center">
                        <span className="text-xs text-gray-500">3D</span>
                      </div>
                    </div>
                  )}
                  
                  {note.attachments.type === "quotation" && (
                    <Button variant="outline" size="sm" className="flex items-center gap-2 py-[20px] px-[20px]">
                      <FileText className="w-4 h-4" />
                      {note.attachments.name}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </AppPageWrapper>
  );
};

export default ProjectNotesPage;
