import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useGetCompletedOrders = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/orders", fetcher, {
    revalidateOnFocus: true,
    revalidateOnMount: true,
  });

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};
export default useGetCompletedOrders;
