import axios from "axios";
import { NextApiResponse } from "next";
import { useRouter } from "next/router";
import React from "react";
interface CustomApiResponse<T = any> extends NextApiResponse<T> {
  razorpay_payment_id?: string; // Add the razorpay_payment_id property
}
function Button({ delivery, totalMoney, user }: any) {
  const router = useRouter();
  console.log(process.env.RAZORPAY_KEY, "button");
  const makePayment = async (totalMoney: number) => {
    //console.log("here...");

    const res = await initializeRazorpay();
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    // Make API call to the serverless API
    const data = await axios
      .post("/api/razorpay", { totalMoney })
      .then((i) => i.data);
    console.log(user);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Aryan Kalra",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thank You for purchasing",
      image:
        "https://yt3.googleusercontent.com/ytc/APkrFKZNufwHDZjGMb0SWNSMe-8W0VA2QRJtK3dctN8e0Q=s176-c-k-c0x00ffffff-no-rj",
      handler: function (response: CustomApiResponse) {
        // Validate payment at server - using webhooks is a better idea.
        alert("Collect your payment id: " + response.razorpay_payment_id);
        //alert(response.razorpay_order_id);
        //alert(response.razorpay_signature);
        localStorage.clear();

        router.reload();
      },
      prefill: {
        name: user?.name,
        email: user?.email,
        contact: process.env.Mobile_NO as string,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  return (
    <button
      disabled={!delivery}
      onClick={() => makePayment(totalMoney)}
      className="uppercase disabled:cursor-not-allowed bg-black disabled:bg-opacity-70 hover:bg-opacity-75 duration-200 transition-all ease-in-out active:scale-90 text-white font-semibold text-[18px] px-10 py-3"
    >
      Proceed to buy
    </button>
  );
}

export default Button;
