import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-4 min-h-screen  ">
      <div className="lg:grid col-span-1 hidden">
        <Sidebar />
      </div>
      <div className="grid col-span-4 lg:col-span-3">{children}</div>
    </div>
  );
}

export default Layout;
