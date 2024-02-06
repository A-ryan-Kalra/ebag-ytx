import React from "react";
import Link from "next/link";

function LinkTag({ name }: { name?: string }) {
  return (
    <Link
      className="capitalize max-lg:underline font-semibold text-[13px] hover:underline"
      href={"/"}
    >
      {name}
    </Link>
  );
}

export default LinkTag;
