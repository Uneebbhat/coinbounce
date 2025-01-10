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
import useTogglePassword from "@/hooks/useTogglePassword";
import { Eye, EyeClosed } from "lucide-react";
import useResetPassword from "@/hooks/useResetPassword";
import PasswordSuccess from "@/components/PasswordSuccess";

const ResetPasswordForm = () => {
  const {
    newPassword,
    passwordReset,
    loading,
    error,
    handleInputChange,
    handleSubmit,
  } = useResetPassword();
  const { showPassword, handleTogglePassword } = useTogglePassword();

  if (passwordReset) {
    return <PasswordSuccess />;
  }
  return (
    <>
      <Card className="w-[600px] max-w-full mx-4">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Reset Password</CardTitle>
          <CardDescription>Enter your new password</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-2 relative">
              <Label htmlFor="newPassword">New password:</Label>
              <Input
                type={showPassword ? "text" : "password"}
                name="newPassword"
                id="newPassword"
                placeholder={showPassword ? "New Password" : "********"}
                value={newPassword}
                onChange={handleInputChange}
              />
              <div
                className="absolute top-[32px] right-4 cursor-pointer"
                onClick={handleTogglePassword}
              >
                {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
              </div>
            </div>
            <div>
              <Button className="w-full" disabled={!newPassword || loading}>
                {loading ? (
                  <>
                    <Spinner /> Update password
                  </>
                ) : (
                  "Update password"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default ResetPasswordForm;
