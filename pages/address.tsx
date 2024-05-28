import useGetAddress from "@/hooks/useGetAddress";
import useGetUser from "@/hooks/useGetUser";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

function address() {
  const [building, setBuilding] = useState("");
  const [area, setArea] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");

  const { data } = useGetUser();
  const { data: address, isLoading, mutate } = useGetAddress(data?.id);

  useEffect(() => {
    setBuilding(address?.name);
    setArea(address?.address);
    setZipcode(address?.zipcode);
    setCountry(address?.country);
    mutate();
  }, [
    address?.name,
    address?.address,
    address?.zipcode,
    address?.country,
    mutate,
  ]);

  const handleUpdate = useCallback(
    async (e: any) => {
      e.preventDefault();
      try {
        if (!address) {
          const res = await axios.post(`/api/address`, {
            userId: data?.id,
            building: building,
            area: area,
            zipcode: zipcode,
            country: country,
          });
          toast.success("Address added");
          // console.log(res);
        } else {
          const res = await axios.put(`/api/address/${data?.id}`, {
            building: building,
            area: area,
            zipcode: zipcode,
            country: country,
          });
          // console.log(res);
          toast.success("Address updated");
        }
        mutate();
      } catch (error) {
        console.error(error);
        toast.success("Something went wrong");
      }
    },
    [building, area, zipcode, country, data?.id, mutate]
  );

  return (
    <div className="min-h-screen">
      <form
        onSubmit={handleUpdate}
        className="  h-full md:w-1/2 w-[80%] flex mx-auto relative translate-y-[25%] top-[-25%] flex-col justify-center items-center gap-4"
      >
        <h1 className="text-left w-full text-2xl font-serif md:text-4xl">
          Address Details
        </h1>

        <input
          type="text"
          className="border-2 focus-visible:border-transparent outline-none focus-visible:ring-4 focus-visible:ring-[#c5da71] p-2 w-full rounded-xl"
          onChange={(e) => setBuilding(e.target.value)}
          value={building}
          placeholder="Building No/Floor"
        />

        <input
          type="text"
          className="border-2 focus-visible:border-transparent outline-none focus-visible:ring-4 focus-visible:ring-[#c5da71] duration-300 transition-all ease-in-out p-2 w-full rounded-xl"
          onChange={(e) => setArea(e.target.value)}
          value={area}
          placeholder="Area"
        />

        <input
          type="text"
          className="border-2 focus-visible:border-transparent outline-none focus-visible:ring-4 focus-visible:ring-[#c5da71] duration-300 transition-all ease-in-out p-2 w-full rounded-xl"
          onChange={(e) => setZipcode(e.target.value)}
          value={zipcode}
          required
          placeholder="Location Postcode"
        />

        <input
          type="text"
          className="border-2 focus-visible:border-transparent outline-none focus-visible:ring-4 focus-visible:ring-[#c5da71] duration-300 transition-all ease-in-out p-2 w-full rounded-xl"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
          placeholder="Country"
        />
        {address ? (
          <button className="border-2 hover:bg-opacity-90 active:scale-90 duration-300 transition-all ease-in-out text-white font-semibold bg-[#2778d5] w-full p-2 rounded-md">
            Update
          </button>
        ) : (
          <button className="border-2 hover:bg-opacity-90 active:scale-90 duration-300 transition-all ease-in-out text-white font-semibold bg-[#2778d5] w-full p-2 rounded-md">
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default address;
