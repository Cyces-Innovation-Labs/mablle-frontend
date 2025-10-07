import makeGetRequest from "@/api/makeGetRequest";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useDebounce } from "./useDebounce";

const useGetSearchMeta = ({
  endpoint,
}: {
  endpoint: string;
}) => {
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 500);
  const { data, isLoading, isFetched, error } = useQuery({
    queryKey: ["searchMeta", endpoint, debouncedSearch],
    queryFn: () => makeGetRequest(endpoint, { search: debouncedSearch }),
  });
  return { data, isLoading, isFetched, error, setSearch, search };
};

export default useGetSearchMeta;
