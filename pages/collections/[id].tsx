import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Collections/Layout";
import useGetCollectionItems from "@/hooks/useGetCollectionItems";
import CollectionImg from "@/components/Collections/CollectionImg";

function Collection() {
  const router = useRouter();
  const { id } = router.query;
  const [category, setCategory] = useState<string>();
  const { data, mutate, isLoading } = useGetCollectionItems(category as string);
  const [images, setImg] = useState<Array<Object>>();

  useEffect(() => {
    if (id) {
      setCategory(id as string);
    }
  }, [id]);

  useEffect(() => {
    setImg(data);
  }, [data]);

  return (
    <>
      <Layout>
        <div className="my-16">
          <div className="grid grid-cols-3  px-3 gap-3">
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
