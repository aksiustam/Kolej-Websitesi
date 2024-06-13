import React from "react";
import AdminLayout from "../comp/AdminLayout";
import BlogClient from "./BlogClient";
import getBlog from "@/app/actions/blog/getBlog";
export const dynamic = "force-dynamic";
const page = async () => {
  const blog = await getBlog();
  return (
    <AdminLayout>
      <BlogClient blog={blog} />
    </AdminLayout>
  );
};

export default page;
