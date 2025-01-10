"use client";
import React from "react";
import Container from "@/components/Cointainer";
import CreatePostForm from "@/components/create-post/CreatePostForm";

const page = () => {
  return (
    <>
      <section className="px-6 py-6">
        <Container>
          <div className="max-w-full w-[800px] mx-auto">
            <CreatePostForm />
          </div>
        </Container>
      </section>
    </>
  );
};

export default page;
