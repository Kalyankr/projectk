import React from "react";
import Sidebar from "./Sidebar";

interface UserTabNavProps {
  pageName: string;
}
const UserTabNav = ({ pageName }: UserTabNavProps) => {
  return (
    <div className="w-full bg-primary">
      <div className="container z-40 h-16 max-w-screen-md flex items-center justify-between border-b border-slate-500">
        <div></div>
        <div className="text-xl font-bold">{pageName}</div>
        <Sidebar />
      </div>
    </div>
  );
};

export default UserTabNav;
