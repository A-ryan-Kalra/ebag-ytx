import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { IM_Fell_French_Canon_SC } from "next/font/google";
import useGetAllCollectionItems from "@/hooks/useGetAllCollectionItems";
import { useRouter } from "next/router";
import TagName from "./TagName";
import { useAtom } from "jotai";
import { dataLoaded } from "@/pages/collections/[id]";

const inter = IM_Fell_French_Canon_SC({ subsets: ["latin"], weight: "400" });

function Sidebar() {
  const router = useRouter();
  const { id } = router.query;
  const [category, setCategory] = useState<Array<Object>>();
  const { data, error, isLoading, mutate } = useGetAllCollectionItems();
  const [tag, setTag] = useState("");
  const memoizedData = useMemo(() => data, [data, id]);
  const [dataLoad, setDataLoaded] = useAtom(dataLoaded);

  useMemo(() => {
    setCategory(memoizedData);
  }, [memoizedData]);

  useEffect(() => {
    setTag(id as string);
  }, [id]);
  // console.log(id, "Id");
  function handleTag(tag?: string) {
    setTag(tag as string);
  }

  return (
    <div className=" py-10   flex flex-col gap-3">
      <div className="w-full px-4 ">
        <Link className="hover:underline text-[12px] font-semibold" href={"/"}>
          Home
        </Link>
        {" /"}
        <h1 className={`${inter.className} capitalize text-4xl`}>
          {id === "all" ? "All" : dataLoad ? id : "None"}
        </h1>
      </div>
      <div className="  space-x-3 py-3  flex flex-wrap">
        {category?.map((i: any, index: number) => (
          <TagName key={index} name={i} tag={tag} handleTag={handleTag} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
