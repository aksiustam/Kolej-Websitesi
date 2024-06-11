import React from "react";
import GaleriTable from "./GaleriTable";
import AdminLayout from "../comp/AdminLayout";
import getGalery from "@/app/actions/galeri/getGalery";
const page = async () => {
  const galery = await getGalery();

  return (
    <AdminLayout>
      <GaleriTable galery={galery} />
    </AdminLayout>
  );
};

export default page;
