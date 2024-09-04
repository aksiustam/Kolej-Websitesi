"use client";
import "@/public/css/HomePage.css";
import Image from "next/image";
import img1 from "@/public/assets/logo/1.png";
import img2 from "@/public/assets/logo/2.png";
import img3 from "@/public/assets/logo/3.png";
import img4 from "@/public/assets/logo/4.png";
import img5 from "@/public/assets/logo/5.png";
import img6 from "@/public/assets/logo/6.png";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Slider from "react-slick";

gsap.registerPlugin(ScrollTrigger);

export default function Home({ ayarlar }) {
  const scrollRef = useRef();

  const marker = false;
  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 800px)", () => {
        // desktop setup code here...
        gsap.to("#box1", {
          y: -150,
          duration: 2,
          scrub: 4,
          scrollTrigger: {
            trigger: "#box1",
            start: "-100% 50%",
            end: "top 30%",
            scrub: 4,
            markers: marker,
          },
        });
        gsap.to("#box2", {
          y: -200,
          duration: 2,
          scrub: 4,
          scrollTrigger: {
            trigger: "#box2",
            start: "-100% 50%",
            end: "top 30%",
            scrub: 4,
            markers: marker,
          },
        });
        gsap.to("#box3", {
          y: -200,
          duration: 2,
          scrub: 4,
          scrollTrigger: {
            trigger: "#box3",
            start: "-100% 50%",
            end: "top 30%",
            scrub: 4,
            markers: marker,
          },
        });
        gsap.to("#box4", {
          y: -160,
          duration: 2,
          scrub: 4,
          scrollTrigger: {
            trigger: "#box4",
            start: "-100% 50%",
            end: "top 30%",
            scrub: 4,
            markers: marker,
          },
        });
        gsap.to("#box5", {
          y: -220,
          duration: 2,
          scrub: 4,
          scrollTrigger: {
            trigger: "#box5",
            start: "-100% 50%",
            end: "top 30%",
            scrub: 4,
            markers: marker,
          },
        });
        gsap.to("#box6", {
          y: -320,
          duration: 2,
          scrub: 4,
          scrollTrigger: {
            trigger: "#box6",
            start: "-100% 50%",
            end: "top 30%",
            scrub: 4,
            markers: marker,
          },
        });
      });

      mm.add("(max-width: 799px)", () => {
        // mobile setup code here...
        gsap.to("#box1", {
          y: -60,
          duration: 2,
          scrub: 4,
          scrollTrigger: {
            trigger: "#box1",
            start: "-90% 45%",
            end: "top 55%",
            scrub: 4,
            markers: marker,
          },
        });
        gsap.to("#box2", {
          y: -70,
          duration: 2,
          scrub: 4,
          scrollTrigger: {
            trigger: "#box2",
            start: "-90% 45%",
            end: "top 55%",
            scrub: 4,
            markers: marker,
          },
        });
        gsap.to("#box3", {
          y: -80,
          duration: 2,
          scrub: 4,
          scrollTrigger: {
            trigger: "#box3",
            start: "-90% 45%",
            end: "top 55%",
            scrub: 4,
            markers: marker,
          },
        });
        gsap.to("#box4", {
          y: -70,
          duration: 2,
          scrub: 4,
          scrollTrigger: {
            trigger: "#box4",
            start: "-90% 45%",
            end: "top 55%",
            scrub: 4,
            markers: marker,
          },
        });
        gsap.to("#box5", {
          y: -80,
          duration: 2,
          scrub: 4,
          scrollTrigger: {
            trigger: "#box5",
            start: "-90% 45%",
            end: "top 55%",
            scrub: 4,
            markers: marker,
          },
        });
        gsap.to("#box6", {
          y: -90,
          duration: 2,
          scrub: 4,
          scrollTrigger: {
            trigger: "#box6",
            start: "-90% 45%",
            end: "top 55%",
            scrub: 4,
            markers: marker,
          },
        });
      });
    },
    { scope: scrollRef }
  );

  const checkTrue = () => {
    const bannerChecks = [
      ayarlar?.banner1?.bannerCheck,
      ayarlar?.banner2?.bannerCheck,
      ayarlar?.banner3?.bannerCheck,
      ayarlar?.banner4?.bannerCheck,
      ayarlar?.banner5?.bannerCheck,
      ayarlar?.banner6?.bannerCheck,
      ayarlar?.banner7?.bannerCheck,
      ayarlar?.banner8?.bannerCheck,
    ];
    const trueCount = bannerChecks.filter(Boolean).length;
    return !(trueCount === 1);
  };

  const sliderSettings = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    infinite: checkTrue(),
    pauseOnHover: false,
  };

  return (
    <>
      <div className="mainBannerDiv tw-relative">
        <Slider
          {...sliderSettings}
          className="tw-h-[30rem] lg:tw-h-screen tw-w-full"
        >
          {ayarlar?.banner1?.bannerCheck && (
            <div className="tw-h-[30rem] lg:tw-h-screen tw-w-full">
              <Image
                src={ayarlar?.banner1?.image?.imageurl}
                alt="Bogaziçi Banner1"
                fill
                className="-tw-z-10 tw-object-cover tw-object-center"
              />

              <div className="container tw-h-full">
                <div className="bannerContain text-center">
                  <h2>{ayarlar?.banner1?.bannerUst}</h2>
                  <p>{ayarlar?.banner1?.bannerAlt}</p>
                  {ayarlar?.banner1?.bannerBtnCheck && (
                    <button className="button before:!tw-bg-red-600">
                      <a
                        href={ayarlar?.banner1?.bannerBtnUrl}
                        className="tw-text-slate-100 tw-font-extrabold tw-text-lg tw-px-6"
                      >
                        {ayarlar?.banner1?.bannerBtnName}
                      </a>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
          {ayarlar?.banner2?.bannerCheck && (
            <div className="tw-h-[30rem] lg:tw-h-screen tw-w-full">
              <Image
                src={ayarlar?.banner2?.image?.imageurl}
                alt="Bogaziçi Banner2"
                fill
                className="-tw-z-10 tw-object-cover tw-object-center"
              />

              <div className="container tw-h-full">
                <div className="bannerContain text-center">
                  <h2>{ayarlar?.banner2?.bannerUst}</h2>
                  <p>{ayarlar?.banner2?.bannerAlt}</p>
                  {ayarlar?.banner2?.bannerBtnCheck && (
                    <button className="button before:!tw-bg-red-600">
                      <a
                        href={ayarlar?.banner2?.bannerBtnUrl}
                        className="tw-text-slate-100 tw-font-extrabold tw-text-lg tw-px-6"
                      >
                        {ayarlar?.banner2?.bannerBtnName}
                      </a>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
          {ayarlar?.banner3?.bannerCheck && (
            <div className="tw-h-[30rem] lg:tw-h-screen tw-w-full">
              <Image
                src={ayarlar?.banner3?.image?.imageurl}
                alt="Bogaziçi Banner3"
                fill
                className="-tw-z-10 tw-object-cover tw-object-center"
              />

              <div className="container tw-h-full">
                <div className="bannerContain text-center">
                  <h2>{ayarlar?.banner3?.bannerUst}</h2>
                  <p>{ayarlar?.banner3?.bannerAlt}</p>
                  {ayarlar?.banner3?.bannerBtnCheck && (
                    <button className="button before:!tw-bg-red-600">
                      <a
                        href={ayarlar?.banner3?.bannerBtnUrl}
                        className="tw-text-slate-100 tw-font-extrabold tw-text-lg tw-px-6"
                      >
                        {ayarlar?.banner3?.bannerBtnName}
                      </a>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
          {ayarlar?.banner4?.bannerCheck && (
            <div className="tw-h-[30rem] lg:tw-h-screen tw-w-full">
              <Image
                src={ayarlar?.banner4?.image?.imageurl}
                alt="Bogaziçi Banner4"
                fill
                className="-tw-z-10 tw-object-cover tw-object-center"
              />

              <div className="container tw-h-full">
                <div className="bannerContain text-center">
                  <h2>{ayarlar?.banner4?.bannerUst}</h2>
                  <p>{ayarlar?.banner4?.bannerAlt}</p>
                  {ayarlar?.banner4?.bannerBtnCheck && (
                    <button className="button before:!tw-bg-red-600">
                      <a
                        href={ayarlar?.banner4?.bannerBtnUrl}
                        className="tw-text-slate-100 tw-font-extrabold tw-text-lg tw-px-6"
                      >
                        {ayarlar?.banner4?.bannerBtnName}
                      </a>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
          {ayarlar?.banner5?.bannerCheck && (
            <div className="tw-h-[30rem] lg:tw-h-screen tw-w-full">
              <Image
                src={ayarlar?.banner5?.image?.imageurl}
                alt="Bogaziçi Banner5"
                fill
                className="-tw-z-10 tw-object-cover tw-object-center"
              />

              <div className="container tw-h-full">
                <div className="bannerContain text-center">
                  <h2>{ayarlar?.banner5?.bannerUst}</h2>
                  <p>{ayarlar?.banner5?.bannerAlt}</p>
                  {ayarlar?.banner5?.bannerBtnCheck && (
                    <button className="button before:!tw-bg-red-600">
                      <a
                        href={ayarlar?.banner5?.bannerBtnUrl}
                        className="tw-text-slate-100 tw-font-extrabold tw-text-lg tw-px-6"
                      >
                        {ayarlar?.banner5?.bannerBtnName}
                      </a>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
          {ayarlar?.banner6?.bannerCheck && (
            <div className="tw-h-[30rem] lg:tw-h-screen tw-w-full">
              <Image
                src={ayarlar?.banner6?.image?.imageurl}
                alt="Bogaziçi Banner6"
                fill
                className="-tw-z-10 tw-object-cover tw-object-center"
              />

              <div className="container tw-h-full">
                <div className="bannerContain text-center">
                  <h2>{ayarlar?.banner6?.bannerUst}</h2>
                  <p>{ayarlar?.banner6?.bannerAlt}</p>
                  {ayarlar?.banner6?.bannerBtnCheck && (
                    <button className="button before:!tw-bg-red-600">
                      <a
                        href={ayarlar?.banner6?.bannerBtnUrl}
                        className="tw-text-slate-100 tw-font-extrabold tw-text-lg tw-px-6"
                      >
                        {ayarlar?.banner6?.bannerBtnName}
                      </a>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
          {ayarlar?.banner7?.bannerCheck && (
            <div className="tw-h-[30rem] lg:tw-h-screen tw-w-full">
              <Image
                src={ayarlar?.banner7?.image?.imageurl}
                alt="Bogaziçi Banner7"
                fill
                className="-tw-z-10 tw-object-cover tw-object-center"
              />

              <div className="container tw-h-full">
                <div className="bannerContain text-center">
                  <h2>{ayarlar?.banner7?.bannerUst}</h2>
                  <p>{ayarlar?.banner7?.bannerAlt}</p>
                  {ayarlar?.banner7?.bannerBtnCheck && (
                    <button className="button before:!tw-bg-red-600">
                      <a
                        href={ayarlar?.banner7?.bannerBtnUrl}
                        className="tw-text-slate-100 tw-font-extrabold tw-text-lg tw-px-6"
                      >
                        {ayarlar?.banner7?.bannerBtnName}
                      </a>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
          {ayarlar?.banner8?.bannerCheck && (
            <div className="tw-h-[30rem] lg:tw-h-screen tw-w-full">
              <Image
                src={ayarlar?.banner8?.image?.imageurl}
                alt="Bogaziçi Banner3"
                fill
                className="-tw-z-10 tw-object-cover tw-object-center"
              />

              <div className="container tw-h-full">
                <div className="bannerContain text-center">
                  <h2>{ayarlar?.banner8?.bannerUst}</h2>
                  <p>{ayarlar?.banner8?.bannerAlt}</p>
                  {ayarlar?.banner8?.bannerBtnCheck && (
                    <button className="button before:!tw-bg-red-600">
                      <a
                        href={ayarlar?.banner8?.bannerBtnUrl}
                        className="tw-text-slate-100 tw-font-extrabold tw-text-lg tw-px-6"
                      >
                        {ayarlar?.banner8?.bannerBtnName}
                      </a>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </Slider>

        <div className="tw-absolute tw-bottom-0 tw-w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="katman 1"
            viewBox="0 0 1202 190"
          >
            <path
              d="M0 183.62s92.43 7.36 168.29-12.17 158.23-53.39 202.51-57.95 107.22-3.82 133.32 1.84 99.74 23.01 119.47 25.81c19.73 2.79 84.89 14.15 129.19.19S881.97 92.56 895.84 85.2c0 0 168.61-90.83 304.16-82.67v188.25H0v-7.14Z"
              fill="#ffffff"
            />
            <path
              d="M1200 2.52c-135.55-8.16-304.16 82.67-304.16 82.67-13.87 7.36-98.76 42.18-143.06 56.14s-109.46 2.61-129.19-.19c-19.73-2.79-93.38-20.14-119.47-25.81-26.1-5.66-89.04-6.4-133.32-1.84s-126.65 38.42-202.51 57.95C92.43 190.99 0 183.62 0 183.62v3.57s92.43 7.36 168.29-12.17 158.23-53.39 202.51-57.95 107.22-3.82 133.32 1.84 99.74 23.01 119.47 25.81c19.73 2.79 84.89 14.15 129.19.19s129.19-48.78 143.06-56.14c0 0 168.61-90.83 304.16-82.67V2.53Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </div>
      <div className="tw-flex tw-flex-1 tw-w-full tw-h-full tw-relative">
        <div
          className="tw-w-full tw-grid tw-grid-cols-3 md:tw-grid-cols-6 tw-gap-8 tw-mx-12"
          ref={scrollRef}
        >
          <div className="tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center">
            <div
              className="tw-w-24 tw-h-24 lg:tw-w-48 lg:tw-h-48 tw-rounded-full"
              id="box1"
            >
              <Image
                src={img1}
                alt="logo1"
                width={500}
                height={500}
                className="img-fluid mx-auto"
              />
            </div>
          </div>
          <div className="tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center">
            <div
              className="tw-w-24 tw-h-24 lg:tw-w-48 lg:tw-h-48 tw-rounded-full"
              id="box2"
            >
              <Image
                src={img2}
                alt="logo1"
                width={500}
                height={500}
                className="img-fluid mx-auto"
              />
            </div>
          </div>
          <div className="tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center">
            <div
              className="tw-w-24 tw-h-24 lg:tw-w-48 lg:tw-h-48 tw-rounded-full"
              id="box3"
            >
              <Image
                src={img3}
                alt="logo1"
                width={500}
                height={500}
                className="img-fluid mx-auto"
              />
            </div>
          </div>
          <div className="tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center">
            <div
              className="tw-w-24 tw-h-24 lg:tw-w-48 lg:tw-h-48 tw-rounded-full"
              id="box4"
            >
              <Image
                src={img4}
                alt="logo1"
                width={500}
                height={500}
                className="img-fluid mx-auto"
              />
            </div>
          </div>
          <div className="tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center">
            <div
              className="tw-w-24 tw-h-24 lg:tw-w-48 lg:tw-h-48 tw-rounded-full"
              id="box5"
            >
              <Image
                src={img5}
                alt="logo1"
                width={500}
                height={500}
                className="img-fluid mx-auto"
              />
            </div>
          </div>
          <div className="tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center">
            <div
              className="tw-w-24 tw-h-24 lg:tw-w-48 lg:tw-h-48 tw-rounded-full"
              id="box6"
            >
              <Image
                src={img6}
                alt="logo1"
                width={500}
                height={500}
                className="img-fluid mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
