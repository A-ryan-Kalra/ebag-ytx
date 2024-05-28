import React, { ReactNode, useEffect, useState } from "react";
import Navigation, { cart } from "./Navbar/Navigation";
import Form from "./Modal";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import Footer from "./Footer";
import { useAtom } from "jotai";
import { HamBurgerHandler } from "@/constants/data";
import MobileNavBar from "./Navbar/MobileNavBar";
import Cart from "./Cart/Cart";
import { hideScrollbar, showScrollbar } from "../constants/hidescrollbar";
import PWAModal from "./PWAModal";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Tooltip } from "@nextui-org/react";

function Layout({ children }: { children: ReactNode }) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<any>(null);
  const [gloglaNav, setGlobalNav] = useAtom(HamBurgerHandler);
  const [isCartOpened, setIsCartOpened] = useAtom(cart);
  const [pwa, setPwa] = useState(false);
  const handleCLoseModal = () => {
    showScrollbar();
    setPwa(false);
    // setShowModal(false);
  };

  const handleInstall = () => {
    if (prompt) {
      prompt.prompt();

      prompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          console.log("Accepted");
          showScrollbar();
          setShowModal(false);
          setPwa(false);
        } else {
          console.log("Cancelled");
          setShowModal(false);
          setPwa(false);
          showScrollbar();
        }
        setPrompt(null);
        setShowModal(false);
      });
    }
  };
  const showPwa = () => {
    hideScrollbar();
    setPwa(true);
  };

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: any) => {
      event.preventDefault();
      setPrompt(event);
      if (!window.matchMedia("display-mode: standalone").matches) {
        setShowModal(true);
      }
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () =>
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
  }, []);
  // console.log(prompt);
  useEffect(() => {
    if (isCartOpened) {
      hideScrollbar();
    } else {
      showScrollbar();
    }
  }, [isCartOpened]);
  return (
    <div className={`relative`}>
      {showModal && (
        <Tooltip
          showArrow={true}
          content="Install App"
          color="primary"
          className="bg-blue-500 rounded-full text-white p-2"
        >
          <div
            onClick={showPwa}
            className="fixed bottom-20 cursor-pointer hover:shadow-slate-500 shadow-md duration-300 ease-in-out z-[100] bg-slate-400 py-3 px-3 right-10 rounded-full"
          >
            <Icon
              icon="tdesign:device"
              width={30}
              height={30}
              className="text-white "
            />
          </div>
        </Tooltip>
      )}
      {pwa && (
        <PWAModal
          onClose={handleCLoseModal}
          onInstall={handleInstall}
          show={showModal}
        />
      )}
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
