import AppForm from "@/components/Commmon/AppForm/AppForm";
// import AppLink from "@/components/Commmon/AppLink";
import AppText from "@/components/Commmon/AppText";
import { Button } from "@/components/ui/button";
import { loginInputs } from "@/inputFormsMeta/LoginAndSignUpInputMeta";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import useAppStore from "@/store/authStore";
import { useNavigate } from "react-router";
import { USER_PAGE_URL } from "@/navigation/urls";
import AppLink from "@/components/Commmon/AppLink";

function LoginComp({ className }: React.ComponentProps<"form">) {
  const navigate = useNavigate();
  const { setUserData } = useAppStore();
  const formUtils = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleUserDataSetInCookieAndGlobalState = (val: {
    email: string;
    password: string;
  }) => {
    const userDataObj = {
      email: val?.email,
      first_name: "Jai",
      last_name: "Balayya",
      uuid: "29384",
      id: 4343,
      user_type: "user",
      teams: [
        {
          id: 132,
          uuid: "293841",
          identity: "Jai Balayya",
          owner: true,
        },
      ],
      full_name: "Jai Balayya",
    };
    Cookies.set("user_data", JSON.stringify(userDataObj), { expires: 30 });
    setUserData(userDataObj);
  };

  const handleSubmit = (val: { email: string; password: string }) => {
    console.log(val);
    handleUserDataSetInCookieAndGlobalState(val);
    navigate(USER_PAGE_URL);
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
        <div className="text-center text-sm mt-4">
          Don&apos;t have an account?{" "}
          <AppLink
            to="/signup"
            className="underline underline-offset-4 font-semibold"
          >
            Sign up
          </AppLink>
        </div>
        <div className="text-center text-sm mt-2">
          <AppLink
            to="/reset-password"
            className=" text-muted-foreground text-[12px] hover:text-primary hover:font-medium"
          >
            Forgot your password?
          </AppLink>
        </div>
      </div>
    </div>
  );
}
export default LoginComp;
