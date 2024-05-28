import React from "react";
import Link from "next/link";

function LinkTag({ name, categories }: { name?: string; categories?: string }) {
  return (
    <Link
      className="capitalize max-lg:underline font-semibold text-[13px] hover:underline"
      href={(categories as string) || "/"}
    >
      {name}
    </Link>
  );
}

export default LinkTag;
