import makePostRequestProgress from "@/api/makePostRequestProgress";
import { useMutation } from "@tanstack/react-query";
import type { IUploadedFile } from "@/components/Commmon/types";
type UploadOptions = {
  endpoint: string;
  setUploadProgress?: (progressEvent: ProgressEvent) => void;
  uploadState?: (data: IUploadedFile) => void;
};

export const useUploadToStorage = ({
  endpoint,
  setUploadProgress,
  uploadState,
}: UploadOptions) => {
  const { mutate, isPending: isUploading } = useMutation({
    mutationFn: (body) =>
      makePostRequestProgress(endpoint, body, {}, setUploadProgress),
    onSuccess: (data) => {
      if (uploadState) {
        uploadState(data?.data as IUploadedFile);
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleUpload = (files: File[]) => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("file", file);
    });
    //@ts-expect-error ignore
    mutate(formData);
  };

  return { isUploading, handleUpload };
};
