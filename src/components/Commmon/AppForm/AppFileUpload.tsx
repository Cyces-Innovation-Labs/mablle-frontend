import { useDropzone, type Accept } from "react-dropzone";
import { useCallback, useState } from "react";
import { useController, type UseFormReturn } from "react-hook-form";
import { cn } from "@/lib/utils"; // for merging classnames
import { Label } from "@/components/ui/label";
import AppCircularProgress from "../AppCircularProgress";
import { CloudUpload } from "lucide-react";
import type { IUploadedFile } from "../types";
import { AppSelectedFilesList } from "./AppSelectedFilesList";
import AppText from "../AppText";
import { toast } from "sonner";
import { useUploadToStorage } from "@/hooks/useUploadToStorage";

type AppFileUploadProps = {
  name: string;
  label?: string;
  onDrop?: (files: File[]) => void;
  endpoint?: string; // S3 URL
  className?: string;
  formUtils: UseFormReturn<any>;
  accept?: Accept;
  bottomDesc?: string;
  labelClassName?: string;
  disabled?: boolean;
  cutomUploadProgress?: number;
  customIsLoading?: boolean;
  selectedIds?: number[];
  customOnRemove?: (file: IUploadedFile) => void;
  listIsLoading?: boolean;
  maxFileSize?: number; // in bytes
};

const AppFileUpload = ({
  name,
  label,
  onDrop,
  endpoint,
  className,
  formUtils,
  accept = {
    "application/pdf": [".pdf"],
    "application/msword": [".doc"],
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
      ".docx",
    ],
    "text/plain": [".txt"],
  },
  bottomDesc,
  labelClassName,
  disabled,
  cutomUploadProgress,
  customIsLoading,
  selectedIds,
  customOnRemove,
  listIsLoading,
  maxFileSize
}: AppFileUploadProps) => {
  const { control, setValue } = formUtils;
  const {
    field: { value, ...fieldProps },
  } = useController({ name, control });

  const [uploadProgress, setUploadProgress] = useState(0);
  const { isUploading, handleUpload } = useUploadToStorage({
    endpoint: endpoint || "",
    uploadState: (data: IUploadedFile[]) => {
      setValue(name, [...(value || []), ...data], { shouldValidate: true });
    },
    setUploadProgress: (progressEvent) => {
      const progress = (progressEvent.loaded / progressEvent.total) * 100;
      setUploadProgress(progress);
    },
  });

  const handleDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return;

      if (onDrop) {
        onDrop(acceptedFiles);
        return;
      }

      if (!endpoint) return;

      handleUpload(acceptedFiles);
    },
    [onDrop, endpoint, setValue, name, handleUpload, maxFileSize]
  );

  const acceptedFileTypes = Object.values(accept).join(", ");

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: accept,
    disabled,
    maxSize: maxFileSize,
    onDropRejected: (fileRejections) => {
      if (fileRejections && fileRejections.length > 0) {
        const file = fileRejections[0].file;
        toast.error(`File "${file.name}" exceeds the ${(maxFileSize! / (1024 * 1024)).toFixed(0)}MB size limit.`);
        return;
      }
    }
  });

  const isError = formUtils.formState.errors[name];

  const onRemoveFile = (file: IUploadedFile) => {
    const updatedFiles = value?.filter((f: IUploadedFile) => f.id !== file.id);
    setValue(name, updatedFiles, { shouldValidate: true });
  };

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <Label className={`mb-[20px] font-medium ${labelClassName}`}>
          {label}
        </Label>
      )}

      <div className="relative">
        <div
          {...getRootProps()}
          className={cn(
            "flex flex-col items-center justify-center  gap-2 px-6 py-10 border-[2px] !border-[#e7e7e7] border-dashed rounded-md text-center cursor-pointer transition-all shadow-none",
            isError ? "!border-destructive" : "",
            isDragActive ? "border-blue-500 bg-blue-50" : "border-muted",
            disabled ? "opacity-50 cursor-not-allowed" : ""
          )}
        >

          <input {...fieldProps} {...getInputProps()} />

          <CloudUpload className="w-8 h-8 text-muted-foreground mb-1" />

          <p className="text-base font-medium text-foreground">
            Drag & drop files here, or click to select files
          </p>

          <p className="text-sm text-muted-foreground">
            Supported File Types:{" "}
            <span className="font-medium">{acceptedFileTypes}</span>
          </p>
        </div>
        {(isUploading || customIsLoading) && <AppCircularProgress wrapperClassName="absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2" showLabel value={uploadProgress || cutomUploadProgress || 0} />}

      </div>

      {bottomDesc && (
        <div>
          <AppText
            text={bottomDesc}
            className="text-text-secondary text-xs mt-3 text-center"
          />
        </div>
      )}
      <AppSelectedFilesList listIsLoading={listIsLoading} isLoading={customIsLoading} selectedIds={selectedIds} onRemovenClick={customOnRemove ? customOnRemove : onRemoveFile} files={value || []} />
    </div>
  );
};

export default AppFileUpload;
