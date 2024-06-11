import React from "react";
import getOneBlog from "../../actions/blog/getOneBlog";
import BlogClient from "./BlogClient";
import getBlog from "../../actions/blog/getBlog";

const page = async ({ params }) => {
  const { slug } = params;

  const blogs = await getBlog();
  const blog = await getOneBlog(slug);

  return <BlogClient blogs={blogs} blog={blog} />;
};

export default page;
