import React, { SetStateAction, useCallback, useEffect, useState } from "react";
import ProductsSideImage from "./ProductsSideImage";
import Image from "next/image";

interface ItemProps {
  item?: Array<String>;
}

function Products({ item }: ItemProps) {
  const [selected, setSelected] = useState<SetStateAction<string>>("");
  const [img, setImg] = useState<any>([]);

  useEffect(() => {
    setImg(item);

    if (img?.length! > 0) {
      setSelected(img[0]);
    } else {
      setSelected("");
    }
  }, [item, img]);

  const selectFun = useCallback(
    (kl?: string) => {
      setSelected(kl as string);
    },
    [item]
  );

  return (
    <div className="  flex items-start justify-start flex-1">
      <div className="flex justify-between gap-3 items-center px-10 flex-col">
        {item?.map((i: any, index: number) => (
          <ProductsSideImage
            key={index}
            name={i}
            select={selected as string}
            selected={selectFun}
          />
        ))}
      </div>
      <div className="w-full border-2 shadow-md">
        <div className="w-[600px] overflow-hidden  relative h-[600px]">
          <img
            alt="img"
            loading="lazy"
            className="object-cover w-full h-full"
            src={(selected as string) || ""}
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
