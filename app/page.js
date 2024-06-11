import Banner from "@/app/component/Home/Banner";
import AboutUs from "@/app/component/Home/AboutUs";
import WeProvide from "@/app/component/Home/WeProvide";
import ChooseUs from "@/app/component/Home/ChooseUs";
import BilgiAl from "./component/Home/BilgiAl";
import InstaPage from "./component/Home/InstaPage";

import BlogPage from "./component/Home/BlogPage";
import getAyarlar from "@/app/actions/ayarlar/getAyarlar";
import getBlog from "@/app/actions/blog/getBlog";
export default async function Home() {
  const ayarlar = await getAyarlar();
  const blog = await getBlog();
  return (
    <main>
      <Banner ayarlar={ayarlar} />
      <AboutUs />
      <WeProvide />
      <BilgiAl />
      <ChooseUs />
      <InstaPage />
      <BlogPage blog={blog} />
    </main>
  );
}
