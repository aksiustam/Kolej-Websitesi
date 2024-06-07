import React from "react";
import "@/public/css/HomePage.css";
import Banner from "@/public/assets/Images/Banner/Banner.jpg";
import Image from "next/image";
import { Container } from "react-bootstrap";

import img1 from "@/public/assets/logo/1.png";
import img2 from "@/public/assets/logo/2.png";
import img3 from "@/public/assets/logo/3.png";
import img4 from "@/public/assets/logo/4.png";
import img5 from "@/public/assets/logo/5.png";
import img6 from "@/public/assets/logo/6.png";
export default function Home() {
  return (
    <>
      <div className="mainBannerDiv">
        <Image
          src={Banner}
          alt="BannerImage"
          width={1920}
          height={1080}
          className="img-fluid mx-auto"
        />

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
      </div>
      <Container className="-tw-mt-8">
        <div className="tw-flex tw-items-center tw-justify-center tw-gap-8 tw-flex-wrap">
          <div
            className="tw-w-48 tw-h-48 tw-rounded-full tw-z-30"
            data-aos="fade-up"
          >
            <Image
              src={img1}
              alt="logo1"
              width={500}
              height={500}
              className="img-fluid mx-auto"
            />
          </div>
          <div
            className="tw-w-48 tw-h-48 tw-rounded-full tw-z-30"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Image
              src={img2}
              alt="logo1"
              width={500}
              height={500}
              className="img-fluid mx-auto"
            />
          </div>
          <div
            className="tw-w-48 tw-h-48 tw-rounded-full tw-z-30"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Image
              src={img3}
              alt="logo1"
              width={500}
              height={500}
              className="img-fluid mx-auto"
            />
          </div>
          <div
            className="tw-w-48 tw-h-48 tw-rounded-full tw-z-30"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Image
              src={img4}
              alt="logo1"
              width={500}
              height={500}
              className="img-fluid mx-auto"
            />
          </div>
          <div
            className="tw-w-48 tw-h-48 tw-rounded-full tw-z-30"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <Image
              src={img5}
              alt="logo1"
              width={500}
              height={500}
              className="img-fluid mx-auto"
            />
          </div>
          <div
            className="tw-w-48 tw-h-48 tw-rounded-full tw-z-30"
            data-aos="fade-up"
            data-aos-delay="1000"
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
      </Container>
    </>
  );
}
