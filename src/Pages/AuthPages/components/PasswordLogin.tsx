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
import { MAKE_DASHBOARD_URL } from "@/navigation/make-url";

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
      navigate(MAKE_DASHBOARD_URL);
      toast.success("Login successful");
    },
    onError: (error) => {
      handleApiError(error, formUtils.setError, true);
    },
  });

  const onSubmit = (data: { email: string; password: string }) => {
    loginMutation({ ...data, user_type: "user" });
  };

  const handleSubmit = (val: { email: string; password: string }) => {
    console.log(val);
    onSubmit(val)
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-6 border rounded-lg p-6 py-8 shadow-xs hover:shadow-sm transition-shadow duration-300",
        className
      )}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <AppText className="text-2xl font-bold">Login to your account</AppText>
        <AppText className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </AppText>
      </div>
      <div className="pb-1">
        <div className="flex flex-col gap-4">
          <AppForm
            formUtils={formUtils}
            inputArr={loginInputs}
            onSubmit={handleSubmit}
            isLoading={isPending}
            noDefaultButtons
          >
            <Button type="submit" className="w-full mt-4">
              Login
            </Button>
          </AppForm>

          {/* <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
              Or continue with
            </span>
          </div> */}
        </div>
        {/* <div className="text-center text-sm mt-4">
          Don&apos;t have an account?{" "}
          <AppLink
            to="/signup"
            className="underline underline-offset-4 font-semibold"
          >
            Sign up
          </AppLink>
        </div> */}
        {/* <div className="text-center text-sm mt-2">
          <AppLink
            to="/reset-password"
            className=" text-muted-foreground text-[12px] hover:text-primary hover:font-medium"
          >
            Forgot your password?
          </AppLink>
        </div> */}
      </div>
    </div>
  );
}
export default PasswordLogin;
