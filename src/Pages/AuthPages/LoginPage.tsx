import AppImage from "@/components/Commmon/AppImage";
import OTPLogin from "./components/OTPLogin/OTPLogin";
import PasswordLogin from "./components/PasswordLogin";

export default function LoginPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-screen-backgrond">
      {/* Background with purple gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#821a52] via-[#6b1441] to-[#4a0f2d] opacity-90 "></div>
      <div className="absolute inset-0 bg-white opacity-95 "></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-[596px] px-4">
        {/* Marzi Logo - Smaller */}
        <div className="w-[200px] h-[100px] flex items-center justify-center">
          <AppImage src={"/logo.png"} className="w-full object-contain" />
        </div>
        
        {/* Authentication Component - Smaller */}
        <div className="w-full max-w-[480px]">
          <OTPLogin />
          <PasswordLogin />
        </div>
      </div>
    </div>
  );
}
