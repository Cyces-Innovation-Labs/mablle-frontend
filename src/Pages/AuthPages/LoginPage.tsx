import AppImage from "@/components/Commmon/AppImage";
import PasswordLogin from "./components/PasswordLogin";
import OTPLogin from "./components/OTPLogin/OTPLogin";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh">
    <div className="flex flex-col gap-4 p-6 md:p-10">
      <div className="flex justify-center gap-2 md:justify-start">
        <div className="flex items-center gap-2">
          <div className="w-full max-w-[100px]">
            <AppImage src={""} />
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className={`w-full max-w-[380px]`}>
           <PasswordLogin />
           <OTPLogin />
        </div>
      </div>
    </div>
  </div>
  );
}
