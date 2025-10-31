import AppText from "@/components/Commmon/AppText";
import { Checkbox } from "@/components/ui/checkbox";
import { useMemo, useState } from "react";

type NotificationKey =
  | "clients"
  | "designers"
  | "projectNotes"
  | "manageClientApp"
  | "supportTickets"
  | "designRequestForm"
  | "reports";

type Pref = { enabled: boolean; inApp: boolean; email: boolean };

const rowsMeta: { key: NotificationKey; title: string; desc: string }[] = [
  { key: "clients", title: "Clients", desc: "Lorem ipsum dolor sit." },
  { key: "designers", title: "Designers", desc: "Lorem ipsum dolor sit." },
  { key: "projectNotes", title: "Project Notes", desc: "Lorem ipsum dolor sit." },
  { key: "manageClientApp", title: "Manage Client App", desc: "Lorem ipsum dolor sit." },
  { key: "supportTickets", title: "Support Tickets", desc: "Lorem ipsum dolor sit." },
  { key: "designRequestForm", title: "Design Request Form", desc: "Lorem ipsum dolor sit." },
  { key: "reports", title: "Reports", desc: "Lorem ipsum dolor sit." },
];

const NotificationsTab = () => {
  const [prefs, setPrefs] = useState<Record<NotificationKey, Pref>>(() => {
    const base: Pref = { enabled: true, inApp: true, email: false };
    return rowsMeta.reduce((acc, r) => ({ ...acc, [r.key]: { ...base } }), {} as Record<NotificationKey, Pref>);
  });

  const allInApp = useMemo(() => rowsMeta.every((r) => prefs[r.key]?.inApp), [prefs]);
  const allEmail = useMemo(() => rowsMeta.every((r) => prefs[r.key]?.email), [prefs]);

  // Add 'enable all' behavior later if needed

  const updatePref = (key: NotificationKey, patch: Partial<Pref>) => {
    setPrefs((p) => ({ ...p, [key]: { ...p[key], ...patch } }));
  };
  const toggleAllInApp = (value: boolean) => {
    const updated = { ...prefs };
    rowsMeta.forEach((r) => (updated[r.key] = { ...updated[r.key], inApp: value }));
    setPrefs(updated);
  };
  const toggleAllEmail = (value: boolean) => {
    const updated = { ...prefs };
    rowsMeta.forEach((r) => (updated[r.key] = { ...updated[r.key], email: value }));
    setPrefs(updated);
  };

  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 items-center gap-4">
        <AppText type="h4" className="text-[#9C6E61] text-md font-semibold">
          Select all notifications to
        </AppText>
        <div className="flex items-center gap-4">
              {/* In-App */}
            <div className="flex items-center gap-3">
              <Checkbox
                checked={allInApp}
                onCheckedChange={(v) => toggleAllInApp(Boolean(v))}
                className="h-4 w-4 rounded-[4px] border-[#8B5E50] data-[state=checked]:bg-[#8B5E50] data-[state=checked]:text-white"
              />
              <AppText type="span" className="text-sm">
                In-App
              </AppText>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <Checkbox
                checked={allEmail}
                onCheckedChange={(v) => toggleAllEmail(Boolean(v))}
                className="h-4 w-4 rounded-[4px] border-[#8B5E50] data-[state=checked]:bg-[#8B5E50] data-[state=checked]:text-white"
              />
              <AppText type="span" className="text-sm">
                Email
              </AppText>
            </div>
            </div>
      </div>

      <div className=" bg-background">
        {rowsMeta.map((row, idx) => (
          <div key={row.key} className={`grid grid-cols-1 sm:grid-cols-3 items-center gap-4 space-y-6 ${idx === 0 ? 'rounded-t-[12px]' : ''}`}>
            {/* Left column: name + description with enable checkbox */}
            <div className="flex items-start gap-3">
              <div>
                <AppText type="h4" className="font-medium text-sm text-primary">
                  {row.title}
                </AppText>
                <AppText type="p" className="text-[#717182] font-normal mt-[5px] text-sm">
                  {row.desc}
                </AppText>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* In-App */}
            <div className="flex items-center gap-3">
              <Checkbox
                checked={prefs[row.key]?.inApp}
                onCheckedChange={(v) => updatePref(row.key, { inApp: Boolean(v) })}
                className="h-4 w-4 rounded-[4px] border-[#8B5E50] data-[state=checked]:bg-[#8B5E50] data-[state=checked]:text-white"
              />
              <AppText type="span" className="text-sm">
                In-App
              </AppText>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <Checkbox
                checked={prefs[row.key]?.email}
                onCheckedChange={(v) => updatePref(row.key, { email: Boolean(v) })}
                className="h-4 w-4 rounded-[4px] border-[#8B5E50] data-[state=checked]:bg-[#8B5E50] data-[state=checked]:text-white"
              />
              <AppText type="span" className="text-sm">
                Email
              </AppText>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsTab;

