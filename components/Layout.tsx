import React, { ReactNode } from "react";
import Navigation from "./Navigation";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className=" ">
      <Navigation />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
