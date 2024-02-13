import useGetUser from "@/hooks/useGetUser";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";

function OrderCompleted({ item }: { [key: string]: any }) {
  const { data, error, isLoading, mutate } = useGetUser();
  const [address, setAddress] = useState<any>();

  const dateString = item?.updatedAt;
  const date = new Date(dateString);
  const realtime = format(date, "d/MMM/y h:mm:ss a, EEEE.");
  useEffect(() => {
    data?.address?.map((i: any) => setAddress(i));
  }, [data]);

  return (
    <div className="flex flex-col gap-1 border-2 p-3 rounded-md hover:bg-gray-100 hover:border-cyan-400 duration-300 ease-in-out transition-all">
      <div className="flex gap-1 items-center flex-wrap ">
        <h1 className="font-semibold">Title:</h1>
        <h1 className="">{item?.title}</h1>
      </div>
      <div className="flex gap-1 items-center flex-wrap">
        <h1 className="font-semibold">Brand:</h1>
        <h1 className="">{item?.brand}</h1>
      </div>
      <div className="flex gap-1 items-center flex-wrap">
        <h1 className="font-semibold">Price:</h1>
        <h1 className="">
          ₹
          {item?.price.toLocaleString("en-IN", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </h1>
      </div>
      <div className="flex gap-1 items-center flex-wrap">
        <h1 className="font-semibold">Qunatity:</h1>
        <h1 className="">{item?.quantity}</h1>
      </div>
      <div className="flex gap-1 flex-wrap">
        <h1 className="font-semibold">Delivery Address:</h1>
        <h1>
          {address?.name}, {address?.address}, {address?.zipcode},{" "}
          {address?.country}
        </h1>
      </div>
      <div className="flex gap-1">
        <h1 className="font-semibold">Total Price:</h1>
        <h1 className="">
          ₹
          {(item?.quantity * item?.price).toLocaleString("en-IN", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </h1>
      </div>
      <div className="flex gap-1 items-center flex-wrap">
        <h1 className="font-semibold">Order placed at:</h1>
        <h1 className="">{realtime}</h1>
      </div>
      <div className="overflow-hidden shadow-lg w-fit rounded-md">
        <img
          src={item?.thumbnail}
          alt="logo"
          className="w-[200px] h-[200px] object-cover"
        />
      </div>
    </div>
  );
}

export default OrderCompleted;
