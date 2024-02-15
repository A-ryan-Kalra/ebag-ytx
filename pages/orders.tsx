import OrderCompleted from "@/components/OrderCompleted";
import useGetCompletedOrders from "@/hooks/useGetCompletedOrders";
import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function orders() {
  const { data, error, isLoading, mutate } = useGetCompletedOrders();
  const [order, setOrder] = useState<Array<Object>>();

  useEffect(() => {
    setOrder(data);
  }, [data]);
  // if (loadScreen) {
  //   return (
  //     <div className=" relative min-h-full flex items-center bg-opacity-50 justify-center bg-white z-[100] w-full">
  //       <ClipLoader
  //         size={40}
  //         color="#32b79c"
  //         speedMultiplier={2}
  //         className="max-lg:translate-y-[65%] bottom-[15%] mx-auto relative max-lg:bottom-[15%] "
  //       />
  //     </div>
  //   );
  // }
  return (
    <div className="relative">
      <div className="min-h-screen gap-3 flex flex-col px-10 py-10">
        <h1 className="text-3xl font-serif">Completed Orders</h1>
        {isLoading ? (
          <div className=" my-10 w-full">
            <ClipLoader
              size={70}
              color="#32b79c"
              speedMultiplier={2}
              className="max-lg:translate-y-[65%] bottom-[15%] mx-auto relative max-lg:bottom-[15%] "
            />
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {order?.length !== 0 && order?.length !== undefined ? (
              order?.map((item: any, index: number) => (
                <OrderCompleted item={item} key={index} />
              ))
            ) : (
              <div className="text-xl font-semibold my-5">
                You have no purchases yet!
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default orders;
