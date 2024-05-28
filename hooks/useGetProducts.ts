import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useGetProducts = (categoryId?: string, title?: string) => {
  const { data, error, isLoading, mutate, isValidating } = useSWR(
    `/api/products/${categoryId}/${title}`,
    fetcher,
    {
      revalidateOnMount: true,
      revalidateOnFocus: true,
    }
  );
  return {
    data,
    error,
    isLoading,
    mutate,
    isValidating,
  };
};

export default useGetProducts;
