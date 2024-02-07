import React, { ReactNode, useEffect } from "react";
import Navigation, { cart } from "./Navbar/Navigation";
import Form from "./Modal";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import Footer from "./Footer";
import { useAtom } from "jotai";
import { HamBurgerHandler } from "@/constants/data";
import MobileNavBar from "./MobileNavBar";
import Cart from "./Cart";
import { hideScrollbar, showScrollbar } from "./hidescrollbar";

function Layout({ children }: { children: ReactNode }) {
  const [gloglaNav, setGlobalNav] = useAtom(HamBurgerHandler);
  const [isCartOpened, setIsCartOpened] = useAtom(cart);

  useEffect(() => {
    if (isCartOpened) {
      hideScrollbar();
    } else {
      showScrollbar();
    }
  }, [isCartOpened]);
  return (
    <div className={``}>
      <LoginModal />
      <RegisterModal />
      <Navigation />
      {gloglaNav && <MobileNavBar />}
      {isCartOpened && <Cart />}
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
