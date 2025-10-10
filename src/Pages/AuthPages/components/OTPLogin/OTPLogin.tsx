import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import makePostRequest from "@/api/makePostRequest";
import { authEndpoints } from "@/api/endpoints/endpoints";
import AppForm from "@/components/Commmon/AppForm/AppForm";
import { otpPhoneInputArr } from "./otpInputMeta";
import type { InputGroup } from "@/components/Commmon/types";
import useAuth from "@/hooks/AuthHooks/useAuth";
import { MAKE_USER_URL } from "@/navigation/make-url";
import { handleApiError } from "@/lib/common-funnctions";
import AppText from "@/components/Commmon/AppText";
import { Button } from "@/components/ui/button";

const OTPLogin = () => {
  const [step, setStep] = useState(1);
  const [seconds, setSeconds] = useState(45);
  const navigate = useNavigate();
  const formUtils = useForm({
    defaultValues: {
      phone_number: "",
      otp: "",
    },
  });
  const { handleLoginSuccess } = useAuth();

  const inputFields = otpPhoneInputArr();

  // Countdown timer effect
  useEffect(() => {
    if (step === 2 && seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [step, seconds]);

  const { isPending: sendOtpPending, mutate: sendOtpMutate } = useMutation({
    mutationFn: (body: unknown) => makePostRequest(authEndpoints.sendOtp, body),
    onSuccess: () => {
      setStep(2);
      setSeconds(45);
      formUtils?.setValue("otp", "");
    },
    onError: (err) => {
      handleApiError(err);
    },
  });

  const { mutate: verifyOtpMutate, isPending: verifyOtpPending } = useMutation({
    mutationFn: (body: unknown) =>
      makePostRequest(authEndpoints.verifyOtp, body),
    onSuccess: (res: any) => {
      // handle success here
      handleLoginSuccess(res);
      navigate(MAKE_USER_URL);
      toast.success("Login Successfull");
    },
    onError: (err) => {
      handleApiError(err);
    },
  });

  const onSuccess = (res: { phone_number: string; otp: string }) => {
    if (step == 1) {
      sendOtpMutate({
        phone_number: `+91${res?.phone_number}`,
        user_type: "admin",
      });
    } else {
      if (!formUtils?.getValues("otp")) {
        formUtils?.setError("otp", { message: "Please enter OTP" });
      } else {
        verifyOtpMutate({
          phone_number: `+91${res?.phone_number}`,
          user_type: "admin",
          otp: res?.otp,
        });
      }
    }
  };


  return (
    <div className="bg-white border border-gray-300 rounded-3xl p-8 w-full shadow-sm">
      <div className="flex flex-col gap-6 items-center">
        {step == 1 ? (
          // Phone Number Step
          <>
            <div className="flex flex-col gap-4 items-center text-center">
                <AppText type="h1" className="text-[28px] font-bold text-black tracking-[-0.1143px] leading-tight">
                  Login to Account
                </AppText>
                <AppText type="p" className="text-[16px] text-gray-600 opacity-80 tracking-[-0.0643px]">
                  Please enter your phone number to get OTP
        </AppText>
      </div>
            
            <div className="w-full">
        <AppForm
          inputArr={inputFields as InputGroup[]}
          onSubmit={onSuccess}
          formUtils={formUtils}
          noDefaultButtons
        >
                <Button
                  type="submit"
                  disabled={sendOtpPending}
                  className="w-full bg-[#821a52] opacity-90 rounded-lg text-white mt-2 font-semibold tracking-[-0.0714px] hover:opacity-100 transition-opacity disabled:opacity-50"
                >
                  {sendOtpPending ? "Sending..." : "Send OTP"}
          </Button>
        </AppForm>
            </div>
          </>
        ) : (
          // OTP Verification Step
          <>
            <div className="flex flex-col gap-4 items-start w-full">
              <div className="w-6 h-6 flex items-center justify-center cursor-pointer" onClick={() => setStep(1)}>
                {/* Back arrow icon placeholder */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <div className="flex flex-col gap-3 w-full">
                <AppText type="h1" className="text-[28px] font-bold text-black tracking-[-0.1143px] leading-tight">
                  OTP Verification
                </AppText>
                <AppText type="p" className="text-[16px] text-gray-600 opacity-80 tracking-[-0.0643px]">
                  Enter the OTP sent to your mobile number {formUtils?.getValues("phone_number") || "+91 9876543210"}
                </AppText>
              </div>

              {/* Custom OTP Input - 4 digits */}
              <div className="flex gap-3 w-full">
                {[0, 1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="flex-1 h-10 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center px-3"
                  >
                    <input
                      type="text"
                      maxLength={1}
                      className="w-full text-center text-[14px] font-normal text-gray-900 bg-transparent border-none outline-none"
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value.match(/[0-9]/)) {
                          const currentOtp = formUtils?.getValues("otp") || "";
                          const newOtp = currentOtp.substring(0, index) + value + currentOtp.substring(index + 1);
                          formUtils?.setValue("otp", newOtp);
                          
                          // Auto-focus next input
                          if (value && index < 3) {
                            const nextInput = document.querySelector(`input[data-otp-index="${index + 1}"]`) as HTMLInputElement;
                            nextInput?.focus();
                          }
                        }
                        e.target.value = value.replace(/[^0-9]/g, "");
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
                          const prevInput = document.querySelector(`input[data-otp-index="${index - 1}"]`) as HTMLInputElement;
                          prevInput?.focus();
                        }
                      }}
                      data-otp-index={index}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2 w-full">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-[16px] font-semibold text-[#821a52] text-left hover:underline"
                >
                  Use a different phone number
                </button>
                <p className="text-[14px] font-semibold text-gray-500 text-center">
                  {Math.floor(seconds / 60).toString().padStart(2, '0')}:{(seconds % 60).toString().padStart(2, '0')}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <Button
                type="button"
                onClick={() => onSuccess({ phone_number: formUtils?.getValues("phone_number"), otp: formUtils?.getValues("otp") })}
                disabled={verifyOtpPending || !formUtils?.getValues("otp")}
                className="w-full bg-[#821a52] opacity-90 rounded-lg text-white font-semibold tracking-[-0.0714px] hover:opacity-100 transition-opacity disabled:opacity-50"
              >
                {verifyOtpPending ? "Verifying..." : "Submit"}
              </Button>
              
              <Button
              variant={"ghost"}
                type="button"
                onClick={() => {
                  // Resend OTP logic
                  sendOtpMutate({
                    phone_number: `+91${formUtils?.getValues("phone_number")}`,
                    user_type: "admin",
                  });
                  setSeconds(45);
                }}
                className="w-full rounded-xl text-[16px] font-semibold text-[#821a52] hover:bg-gray-50 transition-colors"
              >
                Resend Code
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OTPLogin;
