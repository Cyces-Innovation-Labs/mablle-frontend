import makeGetRequest from "@/api/makeGetRequest";
import makePostRequest from "@/api/makePostRequest";
import makePutRequest from "@/api/makePutRequest";
import { handleApiError } from "@/lib/common-funnctions";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useMutation,
  useQuery,
  type UseQueryOptions,
} from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const useCrud = ({
  submitEndpoint,
  metaEndpoint,
  detailEndpoint,
  onSubmitSuccess,
  onSubmitError,
  metaQueryFunc,
  detailQueryFunc,
  onMetaAndDetailFetchSuccess,
  defaultValues,
  schema,
  isCreate,
  onMetaAndDetailFetchError,
  changeDataBeforeMutate,
}: {
  submitEndpoint: string;
  metaEndpoint: string;
  detailEndpoint: string;
  onSubmitSuccess?: (res: any) => void;
  onSubmitError?: (res: any) => void;
  metaQueryFunc?: UseQueryOptions<any, any, any, any>;
  detailQueryFunc?: UseQueryOptions<any, any, any, any>;
  onMetaAndDetailFetchSuccess?: ({
    data,
    formUtils,
  }: {
    data: any;
    formUtils: any;
  }) => void;
  defaultValues: any;
  schema: any;
  isCreate: boolean;
  onMetaAndDetailFetchError?: (res: any) => void;
  changeDataBeforeMutate?: (body: any) => any;
}) => {
  const {
    data: metaData,
    isLoading: isLoadingMeta,
    isFetched: isFetchedMeta,
    error: metaError,
  } = useQuery({
    queryKey: ["metaData", metaEndpoint],
    queryFn: () => makeGetRequest(metaEndpoint),
    ...metaQueryFunc,
    enabled: !!metaEndpoint,
  });

  const {
    data: detailData,
    isLoading: isLoadingDetail,
    isFetched: isFetchedDetail,
    error: detailError,
  } = useQuery({
    queryKey: ["detailData", detailEndpoint],
    queryFn: () => makeGetRequest(detailEndpoint),
    ...detailQueryFunc,
    enabled: !!detailEndpoint,
  });

  useEffect(() => {
    if (metaError) {
      if (onMetaAndDetailFetchError) onMetaAndDetailFetchError?.(metaError);
      else toast.error("Error fetching meta data");
    }
    if (detailError) {
      if (onMetaAndDetailFetchError) onMetaAndDetailFetchError?.(detailError);
      else toast.error("Error fetching detail data");
    }
  }, [metaError, detailError]);

  useEffect(() => {
    const obj = {
      data: detailData?.data,
      formUtils: formUtils,
    };
    if (
      isFetchedMeta &&
      metaData?.data &&
      detailEndpoint &&
      isFetchedDetail &&
      detailData?.data &&
      !isLoadingMeta &&
      !isLoadingDetail
    ) {
      onMetaAndDetailFetchSuccess?.(obj);
    } else if (isFetchedMeta && metaData?.data && !isLoadingMeta) {
      onMetaAndDetailFetchSuccess?.(obj);
    }
  }, [
    detailData,
    metaData,
    isFetchedMeta,
    isFetchedDetail,
    isLoadingMeta,
    isLoadingDetail,
    detailEndpoint,
    metaEndpoint,
  ]);

  const formUtils = useForm({
    defaultValues: defaultValues,
    resolver: zodResolver(schema),
  });

  const { mutate, isPending: isSubmitting } = useMutation({
    mutationFn: (body: unknown) =>
      isCreate
        ? makePostRequest(submitEndpoint, body)
        : makePutRequest(submitEndpoint, body),
    onSuccess: (res: any) => {
      if (onSubmitSuccess) onSubmitSuccess?.(res);
      else {
        toast.success(isCreate ? "Data submitted successfully" : "Data updated successfully");
      }
    },
    onError: (res: any) => {
      if(onSubmitError) onSubmitError?.(res);
      else {
        handleApiError(res)
      }
      onSubmitError?.(res);
    },
  });

  const handleSubmit = (body: unknown) => {
    const dataToMutate = changeDataBeforeMutate
      ? changeDataBeforeMutate(body)
      : body;
    mutate(dataToMutate);
  };

  return { handleSubmit, formUtils, isMetaLoading: isLoadingMeta || isLoadingDetail, isSubmitting };
};

export default useCrud;
