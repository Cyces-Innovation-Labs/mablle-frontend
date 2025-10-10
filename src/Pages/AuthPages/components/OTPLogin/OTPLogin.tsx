import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import makePostRequest from "@/api/makePostRequest";
import { authEndpoints } from "@/api/endpoints/endpoints";
import AppForm from "@/components/Commmon/AppForm/AppForm";
import { otpOtpInputArr, otpPhoneInputArr } from "./otpInputMeta";
import type { InputGroup } from "@/components/Commmon/types";
import useAuth from "@/hooks/AuthHooks/useAuth";
import { MAKE_USER_URL } from "@/navigation/make-url";
import { handleApiError } from "@/lib/common-funnctions";
import AppText from "@/components/Commmon/AppText";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";

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
  const inputFieldsOtp = otpOtpInputArr();

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
              <AppText
                type="h1"
                className="text-[28px] font-bold text-black tracking-[-0.1143px] leading-tight"
              >
                Login to Account
              </AppText>
              <AppText
                type="p"
                className="text-[16px] text-gray-600 opacity-80 tracking-[-0.0643px]"
              >
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
              <button className="cursor-pointer" onClick={() => setStep(1)}>
                <MoveLeft />
              </button>

              <div className="flex flex-col gap-1 w-full">
                <AppText
                  type="h1"
                  className="text-[23px] font-bold text-black tracking-[-0.1143px] leading-tight"
                >
                  OTP Verification
                </AppText>
                <AppText
                  type="p"
                  className="text-[14px] text-gray-600 opacity-80 tracking-[-0.0643px]"
                >
                  Enter the OTP sent to your mobile number{" "}
                  {formUtils?.getValues("phone_number") || "+91 9876543210"}
                </AppText>
              </div>
              <div className="w-full">
                <AppForm
                  inputArr={inputFieldsOtp as InputGroup[]}
                  onSubmit={onSuccess}
                  formUtils={formUtils}
                  noDefaultButtons
                >
                  <div className="flex flex-col gap-2 w-full">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-[12px] font-semibold text-[#821a52] text-left hover:underline"
                    >
                      Use a different phone number
                    </button>
                    <p className="text-[14px] font-semibold text-gray-500 text-center">
                      {Math.floor(seconds / 60)
                        .toString()
                        .padStart(2, "0")}
                      :{(seconds % 60).toString().padStart(2, "0")}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <Button
                      type="button"
                      onClick={() =>
                        onSuccess({
                          phone_number: formUtils?.getValues("phone_number"),
                          otp: formUtils?.getValues("otp"),
                        })
                      }
                      disabled={
                        verifyOtpPending || !formUtils?.getValues("otp")
                      }
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
                          phone_number: `+91${formUtils?.getValues(
                            "phone_number"
                          )}`,
                          user_type: "admin",
                        });
                        setSeconds(45);
                      }}
                      className="w-full rounded-xl text-[16px] font-semibold text-[#821a52] hover:bg-gray-50 transition-colors"
                    >
                      Resend Code
                    </Button>
                  </div>
                </AppForm>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OTPLogin;
