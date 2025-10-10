import type { InputGroup } from "@/components/Commmon/types";
import z from "zod";
import FamilyMembersComponent from "./components/FamilyMembersComponent";
import ImportantDatesComponent from "./components/ImportantDatesComponent";
import ProfilePictureUpload from "./components/ProfilePictureUpload";
import { fileEndpoints } from "@/api/endpoints/endpoints";
import { mutatePhone } from "@/lib/common-funnctions";

export const usersDefaultValues = {
  // Basic Information
  profile_picture: null,
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  region: "",
  gender: "",
  age: "",
  
  // Additional Information
  current_medical_state: "",
  medical_conditions: "",
  hobbies: "",
  music_preferences: "",
  
  // Family Members
  family_members: [],
  
  // Important Dates
  important_dates: [],
};

export const usersSchema = z.object({
  // Basic Information
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone_number: z.string().min(10, "Phone number must be at least 10 digits"),
  region: z.string().min(1, "Region is required"),
  gender: z.string().min(1, "Gender is required"),
  age: z.number().min(1, "Age is required"),
  
  // Additional Information
  current_medical_state: z.string().optional(),
  medical_conditions: z.string().optional(),
  hobbies: z.string().optional(),
  music_preferences: z.string().optional(),
  
  // Family Members
  family_members: z.array(z.object({
    name: z.string().min(1, "Name is required"),
    relationship: z.string().min(1, "Relationship is required"),
    date_of_birth: z.string().min(1, "Date of birth is required"),
  })).optional(),
  
  // Important Dates
  important_dates: z.array(z.object({
    type: z.string().min(1, "Type is required"),
    person_name: z.string().min(1, "Person name is required"),
    date: z.string().min(1, "Date is required"),
  })).optional(),
});

export const usersInputArr = (formUtils: any, metaData: any, regionData: any, setRegionSearch: any): InputGroup[] => [
  {
    subTitle: "Basic Information",
    outerWrapperClassName:"border border-gray-200 rounded-lg p-6 bg-white shadow-sm",
    wrapperClassName: " grid grid-cols-2  ",
    render: [
      {
        name: "profile_picture",
        type: "custom-comp",
        customComp: (
          <ProfilePictureUpload
            name="profile_picture"
            formUtils={formUtils}
            endpoint={fileEndpoints.upload}
            className="col-span-2"
          />
        ),
      },
      {
        name: "first_name",
        type: "text",
        label: "First Name",
        placeholder: "Enter first name",
      },
      {
        name: "last_name",
        type: "text",
        label: "Last Name",
        placeholder: "Enter last name",
      },
      {
        name: "email",
        type: "text",
        label: "Email",
        placeholder: "Enter email",
      },
      {
        name: "phone_number",
        type: "phone",
        label: "Phone Number",
        placeholder: "12345-67890",
      },
      {
        name: "region",
        type: "select",
        label: "Region",
        placeholder: "Select region",
        options: regionData?.data?.results,
        onInputChange(value) {
          // formUtils.setValue("region__input", value);
          setRegionSearch(value);
        },
      },
      {
        name: "gender",
        type: "select",
        label: "Gender",
        placeholder: "Select gender",
        options: metaData?.data?.meta?.gender,
      },
      {
        name: "age",
        type: "number",
        label: "Age",
        placeholder: "Enter",
      },
    ],
  },
  
  // Additional Information Section
  {
    outerWrapperClassName: "border border-gray-200 rounded-lg p-6 bg-white shadow-sm",
    subTitle: "Additional Information",
    wrapperClassName: "",
    render: [
      {
        name: "current_medical_state",
        type: "textarea",
        label: "Current Medical State",
        placeholder: "Describe...",
      },
      {
        name: "medical_conditions",
        type: "text",
        label: "Medical Conditions",
        placeholder: "Enter",
        description: "Enter conditions separated by commas (e.g., Diabetes, Hypertension, Asthma).",
      },
      {
        name: "hobbies",
        type: "text",
        label: "Hobbies",
        placeholder: "Enter",
        description: "Enter hobbies separated by commas (e.g., Reading, Swimming, Painting).",
      },
      {
        name: "music_preferences",
        type: "text",
        label: "Music Preferences",
        placeholder: "Enter",
        description: "Enter preferences separated by commas (e.g., Rock, Jazz, Classical).",
      },
    ],
  },
  
  // Family Members Section
  {
    wrapperClassName: "border border-gray-200 rounded-lg p-6 bg-white shadow-sm",
    render: [
      {
        name: "family_members",
        type: "custom-comp",
        customComp: <FamilyMembersComponent formUtils={formUtils} metaData={metaData} />,
      },
    ],
  },
  
  // Important Dates Section
  {
    wrapperClassName: "border border-gray-200 rounded-lg p-6 bg-white shadow-sm",
    render: [
      {
        name: "important_dates",
        type: "custom-comp",
        customComp: <ImportantDatesComponent formUtils={formUtils} metaData={metaData} />,
      },
    ],
  },
];

