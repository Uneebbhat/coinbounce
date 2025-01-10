import Link from "next/link";
import React from "react";

const RelatedBlogs = () => {
  return (
    <>
      <aside className="w-full lg:w-72 flex-shrink-0 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Related Posts</h2>
        <ul className="space-y-4">
          {[
            "Mastering Promises",
            "Understanding Closures",
            "Why Learn TypeScript?",
          ].map((post, index) => (
            <li
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">{post}</h3>
              <p className="text-sm text-gray-600">
                A brief overview of the topic and why it’s essential.
              </p>
              <Link
                href="/"
                className="text-blue-500 font-medium text-sm mt-3 inline-block"
              >
                Read More →
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default RelatedBlogs;
