"use client";

import * as React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { buttonVariants } from "@/components/ui/button";
import MobileMenu from "./MobileSidebar";
import { ModeToggle } from "../ToggleMode";

export interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#pricing",
    label: "Pricing",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export default function Navbar() {
  return (
    <header className="fixed border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <Link href="/" passHref className="ml-2 font-bold text-xl flex">
              <Home size={24} className="text-primary" />
              <div className="ml-2 font-bold text-xl text-primary flex">
                Name
              </div>
            </Link>
          </NavigationMenuItem>
          {/* mobile menu */}
          <MobileMenu routes={routeList} />
          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route) => (
              <NavigationMenuItem key={route.label}>
                <Link
                  href={route.href}
                  passHref
                  className={`text-[14px] ${buttonVariants({
                    variant: "ghost",
                  })}`}
                >
                  {route.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </nav>
          {/* mode toggle */}
          <div className="hidden md:flex gap-2">
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
