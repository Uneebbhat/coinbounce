"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";

const BlogsSearch = () => {
  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = (e: any) => {
    e.preventDefault();
    let value = e.target.value.toLowerCase();
    setSearchText(value);
  };
  return (
    <>
      <Input placeholder="Search" name="search" onChange={handleSearch} />
    </>
  );
};

export default BlogsSearch;
