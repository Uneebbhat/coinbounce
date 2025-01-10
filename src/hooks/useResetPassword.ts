"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const useResetPassword = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [passwordReset, setPasswordReset] = useState<boolean>(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log(newPassword);
      toast({
        title: "Password updated successfully",
      });
      setLoading(false);
      setNewPassword("");
      setPasswordReset(true);
    } catch (error: any) {
      setLoading(false);
      setError("An error occurred while updating password. Please try again.");
      toast({
        title: error.message,
      });
      console.log(error.message);
    }
  };

  return {
    newPassword,
    loading,
    error,
    passwordReset,
    handleInputChange,
    handleSubmit,
  };
};

export default useResetPassword;
