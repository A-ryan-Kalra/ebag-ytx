import Products from "@/components/Products/Products";
import ProductsInformation from "@/components/Products/ProductsInformation";
import useGetProducts from "@/hooks/useGetProducts";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

interface ImagesProps {
  [key: string]: any;
}

function Index({ initialData }: ImagesProps) {
  // console.log(initialData);
  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState<{ [key: string]: any }>();
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
  // console.log(item);
  // console.log("item");

  return (
    <div className="min-h-screen  max-w-[1620px] mx-auto">
      {!isLoading ? (
        <div className="flex  lg:flex-row max-lg:gap-4 flex-col w-full py-12 px-3">
          <Products item={item?.images} name={item?.name} title={item?.title} />
          <ProductsInformation item={item} />
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
