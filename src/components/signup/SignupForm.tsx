"use client";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeClosed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useSignup from "@/hooks/useSignup";
import useTogglePassword from "@/hooks/useTogglePassword";
import Spinner from "../spinner";
import Link from "next/link";

const SignupForm: FC = () => {
  const {
    formData,
    loading,
    error,
    handleInputChange,
    // handleImageChange,
    handleSubmit,
  } = useSignup();
  const { showPassword, handleTogglePassword } = useTogglePassword();
  return (
    <>
      <Card className="w-[600px] max-w-full mx-4">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Signup</CardTitle>
          <CardDescription>Create an account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {/* <div className="mb-2">
              <Label htmlFor="profilePic">Profile Picture:</Label>
              <Input
                type="file"
                name="profilePic"
                id="profilePic"
                onChange={handleImageChange}
              />
            </div> */}

            <div className="mb-2">
              <Label htmlFor="username">Username:</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="John Doe"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-2">
              <Label htmlFor="email">Email:</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="johndoe@example.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-2 relative">
              <Label htmlFor="password">Password:</Label>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder={showPassword ? "Password" : "********"}
                value={formData.password}
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
              <Button
                className="w-full"
                disabled={
                  !formData.username ||
                  !formData.email ||
                  !formData.password ||
                  loading
                }
              >
                {loading ? (
                  <>
                    <Spinner /> Signup
                  </>
                ) : (
                  "Signup"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Separator className="my-2" />
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="underline hover:text-gray-900 transition-all"
            >
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </>
  );
};

export default SignupForm;
