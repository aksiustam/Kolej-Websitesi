import React from "react";
import Layout from "../comp/Layout";
import KadroClient from "./KadroClient";
import getKadro from "@/app/actions/kadro/getKadro";
const page = async () => {
  const kadro = await getKadro();
  return (
    <Layout>
      <KadroClient kadro={kadro} />
    </Layout>
  );
};

export default page;
