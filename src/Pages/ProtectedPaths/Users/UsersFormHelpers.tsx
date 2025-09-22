import type { InputGroup } from "@/components/Commmon/types";
import z from "zod";

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
});

export const usersInputArr: InputGroup[] = [
  {
    wrapperClassName: "grid grid-cols-2 gap-4",
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
