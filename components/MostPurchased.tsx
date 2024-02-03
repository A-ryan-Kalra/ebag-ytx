import React, { useRef, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { FavImages } from "@/constants/data";
import Image from "next/image";
import { Swiper as Swiper1 } from "swiper";
import { Rozha_One, Piazzolla } from "next/font/google";

const inter = Rozha_One({ subsets: ["latin"], weight: "400" });
const inter1 = Piazzolla({ subsets: ["latin"], weight: "600" });

function MostPurchased() {
  const [image, setImg] = useState(FavImages);
  // const swiperRef = useRef<Swiper1>();
  return (
    <div className="flex flex-col items-end justify-end">
      <div className=" h-[500px]  relative">
        <h1 className={`w-full text-4xl ${inter.className} my-5`}>
          Most Sold Products
        </h1>
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={false}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="left-auto  w-[1280px] "
          // onBeforeInit={(swiper) => {
          //   swiperRef.current = swiper;
          // }}
        >
          {image.map((item, index) => (
            <div key={index} className="">
              <SwiperSlide
                key={index}
                className="border-2 rounded-xl overflow-hidden max-w-fit shadow-lg"
              >
                <div className=" hover:scale-105 duration-500">
                  <div className="h-[350px] w-[350px]  ">
                    <Image
                      src={item?.img!}
                      width={350}
                      height={350}
                      alt="img"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div
                  className={`${inter1.className} px-3 flex flex-col gap-3 my-3`}
                >
                  {/* <div onClick={() => swiperRef.current?.slideNext()}>
                    slide
                  </div> */}
                  <h1 className="text-xl">{item?.name}</h1>
                  <h1 className="text-xl">{item?.brand}</h1>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MostPurchased;
