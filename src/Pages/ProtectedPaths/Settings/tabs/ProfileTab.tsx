import AppForm from "@/components/Commmon/AppForm/AppForm";
import type { InputGroup } from "@/components/Commmon/types";
import AppAvatar from "@/components/Commmon/AppAvatar";
import useAppStore from "@/store/authStore";
import { useForm } from "react-hook-form";
import { PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";

type ProfileForm = {
  full_name: string;
  role: string;
  email: string;
  phone: string;
  password: string;
};

const ProfileTab = () => {
  const { userData } = useAppStore();
  const [isEditing, setIsEditing] = useState(false);

  const formUtils = useForm<ProfileForm>({
    defaultValues: {
      full_name: userData?.full_name || "Lincoln Aminoff",
      role: userData?.user_type || "Super Admin",
      email: userData?.email || "lincolnaminoff@gmail.com",
      phone: "+91 xxxxxxxxxx",
      password: "******************",
    },
  });

  const inputArr: InputGroup[] = useMemo(() => [
    {
      wrapperClassName: "grid grid-cols-1 md:grid-cols-2 gap-4",
      render: [
        { type: "text", name: "full_name" as any, label: "Full Name", placeholder: "Full Name", readOnly: !isEditing },
        { type: "text", name: "role" as any, label: "Role", readOnly: true },
        { type: "text", name: "email" as any, label: "Email Address", placeholder: "Email", readOnly: !isEditing },
        { type: "text", name: "phone" as any, label: "Phone Number", placeholder: "+91 xxxxxxxxxx", readOnly: !isEditing },
        { type: "password", name: "password" as any, label: "Password", readOnly: !isEditing, disabled: true, changePasswordText: "Change Password", onPasswordChangeClick: () => {} },
      ],
    },
  ], [isEditing]);

  return (
    <div className="rounded-xl border bg-card">
      <div className="p-6">
        <div className="flex items-start gap-4 justify-between">
          <div className="flex items-center gap-4">
            <AppAvatar src="/profile.jpg" className="w-[100px] h-[100px]" fallback={(userData?.full_name || "U").charAt(0)} />
          </div>
          <Button onClick={() => setIsEditing(true)} variant="ghost" className="text-[#054D8B] flex items-center gap-2 text-sm underline">Edit <PenLine className="w-4 h-4" /></Button>
        </div>
        <div className="mt-6">
          <AppForm inputArr={inputArr} formUtils={formUtils} onSubmit={() => {}} noDefaultButtons={!isEditing} onSecondaryButtonClick={() => setIsEditing(false)}>
          </AppForm>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;


