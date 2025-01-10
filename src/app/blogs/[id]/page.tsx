import React from "react";
import Container from "@/components/Cointainer";
import BlogData from "@/components/blogs/BlogData";
// import RelatedBlogs from "@/components/blogs/RelatedBlogs";
import BlogsComments from "@/components/blogs/BlogsComments";

const page = async () => {
  return (
    <section className="min-h-screen bg-gray-100 py-4 px-4">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8">
          <BlogData />
          {/* <RelatedBlogs /> */}
        </div>
        <BlogsComments />
      </Container>
    </section>
  );
};

export default page;
