"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface News {
  id: number | null;
  author: string;
  title: string;
  url: string;
  urlToImage: string;
}

const useGetNews = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/news");
        console.log(response.data);
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);
  return { news, loading };
};

export default useGetNews;
