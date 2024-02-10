import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Collections/Layout";
import useGetCollectionItems from "@/hooks/useGetCollectionItems";
import CollectionImg from "@/components/Collections/CollectionImg";
import { IM_Fell_French_Canon_SC } from "next/font/google";
import Link from "next/link";
import filter from "@/public/filters.svg";
import Image from "next/image";
import { atom, useAtom } from "jotai";

const inter = IM_Fell_French_Canon_SC({ subsets: ["latin"], weight: "400" });
export const filter1 = atom(false);

function Collection() {
  const router = useRouter();
  const { id } = router.query;
  const [category, setCategory] = useState<string>();
  const { data, mutate, isLoading } = useGetCollectionItems(category as string);
  const [images, setImg] = useState<Array<Object>>();
  const [filterImg, setFilterImg] = useAtom(filter1);

  useEffect(() => {
    if (id) {
      setCategory(id as string);
    }
  }, [id]);

  useEffect(() => {
    setImg(data);
  }, [data]);
  // console.log(images);
  return (
    <>
      <Layout>
        <div className="my-16 flex flex-col gap-3">
          <div className="  flex px-5 lg:hidden justify-between items-center">
            <div className=" w-full">
              <Link
                className="hover:underline text-[12px] font-semibold"
                href={"/"}
              >
                Home
              </Link>
              {" /"}
              <h1
                className={`${inter.className} capitalize md:text-4xl text-[22px] sm:text-3xl`}
              >
                {id === "all" ? "Select" : id}
              </h1>
            </div>
            <div
              className="flex items-center gap-2 border-2 rounded-full px-2 py-1"
              onClick={() => setFilterImg(!filterImg)}
            >
              <h1 className="text-[14px] font-medium">FILTERS</h1>
              <div className=" relative w-[30px] flex items-center h-[30px]">
                <Image alt="filter" src={filter} />
              </div>
            </div>
          </div>
          <div className="grid  lg:grid-cols-3 grid-cols-2 px-3 lg:gap-3 gap-10">
            {images?.map((img: any, index: number) => (
              <CollectionImg key={index} img={img} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Collection;
