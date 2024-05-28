import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useGetCollectionItems = (collectionId?: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/collections/${collectionId}`,
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

export default useGetCollectionItems;
