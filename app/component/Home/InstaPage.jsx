"use client";
import { useEffect, useState } from "react";
import getInstaPost from "../../actions/insta/getInstaPost";
import Image from "next/image";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import imglogo from "@/public/assets/common/bogazlogokare.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./InstaArrow.css";
const InstaPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchInsta = async () => {
      const res = await getInstaPost();

      const formData = res?.data?.filter((item) => item.media_type !== "VIDEO");
      const formData1 = formData?.map((item) => ({
        url: item.media_url,
        link: item.permalink,
      }));
      setData(formData1);
    };
    fetchInsta();
  }, []);

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="slick-arrow right-arrow tw-bg-slate-400 tw-p-1 tw-rounded-full"
        onClick={onClick}
      >
        <FaChevronRight color="black" size={24} />
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="slick-arrow left-arrow tw-bg-slate-400 tw-p-1 tw-rounded-full"
        onClick={onClick}
      >
        <FaChevronLeft color="black" size={24} />
      </div>
    );
  };
  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="tw-w-full tw-h-full tw-py-12">
        <Container className="tw-bg-gray-100 tw-shadow-2xl tw-shadow-gray-400 tw-rounded-3xl tw-py-6">
          <div className="tw-w-full tw-flex tw-flex-col tw-items-center tw-justify-center tw-mb-6">
            <h6 className="tw-text-red-600 tw-text-2xl">
              -Sosyal Medyada Konya Boğaziçi-
            </h6>
            <p className="tw-text-lg tw-font-bold">Bizi Takip Edin</p>
            <div className="tw-flex tw-w-full tw-items-center tw-justify-between">
              <div className="tw-flex tw-gap-2">
                <Image
                  src={imglogo}
                  alt="instapost"
                  width={50}
                  height={50}
                  className="tw-w-full tw-h-full tw-rounded-full tw-border-2"
                />
                <div className="tw-flex tw-flex-col tw-gap-3 tw-justify-center">
                  <div className="tw-text-nowrap tw-text-xs tw-font-bold">
                    Konya Boğaziçi Koleji
                  </div>
                </div>
              </div>
              <div className="tw-flex ">
                <button
                  className="button  tw-min-w-40 tw-bg-red-600 before:tw-bg-red-600"
                  type="submit"
                >
                  <a
                    href="https://www.instagram.com/konyabogazicikolej/"
                    className="tw-text-white"
                  >
                    Takip Et
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="tw-flex tw-items-center tw-justify-center tw-relative tw-w-full tw-px-6">
            <Slider {...settings} className="tw-w-full">
              {data?.map((item, index) => (
                <div key={index} className=" tw-rounded-3xl">
                  <a href={item.link} className="tw-text-black">
                    <Image
                      src={item?.url}
                      alt="instapost"
                      width={1200}
                      height={1200}
                      className="tw-w-[400px] tw-h-[400px]  tw-rounded-3xl"
                    />
                    <div className="tw-absolute tw-bottom-0 tw-bg-slate-100 tw-opacity-70 tw-w-[400px] ">
                      <p className="tw-text-wrap tw-text-sm tw-px-2 tw-py-1">
                        {item.text}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </section>
    </>
  );
};

export default InstaPage;
