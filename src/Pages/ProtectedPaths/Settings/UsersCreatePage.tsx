import AppPageWrapper from "@/components/Commmon/AppPageWrapper";
import AppTitleWithBackButton from "@/components/Commmon/AppTitleWithBackButton";
import AppForm from "@/components/Commmon/AppForm/AppForm";
import type { InputGroup } from "@/components/Commmon/types";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { MAKE_SETTINGS_USERS_URL } from "@/navigation/make-url";

type CreateUserForm = {
  name: string;
  mobile: string;
  email: string;
  role: string;
};

const UsersCreatePage = () => {
  const navigate = useNavigate();
  const formUtils = useForm<CreateUserForm>({
    defaultValues: { name: "", mobile: "", email: "", role: "" },
  });

  const inputArr: InputGroup[] = [
    {
      subTitle: "User Details",
      subTitleClassName: "text-md text-[#9C6E61] font-semibold mb-5",
      wrapperClassName: "grid grid-cols-1 md:grid-cols-3 gap-6",
      render: [
        { type: "text", name: "name" as any, label: "User Name", placeholder: "Enter name" },
        { type: "text", name: "mobile" as any, label: "Mobile", placeholder: "Enter number" },
        { type: "text", name: "email" as any, label: "Email", placeholder: "Enter email", className: "col-span-2 max-w-[370px]" },
        {
          type: "select",
          name: "role" as any,
          label: "Role",
          placeholder: "Select a role",
          options: [
            { label: "Super Admin", value: "super-admin" },
            { label: "Admin", value: "admin" },
            { label: "Viewer", value: "viewer" },
          ], className: "col-span-2 max-w-[370px]" 
        },
      ],
    },
  ];

  const handleSubmit = (values: CreateUserForm) => {
    // TODO: Hook to API
    console.log("create user", values);
    navigate(-1);
  };

  return (
    <AppPageWrapper>
      <AppTitleWithBackButton onBackNavigateTo={MAKE_SETTINGS_USERS_URL} title="Create User & Assign Roles" description="Lorem ipsum dolor sit amet consectetur." />
      <div className="rounded-xl shadow-sm p-6">
        <AppForm
          inputArr={inputArr}
          formUtils={formUtils}
          onSubmit={handleSubmit as any}
          noDefaultButtons
        >
          <div className="flex justify-end gap-3 mt-6">
            <Button variant="outline" onClick={() => navigate(-1)}>Cancel</Button>
            <Button onClick={formUtils.handleSubmit(handleSubmit as any)} className="bg-[#23211D] hover:bg-black">Create User</Button>
          </div>
        </AppForm>
      </div>
    </AppPageWrapper>
  );
};

export default UsersCreatePage;


