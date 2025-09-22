import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { USER_DETAIL_FORM_PAGE_URL } from "@/navigation/urls";
import { toast } from "sonner";
import makePostRequest from "@/api/makePostRequest";
import { authEndpoints } from "@/api/endpoints/endpoints";
import ResendOTPAndChangeNumberComponent from "./ResendOTPAndChangeNumberComponent";
import AppForm from "@/components/Commmon/AppForm/AppForm";
import { otpOtpInputArr, otpPhoneInputArr } from "./otpInputMeta";
import { cn } from "@/lib/utils";
import AppText from "@/components/Commmon/AppText";
import { Button } from "@/components/ui/button";
import type { InputGroup } from "@/components/Commmon/types";

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

  const inputFields = otpPhoneInputArr();
  const otpInputFields = otpOtpInputArr();

  const { isPending: sendOtpPending, mutate: sendOtpMutate } = useMutation({
    mutationFn: (body: unknown) => makePostRequest(authEndpoints.sendOtp, body),
    onSuccess: () => {
      setStep(2);
      setSeconds(45);
      formUtils?.setValue("otp", "");
    },
    onError: (err) => {
      console.log("Error", err);
    },
  });

  const { isPending: verifyOtpPending, mutate: verifyOtpMutate } = useMutation({
    mutationFn: (body: unknown) =>
      makePostRequest(authEndpoints.verifyOtp, body),
    onSuccess: () => {
      // handle success here
      navigate(USER_DETAIL_FORM_PAGE_URL);
      toast.success("Login Successfull");
    },
    onError: (err) => {
      console.log("Error", err);
    },
  });

  const onSuccess = (res: { phone_number: string; otp: string }) => {
    if (step == 1) {
      sendOtpMutate({
        phone_number: res?.phone_number,
        is_admin: true,
      });
    } else {
      if (!formUtils?.getValues("otp")) {
        formUtils?.setError("otp", { message: "Please enter OTP" });
      } else {
        verifyOtpMutate({
          phone_number: res?.phone_number,
          otp: parseInt(res?.otp),
          is_admin: true,
        });
      }
    }
  };

  const onError = (res: unknown) => {
    console.log("ERR", res);
  };

  const inBetweenChildren = (
    <ResendOTPAndChangeNumberComponent
      setStep={setStep}
      setSeconds={setSeconds}
      seconds={seconds}
    />
  );

  return (
    <div
      className={cn(
        "flex flex-col gap-6 border rounded-lg p-6 py-8 shadow-xs hover:shadow-sm transition-shadow duration-300",
        ""
      )}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <AppText className="text-2xl font-bold">Login to your account</AppText>
        <AppText className="text-muted-foreground text-sm text-balance">
          Enter your registered phone number to login
        </AppText>
      </div>
      {step == 1 ? (
        <AppForm
          inputArr={inputFields as InputGroup[]}
          onSubmit={onSuccess}
          formUtils={formUtils}
        >
          <Button loading={sendOtpPending} className="w-full mt-2">
            Send OTP
          </Button>
        </AppForm>
      ) : (
        <AppForm
          inputArr={otpInputFields as InputGroup[]}
          onSubmit={onSuccess}
          formUtils={formUtils}
        >
          {inBetweenChildren}
          <Button className="w-full mt-2">Submit</Button>
        </AppForm>
      )}
    </div>
  );
};

export default OTPLogin;
