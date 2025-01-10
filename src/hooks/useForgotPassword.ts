"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const useForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [sendEmail, setSendEmail] = useState<boolean>(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log(email);
      toast({
        title: "Email sent successfully",
      });
      setLoading(false);
      setEmail("");
      setSendEmail(true);
    } catch (error: any) {
      setLoading(false);
      setError("An error occurred while sending email. Please try again.");
      toast({
        title: error.message,
      });
      console.log(error.message);
    }
  };

  return { email, loading, error, sendEmail, handleInputChange, handleSubmit };
};

export default useForgotPassword;
