"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { MdOutlinePayments, MdPayments } from "react-icons/md";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { MdOutlineMessage, MdMessage } from "react-icons/md";
import { usePathname, useRouter, useParams } from "next/navigation";

interface RouteProps {
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  label: string;
  link: string;
}

const bottomNavList: RouteProps[] = [
  {
    icon: <AiOutlineHome className="h-8 w-8" />,
    activeIcon: <AiFillHome className="h-8 w-8 text-primary" />,
    label: "Home",
    link: "/user",
  },
  {
    icon: <MdOutlinePayments className="h-8 w-8" />,
    activeIcon: <MdPayments className="h-8 w-8 text-primary" />,
    label: "Pay",
    link: "/user/pay",
  },
  {
    icon: <FaRegStar className="h-8 w-8" />,
    activeIcon: <FaStar className="h-8 w-8 text-primary" />,
    label: "Unit",
    link: "/user/unit",
  },
  {
    icon: <MdOutlineMessage className="h-8 w-8" />,
    activeIcon: <MdMessage className="h-8 w-8 text-primary" />,
    label: "Contact",
    link: "/user/contact",
  },
];

const BottomMenu = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="fixed bottom-0 left-0 z-50 h-16 w-full border-t border-gray-100 bg-white dark:border-gray-600 dark:bg-primary-foreground">
      <div className="container grid max-w-screen-md grid-cols-4 place-items-center">
        {bottomNavList.map((route, index) => {
          return (
            <Button
              key={index}
              className="flex h-16 w-16 flex-col items-center justify-center"
              variant="ghost"
              onClick={() => router.push(route.link)}
            >
              {route.link === pathname ? route.activeIcon : route.icon}
              <span className="mt-1">{route.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomMenu;
