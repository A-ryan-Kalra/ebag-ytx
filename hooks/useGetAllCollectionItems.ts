import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useGetAllCollectionItems = () => {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/collections`,
    fetcher,
    {
      revalidateOnFocus: true,
      revalidateOnMount: true,
    }
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useGetAllCollectionItems;
