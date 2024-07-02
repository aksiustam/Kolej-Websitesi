import React from "react";
import GaleriClient from "./GaleriClient";
import getGalery from "@/app/actions/galeri/getGalery";
export const dynamic = "force-dynamic";
const page = async () => {
  const galery = await getGalery();
  return <GaleriClient galery={galery} />;
};

export default page;
