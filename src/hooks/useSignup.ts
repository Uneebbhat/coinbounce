import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/user/useUserStore";
import axios from "axios";

interface SignupForm {
  // profilePic: any;
  username: string;
  email: string;
  password: string;
}

const useSignup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<SignupForm>({
    // profilePic: File || null,
    username: "",
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

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     const file = e.target.files[0];
  //     const fileUrl = URL.createObjectURL(file);
  //     setFormData({ ...formData, profilePic: fileUrl });
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // const userFormData = new FormData();
      // userFormData.append("username", formData.username);
      // userFormData.append("email", formData.email);
      // userFormData.append("password", formData.password);
      // userFormData.append("profilePic", formData.profilePic);
      const result = await axios.post("/api/user", formData);
      console.log(result);
      toast({
        title: "Account created successfully",
      });
      setLoading(false);
      setUser({
        id: result.data.newUser._id,
        name: result.data.newUser.username,
        email: result.data.newUser.email,
        image: result.data.newUser.profilePic || "",
      });
      router.push("/");
      setFormData({
        // profilePic: null,
        username: "",
        email: "",
        password: "",
      });
    } catch (error: any) {
      setLoading(false);
      setError("An error occurred during signup. Please try again.");
      toast({
        title: error.response.data.message,
      });
      console.log(error.response.data.message);
    }
  };

  return {
    formData,
    handleInputChange,
    // handleImageChange,
    handleSubmit,
    loading,
    error,
  };
};

export default useSignup;
