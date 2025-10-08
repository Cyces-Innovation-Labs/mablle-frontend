
const otpPhoneInputArr = () => {
  return [
    {
      wrapperClassName: "",
      render: [
        {
          type: "phone",
          name: "phone_number",
          label: "Phone Number",
          placeholder: "+919876543210",
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
            label: "Enter the OTP",
          },
        ],
      },
    ];
  };

export { otpPhoneInputArr, otpOtpInputArr }
