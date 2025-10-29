import Notes, { type NoteItem } from "./Notes";

const sampleNotes: NoteItem[] = [
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
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
  },
];

const ClientNotesTab = () => {
  return (
    <div className="space-y-6 p-6 bg-white rounded-[8px] shadow-sm">
      <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-[#054D8B] rounded" />
            <span className="text-base font-semibold">Notes & Comments</span>
          </div>
      {/* Section: Project Notes */}
      <div className="">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-semibold text-[#9C6E61]">Project Notes</span>
          <span className="text-xs text-muted-foreground">2 notes</span>
        </div>
        <Notes notes={sampleNotes} onSend={() => {}} placeholder="Add Project Notes/ comments about this project..." />
      </div>

      {/* Section: Floorplan */}
      <div className="">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-semibold text-[#9C6E61]">Floorplan</span>
          <span className="text-xs text-muted-foreground">2 notes</span>
        </div>
        <Notes notes={sampleNotes} onSend={() => {}} placeholder="Add Project Notes/ comments about this project..." />
      </div>

      {/* Section: 3D Designs */}
          <div className="">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-semibold text-[#9C6E61]">3D Designs</span>
        </div>

        {/* First asset + notes */}
        <div className="rounded-[8px] grid grid-cols-10 border border-[#E5E7EB] p-3">
          <div className="flex gap-3 mb-3 col-span-1">
            <img src="/project-sample.jpg" alt="preview" className="h-[100px] w-[100px] rounded-md object-cover" />
          </div>


             <div className="col-span-9">
             <Notes notes={sampleNotes} onSend={() => {}} placeholder="Add Project Notes/ comments about this project..." />
             </div>
            
        </div>

        {/* Second asset + notes */}
        <div className="rounded-[8px] grid grid-cols-10 border border-[#E5E7EB] p-3 mt-4">
          <div className="flex gap-3 mb-3 col-span-1">
            <img src="/project-sample.jpg" alt="preview" className="h-[100px] w-[100px] rounded-md object-cover" />
          </div>


              <div className="col-span-9">
              <Notes notes={sampleNotes} onSend={() => {}} placeholder="Add Project Notes/ comments about this project..." />
              </div>
        </div>
      </div>
    </div>
  );
};

export default ClientNotesTab;

