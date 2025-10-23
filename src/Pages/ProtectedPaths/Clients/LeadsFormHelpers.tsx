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
});

export const leadsInputArr: InputGroup[] = [
  {
    wrapperClassName: "grid grid-cols-2 gap-4",
    render: [
      {
        name: "lead_name",
        type: "text",
        label: "Lead Name",
        placeholder: "Enter lead name",
        required: true,
        validation: z.string().min(1, "Lead name is required"),
      },
      {
        name: "email",
        type: "text",
        label: "Email",
        placeholder: "Enter email address",
        required: true,
        validation: z.string().email("Invalid email address"),
      },
      {
        name: "phone_number",
        type: "phone",
        label: "Phone Number",
        placeholder: "Enter phone number",
        required: true,
        validation: z.string().min(10, "Phone number must be at least 10 digits"),
      },
      {
        name: "lead_number",
        type: "text",
        label: "Lead Number",
        placeholder: "Enter lead number",
        required: true,
        validation: z.string().min(1, "Lead number is required"),
      },
      {
        name: "designer",
        type: "select",
        label: "Designer",
        placeholder: "Select designer",
        required: true,
        options: [
          { label: "Lincoln Aminoff", value: "lincoln_aminoff" },
          { label: "Sarah Johnson", value: "sarah_johnson" },
          { label: "Mike Chen", value: "mike_chen" },
        ],
        validation: z.string().min(1, "Designer is required"),
      },
      {
        name: "lead_created",
        type: "date",
        label: "Lead Created",
        placeholder: "Select creation date",
        required: true,
        validation: z.string().min(1, "Lead creation date is required"),
      },
      {
        name: "mobile",
        type: "phone",
        label: "Mobile",
        placeholder: "Enter mobile number",
        required: true,
        validation: z.string().min(10, "Mobile number must be at least 10 digits"),
      },
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
      },
      {
        name: "lead_status",
        type: "select",
        label: "Lead Status",
        placeholder: "Select lead status",
        required: true,
        options: [
          { label: "New", value: "New" },
          { label: "Qualified", value: "Qualified" },
          { label: "Converted", value: "Converted" },
          { label: "Lost", value: "Lost" },
        ],
        validation: z.string().min(1, "Lead status is required"),
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
