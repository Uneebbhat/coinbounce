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
import emailSent from "@/assets/email-sent.png";
import Image from "next/image";
import Link from "next/link";

const EmailSuccess = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center min-h-screen">
        <Card className="w-[500px] max-w-full p-6 shadow-lg border rounded-md">
          <CardHeader className="text-center">
            <Image
              src={emailSent}
              alt="Password reset email sent"
              className="mx-auto mb-4"
              width={100}
            />
            <CardTitle className="text-2xl font-bold mb-2">
              Email Sent Successfully
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-6">
              We’ve sent a password reset link to your email address. Please
              check your inbox and follow the instructions to reset your
              password.
            </p>
            <Link href="/login">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                Go back to Login
              </Button>
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              Didn’t receive the email?{" "}
              <span className="text-blue-600 underline cursor-pointer">
                Resend
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default EmailSuccess;
