import SearchImg from "@/components/SearchImg";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BarLoader, BeatLoader, PropagateLoader } from "react-spinners/";

function search() {
  const [search, setSearch] = useState("");
  const [animate, setAnimate] = useState<any>();
  const [searchedItems, setSearchedItems] = useState<any>();

  useEffect(() => {
    setSearchedItems(null);
    setAnimate(false);

    if (search.trim()) {
      setAnimate(true);
      const timer = setTimeout(async () => {
        let res = await axios.get(
          `/api/search?search=${search.toLowerCase().trim()}`
        );
        setSearchedItems(res.data);
        setAnimate(false);
        // console.log(res);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [search]);

  return (
    <div className=" min-h-[70vh]">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-3 p-2   my-20 h-full">
        <h1 className="text-4xl font-semibold font-serif">Search Results</h1>
        <div className="w-full flex rounded-md">
          <input
            type="text"
            className="w-full bg-slate-200 placeholder:font-semibold outline-none p-2 rounded-md"
            placeholder="Enter Items"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap h-full items-center justify-start gap-3 px-3 py-3">
          {searchedItems !== null && searchedItems?.length > 0
            ? searchedItems?.map((item: any, index: number) => (
                <SearchImg key={index} item={item} />
              ))
            : searchedItems?.length === 0 && (
                <div className="  w-full flex flex-col gap-3 relative  ">
                  <BarLoader
                    height={7}
                    width={"100%"}
                    color="#36d7b7"
                    speedMultiplier={1}
                    className=" w-full "
                  />
                  <h1 className="text-xl font-mono">
                    Unable to find what you are looking for..
                  </h1>
                </div>
              )}
          {animate && (
            <div className="  w-full flex items-center gap-3 relative  ">
              <BeatLoader
                size={30}
                color="#36d7b7"
                speedMultiplier={1}
                className="  "
              />
              <h1 className="text-2xl font-mono">Searching...</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default search;
