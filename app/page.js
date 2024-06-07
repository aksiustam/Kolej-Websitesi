import Banner from "@/app/component/Home/Banner";
import AboutUs from "@/app/component/Home/AboutUs";
import WeProvide from "@/app/component/Home/WeProvide";
import ChooseUs from "@/app/component/Home/ChooseUs";
import HomeFAQ from "@/app/component/Home/HomeFAQ";
export default function Home() {
  return (
    <main>
      <Banner />
      <AboutUs />
      <WeProvide />
      <ChooseUs />
      <HomeFAQ />
      {/* 
      <OurPricing />
      <OurTeam />
      <PeopleSay />
      <OurBlog />
      <Brandlogo />
      <StartedToday /> */}
    </main>
  );
}
