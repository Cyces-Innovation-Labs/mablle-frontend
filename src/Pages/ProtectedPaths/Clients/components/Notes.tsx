import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send } from "lucide-react";

export interface NoteItem {
  id: string;
  user: { name: string; avatarUrl?: string };
  date: string;
  text: string;
}

interface NotesProps {
  notes?: NoteItem[];
  onSend?: (text: string) => void;
  placeholder?: string;
}

const defaultNotes: NoteItem[] = [
  {
    id: "1",
    user: { name: "Randy Dorwart" },
    date: "25 Sep, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
  },
  {
    id: "2",
    user: { name: "Lincoln Aminoff" },
    date: "25 Sep, 2025",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
  },
];

const Notes = ({ notes = defaultNotes, onSend, placeholder = "Add comment on this quotation..." }: NotesProps) => {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (!value.trim()) return;
    onSend?.(value.trim());
    setValue("");
  };

  return (
    <div className="rounded-[12px] border border-[#E5E7EB] bg-white p-3">
      {/* Input */}
      <div className="relative">
        <Textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="min-h-[84px] pr-12 text-sm resize-none"
        />
        <Button
          type="button"
          size="icon"
          className="absolute right-2 bottom-2 h-8 w-8 rounded-full bg-[#054D8B] text-white hover:bg-[#054D8B]/90"
          onClick={handleSend}
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>

      {/* Notes list */}
      <div className="mt-3 max-h-[420px] overflow-y-auto pr-1">
        {notes.map((n) => (
          <div key={n.id} className="flex items-start gap-3 py-3 border-b last:border-b-0">
            <Avatar className="h-9 w-9">
              <AvatarImage src={n.user.avatarUrl} />
              <AvatarFallback>{n.user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#23211D]">{n.user.name}</span>
                <span className="text-xs text-muted-foreground">{n.date}</span>
              </div>
              <p className="text-sm text-[#23211D] mt-1 leading-5">{n.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
