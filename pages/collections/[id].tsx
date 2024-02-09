import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Collections/Layout";
import useGetCollectionItems from "@/hooks/useGetCollectionItems";

function Collection() {
  const router = useRouter();
  const { id } = router.query;
  const [category, setCategory] = useState<string>();
  const { data, mutate, isLoading } = useGetCollectionItems(category as string);

  useEffect(() => {
    if (id) {
      setCategory(id as string);
    }
  }, [id]);

  console.log(data);
  return (
    <>
      <Layout>
        <div className="bg-black/10">
          <div className="">{id}</div>
        </div>
      </Layout>
    </>
  );
}

export default Collection;
