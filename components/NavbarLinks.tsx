"use client";

import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarLinks = () => {
  const pathName = usePathname();

  return (
    <div className="hidden md:flex justify-center items-center col-span-6 gap-2">
      {navLinks.map((link) => {
        const isActive =
          pathName === link.route || pathName.startsWith(`${link.route}/`);

        return (
          <Link
            href={link.route}
            key={link.label}
            className={cn("button", {
              "button-active": isActive,
            })}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default NavbarLinks;
