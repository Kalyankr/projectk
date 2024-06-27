"use client";

import { HomeIcon } from "lucide-react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    // <div className="top-0 w-full h-[215px] text-white rounded-b-[20px] bg-blue-950 flex items-center justify-center">
    <div className="container max-w-screen-md flex justify-between">
      <div></div>
      <div className="pl-12">
        <div className="flex flex-col items-center justify-between">
          <HomeIcon className="h-12 w-12" />
          <span className="font-bold text-white text-3xl mt-1">Project-K</span>
        </div>
      </div>
      <div className="flex items-center">
        {/* <Button size="icon" variant="outline" className="rounded-full">
              <Avatar>
                <AvatarImage
                  src="https://github.com/kalyankr.png"
                  alt="@kalyankr"
                />
                <AvatarFallback>KK</AvatarFallback>
              </Avatar>
            </Button> */}

        <Sidebar />
      </div>
    </div>
    // </div>
  );
};

export default Navbar;
