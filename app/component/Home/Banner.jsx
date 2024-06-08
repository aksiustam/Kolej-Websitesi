"use client";
import "@/public/css/HomePage.css";
import Banner from "@/public/assets/Images/Banner/Banner.jpg";
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

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const scrollRef = useRef();

  const marker = false;
  useGSAP(
    () => {
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
    },
    { scope: scrollRef }
  );
  return (
    <>
      <div
        className="mainBannerDiv tw-relative"
        style={{
          backgroundImage: `url(${Banner.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh", // Adjust the height as needed
        }}
      >
        <div className="container">
          <div className="bannerContain text-center" data-aos="zoom-in">
            <h1>Boğaziçi Kolejine Giriş Sınavı</h1>
            <p>Online Başvuru için</p>
            <button className="button before:!tw-bg-red-600">
              <a
                href="www.bogazici.k12.tr"
                className="tw-text-slate-100 tw-font-extrabold tw-text-lg tw-px-6"
              >
                Başvur
              </a>
            </button>
          </div>
        </div>
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
          className="tw-w-full tw-flex tw-flex-auto tw-items-center tw-justify-center tw-gap-8 tw-flex-wrap"
          ref={scrollRef}
        >
          <div className="tw-w-48 tw-h-48 tw-rounded-full tw-z-30" id="box1">
            <Image
              src={img1}
              alt="logo1"
              width={500}
              height={500}
              className="img-fluid mx-auto"
            />
          </div>
          <div className="tw-w-48 tw-h-48 tw-rounded-full tw-z-30" id="box2">
            <Image
              src={img2}
              alt="logo1"
              width={500}
              height={500}
              className="img-fluid mx-auto"
            />
          </div>
          <div className="tw-w-48 tw-h-48 tw-rounded-full tw-z-30" id="box3">
            <Image
              src={img3}
              alt="logo1"
              width={500}
              height={500}
              className="img-fluid mx-auto"
            />
          </div>
          <div className="tw-w-48 tw-h-48 tw-rounded-full tw-z-30" id="box4">
            <Image
              src={img4}
              alt="logo1"
              width={500}
              height={500}
              className="img-fluid mx-auto"
            />
          </div>
          <div className="tw-w-48 tw-h-48 tw-rounded-full tw-z-30" id="box5">
            <Image
              src={img5}
              alt="logo1"
              width={500}
              height={500}
              className="img-fluid mx-auto"
            />
          </div>
          <div className="tw-w-48 tw-h-48 tw-rounded-full tw-z-30" id="box6">
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
    </>
  );
}
