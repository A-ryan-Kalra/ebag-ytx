import Image from "next/image";
import React, {
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import NavCategories from "./NavCategories";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import NavbarUpper from "./NavbarUpper";
import { Concert_One, Geologica } from "next/font/google";
import { atom, useAtom } from "jotai";
import { HamBurgerHandler } from "@/constants/data";
import { Icon } from "@iconify/react";
import useLoginModal from "@/hooks/useLoginModal";
import { flagCart } from "../Products/ProductsInformation";
import useGetCart from "@/hooks/useGetCarts";
import Profile from "./Profile";

const inter = Concert_One({ subsets: ["latin"], weight: "400" });
const merei = Geologica({ subsets: ["latin"], weight: "400" });
export const cart = atom(false);
export const animat = atom(false);

function Navigation() {
  const [animate, setAnimate] = useAtom(animat);
  const { data: session } = useSession();
  const [state, setState] = useState<boolean>(false);
  const [ham, setHam] = useAtom(HamBurgerHandler);
  const login = useLoginModal();
  const [isCartOpened, setIsCartOpened] = useAtom(cart);
  const [cartq, setCartQ] = useAtom(flagCart);
  const [cartq1, setCartQ1] = useState(0);
  const [cartItems, setCartItems] = useState<Array<Object>>();
  const {
    data: orderedCarts,
    mutate: cartItemMutate,
    isValidating,
  } = useGetCart();
  const [updatedCart, setUpdatedCart] = useState(0);

  const [cartQuant, setCartQuant] = useState<number>(() => {
    try {
      return Number(localStorage.getItem("cart") || "0");
    } catch (error) {
      console.error("Error accessing localStorage:", error);
      return 0;
    }
  });

  useEffect(() => {
    if (!isValidating) {
      let updatedCar = 0;
      updatedCar = updatedCart;
      const timer = setTimeout(() => {
        if (updatedCar > 0) {
          if (updatedCar !== cartQuant) {
            setCartQ(updatedCar);
            localStorage.setItem("cart", updatedCar as unknown as string);
          }
        } else {
          setCartQ(updatedCar);
          localStorage.setItem("cart", updatedCar as unknown as string);
        }
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [cartQuant, updatedCart, isValidating]);

  useEffect(() => {
    // setCartQuant(cartQuant1);
    const timer = setTimeout(() => {
      const cartQuant1 = Number(localStorage.getItem("cart"));
      if (cartQuant1 !== 0) {
        setCartQ(cartQuant1);
      } else {
        setCartQ(cartq1);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [cartQuant, cartq1]);

  useEffect(() => {
    setCartQ1(0);
    cartItems?.forEach((i: any) => setCartQ1((prev) => prev + i.quantity));
    let updatedCar = 0;
    cartItems?.forEach((i: any) => (updatedCar += i?.quantity));
    setUpdatedCart(updatedCar);
    // localStorage.setItem("cart", cartq.toString());
  }, [cartItems]);

  useEffect(() => {
    setCartItems(orderedCarts);
  }, [orderedCarts]);
  // console.log(session);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setState(true);
      } else {
        setState(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [state]);

  const handle = () => {
    if (ham) {
      setAnimate(false);
      const timer = setTimeout(() => {
        setHam(!ham);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setHam(!ham);
    }
  };
  const refe = useRef<HTMLInputElement>(null);

  const signOutHandle = useCallback(
    (e: any) => {
      e.stopPropagation();
      localStorage.removeItem("cart");

      signOut();
    },
    [signOut]
  );

  // console.log(cartq);
  return (
    <nav
      className={`${
        state ? "-translate-y-12 md:-translate-y-9 " : ""
      }  z-[100] flex flex-col border-2  sticky top-0 bg-white duration-300  `}
    >
      <NavbarUpper />
      <div className="w-full flex  justify-between items-center  py-1 px-4 lg:px-14">
        <div className={`${merei.className} hidden lg:flex gap-5`}>
          <div className="flex gap-9">
            <NavCategories category="MEN" />
            <NavCategories category="WOMEN" />
            <NavCategories category="ELECTRONICS" />
          </div>
        </div>
        <button
          onClick={handle}
          className="flex flex-col lg:hidden duration-200 z-[100] justify-center items-center"
        >
          <span
            className={`bg-black duration-200 transition-all block h-0.5 w-6 rounded-sm  ${
              ham ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-black  duration-200 transition-all my-0.5  block h-0.5 w-6 rounded-sm ${
              ham ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-black duration-200 transition-all  block h-0.5 w-6 rounded-sm  ${
              ham ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
        <Link href={"/"} className="flex  items-end ">
          <div className="">
            <Image
              alt="logo"
              src={"/ebag.webp"}
              width={35}
              height={35}
              className="object-contain"
            />
          </div>
          <h1 className={`${inter.className} text-[20px]`}>Ebag</h1>
        </Link>
        <div className="gap-12 relative hidden lg:flex   ">
          <NavCategories category="FURNITURE" />
          <Link href={"/search"} className="">
            <NavCategories icon1="iconamoon:search" switchs />
          </Link>
          <div className=" flex items-center">
            {session ? (
              <Profile signOutHandle={signOutHandle} session={session} />
            ) : (
              <div onClick={login.loginOpen} className="cursor-pointer">
                <NavCategories icon1="iconamoon:profile-circle-fill" switchs />
              </div>
            )}
          </div>

          <div className=" " onClick={() => setIsCartOpened(!isCartOpened)}>
            <NavCategories cartq={cartq} icon1="solar:cart-5-linear" switchs />
          </div>
        </div>
        <div
          className="cursor-pointer duration-150 transition ease-in-out inline-block lg:hidden rounded-full"
          onClick={() => setIsCartOpened(!isCartOpened)}
        >
          <Icon
            icon={"solar:cart-5-linear"}
            className="text-black  inline hover:text-[#2a8085]"
            width={25}
          />

          <span className="text-center relative top-[2px] inline-block">
            {cartq}
          </span>
        </div>
      </div>
      <div className="px-3 lg:hidden my-2">
        <Link
          href={"/search"}
          className="rounded-full px-3 items-center bg-black/10 flex"
        >
          <div
            className="flex items-center"
            onClick={(e) => refe.current?.focus()}
          >
            <Icon
              icon={"iconamoon:search"}
              className="text-black bg-transparent inline hover:text-[#2a8085]"
              width={15}
            />
          </div>
          <h1
            ref={refe}
            className="rounded-full text-[14px] outline-none w-full font-semibold px-3 bg-transparent  "
          >
            Find products...
          </h1>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
