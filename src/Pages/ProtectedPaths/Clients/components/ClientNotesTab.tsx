import { useState } from "react";
import AppText from "@/components/Commmon/AppText";
// import { useOutletContext } from "react-router";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Edit, Trash2 } from "lucide-react";

const ClientNotesTab = () => {
  // const client = useOutletContext<any>();
  const [isAdding, setIsAdding] = useState(false);
  const [noteText, setNoteText] = useState("");

  // Mock notes data
  const [notes] = useState([
    { id: "note-1", text: "Client requested quick turnaround for design approval", date: "Jan 6, 2025", author: "Designer" },
    { id: "note-2", text: "Discussion about material choices and budget", date: "Jan 5, 2025", author: "Manager" },
    { id: "note-3", text: "Follow up scheduled for next week", date: "Jan 4, 2025", author: "Designer" },
  ]);

  const handleAddNote = () => {
    console.log("Add note:", noteText);
    setIsAdding(false);
    setNoteText("");
  };

  return (
    <div className="space-y-6">
      {/* Add Note Section */}
      {!isAdding ? (
        <Button onClick={() => setIsAdding(true)} className="bg-gray-900 text-white hover:bg-gray-800">
          <Plus className="w-4 h-4 mr-2" />
          Add Note
        </Button>
      ) : (
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <Textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Enter your note here..."
            className="mb-3"
            rows={4}
          />
          <div className="flex gap-2">
            <Button onClick={handleAddNote} className="bg-gray-900 text-white hover:bg-gray-800">
              Save
            </Button>
            <Button variant="outline" onClick={() => setIsAdding(false)}>
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Notes List */}
      <div className="space-y-3">
        {notes.map((note) => (
          <div key={note.id} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <div>
                <AppText type="p" className="text-sm text-gray-700">
                  {note.text}
                </AppText>
                <AppText type="span" className="text-xs text-gray-500">
                  {note.date} • {note.author}
                </AppText>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-red-600">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientNotesTab;

