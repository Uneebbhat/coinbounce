"use client";
import axios from "axios";
import { useEffect, useState } from "react";

interface Blog {
  _id: string;
  title: string;
  description: string;
  tags: string;
  author: {
    authorId: string;
    authorName: string;
    authorPic: any;
  };
}

const useGetBlogs = () => {
  const [blogData, setBlogData] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/blog");
        setBlogData(response.data.data);
        console.log(response.data.data);
      } catch (error: any) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogData();
  }, []);

  return { blogData, loading };
};

export default useGetBlogs;
