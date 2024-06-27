import React from "react";
import { UserHeroCard } from "./_components/UserHeroCard";
import RequestsCard from "./_components/RequestsCard";
import Navbar from "./_components/Navbar";

const UserPage = () => {
  return (
    <div>
      <div className="top-0 w-full h-[215px] text-white rounded-b-[20px] bg-blue-950 flex items-center justify-center">
        <Navbar />
      </div>
      <div className="container max-w-screen-md">
        <div className="relative z-40 -mt-16 flex items-center justify-center">
          <UserHeroCard />
        </div>
        <span className="text-muted-foreground">SERVICE REQUESTS</span>
        <div className="flex items-center justify-center">
          <RequestsCard />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
