"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import BlogsCardAvatar from "./BlogsCardAvatar";

const BlogsComments = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      username: "John Doe",
      avatar: "https://github.com/shadcn.png",
      text: "This is a great blog post! Really enjoyed reading it.",
      date: "2024-12-18",
    },
    {
      id: 2,
      username: "Jane Smith",
      avatar: "https://github.com/shadcn.png",
      text: "Very insightful. I learned a lot from this.",
      date: "2024-12-17",
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e: any) => setNewComment(e.target.value);

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const newCommentData = {
        id: comments.length + 1,
        username: "Anonymous",
        avatar: "https://github.com/shadcn.png",
        text: newComment,
        date: new Date().toLocaleDateString(),
      };
      setComments([...comments, newCommentData]);
      setNewComment("");
    }
  };

  return (
    <section className="bg-white rounded-lg shadow-lg mt-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">Comments</h1>
      </div>

      <div className="mt-4">
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Write a comment..."
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
        />
        <Button onClick={handleCommentSubmit}>Post Comment</Button>
      </div>

      <div className="mt-6 space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start">
            <BlogsCardAvatar avatarImg={comment.avatar} />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="font-semibold">{comment.username}</div>
                <div className="text-sm text-gray-500">{comment.date}</div>
              </div>
              <p className="mt-2">{comment.text}</p>

              <div className="inline-flex flex-col md:flex-row mt-2 gap-4">
                <div className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 rounded transition-all w-max cursor-pointer">
                  <ThumbsUpIcon size={20} />
                  <span>Like</span>
                </div>
                <div className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 rounded transition-all w-max cursor-pointer">
                  <ThumbsDownIcon size={20} />
                  <span>Dislike</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogsComments;
