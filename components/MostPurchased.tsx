import React, { useRef, useState } from "react";
import Image from "next/image";
import { FavImages } from "@/constants/data";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper as Swiper1 } from "swiper";

import { Rozha_One, Piazzolla } from "next/font/google";
import Link from "next/link";

const inter = Rozha_One({ subsets: ["latin"], weight: "400" });
const inter1 = Piazzolla({ subsets: ["latin"], weight: "600" });

function MostPurchased() {
  const [image, setImg] = useState(FavImages);

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  // const swiperRef = useRef<Swiper1>();
  return (
    <div className="flex flex-col my-10 items-end justify-end">
      <div className=" h-[500px]  relative">
        <h1
          className={`w-full  max-sm:text-center text-4xl ${inter.className} my-5`}
        >
          Most Sold Products
        </h1>
        {/* <div id="containerForBullets"></div> */}
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={false}
          spaceBetween={30}
          // pagination={{
          //   type: "bullets",
          //   bulletClass: "swiper-custom-bullet",
          //   bulletActiveClass: "swiper-custom-bullet-active",
          //   el: "#containerForBullets",
          //   clickable: true,
          //   renderBullet: function (index, className) {
          //     return (
          //       '<span class="' + className + '">' + (index + 1) + "</span>"
          //     );
          //   },
          // }}
          navigation={true}
          modules={[Navigation]}
          className="xl:left-auto relative w-[95vw]  "
          // onBeforeInit={(swiper) => {
          //   swiperRef.current = swiper;
          // }}
        >
          {image.map((item, index) => (
            <div key={index} className="">
              <SwiperSlide
                key={index}
                className="border-2 rounded-xl overflow-hidden max-w-fit   shadow-lg"
              >
                <Link
                  href={`/products/${item?.category}/${item?.name}`}
                  className=" "
                >
                  <div className="xl:h-[350px] hover:scale-105 duration-500 w-[300px] h-[300px] xl:w-[350px]  ">
                    <Image
                      src={item?.img!}
                      width={350}
                      height={350}
                      alt="img"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </Link>
                <div
                  className={`${inter1.className} px-3 flex flex-col gap-3 my-3`}
                >
                  {/* <div onClick={() => swiperRef.current?.slideNext()}>
                    slide
                  </div> */}
                  <h1 className="text-xl capitalize">{item?.name}</h1>
                  <h1 className="text-xl capitalize">{item?.brand}</h1>
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
