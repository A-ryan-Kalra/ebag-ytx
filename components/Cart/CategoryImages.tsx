import Image from "next/image";
import React, { useCallback } from "react";
import { Piazzolla } from "next/font/google";
import axios from "axios";
import { useRouter } from "next/router";

const inter = Piazzolla({ subsets: ["latin"], weight: "600" });

interface CategoryImages {
  name?: string;
  image?: string;
  category?: string;
}

function CategoryImages({ category, name, image }: CategoryImages) {
  const router = useRouter();

  const handler = useCallback(() => {
    router.push(`/products/${category}/${name}`);
  }, [router, category, name]);

  return (
    <div
      className="border-2  shadow-lg rounded-xl flex flex-col justify-between overflow-hidden"
      onClick={handler}
    >
      <div className="md:h-[400px] h-[300px] hover:scale-105 duration-300 transition  ease-in-out overflow-hidden md:w-[400px] w-[350px] relative">
        <Image src={image!} className="object-cover" fill alt="img" />
      </div>
      <div className="border-t-2 my-3  h-full">
        <h1
          className={`text-center font-semibold text-[18px] capitalize ${inter.className}`}
        >
          {name}
        </h1>
      </div>
    </div>
  );
}

export default CategoryImages;
