import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/user/useUserStore";
import { fromJSON } from "postcss";

interface LoginForm {
  email: string;
  password: string;
}

const useLogin = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const { setUser } = useUserStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log(formData);
      toast({
        title: "Login successfully",
      });
      setLoading(false);
      setUser({
        id: "1",
        name: "Uneeb",
        email: formData.email,
        image: "image",
      });
      router.push("/");
      setFormData({
        email: "",
        password: "",
      });
    } catch (error: any) {
      setLoading(false);
      setError("An error occurred during login. Please try again.");
      toast({
        title: error.message,
      });
      console.log(error.message);
    }
  };

  return { formData, handleInputChange, handleSubmit, loading, error };
};

export default useLogin;
