import React, { useState } from "react";
import CategoryName from "./CategoryName";
import CategoryImages from "./Cart/CategoryImages";
import { FavoritesData } from "@/constants/data";
import { Rozha_One } from "next/font/google";

const inter = Rozha_One({ subsets: ["latin"], weight: "400" });

function Favorites() {
  const [fav, setFav] = useState(FavoritesData);
  const [selected, setSelected] = useState("FOR WOMEN");
  //   console.log(fav);

  function selectedFun(select: string) {
    setSelected(select);
  }
  return (
    <div className="my-10 w-full">
      <div className={`text-4xl ${inter.className} text-center font-semibold`}>
        Our Favorites
      </div>
      <div className="xl:w-[1290px]  my-10 mx-auto">
        <div className="flex flex-col justify-between px-4 gap-3">
          <div className="flex  items-center  max-md:justify-start justify-center gap-3 max-w-full max-lg:overflow-x-auto border-b-2 border-b-gray-300">
            {fav.map((item: any, index: any) => (
              <CategoryName
                selected={selected}
                key={index}
                setSelected={selectedFun}
                name={item?.name}
              />
            ))}
          </div>
          {fav.map((item, index) => (
            <div
              key={index}
              className="flex flex-col xl:flex-row gap-3 justify-between items-center "
            >
              {item.name === selected &&
                item.images.map((ite, index) => (
                  <CategoryImages
                    key={index}
                    name={ite?.name}
                    image={ite?.images}
                    category={ite?.category}
                  />
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
