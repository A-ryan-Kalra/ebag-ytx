import React, { ReactNode } from "react";
import Navigation from "./Navigation";
import Form from "./Modal";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className=" ">
      <LoginModal />
      <RegisterModal />
      <Navigation />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
