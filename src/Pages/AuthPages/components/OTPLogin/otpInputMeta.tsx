
const otpPhoneInputArr = () => {
  return [
    {
      wrapperClassName: "",
      render: [
        {
          type: "phone",
          name: "phone_number",
          placeholder: "9876543210",
          required: true,
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
            otpLength: 4,
            maxLength: 4,
            // label: "Enter the OTP",
          },
        ],
      },
    ];
  };

export { otpPhoneInputArr, otpOtpInputArr }
