import React from "react";
import AdminLayout from "../comp/AdminLayout";
import AyarlarClient from "./AyarlarClient";
import getAyarlar from "@/app/actions/ayarlar/getAyarlar";
const page = async () => {
  const ayarlar = await getAyarlar();
  return (
    <AdminLayout>
      <AyarlarClient ayarlar={ayarlar} />
    </AdminLayout>
  );
};

export default page;
