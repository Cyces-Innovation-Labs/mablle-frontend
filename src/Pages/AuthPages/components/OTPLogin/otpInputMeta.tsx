
const otpPhoneInputArr = () => {
  return [
    {
      wrapperClassName: "",
      render: [
        {
          type: "phone",
          name: "phone_number",
          label: "Phone number",
        },
      ],
    },
  ];
};
const otpOtpInputArr = () => {
    return [
      {
        wrapperClassName: "",
        render: [
          {
            type: "otp",
            name: "otp",
            label: "Enter the OTP",
          },
        ],
      },
    ];
  };

export { otpPhoneInputArr, otpOtpInputArr }
