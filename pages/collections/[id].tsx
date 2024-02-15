import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import Layout from "../../components/Collections/Layout";
import useGetCollectionItems from "@/hooks/useGetCollectionItems";
import CollectionImg from "@/components/Collections/CollectionImg";
import { IM_Fell_French_Canon_SC } from "next/font/google";
import Link from "next/link";
import filter from "@/public/filters.svg";
import Image from "next/image";
import { atom, useAtom } from "jotai";
import { useSearchParams } from "next/navigation";
import PagePagination from "@/components/Collections/PagePagination";
import ScaleLoader from "react-spinners/ScaleLoader";

const inter = IM_Fell_French_Canon_SC({ subsets: ["latin"], weight: "400" });

export const filter1 = atom(false);

function Collection() {
  const router = useRouter();
  const { id } = router.query;
  const [category, setCategory] = useState<string>();
  const { data, mutate, isLoading } = useGetCollectionItems(category as string);
  const [images, setImg] = useState<Array<Object>>();
  const [filterImg, setFilterImg] = useAtom(filter1);
  const seacrh = useSearchParams();

  const page = seacrh.get("page") ?? "1";
  const per_page = seacrh.get("per_page") ?? "5";
  const start = Number(Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);
  // console.log(data?.length / 5);
  console.log(isLoading);
  useEffect(() => {
    if (id) {
      setCategory(id as string);
    }
  }, [id]);

  // useEffect(() => {
  //   setImg(data?.slice(start, end));
  // }, [data, start, end]);

  const memoizedData = useMemo(() => data, [category, data]);

  useMemo(() => {
    setImg(memoizedData?.slice(start, end));
  }, [memoizedData, category, start, end]);
  // useEffect(() => {
  //   setImg(images?.slice(start, end));
  // }, [page, per_page]);
  // console.log(start, "Start");
  // console.log(end, "End");
  // console.log(data?.slice(start, end));
  // console.log(seacrh.get("page"));

  return (
    <>
      <Layout>
        {!isLoading ? (
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
                  {id === "all" ? "all" : id}
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
            <PagePagination
              category={category}
              page={page}
              per_page={per_page}
              hasNextPage={end < data?.length}
              hasPrevPage={start > 0}
            />
          </div>
        ) : (
          <div className="min-h-[80vh] flex items-center relative  ">
            <ScaleLoader
              height={40}
              width={7}
              radius={2}
              margin={2}
              color="#36d7b7"
              speedMultiplier={2}
              className="max-lg:translate-y-[65%] bottom-[15%] mx-auto relative max-lg:bottom-[15%] "
            />
          </div>
        )}
      </Layout>
    </>
  );
}

export default Collection;
