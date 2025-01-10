"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const useGetBlogById = () => {
  const [blog, setBlog] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      if (id) {
        setIsLoading(true);
        setError(null);
        try {
          const response = await axios.get(`/api/blog/${id}`);
          setBlog(response.data.data);
          console.log(response.data.data);
        } catch (error: any) {
          setError(error.response?.data?.message || "Error fetching blog");
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchBlog();
  }, [id]);

  return { blog, isLoading, error };
};

export default useGetBlogById;
