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
      {
        category: "women",
        name: "NIGHT SUIT".toLowerCase(),
        images: "/img/2.jpg",
      },
      {
        category: "women",
        name: "Chappals & Shoe Ladies Metallic".toLowerCase(),
        images: "/img/3.jpg",
      },
    ],
  },
  {
    name: "FOR MEN",
    images: [
      {
        category: "men",
        name: "Money Heist Printed Summer T Shirts".toLowerCase(),
        images: "/img/4.jpg",
      },
      {
        category: "men",
        name: "Pubg Printed Graphic T-Shirt".toLowerCase(),
        images: "/img/5.jpg",
      },
      {
        category: "men",
        name: "Spring and summershoes".toLowerCase(),
        images: "/img/6.jpg",
      },
    ],
  },
  {
    name: "FOR FURNITURE",
    images: [
      {
        category: "furniture",
        name: "Mornadi Velvet Bed".toLowerCase(),
        images: "/img/7.jpg",
      },
      {
        category: "furniture",
        name: "Sofa for Coffe Cafe".toLowerCase(),
        images: "/img/8.jpg",
      },
      {
        category: "furniture",
        name: "3 DOOR PORTABLE".toLowerCase(),
        images: "/img/9.jpg",
      },
    ],
  },
];

export const style = ` cursor-pointer group relative  before:bg-[#0e0d0d]  before:h-[2px] before:w-[100%]  before:left-0 before:bottom-0 w-fit before:rounded-full before:inset-x-0 before:absolute before:transform hover:before:origin-left before:origin-right  before:scale-x-0 before:transition before:duration-200 decoration-none no-underline hover:before:scale-x-100 dark:before:bg-black dark:text-black`;
export const style1 = ` cursor-pointer group relative  before:bg-[#0e0d0d]  before:h-[2px] before:w-[100%]  before:left-0 before:bottom-0 w-fit before:rounded-full before:inset-x-0 before:absolute before:transform hover:before:origin-left before:origin-right  before:scale-x-0 before:transition before:duration-200 decoration-none no-underline before:scale-x-100 dark:before:bg-black dark:text-black`;

export const FavImages = [
  {
    name: "frock gold printed".toLowerCase(),
    brand: "Ghazi Fabric".toLowerCase(),
    category: "women",
    img: "/img/1.jpg",
  },
  ,
  {
    name: "NIGHT SUIT".toLowerCase(),
    brand: "RED MICKY MOUSE..".toLowerCase(),
    category: "women",
    img: "/img/2.jpg",
  },
  ,
  {
    name: "Chappals & Shoe Ladies Metallic".toLowerCase(),
    brand: "Maasai Sandals".toLowerCase(),
    category: "women",
    img: "/img/3.jpg",
  },
  ,
  {
    name: "Money Heist Printed Summer T Shirts".toLowerCase(),
    brand: "The Warehouse".toLowerCase(),
    category: "men",
    img: "/img/4.jpg",
  },
  ,
  {
    name: "Pubg Printed Graphic T-Shirt".toLowerCase(),
    brand: "The Warehouse".toLowerCase(),
    category: "men",
    img: "/img/5.jpg",
  },
  ,
  {
    name: "Spring and summershoes".toLowerCase(),
    brand: "Sneakers".toLowerCase(),
    category: "men",
    img: "/img/6.jpg",
  },
  ,
  {
    name: "Mornadi Velvet Bed".toLowerCase(),
    brand: "Furniture Bed Set".toLowerCase(),
    category: "furniture",
    img: "/img/7.jpg",
  },
  ,
  {
    name: "Sofa for Coffe Cafe".toLowerCase(),
    brand: "Ratttan Outdoor".toLowerCase(),
    category: "furniture",
    img: "/img/8.jpg",
  },
  ,
  {
    name: "3 DOOR PORTABLE".toLowerCase(),
    brand: "AmnaMart".toLowerCase(),
    category: "furniture",
    img: "/img/9.jpg",
  },
];

export const HamBurgerHandler = atom(false);
