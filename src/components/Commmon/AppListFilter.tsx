/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import type { UseFormReturn } from "react-hook-form";
import AppForm from "./AppForm/AppForm";
import AppSearchInput from "./AppSearchInput";
import { type InputGroup } from "./types";

interface NewRowFormProps {
  inputArr?: InputGroup[];
  formUtils?: UseFormReturn<any>;
  className?: string;
  formClassName?: string;
  formWrapperClassName?: string;
  skeletonWrapperClassName?: string;
  isLoading?: boolean;
  fieldsCount?: number;
  isMobile?: boolean;
  handleSearch?: (value: string) => void;
  searchPlaceholder?: string;
}

const AppListFilter: React.FC<NewRowFormProps> = ({
  inputArr,
  formUtils,
  className,
  formClassName,
  formWrapperClassName,
  skeletonWrapperClassName,
  isLoading = false,
  fieldsCount = 2,
  isMobile = false,
  handleSearch,
  searchPlaceholder = "Search",
}) => {
  
  const handleClearFilters = () => {
    inputArr?.forEach((group) => {
      group.render.forEach((filter) => {
        formUtils?.setValue(filter.name, "");
      });
    });
    if (handleSearch) {
      handleSearch("");
    }
  };

  return (
    <div className={`${className} flex md:flex-row flex-col w-full gap-[20px]`}>
      {handleSearch && (
        <div className="flex-shrink-0 min-w-[280px] max-w-[400px]">
          <AppSearchInput
            handleSearch={(v) => {
              if (handleSearch) {
                handleSearch(v);
              }
            }}
            // value={searchValue}
            placeholder={searchPlaceholder}
          />
        </div>
      )}
      {inputArr?.length && (
        <>
          <AppForm
          labelClassName="!mb-0"
            noDefaultButtons
            inputArr={inputArr ?? []}
            //@ts-expect-error TODO
            formUtils={formUtils && formUtils}
            className={className}
            formClassName={`flex flex-col w-full md:flex-row space-x-4 md:items-center ${
              formClassName ?? ""
            }`}
            formWrapperClassName={formWrapperClassName}
            skeletonWrapperClassName={skeletonWrapperClassName}
            isLoading={isLoading}
            fieldsCount={fieldsCount}
            onSubmit={() => {
              console.log("data");
            }}
          ></AppForm>
          {inputArr && !isMobile ? (
            <button
              type="button"
              className="text-[14px] whitespace-nowrap cursor-pointer text-primary underline px-[10px] py-[11px]"
              onClick={handleClearFilters}
            >
              Clear Filters
            </button>
          ) : null}
        </>
      )}
    </div>
  );
};

export default AppListFilter;
