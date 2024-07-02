"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/ToggleMode";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Logout the user
  const logout = () => {
    signOut();
  };
  return (
    <span className="flex">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="px-2">
          <span className="sr-only">Menu Icon</span>
          <Avatar>
            <AvatarImage
              src="https://github.com/kalyankr.png"
              alt="@kalyankr"
            />
            <AvatarFallback>KK</AvatarFallback>
          </Avatar>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="space-y-4">
            <SheetTitle className="flex items-center space-x-4 text-xl font-bold">
              <Avatar>
                <AvatarImage
                  src="https://github.com/kalyankr.png"
                  alt="@kalyankr"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>Project-K</span>
            </SheetTitle>
            <SheetDescription className="text-bold">
              Apartment Project-K, 1234
            </SheetDescription>
            <Separator />
          </SheetHeader>
          <div className="mt-4 flex flex-col space-y-1">
            <Button variant="ghost">Account</Button>
            <Button variant="ghost">Privacy Policy</Button>
            <Button variant="ghost">Terms and Conditions</Button>
            <div className="flex items-center justify-center">
              <ModeToggle /> <span className="pl-2">Toggle theme</span>
            </div>
            <Button variant="ghost" onClick={logout}>
              Logout
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </span>
  );
};

export default Sidebar;
