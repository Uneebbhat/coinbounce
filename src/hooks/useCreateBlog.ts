"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import useUserStore from "@/store/user/useUserStore";
import { toast } from "./use-toast";
import { useRouter } from "next/navigation";

interface Blog {
  title: string;
  description: string;
  tags: string;
  author: {
    authorId: string;
    authorName: string;
    authorPic: File | string;
  };
}

const useCreateBlog = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { user } = useUserStore();
  const [blogData, setBlogData] = useState<Blog>({
    title: "",
    description: "",
    tags: "",
    author: {
      authorId: "",
      authorName: "",
      authorPic: "",
    },
  });

  useEffect(() => {
    if (user?.id && user?.name && user?.image) {
      setBlogData((prevData) => ({
        ...prevData,
        author: {
          authorId: user.id,
          authorName: user.name,
          authorPic: user.image,
        },
      }));
    }
  }, [user]);

  // console.log(blogData.author.authorPic);
  // console.log(user.image);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await axios.post("/api/blog", blogData);

      toast({
        title: "Blog created successfully",
      });
      setSuccess(true);
      console.log(response.data);
      router.push("/blogs");
    } catch (error: any) {
      setError(error.response?.data?.message || "Error creating blog");
      toast({
        title: error.response?.data?.message || "Error creating blog",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleSubmit,
    isLoading,
    error,
    success,
    handleChange,
  };
};

export default useCreateBlog;
