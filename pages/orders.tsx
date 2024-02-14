import OrderCompleted from "@/components/OrderCompleted";
import useGetCompletedOrders from "@/hooks/useGetCompletedOrders";
import React, { useEffect, useState } from "react";

function orders() {
  const { data, error, isLoading, mutate } = useGetCompletedOrders();
  const [order, setOrder] = useState<Array<Object>>();

  useEffect(() => {
    setOrder(data);
  }, [data]);

  return (
    <div className="relative">
      <div className="min-h-screen gap-3 flex flex-col px-10 py-10">
        <h1 className="text-3xl font-serif">Completed Orders</h1>
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
      </div>
    </div>
  );
}

export default orders;
