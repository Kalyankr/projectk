"use client";

import { HomeIcon } from "lucide-react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div className="container flex max-w-screen-md justify-between">
      <div></div>
      <div className="pl-12">
        <div className="flex flex-col items-center justify-between">
          <HomeIcon className="h-12 w-12" />
          <span className="mt-1 text-3xl font-bold text-white">Project-K</span>
        </div>
      </div>
      <div className="flex items-center">
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;
