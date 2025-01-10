"use client";
import useGetBlogById from "@/hooks/useGetBlogById";
import { ThumbsUpIcon } from "lucide-react";
import React from "react";

const BlogData = () => {
  const { blog, error, isLoading } = useGetBlogById();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blog) {
    return <div>No blog found</div>;
  }

  return (
    <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
      <header className="bg-gradient-to-r from-blue-600 to-purple-500 text-white p-6">
        <h1 className="text-3xl md:text-5xl font-bold">{blog.title}</h1>
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg">
              By <span className="font-semibold">{blog.author.authorName}</span>
            </p>
            <p className="text-sm opacity-80">{blog.date}</p>
          </div>
          <div className="mt-3 sm:mt-0 flex flex-wrap gap-2">#{blog.tags}</div>
        </div>
        <div className="mt-4">
          <div className="inline-flex items-center gap-2 cursor-pointer">
            <ThumbsUpIcon size={20} color="white" />
          </div>
        </div>
      </header>

      <article
        className="prose prose-lg p-6 max-w-none text-gray-800"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      />
    </div>
  );
};

export default BlogData;
