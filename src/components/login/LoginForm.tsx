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
import useTogglePassword from "@/hooks/useTogglePassword";
import Spinner from "@/components/spinner";
import useLogin from "@/hooks/useLogin";
import Link from "next/link";

const LoginForm: FC = () => {
  const { formData, loading, error, handleInputChange, handleSubmit } =
    useLogin();
  const { showPassword, handleTogglePassword } = useTogglePassword();
  return (
    <>
      <Card className="w-[600px] max-w-full mx-4">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Login</CardTitle>
          <CardDescription>Login to your account</CardDescription>
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
            <div className="mb-2">
              <Link
                href="/forgot-password"
                className="text-sm text-gray-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <div>
              <Button
                className="w-full"
                disabled={!formData.email || !formData.password || loading}
              >
                {loading ? (
                  <>
                    <Spinner /> Login
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Separator className="my-2" />
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="underline hover:text-gray-900 transition-all"
            >
              Signup
            </Link>
          </p>
        </CardFooter>
      </Card>
    </>
  );
};

export default LoginForm;
