import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function PagePagination({
  category,
  hasNextPage,
  hasPrevPage,
  page,
  per_page,
}: {
  [key: string]: any;
}) {
  const router = useRouter();
  return (
    <div className="flex justify-center my-2 gap-6 items-center">
      <button
        disabled={!hasPrevPage}
        className="border-2 px-2 py-1 capitalize  disabled:border-2 disabled:active:scale-100 disabled:text-white shadow-md active:scale-75 duration-[0.4s] transition-all font-serif ease-in-out hover:bg-blue-200 hover:border-blue-500 rounded-md disabled:cursor-not-allowed disabled:bg-blue-600"
        onClick={() =>
          router.push(
            `/collections/${category}/?page=${Number(
              Number(page) - 1
            )}&per_page=${per_page}`
          )
        }
      >
        prev
      </button>
      <button
        disabled={!hasNextPage}
        className="border-2 px-2 py-1 capitalize disabled:border-2 disabled:active:scale-100 disabled:text-white hover:bg-blue-200 hover:border-blue-500 shadow-md active:scale-75 duration-[0.4s] transition-all font-serif ease-in-out rounded-md disabled:cursor-not-allowed disabled:bg-blue-600"
        onClick={() =>
          router.push(
            `/collections/${category}/?page=${Number(
              Number(page) + 1
            )}&per_page=${per_page}`
          )
        }
      >
        next
      </button>
    </div>
  );
}

export default PagePagination;
