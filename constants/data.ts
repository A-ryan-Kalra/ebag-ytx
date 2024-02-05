import { atom } from "jotai";

export const navbarUp = [
  "50% off on all Universal wears",
  "Free Shipping On Orders Over ₹5000. Free returns.",
  "Introducing wide range of products in upcomming updates",
];

export const FavoritesData = [
  {
    name: "FOR WOMEN",
    images: [
      { category: "women", name: "frock gold printed", images: "/img/1.jpg" },
      { category: "women", name: "NIGHT SUIT", images: "/img/2.jpg" },
      {
        category: "women",
        name: "Chappals & Shoe Ladies Metallic",
        images: "/img/3.jpg",
      },
    ],
  },
  {
    name: "FOR MEN",
    images: [
      {
        category: "men",
        name: "Money Heist Printed Summer T Shirts",
        images: "/img/4.jpg",
      },
      {
        category: "men",
        name: "Pubg Printed Graphic T-Shirt",
        images: "/img/5.jpg",
      },
      { category: "men", name: "Spring and summershoes", images: "/img/6.jpg" },
    ],
  },
  {
    name: "FOR FURNITURE",
    images: [
      {
        category: "furniture",
        name: "Mornadi Velvet Bed",
        images: "/img/7.jpg",
      },
      {
        category: "furniture",
        name: "Sofa for Coffe Cafe",
        images: "/img/8.jpg",
      },
      { category: "furniture", name: "3 DOOR PORTABLE", images: "/img/9.jpg" },
    ],
  },
];

export const style = ` cursor-pointer group relative  before:bg-[#0e0d0d]  before:h-[2px] before:w-[100%]  before:left-0 before:bottom-0 w-fit before:rounded-full before:inset-x-0 before:absolute before:transform hover:before:origin-left before:origin-right  before:scale-x-0 before:transition before:duration-200 decoration-none no-underline hover:before:scale-x-100 dark:before:bg-black dark:text-black`;
export const style1 = ` cursor-pointer group relative  before:bg-[#0e0d0d]  before:h-[2px] before:w-[100%]  before:left-0 before:bottom-0 w-fit before:rounded-full before:inset-x-0 before:absolute before:transform hover:before:origin-left before:origin-right  before:scale-x-0 before:transition before:duration-200 decoration-none no-underline before:scale-x-100 dark:before:bg-black dark:text-black`;

export const FavImages = [
  {
    name: "name1",
    brand: "brand",
    img: "/img/1.jpg",
  },
  ,
  {
    name: "name1",
    brand: "brand",
    img: "/img/2.jpg",
  },
  ,
  {
    name: "name1",
    brand: "brand",
    img: "/img/3.jpg",
  },
  ,
  {
    name: "name1",
    brand: "brand",
    img: "/img/4.jpg",
  },
  ,
  {
    name: "name1",
    brand: "brand",
    img: "/img/5.jpg",
  },
  ,
  {
    name: "name1",
    brand: "brand",
    img: "/img/6.jpg",
  },
  ,
  {
    name: "name1",
    brand: "brand",
    img: "/img/7.jpg",
  },
  ,
  {
    name: "name1",
    brand: "brand",
    img: "/img/8.jpg",
  },
  ,
  {
    name: "name1",
    brand: "brand",
    img: "/img/9.jpg",
  },
];

export const HamBurgerHandler = atom(false);
