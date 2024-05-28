import Products from "@/components/Products/Products";
import ProductsInformation from "@/components/Products/ProductsInformation";
import useGetProducts from "@/hooks/useGetProducts";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import ScaleLoader from "react-spinners/ScaleLoader";

interface ImagesProps {
  [key: string]: any;
}

function Index({ initialData }: ImagesProps) {
  // console.log(initialData);
  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState<{ [key: string]: any }>({});
  const { data, error, isLoading, mutate, isValidating } = useGetProducts(
    id?.[0] as string,
    id?.[1] as string
  );
  // console.log(isLoading, "isLoading");
  // console.log(isValidating, "isValidating");
  // console.log(error, "error");
  useEffect(() => {
    data?.map((iK: any) =>
      iK?.product?.map((i: any) => setItem({ ...i, name: iK?.name }))
    );
  }, [data]);

  // let selected = dress?.filter((produc) => {
  //   return produc?.product.some((item) =>
  //     item?.title.includes("frock gold printed")
  //   );
  // });
  // console.log(Object?.keys(item).length);
  // console.log(item);
  // console.log("item");

  return (
    <div className="min-h-screen  max-w-[1620px] mx-auto">
      {!isLoading && Object?.keys(item).length !== 0 ? (
        <div className="flex  lg:flex-row max-lg:gap-4 flex-col w-full py-12 px-3">
          <Products item={item?.images} name={item?.name} title={item?.title} />
          <ProductsInformation item={item} />
        </div>
      ) : Object?.keys(item).length === 0 && !isLoading ? (
        <div className="min-h-[50vh] px-10 gap-3 justify-center flex flex-col items-center relative ">
          <h1 className="text-3xl font-semibold">
            Uh-Oh, Nothing To See Here!
          </h1>
          <h1 className="font-mono">
            The page you requested doesn&apos;t exist. Please try a different
            direction.
          </h1>
          <div className="my-10">
            <HashLoader size={60} color="#36d7b7" />
          </div>
        </div>
      ) : (
        <div className="flex  justify-center items-center relative min-h-[80vh]">
          <ScaleLoader
            height={40}
            width={7}
            radius={2}
            margin={2}
            color="#36d7b7"
            speedMultiplier={2}
            className="max-lg:translate-y-[-25%]  mx-auto relative max-lg:bottom-[25%] "
          />
        </div>
      )}
    </div>
  );
}

export default Index;

// export const getServerSideProps: GetServerSideProps = async (Context) => {
//   const id = Context?.params?.id;
//   console.log("Context.params");
//   console.log(id?.[0]);
//   console.log("Context.params");
//   // const { data, error, isLoading, mutate } = useGetProducts(
//   //   id?.[0] as string,
//   //   id?.[1] as string
//   // );
//   const response = await axios.get(
//     `http://localhost:3000/api/products/${id?.[0]}/${id?.[1]}`
//   ); // Replace with your API route URL
//   const initialData = response.data;
//   console.log(initialData);
//   return {
//     props: {
//       initialData,
//     },
//   };
// };
