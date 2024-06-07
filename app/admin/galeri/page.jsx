import React from "react";
import GaleriTable from "./GaleriTable";
import Layout from "../comp/layout";
import getGalery from "@/app/actions/galeri/getGalery";
const page = async () => {
  const galery = await getGalery();

  return (
    <Layout>
      <GaleriTable galery={galery} />
    </Layout>
  );
};

export default page;
