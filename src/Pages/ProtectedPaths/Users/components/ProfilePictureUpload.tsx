/**
 * ProfilePictureUpload Component
 * 
 * A reusable profile picture upload component that integrates with useUploadToStorage hook.
 * 
 * Features:
 * - Upload profile pictures with progress indication
 * - Preview uploaded image
 * - Remove uploaded image
 * - Form validation integration
 * - API error handling with toast notifications
 * - Form error handling with bottom description
 * - Stores data as object: { id: number, url: string }
 * - File type validation (images only)
 * - File size validation (5MB max)
 * 
 * Usage:
 * ```tsx
 * <ProfilePictureUpload
 *   name="profile_picture"
 *   formUtils={formUtils}
 *   endpoint={fileEndpoints.upload}
 * />
 * ```
 */

import { useCallback, useState } from "react";
import { useUploadToStorage } from "@/hooks/useUploadToStorage";
import { Button } from "@/components/ui/button";
import AppText from "@/components/Commmon/AppText";
import { Camera, X, Upload } from "lucide-react";
import { toast } from "sonner";
import type { UseFormReturn } from "react-hook-form";
import { cn } from "@/lib/utils";

interface ProfilePictureUploadProps {
  name: string;
  formUtils: UseFormReturn<any>;
  endpoint: string;
  label?: string;
  className?: string;
}

const ProfilePictureUpload = ({
  name,
  formUtils,
  endpoint,
  label = "Profile Picture",
  className,
}: ProfilePictureUploadProps) => {
  const { setValue, watch, formState } = formUtils;
  const profilePicture = watch(name);
  const error = formState.errors[name];

  const [uploadProgress, setUploadProgress] = useState(0);

  const { isUploading, handleUpload } = useUploadToStorage({
    endpoint,
    uploadState: (data) => {
      if (!!data) {
        const uploadedFile = data;
        setValue(
          name,
          {
            id: uploadedFile.id,
            file: uploadedFile.file,
          },
          { shouldValidate: true }
        );
        toast.success("Profile picture uploaded successfully!");
      }
    },
    setUploadProgress: (progressEvent) => {
      const progress = (progressEvent.loaded / progressEvent.total) * 100;
      setUploadProgress(progress);
    },
  });

  const handleFileSelect = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (!files || files.length === 0) return;

      const file = files[0];

      // Validate file type
      if (!file.type.startsWith("image/")) {
        toast.error("Please select an image file");
        return;
      }

      // Validate file size (5MB limit)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        toast.error("File size must be less than 5MB");
        return;
      }

      handleUpload([file]);
    },
    [handleUpload]
  );

  const handleRemove = () => {
    setValue(name, null, { shouldValidate: true });
    toast.success("Profile picture removed");
  };

  return (
    <div className={cn("space-y-4", className)}>
      {label && (
        <AppText type="span" className="text-sm font-medium">
          {label}
        </AppText>
      )}

      <div className="flex items-center gap-6">
        {/* Avatar Preview */}
        <div className="relative">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200">
            {profilePicture?.file ? (
              <img
                src={profilePicture.file}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <Camera className="w-8 h-8 text-gray-400" />
              </div>
            )}
          </div>

          {isUploading && (
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
              <AppText type="span" className="text-white text-sm font-medium">
                {Math.round(uploadProgress)}%
              </AppText>
            </div>
          )}
        </div>

        {/* Upload/Remove Buttons */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              disabled={isUploading}
              onClick={() => document.getElementById(`${name}-upload`)?.click()}
              className="relative"
            >
              <Upload className="w-4 h-4 mr-2" />
              {isUploading ? "Uploading..." : "Upload Photo"}
            </Button>

            {profilePicture?.url && !isUploading && (
              <Button
                type="button"
                variant="ghost"
                onClick={handleRemove}
                className="text-red-500 hover:text-red-600 hover:bg-red-50"
              >
                <X className="w-4 h-4 mr-2" />
                Remove
              </Button>
            )}
          </div>

          <AppText type="span" className="text-xs text-gray-500">
            JPG, PNG or GIF. Max size 5MB
          </AppText>
        </div>

        {/* Hidden File Input */}
        <input
          id={`${name}-upload`}
          type="file"
          accept="image/jpeg,image/png,image/gif,image/webp"
          onChange={handleFileSelect}
          className="hidden"
          disabled={isUploading}
        />
      </div>

      {/* Error Message */}
      {error && (
        <AppText type="span" className="text-sm text-red-500">
          {error.message as string}
        </AppText>
      )}
    </div>
  );
};

export default ProfilePictureUpload;

