import AppPageWrapper from "@/components/Commmon/AppPageWrapper";
import AppTitleWithBackButton from "@/components/Commmon/AppTitleWithBackButton";
import AppForm from "@/components/Commmon/AppForm/AppForm";
import type { InputGroup } from "@/components/Commmon/types";
import AppText from "@/components/Commmon/AppText";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useMemo, useState } from "react";
import { MAKE_SETTINGS_ROLES_URL } from "@/navigation/make-url";

type RoleForm = {
  role_name: string;
  description: string;
};

const modules = [
  "Clients",
  "Designers",
  "Project Notes",
  "Manage Client App",
  "Support Tickets",
  "Design Request Form",
  "Reports",
  "Roles & Permissions",
  "System Logs",
];

const RolesCreatePage = () => {
  const navigate = useNavigate();
  const formUtils = useForm<RoleForm>({ defaultValues: { role_name: "", description: "" } });

  type Permission = { createEdit: boolean; view: boolean; delete: boolean };
  type ModulePerm = { name: string; perm: Permission };
  const [permissions, setPermissions] = useState<ModulePerm[]>(
    modules.map((m) => ({ name: m, perm: { createEdit: false, view: false, delete: false } }))
  );

  const setAll = (updater: (p: Permission) => Permission) =>
    setPermissions((prev) => prev.map((mp) => ({ ...mp, perm: updater(mp.perm) })));

  const allSelected = useMemo(
    () => permissions.every((mp) => mp.perm.createEdit && mp.perm.view && mp.perm.delete),
    [permissions]
  );
  const allCreate = useMemo(() => permissions.every((mp) => mp.perm.createEdit), [permissions]);
  const allView = useMemo(() => permissions.every((mp) => mp.perm.view), [permissions]);
  const allDelete = useMemo(() => permissions.every((mp) => mp.perm.delete), [permissions]);

  const toggleAllSelected = (v: boolean) => setAll(() => ({ createEdit: v, view: v, delete: v }));
  const toggleAllCreate = (v: boolean) => setAll((p) => ({ ...p, createEdit: v }));
  const toggleAllView = (v: boolean) => setAll((p) => ({ ...p, view: v }));
  const toggleAllDelete = (v: boolean) => setAll((p) => ({ ...p, delete: v }));

  const toggleModuleAll = (idx: number, v: boolean) =>
    setPermissions((prev) =>
      prev.map((mp, i) => (i === idx ? { ...mp, perm: { createEdit: v, view: v, delete: v } } : mp))
    );

  const toggleModuleField = (
    idx: number,
    field: keyof Permission,
    v: boolean
  ) =>
    setPermissions((prev) =>
      prev.map((mp, i) => (i === idx ? { ...mp, perm: { ...mp.perm, [field]: v } } : mp))
    );

  const inputArr: InputGroup[] = [
    {
      subTitle: "Role Details",
      subTitleClassName: "text-md text-[#9C6E61] font-semibold mb-5",
      wrapperClassName: "grid grid-cols-1 gap-6",
      render: [
        { type: "text", name: "role_name" as any, label: "Role Name", placeholder: "Enter role name" },
        { type: "textarea", name: "description" as any, label: "Description", placeholder: "Add a description for the role...", className: "col-span-1" },
      ],
    },
  ];

  return (
    <AppPageWrapper>
      <AppTitleWithBackButton title="Create Role" description="Lorem ipsum dolor sit amet consectetur." onBackNavigateTo={MAKE_SETTINGS_ROLES_URL} />

      <div className="rounded-xl border bg-card p-6 mb-4">
        <AppForm inputArr={inputArr} formUtils={formUtils} onSubmit={() => {}} noDefaultButtons />
      </div>

      <div className="rounded-xl border bg-card p-6">
        <div className="flex items-center justify-between mb-5">
        <AppText type="h4" className="text-md text-[#9C6E61] font-semibold mb-3">Permissions</AppText>
          <div className="flex items-center gap-2">
            <Checkbox
              checked={allSelected}
              onCheckedChange={(v) => toggleAllSelected(Boolean(v))}
              className="rounded-[4px] border-[#8B5E50] data-[state=checked]:bg-[#8B5E50]"
            />
            Select all
          </div>
        </div>

        <AppText type="h4" className="text-sm text-primary font-medium mb-2">Set all Permissions to</AppText>

        {/* Top global toggles */}
        <div className="flex flex-wrap items-center gap-6 text-sm mb-5">
          <div className="flex items-center gap-2">
            <Checkbox
              checked={allCreate}
              onCheckedChange={(v) => toggleAllCreate(Boolean(v))}
              className="rounded-[4px] border-[#8B5E50] data-[state=checked]:bg-[#8B5E50]"
            />
            Select all <span className="font-medium">Create & Edit</span> Permissions
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              checked={allView}
              onCheckedChange={(v) => toggleAllView(Boolean(v))}
              className="rounded-[4px] border-[#8B5E50] data-[state=checked]:bg-[#8B5E50]"
            />
            Select all <span className="font-medium">View</span> Permissions
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              checked={allDelete}
              onCheckedChange={(v) => toggleAllDelete(Boolean(v))}
              className="rounded-[4px] border-[#8B5E50] data-[state=checked]:bg-[#8B5E50]"
            />
            Select all <span className="font-medium">Delete</span> Permissions
          </div>
        </div>

        {/* Permissions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {permissions.map((mp, idx) => (
            <div key={mp.name} className="rounded-[8px] border">
              <div className="flex items-center justify-between p-3 bg-[#F7EFEB] rounded-t-[8px] text-sm">
                <span className="font-medium text-[#23211D]">{mp.name}</span>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={mp.perm.createEdit && mp.perm.view && mp.perm.delete}
                    onCheckedChange={(v) => toggleModuleAll(idx, Boolean(v))}
                    className="h-3.5 w-3.5 rounded-[4px] border-[#8B5E50] data-[state=checked]:bg-[#8B5E50]"
                  />
                  <span className="text-sm font-normal text-primary">Select All</span>
                </div>
              </div>
              <div className="p-5 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex items-center gap-2 mb-2">
                  <Checkbox
                    checked={mp.perm.createEdit}
                    onCheckedChange={(v) => toggleModuleField(idx, "createEdit", Boolean(v))}
                    className="rounded-[4px] border-[#8B5E50] data-[state=checked]:bg-[#8B5E50]"
                  />
                  Create & Edit
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Checkbox
                    checked={mp.perm.view}
                    onCheckedChange={(v) => toggleModuleField(idx, "view", Boolean(v))}
                    className="rounded-[4px] border-[#8B5E50] data-[state=checked]:bg-[#8B5E50]"
                  />
                  View
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={mp.perm.delete}
                    onCheckedChange={(v) => toggleModuleField(idx, "delete", Boolean(v))}
                    className="rounded-[4px] border-[#8B5E50] data-[state=checked]:bg-[#8B5E50]"
                  />
                  Delete
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <Button variant="outline" onClick={() => navigate(-1)}>Cancel</Button>
          <Button className="bg-[#23211D] hover:bg-black">Create Role</Button>
        </div>
      </div>
    </AppPageWrapper>
  );
};

export default RolesCreatePage;


