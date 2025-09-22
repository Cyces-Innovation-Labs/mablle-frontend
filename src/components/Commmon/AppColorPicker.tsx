// import { memo, useState } from "react";
// import { Button } from "../ui/button";
// import { RefreshCw } from "lucide-react";
// import { Label } from "../ui/label";
// import { FormDescription } from "../ui/form";
// import { HexColorPicker } from "react-colorful";
// import AppModal from "./AppModal";

// const AppColorPicker = ({
//   color,
//   label,
//   labelClassName,
//   description,
//   formUtils,
//   name,
// }: {
//   color: string;
//   label?: string;
//   labelClassName?: string;
//   description?: string;
//   formUtils: any;
//   name: string;
// }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [internalColor, setInternalColor] = useState(color);

//   const handleDone = () => {
//     setIsModalOpen(false);
//     formUtils.setValue(name, internalColor, { shouldValidate: true });
//   };

//   return (
//     <div>
//       {label && <Label className={`mb-[9px] ${labelClassName}`}>{label}</Label>}
//       <div className="flex gap-[20px] items-center">
//         <button
//           type="button"
//           className="shadow-sm w-[60px] h-[60px] rounded-full border-[10px] cursor-pointer"
//           style={{ borderColor: color }}
//           onClick={() => setIsModalOpen(true)}
//         ></button>
//         <Button
//           type="button"
//           variant={"secondary"}
//           onClick={() =>
//             formUtils.setValue(name, "#000000", { shouldValidate: true })
//           }
//         >
//           <RefreshCw />
//           Reset
//         </Button>
//       </div>
//       {description && (
//         <FormDescription className={`text-xs mt-2`}>
//           {description}
//         </FormDescription>
//       )}
//       <AppModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         title="Pick a color"
//         size="sm"
//         className=""
//       >
//         <div className="flex flex-col items-center gap-4 py-4 w-full max-w-[200px] mx-auto">
//           <HexColorPicker
//             color={color}
//             onChange={(newColor: string) => setInternalColor(newColor)}
//           />
//           <Button
//             className="w-full  mt-4"
//             type="button"
//             onClick={() => handleDone()}
//           >
//             Done
//           </Button>
//         </div>
//       </AppModal>
//     </div>
//   );
// };

// export default memo(AppColorPicker);
