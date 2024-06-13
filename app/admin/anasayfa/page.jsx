import React from "react";
import AdminLayout from "../comp/AdminLayout";
import AnasayfaClient from "./AnasayfaClient";
export const dynamic = "force-dynamic";
const page = () => {
  return (
    <AdminLayout>
      <AnasayfaClient />
    </AdminLayout>
  );
};

export default page;
