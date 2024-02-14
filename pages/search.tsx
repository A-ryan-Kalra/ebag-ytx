import SearchImg from "@/components/SearchImg";
import axios from "axios";
import React, { useEffect, useState } from "react";

function search() {
  const [search, setSearch] = useState("");
  const [searchedItems, setSearchedItems] = useState<any>();

  useEffect(() => {
    setSearchedItems(null);
    if (search.trim()) {
      const timer = setTimeout(async () => {
        let res = await axios.get(
          `/api/search?search=${search.toLowerCase().trim()}`
        );
        setSearchedItems(res.data);
        // console.log(res);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [search]);

  console.log(searchedItems);

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
        <div className="flex flex-wrap h-full items-center justify-start gap-3 px-2 py-3">
          {searchedItems !== null &&
            searchedItems?.map((item: any, index: number) => (
              <SearchImg key={index} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default search;
