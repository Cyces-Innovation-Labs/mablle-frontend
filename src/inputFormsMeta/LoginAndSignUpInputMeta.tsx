import type { InputGroup } from "@/components/Commmon/types";
import { z } from "zod";

export const loginInputs: InputGroup[] = [
  {
    wrapperClassName: "space-y-",
    render: [
      {
        name: "email",
        type: "text",
        label: "",
        placeholder: "Email or phone number",
        className: "w-full !rounded-[16px] max-w-[358px]",
      },
      {
        name: "password",
        type: "password",
        label: "",
        placeholder: "Password",
        className: "w-full !rounded-[16px] max-w-[358px]",
      },
    ],
  },
];

export const signUpInputs: InputGroup[] = [
  {
    wrapperClassName: "grid grid-cols-2",
    render: [
      {
        name: "first_name",
        type: "text",
        label: "First Name",
        placeholder: "Enter your first name",
      },
      {
        name: "last_name",
        type: "text",
        label: "Last Name",
        placeholder: "Enter your last name",
      },
    ],
  },
  {
    wrapperClassName: "",
    render: [
      {
        name: "email",
        type: "text",
        label: "Email",
        placeholder: "Enter your email",
      },
      {
        name: "password",
        type: "password",
        label: "Password",
        placeholder: "Enter your password",
      },
      {
        name: "confirm_password",
        type: "password",
        label: "Confirm Password",
        placeholder: "Enter your password",
      },
    ],
  },
];

//Add Zod schema for login and signup

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(3, { message: "Password must be at least 3 characters long" }),
});

export const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
    confirm_password: z.string().min(8),
    first_name: z.string().min(1),
    last_name: z.string().min(1),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

// Password Reset Schemas
export const forgotPasswordSchema = z.object({
  email: z.string().email(),
});

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    confirm_password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

// Password Reset Inputs
export const forgotPasswordInputs: InputGroup[] = [
  {
    wrapperClassName: "",
    render: [
      {
        name: "email",
        type: "text",
        label: "Email",
        placeholder: "Enter your email address",
      },
    ],
  },
];

export const resetPasswordInputs: InputGroup[] = [
  {
    wrapperClassName: "",
    render: [
      {
        name: "password",
        type: "password",
        label: "New Password",
        placeholder: "Enter your new password",
      },
      {
        name: "confirm_password",
        type: "password",
        label: "Confirm New Password",
        placeholder: "Confirm your new password",
      },
    ],
  },
];
