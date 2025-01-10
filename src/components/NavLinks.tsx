"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NavLinks = () => {
  const pathName = usePathname();

  const routes = [
    {
      label: "News",
      href: "/",
    },
    {
      label: "Blogs",
      href: "/blogs",
    },
    {
      label: "Coins Rates",
      href: "/coins-rates",
    },
  ];
  return (
    <>
      <nav>
        {routes.map((route) => (
          <Link href={route.href} key={route.label} className="mx-2">
            <Button
              variant={
                pathName === route.href ||
                (route.href === "/blogs" && pathName.startsWith("/blogs"))
                  ? "default"
                  : "ghost"
              }
            >
              {route.label}
            </Button>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default NavLinks;
