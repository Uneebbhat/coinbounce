import BlogsCard from "@/components/blogs/BlogsCard";
import BlogsSearch from "@/components/blogs/BlogsSearch";
import Container from "@/components/Cointainer";
import React from "react";

const page = () => {
  return (
    <>
      <section className="px-4 py-4">
        <Container>
          <div className="flex flex-col items-center">
            {/* <div className="mb-4">
              <BlogsSearch />
            </div> */}
            <div className="flex flex-col gap-4 items-center">
              <BlogsCard />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default page;
