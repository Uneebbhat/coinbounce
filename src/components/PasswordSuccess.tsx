"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import resetSuccessImage from "@/assets/password-reset.png";
import Image from "next/image";
import Link from "next/link";

const PasswordSuccess = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-screen">
      <Card className="w-[500px] max-w-full p-6 shadow-lg border rounded-md">
        <CardHeader className="text-center">
          <Image
            src={resetSuccessImage}
            alt="Password reset successful"
            className="mx-auto mb-4"
            width={100}
          />
          <CardTitle className="text-2xl font-bold mb-2">
            Password Reset Successfully
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 mb-6">
            Your password has been successfully reset. You can now log in with
            your new password.
          </p>
          <Link href="/login">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
              Go to Login
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default PasswordSuccess;
