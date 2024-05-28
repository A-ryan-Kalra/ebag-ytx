import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

function success() {
  return (
    <div className=" px-5 relative">
      <div className="min-h-[80vh] relative flex flex-col justify-center items-center">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <div>
              <Icon icon="icon-park:success" width={40} />
            </div>
            <h1 className="text-2xl font-semibold">Payment Successfull</h1>
          </div>
          <h1 className="font-xl">Thank you! We have recieved your payment.</h1>
          <Link
            href={"/"}
            className="bg-blue-600 text-center rounded-md hover:bg-blue-800 duration-300 ease-in-out transition-all text-white py-2 shadow-lg font-semibold"
          >
            Back to shop
          </Link>
          <span className="text-center">or</span>
          <Link
            href={"/orders"}
            className="bg-blue-600 text-center rounded-md hover:bg-blue-800 duration-300 ease-in-out transition-all text-white py-2 shadow-lg font-semibold"
          >
            Check your orders
          </Link>
        </div>
      </div>
    </div>
  );
}

export default success;
