import Image from "next/image";
import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function ImageSlider() {
  return (
    <div className="p-2 my-7">
      <div className="w-[95%] mx-auto shadow-xl transition duration-150 rounded-xl border-2 overflow-hidden h-[500px]">
        <Swiper
          cssMode={true}
          slidesPerView={1}
          // spaceBetween={30}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}
          mousewheel={true}
          keyboard={true}
          className="w-full flex overflow-hidden items-center h-full"
          modules={[Autoplay, Navigation, Pagination, Keyboard, Mousewheel]}
        >
          <SwiperSlide>
            <Image
              src={"/slidershow1.jpg"}
              fill
              className="object-contain z-[20] md:object-cover"
              alt="imageSlider"
            />
            <div className="">
              <Image
                src={"/slidershow1.jpg"}
                fill
                className="object-cover md:hidden z-0"
                alt="img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/slidershow2.jpg"}
              fill
              className="object-contain z-[20] md:object-cover"
              alt="imageSlider"
            />
            <div className="">
              <Image
                src={"/slidershow2.jpg"}
                fill
                className="object-cover md:hidden z-0"
                alt="img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/slidershow3.jpg"}
              fill
              className="object-contain z-[20] md:object-cover"
              alt="imageSlider"
            />
            <div className="">
              <Image
                src={"/slidershow3.jpg"}
                fill
                className="object-cover md:hidden z-0"
                alt="img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/slidershow4.jpg"}
              fill
              className="object-contain z-[20] md:object-cover"
              alt="imageSlider"
            />
            <div className="">
              <Image
                src={"/slidershow4.jpg"}
                fill
                className="object-cover md:hidden z-0"
                alt="img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/slidershow5.jpg"}
              fill
              className="object-contain z-[20] md:object-cover"
              alt="imageSlider"
            />
            <div className="">
              <Image
                src={"/slidershow5.jpg"}
                fill
                className="object-cover md:hidden z-0"
                alt="img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/slidershow6.jpg"}
              fill
              className="object-contain z-[20] md:object-cover"
              alt="imageSlider"
            />
            <div className="">
              <Image
                src={"/slidershow6.jpg"}
                fill
                className="object-cover md:hidden z-0"
                alt="img"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ImageSlider;
