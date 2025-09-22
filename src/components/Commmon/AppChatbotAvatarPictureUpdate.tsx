// import { Button } from "../ui/button";
// import { Upload } from "lucide-react";
// import { Label } from "../ui/label";
// import { FormDescription } from "../ui/form";
// import AppImage from "./AppImage";
// import { useUploadToStorage } from "@/hooks/useUploadToStorage";
// import type { IUploadedFile } from "./types";
// import { CycesAvatar } from "@/assets";
// import { toast } from "sonner";

// const AppChatbotAvatarPictureUpdate = ({
//   label,
//   labelClassName,
//   description,
//   pictureValue,
//   setPicture,
//   agentId,
// }: {
//   color: string;
//   label?: string;
//   labelClassName?: string;
//   description?: string;
//   pictureValue: string;
//   setPicture: (val: IUploadedFile) => void;
//   agentId: string;
// }) => {
//   const endpoint = `chatbot/${agentId}/upload/avatar`
//   const { handleUpload } = useUploadToStorage({
//     endpoint: endpoint,
//     uploadState: (data: any) => {
//       setPicture(data?.data?.[0]);
//     },
//   });

//   const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       if (file.size > MAX_FILE_SIZE) {
//         toast.error("File size exceeds 1MB limit.");
//         return;
//       }
//       handleUpload([file]);
//     }
//   };

//   return (
//     <div>
//       {label && <Label className={`mb-[9px] ${labelClassName}`}>{label}</Label>}
//       <div className="flex gap-[20px] items-center">
//         <div className="w-[60px] h-[60px] rounded-full border border-primary">
//           <AppImage
//             className="w-full h-full rounded-full object-cover"
//             src={pictureValue || CycesAvatar}
//             alt="profile-picture"
//           />
//         </div>

//         <input
//           accept="image/png, image/jpeg, image/svg+xml"
//           onChange={handleFileChange}
//           id="avatar-picture-input"
//           type="file"
//           hidden
//         />
//         <Button
//           variant={"secondary"}
//           className="z-[0] relative"
//           type="button"
//           onClick={() => {
//             document.getElementById("avatar-picture-input")?.click();
//           }}
//         >
//           <Upload />
//           Change Image
//         </Button>
//         <Button
//           onClick={() => {
//             //@ts-expect-error file is not defined
//             setPicture({ file: null, id: null });
//           }}
//           type="button"
//           variant={"ghost"}
//           className="hover:text-destructive"
//         >
//           Remove
//         </Button>
//       </div>
//       {description && <FormDescription>{description}</FormDescription>}
//     </div>
//   );
// };

// export default AppChatbotAvatarPictureUpdate;
