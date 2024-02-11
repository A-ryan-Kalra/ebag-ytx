import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useGetUser = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher, {
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

export default useGetUser;
