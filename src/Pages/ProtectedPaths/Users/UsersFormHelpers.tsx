import type { InputGroup } from "@/components/Commmon/types";
import z from "zod";
import SuggestedMsgComp from "./components/SuggestedMsgComp";

export const usersDefaultValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
};

export const usersSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  address: z.string().min(1),
  city: z.string().min(1),
  family_members: z.array(z.object({
    name: z.string().min(1),
    email: z.string().email(),
  })),
});

export const usersInputArr = (formUtils: any): InputGroup[] => [
  {
    wrapperClassName: "grid grid-cols-2 gap-4 border shadow-md rounded-md p-4 bg-background",
    render: [
      {
        name: "name",
        type: "text",
        label: "Name",
        placeholder: "Enter your name",
      },
      {
        name: "email",
        type: "text",
        label: "Email",
        placeholder: "Enter your email",
      },
      {
        name: "phone",
        type: "phone",
        label: "Phone",
        placeholder: "Enter your phone",
      },
      {
        name: "address",
        type: "text",
        label: "Address",
        placeholder: "Enter your address",
      },
      {
        name: "city",
        type: "text",
        label: "City",
        placeholder: "Enter your city",
      },
    ],
  },
  {
    wrapperClassName: "border shadow-md rounded-md p-4 bg-background",
    render: [
      {
        name: "family_members",
        type:"custom-comp",
        customComp: <SuggestedMsgComp formUtils={formUtils} />,
      }
    ]
  }
];

export const userChangeDataBeforeMutate = (body: any) => {
  return {
    ...body,
    name: body?.name?.toLowerCase(),
    meta_data: {
      email: body?.email?.toLowerCase(),
      phone: body?.phone?.toLowerCase(),
      address: body?.address?.toLowerCase(),
      city: body?.city?.toLowerCase(),
    },
  };
};


// For multipart form
// Step-specific schemas
export const stepOneSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
});

export const stepTwoSchema = z.object({
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  zipCode: z.string().min(1, "ZIP code is required"),
});

export const stepThreeSchema = z.object({
  country: z.string().min(1, "Country is required"),
  gender: z.string().optional(),
  newsletter: z.boolean().default(false),
  terms: z
    .boolean()
    .refine((val) => val === true, "You must accept the terms and conditions"),
});

// Default values
export const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  zipCode: "",
  country: "",
  gender: "",
  newsletter: false,
  terms: false,
};

export const filterListForUsers = (metaData: any): InputGroup[] => {
  return [
    {
      wrapperClassName: "grid grid-cols-2 gap-4",
      render: [
        {
          name: "gender",
          type: "select",
          placeholder: "Gender",
          options: metaData?.gender?.map((gender: any) => ({
            label: gender,
            value: gender,
          })),
        },
        {
          name: "dob",
          type: "date",
          placeholder: "Date of Birth",
        }
      ],
    },
  ];
};