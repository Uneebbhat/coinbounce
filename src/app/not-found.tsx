import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 p-5">
        <Image src={logo} alt="Logo" className="mb-8" />
        <h1 className="text-4xl font-bold text-gray-800">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 mt-4 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
