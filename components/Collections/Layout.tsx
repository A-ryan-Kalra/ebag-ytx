import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import { atom, useAtom } from "jotai";
import { filter1 } from "@/pages/collections/[id]";
import Filter from "./Filter";

function Layout({ children }: { children: ReactNode }) {
  const [filterImg, setFilterImg] = useAtom(filter1);

  return (
    <div className="grid grid-cols-4 min-h-screen  relative">
      {filterImg && <Filter />}
      <div className="lg:grid  col-span-1 hidden">
        <div className="sticky h-fit  top-1">
          <Sidebar />
        </div>
      </div>
      <div className="grid col-span-4 lg:col-span-3">{children}</div>
    </div>
  );
}

export default Layout;
