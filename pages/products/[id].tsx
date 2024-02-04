import { useRouter } from "next/router";
import React from "react";

function Index() {
  const router = useRouter();
  console.log(router.query);
  return <div>Index</div>;
}

export default Index;
