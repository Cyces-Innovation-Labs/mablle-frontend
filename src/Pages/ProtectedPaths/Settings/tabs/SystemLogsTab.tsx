import AppText from "@/components/Commmon/AppText";
import { Button } from "@/components/ui/button";

const logs: { id: number; text: React.ReactNode; when: string }[] = [
  { id: 1, text: <>Lorem ipsum dolor sit <span className="text-[#9C6E61] font-medium">amet</span> consectetur.</>, when: "22 Feb, 2025 , 09:10 am" },
  { id: 2, text: <>Lorem ipsum dolor sit <span className="text-[#9C6E61] font-medium">amet</span> consectetur.</>, when: "22 Feb, 2025 , 09:10 am" },
  { id: 3, text: <>Lorem ipsum dolor sit <span className="text-[#9C6E61] font-medium">amet</span> consectetur.</>, when: "22 Feb, 2025 , 09:10 am" },
  { id: 4, text: <>Lorem ipsum dolor sit <span className="text-[#9C6E61] font-medium">amet</span> consectetur.</>, when: "22 Feb, 2025 , 09:10 am" },
  { id: 5, text: <>Lorem ipsum dolor sit <span className="text-[#9C6E61] font-medium">amet</span> consectetur.</>, when: "22 Feb, 2025 , 09:10 am" },
  { id: 6, text: <>Lorem ipsum dolor sit <span className="text-[#9C6E61] font-medium">amet</span> consectetur.</>, when: "22 Feb, 2025 , 09:10 am" },
  { id: 7, text: <>Added new user <span className="text-[#9C6E61] font-medium">Sandeep</span> in the role designer seller.</>, when: "22 Feb, 2025 , 09:10 am" },
  { id: 8, text: <>Edited client details for <span className="text-[#9C6E61] font-medium">Sandeep Constructions</span></>, when: "22 Feb, 2025 , 09:10 am" },
];

const SystemLogsTab = () => {
  return (
    <div className="rounded-xl border bg-card p-4 sm:p-6 relative">
      <div className="flex justify-end absolute right-6 top-6">
        <Button variant="outline" className="rounded-[10px]">Date Range</Button>
      </div>

      <div className="mt-4 relative">
        <ul className="space-y-6">
          {logs.map((log, index) => (
            <li key={log.id} className="relative pl-8">
              <span className="absolute left-0 top-1.5 -ml-0.5 h-3 w-3 rounded-full bg-[#C0836C]" />
              {
                logs.length - 1 !== index && <div className="absolute left-[4px] top-2 h-[80px] bottom-0 border-l-2 border-[#C0836C]/40" />
              }
              <AppText type="p" className="text-[15px] text-foreground">
                {log.text}
              </AppText>
              <AppText type="p" className="text-sm text-muted-foreground mt-1">
                {log.when}
              </AppText>
            </li>
          ))}
        </ul>
      </div>
    </div>  
  );
};

export default SystemLogsTab;

