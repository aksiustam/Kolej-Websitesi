import React from "react";
import "@/public/css/Course.css";
import getHaberler from "../actions/haberler/getHaberler";
import HaberlerClient from "./HaberlerClient";
export const dynamic = "force-dynamic";
const page = async () => {
  const haberler = await getHaberler();
  return <HaberlerClient haberler={haberler} />;
};

export default page;
