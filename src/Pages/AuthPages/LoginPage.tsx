
// import PasswordLogin from "./components/PasswordLogin";
import OTPLogin from "./components/OTPLogin/OTPLogin";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-3 gap-8 p-8">
      {/* Left Side - Interior Design Image */}
      <div className="hidden lg:flex lg:col-span-1 relative">
        <div className="w-full max-w-[500px] h-full flex items-center justify-center">
          {/* Placeholder for interior design image */}
          <div className="w-full h-full bg-cover bg-center bg-no-repeat rounded-[16px]" 
               style={{
                 backgroundImage: "url('/login.png')"
               }}>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full  lg:col-span-2 flex items-center justify-center bg-white px-8 py-12">
        <div className="w-full max-w-[338px]">
          <OTPLogin />
        </div>
      </div>
    </div>
  );
}
