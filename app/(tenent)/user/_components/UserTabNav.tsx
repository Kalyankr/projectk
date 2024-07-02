import React from "react";
import Sidebar from "./Sidebar";

interface UserTabNavProps {
  pageName: string;
}
const UserTabNav = ({ pageName }: UserTabNavProps) => {
  return (
    <div className="w-full bg-primary">
      <div className="container z-40 flex h-16 max-w-screen-md items-center justify-between border-b border-slate-500">
        <div></div>
        <div className="text-xl font-bold text-white">{pageName}</div>
        <Sidebar />
      </div>
    </div>
  );
};

export default UserTabNav;
