import type { InputGroup } from "@/components/Commmon/types";
import z from "zod";

export const leadsDefaultValues = {
  // Basic Information
  lead_name: "",
  email: "",
  phone_number: "",
  lead_number: "",
  designer: "",
  lead_created: "",
  mobile: "",
  status: "",
  lead_status: "",
  // Additional fields for QL status
  location: "",
  address: "",
  design_seller: "",
  design_executor: "",
};

export const leadsSchema = z.object({
  lead_name: z.string().min(1, "Lead name is required"),
  email: z.string().email("Invalid email address"),
  phone_number: z.string().min(10, "Phone number must be at least 10 digits"),
  lead_number: z.string().min(1, "Lead number is required"),
  designer: z.string().min(1, "Designer is required"),
  lead_created: z.string().min(1, "Lead creation date is required"),
  mobile: z.string().min(10, "Mobile number must be at least 10 digits"),
  status: z.string().min(1, "Status is required"),
  lead_status: z.string().min(1, "Lead status is required"),
  // Additional fields for QL status
  location: z.string().optional(),
  address: z.string().optional(),
  design_seller: z.string().optional(),
  design_executor: z.string().optional(),
});

export const leadsInputArr: InputGroup[] = [
  {
    wrapperClassName: "grid grid-cols-2 gap-4",
    render: [
      {
        name: "status",
        type: "select",
        label: "Status",
        placeholder: "Select status",
        required: true,
        options: [
          { label: "FC", value: "FC" },
          { label: "HO", value: "HO" },
          { label: "QL", value: "QL" },
          { label: "CF", value: "CF" },
        ],
        validation: z.string().min(1, "Status is required"),
        className: "col-span-1",
      },
      {
        name: "design_seller",
        type: "select",
        label: "Design Seller",
        placeholder: "Choose",
        className: "col-span-1",
        required: true,
        options: [
          { label: "Lincoln Aminoff", value: "lincoln_aminoff" },
          { label: "Sarah Johnson", value: "sarah_johnson" },
          { label: "Mike Chen", value: "mike_chen" },
        ],
        validation: z.string().min(1, "Design Seller is required"),
        conditionalRender: (formValues: any) => formValues?.status === "QL",

      },
      {
        name: "lead_name",
        type: "text",
        label: "Name",
        placeholder: "Enter name",
        required: true,
        validation: z.string().min(1, "Lead name is required"),
        className: "col-span-1",

      },
      {
        name: "design_executor",
        type: "select",
        label: "Design Executor",
        placeholder: "Choose",
        required: true,
        options: [
          { label: "Lincoln Aminoff", value: "lincoln_aminoff" },
          { label: "Sarah Johnson", value: "sarah_johnson" },
          { label: "Mike Chen", value: "mike_chen" },
        ],
        validation: z.string().min(1, "Design Executor is required"),
        conditionalRender: (formValues: any) => formValues?.status === "QL",
        className: "col-span-1",
      },
      {
        name: "phone_number",
        type: "phone",
        className: "col-span-2 w-[50%]",
        label: "Phone Number",
        placeholder: "Enter phone number",
        required: true,
        validation: z.string().min(10, "Phone number must be at least 10 digits"),
      },
      {
        name: "email",
        type: "text",
        label: "Email Address",
        className: "col-span-2 w-[50%]",
        placeholder: "Enter email",
        required: true,
        validation: z.string().email("Invalid email address"),
      },
      {
        name: "location",
        type: "select",
        label: "Location",
        placeholder: "Select location",
        required: true,
        options: [
          { label: "Singapore", value: "singapore" },
          { label: "Malaysia", value: "malaysia" },
          { label: "Thailand", value: "thailand" },
          { label: "Indonesia", value: "indonesia" },
        ],
        validation: z.string().min(1, "Location is required"),
        className: "col-span-2 w-[50%]",
        conditionalRender: (formValues: any) => formValues?.status === "QL",
      },
      {
        name: "address",
        type: "textarea",
        label: "Address",
        className: "col-span-2 w-[50%]",
        placeholder: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        required: true,
        validation: z.string().min(1, "Address is required"),
        conditionalRender: (formValues: any) => formValues?.status === "QL",
      },
    ],
  },
];

export const leadsChangeDataBeforeMutate = (body: any) => {
  return {
    ...body,
    // Transform data as needed
    lead_name: body?.lead_name?.trim(),
    email: body?.email?.toLowerCase(),
    phone_number: body?.phone_number?.replace(/\D/g, ""), // Remove non-digits
    mobile: body?.mobile?.replace(/\D/g, ""), // Remove non-digits
  };
};

// Filter functions for the table
export const filterListForLeads = () => {
  return [
    {
      wrapperClassName: "grid grid-cols-3 gap-4",
      render: [
        {
          name: "designer",
          type: "select",
          label: "Select Designer",
          placeholder: "All Designers",
          options: [
            { label: "All Designers", value: "" },
            { label: "Lincoln Aminoff", value: "lincoln_aminoff" },
            { label: "Sarah Johnson", value: "sarah_johnson" },
            { label: "Mike Chen", value: "mike_chen" },
          ],
        },
        {
          name: "lead_status",
          type: "select",
          label: "Lead Status",
          placeholder: "All Status",
          options: [
            { label: "All Status", value: "" },
            { label: "New", value: "New" },
            { label: "Qualified", value: "Qualified" },
            { label: "Converted", value: "Converted" },
            { label: "Lost", value: "Lost" },
          ],
        },
        {
          name: "date_range",
          type: "date",
          label: "Date Range",
          placeholder: "Select date range",
        },
      ],
    },
  ];
};
