import React from "react";
import Layout from "../comp/Layout";
import BlogClient from "./BlogClient";
import getBlog from "@/app/actions/blog/getBlog";
const page = async () => {
  const blog = await getBlog();
  return (
    <Layout>
      <BlogClient blog={blog} />
    </Layout>
  );
};

export default page;
