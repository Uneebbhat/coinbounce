"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import useCreateBlog from "@/hooks/useCreateBlog";

const CreatePostForm = () => {
  const { handleSubmit, handleChange, error, isLoading, success } =
    useCreateBlog();

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <Label htmlFor="title">Title:</Label>
        <Input
          type="text"
          placeholder="Enter title"
          id="title"
          name="title"
          // value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <Label htmlFor="description">Blog Content:</Label>
        {/* <Input /> */}
        <Textarea
          placeholder="Enter blog content"
          id="description"
          name="description"
          // value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <Label htmlFor="tags">Add tags:</Label>
        <Input
          type="text"
          id="tags"
          name="tags"
          placeholder="Add tags, separated by commas"
          // value={formData.tags}
          onChange={handleChange}
        />
      </div>
      <Button className="w-full" type="submit" disabled={isLoading}>
        {isLoading ? "Creating..." : "Create Post"}
      </Button>
    </form>
  );
};

export default CreatePostForm;
