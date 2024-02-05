import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useGetProducts = (categoryId?: string, title?: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/products/${categoryId}/${title}`,
    fetcher,
    {
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

export default useGetProducts;
