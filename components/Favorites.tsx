import React, { useState } from "react";
import CategoryName from "./CategoryName";
import CategoryImages from "./CategoryImages";
import { FavoritesData } from "@/constants/data";

function Favorites() {
  const [fav, setFav] = useState(FavoritesData);
  const [selected, setSelected] = useState("FOR WOMEN");
  //   console.log(fav);

  function selectedFun(select: string) {
    setSelected(select);
  }
  return (
    <div className="my-10 w-full">
      <div className="text-4xl text-center font-semibold">Our Favorites</div>
      <div className="w-[85vw]  my-10 mx-auto">
        <div className="flex flex-col justify-between px-2 gap-3">
          <div className="flex items-center  justify-center gap-3 w-full border-b-2 border-b-gray-300">
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
              className="flex gap-3 justify-between items-center "
            >
              {item.name === selected &&
                item.images.map((ite, index) => (
                  <CategoryImages
                    key={index}
                    name={ite?.name}
                    image={ite?.images}
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
