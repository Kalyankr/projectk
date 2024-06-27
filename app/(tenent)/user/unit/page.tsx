import React from "react";
import { UnitHero } from "./_components/UnitHero";
import UserTabNav from "../_components/UserTabNav";
import UnitCard from "./_components/Card";
import { GiAutoRepair } from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";
interface unitCardProps {
  title: string;
  icon: React.ReactNode;
}

const UnitCards: unitCardProps[] = [
  {
    title: "Service Requests",
    icon: <GiAutoRepair className="h-12 w-12" />,
  },
  {
    title: "Manage",
    icon: <TfiWrite className="h-12 w-12" />,
  },
];

const UnitPage = () => {
  const pageName = "My unit";
  return (
    <div>
      <UserTabNav pageName={pageName} />
      <div className="container max-w-screen-md flex flex-col justify-between">
        <UnitHero />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {UnitCards.map((card, index) => (
            <UnitCard key={index} title={card.title} icon={card.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnitPage;
