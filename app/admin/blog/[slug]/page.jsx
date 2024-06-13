import React from "react";

import BlogOneClient from "./BlogOneClient";
import getOneBlog from "../../../actions/blog/getOneBlog";
import AdminLayout from "../../comp/AdminLayout";
const page = async ({ params }) => {
  const { slug } = params;

  const blog = await getOneBlog(slug);

  return (
    <AdminLayout>
      <BlogOneClient blog={blog} />
    </AdminLayout>
  );
};

export default page;
