"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/spinner";
import useForgotPassword from "@/hooks/useForgotPassword";
import EmailSuccess from "@/components/EmailSuccess";

const ForgotPasswordForm = () => {
  const { email, loading, sendEmail, error, handleInputChange, handleSubmit } =
    useForgotPassword();

  if (sendEmail) {
    return <EmailSuccess />;
  }
  return (
    <>
      <Card className="w-[600px] max-w-full mx-4">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Forgot Password</CardTitle>
          <CardDescription>
            Enter your email to get the password reset link
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <Label htmlFor="email">Email:</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="johndoe@example.com"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Button className="w-full" disabled={!email || loading}>
                {loading ? (
                  <>
                    <Spinner /> Send email
                  </>
                ) : (
                  "Send email"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default ForgotPasswordForm;
