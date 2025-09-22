import { Separator } from "@/components/ui/separator";
import AppText from "../AppText";
import type { IUploadedFile } from "../types";
import AppCircularContainer from "../AppCircularContainer";
import { File } from "lucide-react";
import { getFileNameFromUrl, formatBytes } from "@/lib/common-funnctions";
import AppDeleteButton from "../AppDeleteButton";
import { AnimatePresence } from "framer-motion";
import SkeletonFilesList from "@/components/loaders/skeletonLoaders/SkeletonFilesList";

const AppSelectedFilesList = ({ files, selectedIds, onRemovenClick, isLoading, listIsLoading }: { files: IUploadedFile[], selectedIds?: number[], onRemovenClick?: (file: IUploadedFile) => void, isLoading?: boolean, listIsLoading?: boolean }) => {
  if (files.length === 0) return null;
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between gap-2">
        <AppText
          text="Attached Files"
          className="font-medium text-sm whitespace-nowrap"
        />
        <Separator className="flex-1" />
      </div>
      {listIsLoading ? <SkeletonFilesList/> :

        <div className="mt-[24px] flex flex-col gap-3">
          <AnimatePresence>
            {files.map((file) => (
              <AppSelectedFileItem isLoading={isLoading} onRemovenClick={() => onRemovenClick?.(file)} selectedIds={selectedIds} key={file.id} file={file} />
            ))}
          </AnimatePresence>
        </div>}


      </div>
  );
};

      const AppSelectedFileItem = ({file, selectedIds, onRemovenClick, isLoading}: {file: IUploadedFile, selectedIds?: number[], onRemovenClick?: () => void, isLoading?: boolean }) => {
  const fileName = file?.file_name || getFileNameFromUrl(file?.file);

      return (
      <>
        <div className="flex items-center gap-4">
          <AppCircularContainer className="size-[38px] border-[4px]">
            <File size={16} className="text-blue-tag" />
          </AppCircularContainer>
          <div>
            <AppText
              text={fileName}
              className="text-text-primary font-medium text-sm leading-[20px]"
            />
            <div className="flex items-center gap-2">
              {/* @ts-expect-error ignore */}
              {![undefined, null]?.includes(file?.total_chars || '') ? <AppText
                text={`${file?.total_chars} chars`}
                className="text-text-secondary text-xs leading-[20px]"
              /> : ''}
              <AppText
                text={file?.size ? formatBytes(Number(file?.size), { mode: "SI" }) : ""}
                className="text-text-secondary text-xs leading-[20px]"
              />
            </div>

          </div>
        </div>
        <AppDeleteButton onClick={onRemovenClick} isLoading={isLoading && selectedIds?.includes(Number(file?.id))} />
      </>
      );
};

      export {AppSelectedFilesList};
