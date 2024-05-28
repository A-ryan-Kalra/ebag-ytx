import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useGetCart = () => {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    "/api/order",
    fetcher,
    {
      revalidateOnMount: true,
      revalidateOnFocus: true,
    }
  );
  return { data, error, isLoading, mutate, isValidating };
};
export default useGetCart;