export const userChangeDataBeforeMutate = (body: any) => {
  // Helper function to convert comma-separated string to array
  const stringToArray = (str: string | undefined): string[] => {
    if (!str || str.trim() === "") return [];
    return str.split(",").map((item) => item.trim()).filter((item) => item !== "");
  };

  return {
    // Root level fields
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    phone_number: mutatePhone(body.phone_number),
    gender: body.gender,
    age: body.age ? parseInt(body.age) : undefined,
    region: body.region,
    profile_picture: body.profile_picture,
    
    // Nested user_details object
    user_details: {
      current_medical_state: body.current_medical_state || "",
      medical_condition: stringToArray(body.medical_conditions), // Changed to singular and converted to array
      family_members: body.family_members?.map((member: any) => ({
        name: member.name,
        date_of_birth: member.date_of_birth,
        relationship: member.relationship,
      })) || [],
      important_dates: body.important_dates?.map((date: any) => ({
        date_type: date.type, // Changed from 'type' to 'date_type'
        person_name: date.person_name,
        date: date.date,
      })) || [],
      hobbies: stringToArray(body.hobbies),
      music_preferences: stringToArray(body.music_preferences),
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

export const filterListForUsers = (): InputGroup[] => {
  return [
    {
      wrapperClassName: "grid grid-cols-2 gap-4 items-center",
      render: [
        {
          className: "flex",
          inputClassName:"w-fit",
          name: "care_manager",
          type: "select",
          label: "CM:",
          options: [
            { label: "Rohan Verma", value: "Rohan Verma" },
            { label: "Amit Desai", value: "Amit Desai" },
            { label: "Anaya Patel", value: "Anaya Patel" },
            { label: "Neha Sharma", value: "Neha Sharma" },
          ],
        },
        {
          inputClassName:"w-fit",
          className: "flex w-fit",
          name: "last_call_date",
          type: "date",
          label: "Last call on:",
          placeholder: "Jul 25 ~ Jul 30",
        }
      ],
    },
  ];
};

export const userChangeDataBeforePrefill = (data: any) => {
  // Helper: Convert array to comma-separated string for text inputs
  const arrayToString = (arr: string[] | undefined): string => {
    if (!arr || arr.length === 0) return "";
    return arr.join(", ");
  };

  return {
    // Basic fields - direct mapping
    first_name: data?.first_name || "",
    last_name: data?.last_name || "",
    email: data?.email || "",
    phone_number: data?.phone_number ? mutatePhone(data?.phone_number, true) : "",
    gender: data?.gender || "",
    
    // Number → String (for input fields)
    age: Number(data?.age) || "",
    
    // Region - keep as is (already ID number)
    region: data?.region?.toString() || "",
    
    // Profile picture - keep object structure
    profile_picture: data?.profile_picture || null,
    
    // Flatten user_details to form fields
    current_medical_state: data?.user_details?.current_medical_state || "",
    
    // Array → String (for text inputs)
    // ["Nothing"] → "Nothing"
    medical_conditions: arrayToString(data?.user_details?.medical_condition),
    // ["Reading"] → "Reading"
    hobbies: arrayToString(data?.user_details?.hobbies),
    // ["Rockzz"] → "Rockzz"
    music_preferences: arrayToString(data?.user_details?.music_preferences),
    
    // Keep array as is (for array field components)
    // Remove id field as it's not needed in form
    family_members: data?.user_details?.family_members?.map((member: any) => ({
      name: member.name || "",
      relationship: member.relationship || "",
      date_of_birth: member.date_of_birth || "",
    })) || [],
    
    // Transform important_dates - rename date_type → type (reverse of submit)
    // Remove id field as it's not needed in form
    important_dates: data?.user_details?.important_dates?.map((date: any) => ({
      type: date.date_type || "", // Backend: date_type → Frontend: type
      person_name: date.person_name || "",
      date: date.date || "",
    })) || [],
  };
}