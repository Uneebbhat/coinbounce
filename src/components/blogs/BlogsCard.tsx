"use client";

import React from "react";
import { Card, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import BlogsCardAvatar from "@/components/blogs/BlogsCardAvatar";
import { MessageCircle, ThumbsUpIcon } from "lucide-react";
import useGetBlogs from "@/hooks/useGetBlogs";

interface Blog {
  _id: string;
  title: string;
  description: string;
  tags: string;
  author: {
    authorId: string;
    authorName: string;
    authorPic: any;
    // joined?: any;
  };
}

const BlogsCard = () => {
  const { blogData, loading } = useGetBlogs();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {blogData.map((item: Blog) => (
        <div className="relative max-w-full w-full md:w-[800px]" key={item._id}>
          <Link href={`/blogs/${item._id}`} key={item.author.authorId}>
            <Card className="w-full">
              <div className="p-[20px]">
                <div>
                  <Link href={`/profile/${item.author.authorId}`}>
                    <BlogsCardAvatar
                      avatarImg={item.author.authorPic}
                      name={item.author.authorName}
                    />
                  </Link>
                </div>
                <div className="mt-2 overflow-hidden text-ellipsis line-clamp-2">
                  <CardTitle className="text-xl md:text-2xl font-bold">
                    {item.title}
                  </CardTitle>
                </div>
                <div className="flex flex-col md:flex-row mt-2">
                  <div className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 rounded transition-all w-max">
                    <ThumbsUpIcon size={20} />
                    {/* <span>{item.likes} likes</span> */}
                  </div>
                  <div className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 rounded transition-all w-max">
                    <MessageCircle size={20} />
                    {/* <span>{item.comments} comments</span> */}
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      ))}
    </>
  );
};

export default BlogsCard;
