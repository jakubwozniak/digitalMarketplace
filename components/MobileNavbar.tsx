"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const MobileNavbar = () => {
  const pathName = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="w-4 h-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link href="/" className="flex items-center gap-1">
            <p className="text-2xl font-semibold text-black">Marketplace</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-auto">
            <SheetClose asChild>
              <section className="flex flex-col h-full flex-full gap-6 pt-16 text-white">
                {navLinks.map((link) => {
                  const isActive = pathName === link.route;
                  return (
                    <SheetClose asChild key={link.label}>
                      <Link
                        href={link.route}
                        className={cn("button justify-start p-0", {
                          "button-transparent-active": isActive,
                        })}
                      >
                        <p className="font-semibold text-xl">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNavbar;
