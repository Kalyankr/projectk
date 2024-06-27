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

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
            <SheetTitle className="flex items-center space-x-4 font-bold text-xl">
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
          <div className="flex flex-col mt-4 space-y-1">
            <Button variant="ghost">Account</Button>
            <Button variant="ghost">Privacy Policy</Button>
            <Button variant="ghost">Terms and Conditions</Button>
            <div className="flex justify-center  items-center">
              <ModeToggle /> <span className="pl-2">Toggle theme</span>
            </div>
            <Button variant="ghost">Logout</Button>
          </div>
        </SheetContent>
      </Sheet>
    </span>
  );
};

export default Sidebar;
