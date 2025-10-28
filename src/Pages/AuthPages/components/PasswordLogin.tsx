import AppForm from "@/components/Commmon/AppForm/AppForm";
// import AppLink from "@/components/Commmon/AppLink";
import AppText from "@/components/Commmon/AppText";
import { Button } from "@/components/ui/button";
import { loginInputs } from "@/inputFormsMeta/LoginAndSignUpInputMeta";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
// import AppLink from "@/components/Commmon/AppLink";
import useAuth from "@/hooks/AuthHooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import makePostRequest from "@/api/makePostRequest";
import { authEndpoints } from "@/api/endpoints/endpoints";
import { toast } from "sonner";
import { handleApiError } from "@/lib/common-funnctions";
import { CLIENT_PAGE_URL } from "@/navigation/urls";
import AppImage from "@/components/Commmon/AppImage";

function PasswordLogin({ className }: React.ComponentProps<"form">) {
  const navigate = useNavigate();
  const formUtils = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { handleLoginSuccess } = useAuth();

  // Login Mutation
  const { mutate: loginMutation, isPending } = useMutation({
    mutationFn: (data: {
      email: string;
      password: string;
      user_type: string;
    }) => makePostRequest(authEndpoints.login, data),
    onSuccess: (response) => {
      handleLoginSuccess(response);
      navigate(CLIENT_PAGE_URL);
      toast.success("Login successful");
    },
    onError: (error) => {
      handleApiError(error, formUtils.setError, true);
    },
  });

  const onSubmit = (data: { email: string; password: string }) => {
    navigate(CLIENT_PAGE_URL);
    loginMutation({ ...data, user_type: "user" });
  };

  const handleSubmit = (val: { email: string; password: string }) => {
    console.log(val);
    onSubmit(val)
  };

  return (
    <div className={cn("flex flex-col items-center gap-5", className)}>
      {/* Golden Logo */}
      <div className="flex flex-col items-center gap-2">
        <AppImage src="/gold-logo.svg" alt="logo" />
      </div>

      {/* Title */}
      <div className="text-center mt-3">
        <AppText type="h1" className="text-md font-semibold text-primary">
          Login to your account
        </AppText>
      </div>

      {/* Form */}
      <div className="w-full">
        <AppForm
          formUtils={formUtils}
          inputArr={loginInputs}
          onSubmit={handleSubmit}
          isLoading={isPending}
          noDefaultButtons
        >
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-gray-800 text-white font-medium py-5 mt-4 rounded-[16px]"
          >
            Enter
          </Button>
        </AppForm>

        {/* Forgot Password Link */}
        <div className="text-center mt-4">
          <button 
            type="button"
            className="text-sm text-[#9C6E61] hover:text-[#9C6E61]/80 font-medium cursor-pointer"
          >
            Forgot password?
          </button>
        </div>
      </div>
    </div>
  );
}
export default PasswordLogin;
