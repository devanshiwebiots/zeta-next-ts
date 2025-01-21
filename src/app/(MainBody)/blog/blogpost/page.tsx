"use client";
import dynamic from "next/dynamic";
import React from "react";
const BlogPost = dynamic(() => import("@/Components/Blog/BlogPost"), {
  ssr: false,
});
const BlogPostComponent = () => {
  return <BlogPost />;
};

export default BlogPostComponent;
