import AppText from "@/components/Commmon/AppText";
import { useEffect } from "react";

const ResendOTPAndChangeNumberComponent = ({
  seconds,
  setSeconds,
  setStep,
}: {
  setStep: any;
  seconds: number;
  setSeconds: any;
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return (
    <div className="flex flex-row justify-between mt-4"
    >
      <button type="button" className="link-text cursor-pointer" onClick={() => setStep(1)}>
        <AppText className="text-gray-500 text-xs">
          Change phone number
        </AppText>
      </button>

      <div>
        {seconds <= 0 ? (
          <button className="link-text" role="button">
            <AppText className="text-xs">Resend OTP</AppText>
          </button>
        ) : (
          <div>
            <AppText
              className="link-text cursor-inherit text-xs"
            >{`Resend OTP in 00:${seconds}`}</AppText>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResendOTPAndChangeNumberComponent;