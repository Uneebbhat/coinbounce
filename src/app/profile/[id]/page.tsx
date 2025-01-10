"use client";

import React from "react";
import Container from "@/components/Cointainer";
import Image from "next/image";
import BlogsCard from "@/components/blogs/BlogsCard";
import useUserStore from "@/store/user/useUserStore";

const page = () => {
  const { user } = useUserStore();
  console.log(user.image);

  return (
    <>
      <section className="px-4 py-4">
        <Container>
          <div className="text-center">
            <Image
              className="mx-auto rounded-full object-cover overflow-hidden"
              src={user.image?.toString() ?? ""}
              alt="Uneeb Bhatti"
              width={150}
              height={150}
            />
            <h2 className="text-2xl font-bold mt-2">{user.name}</h2>
          </div>
          <div className="flex flex-col gap-4 items-center mt-6">
            <h2 className="bg-gray-100 px-2 py-1 rounded">My Blogs</h2>
            <BlogsCard />
          </div>
        </Container>
      </section>
    </>
  );
};

export default page;
