import React, { ReactNode } from "react";
import Navigation from "./Navbar/Navigation";
import Form from "./Modal";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import Footer from "./Footer";
import { useAtom } from "jotai";
import { HamBurgerHandler } from "@/constants/data";
import MobileNavBar from "./MobileNavBar";

function Layout({ children }: { children: ReactNode }) {
  const [gloglaNav, setGlobalNav] = useAtom(HamBurgerHandler);

  return (
    <div className=" ">
      <LoginModal />
      <RegisterModal />
      <Navigation />
      {gloglaNav && <MobileNavBar />}

      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
