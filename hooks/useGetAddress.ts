import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useGetAddress = (userId?: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    `api/address?userId=${userId}`,
    fetcher,
    {
      revalidateOnFocus: true,
      revalidateOnMount: true,
      revalidateOnReconnect: true,
    }
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useGetAddress;
