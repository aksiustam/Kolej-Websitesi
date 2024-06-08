import Banner from "@/app/component/Home/Banner";
import AboutUs from "@/app/component/Home/AboutUs";
import WeProvide from "@/app/component/Home/WeProvide";
import ChooseUs from "@/app/component/Home/ChooseUs";
import BilgiAl from "./component/Home/BilgiAl";
import InstaPage from "./component/Home/InstaPage";
export default function Home() {
  return (
    <main>
      <Banner />
      <AboutUs />
      <WeProvide />
      <ChooseUs />
      <BilgiAl />
      <InstaPage />
    </main>
  );
}
