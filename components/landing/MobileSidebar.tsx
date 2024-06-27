import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { RouteProps } from "./Navbar";
import Link from "next/link";
import { ModeToggle } from "../ToggleMode";

interface MobileMenuProps {
  routes: RouteProps[];
}

const MobileMenu = ({ routes }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <span className="flex md:hidden">
      <ModeToggle />

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="px-2">
          <span className="sr-only">Menu Icon</span>
          <Menu
            className="flex md:hidden h-5 w-5"
            onClick={() => setIsOpen(true)}
          />
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="font-bold text-xl">PROJECT K</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col justify-center items-center gap-2 mt-4">
            {routes.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className={buttonVariants({ variant: "ghost" })}
              >
                {label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </span>
  );
};

export default MobileMenu;
