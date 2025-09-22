import makeGetRequest from "@/api/makeGetRequest";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

const useGetTableData = ({
  endpoint,
  metaEndpoint,
  filters,
  queryFunc,
}: {
  endpoint: string;
  metaEndpoint: string;
  filters?: any;
  queryFunc?: UseQueryOptions<any, any, any, any>
}) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const { data: metaData, isLoading: isLoadingMeta } = useQuery({
    queryKey: ["metaData", metaEndpoint],
    queryFn: () => makeGetRequest(metaEndpoint),
    ...queryFunc,
  });

  const {
    data: tableData,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["tableData", endpoint],
    queryFn: () => makeGetRequest(endpoint, { ...filters, page, search }),
    ...queryFunc,
  });

  useEffect(() => {
    refetch();
  }, [filters, page, debouncedSearch]);

  return {
    metaData,
    tableData,
    isLoading,
    error,
    isLoadingMeta,
    refetch,
    page,
    setPage,
    setSearch,
    search,
    debouncedSearch,
  };
};

export default useGetTableData;
