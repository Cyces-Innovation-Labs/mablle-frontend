import makeGetRequest from "@/api/makeGetRequest";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
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

  const memoizedFilters = useMemo(() => (filters), [JSON.stringify(filters)]);

  const { data: metaData, isLoading: isLoadingMeta } = useQuery({
    queryKey: ["metaData", metaEndpoint],
    queryFn: () => makeGetRequest(metaEndpoint),
    retry: 2,
    ...queryFunc,
  });

  const {
    data: tableData,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["tableData", endpoint],
    queryFn: () => makeGetRequest(endpoint, { ...filters, page, search: debouncedSearch }),
    retry: 2,
    ...queryFunc,
  });

  useEffect(() => {
    refetch();
  }, [ page, debouncedSearch, memoizedFilters]);

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
