import React, {
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import ProductsSideImage from "./ProductsSideImage";
import Image from "next/image";
import { Swiper as Swiper1 } from "swiper";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import LinkTag from "./LinkTag";
import { useRouter } from "next/router";

interface ItemProps {
  item?: Array<String>;
  name?: string;
  title?: string;
}

function Products({ item, name, title }: ItemProps) {
  const [selected, setSelected] = useState<SetStateAction<string>>("");
  const [img, setImg] = useState<any>([]);
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const { id } = router.query;
  const ref = useRef<Swiper1>();
  // console.log(item);
  useEffect(() => {
    if (id && id?.length > 0) {
      setCategory(id[0]);
      setProduct(id[1]);
    }
  }, [id]);

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
  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    ref.current?.slideTo(activeIndex);
  }, [activeIndex]);
  // console.log(category, "category");
  return (
    <div className="w-full  flex lg:items-start items-center justify-center lg:justify-start  flex-1">
      <div className="lg:flex hidden  justify-between gap-3 items-center px-7 flex-col">
        {img?.map((i: any, index: number) => (
          <ProductsSideImage
            key={index}
            index={index}
            name={i}
            select={activeIndex}
            selected={selectFun}
            onClicked={(index) => handleImageClick(index)}
          />
        ))}
      </div>

      <div className="w-full  max-lg:gap-3 max-lg:flex max-lg:flex-col ">
        <div className="w-full lg:hidden ">
          <LinkTag name="Home" categories={"/"} /> /
          <LinkTag name={category} categories={`/collections/${name}`} /> /{""}
          <LinkTag
            name={product}
            categories={`/products/${name}/${title}`}
          /> /{" "}
        </div>
        <div className=" border-2 shadow-lg w-[90vw] h-[95vw]   relative lg:w-[600px] lg:max-h-[600px] overflow-hidden">
          <div className=" overflow-hidden ">
            <Swiper
              slidesPerView={1}
              onBeforeInit={(swiper) => {
                ref.current = swiper;
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              centeredSlides={false}
              spaceBetween={30}
              navigation={true}
              pagination={{
                type: "bullets",

                el: "#containerForBullets",
                clickable: true,
              }}
              modules={[Navigation, Pagination]}
              className=" object-cover h-full w-full"
            >
              {img?.map((i: string, index: number) => (
                <SwiperSlide key={index} className="w-full h-full">
                  <img
                    alt="img"
                    loading="lazy"
                    className="object-cover  w-full h-full"
                    src={i || ""}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="w-full">
          <div
            className=" text-center lg:hidden space-x-2 cursor-pointer "
            id="containerForBullets"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Products;
