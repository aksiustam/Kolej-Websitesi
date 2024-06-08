"use client";

import React, { useRef } from "react";

import Image from "next/image";
import { Container } from "react-bootstrap";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const GaleriGSAPClient = (props) => {
  const { galery } = props;

  const slider = useRef();

  useGSAP(() => {
    let panels = gsap.utils.toArray(".panel");
    let panelWidth = panels[0].offsetWidth; // Her bir panelin genişliği
    let totalWidth = panelWidth * panels.length; // Tüm panellerin toplam genişliği

    console.log(totalWidth);

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: slider.current,
        pin: true,
        start: "top 30%",
        scrub: 1,
        snap: {
          snapTo: 1 / (panels.length - 1),
          duration: { max: 0.2 },
        },
        end: () => "+=" + (totalWidth + 300),
        markers: true,
      },
    });
  }, []);

  return (
    <Container className="tw-overflow-clip">
      <div className="tw-flex tw-items-center tw-justify-center tw-static tw-mb-12">
        <div className="tw-px-12 tw-py-6 tw-border-8 tw-bg-sky-600 tw-border-sky-800 tw-rounded-full tw-text-white tw-text-2xl tw-font-extrabold tw-mb-6">
          GALERİ
        </div>
      </div>
      <div className="tw-overflow-x-hidden tw-overflow-y-hidden">
        <div
          className="tw-flex tw-flex-nowrap tw-bg-black md:tw-p-12  md:tw-mt-12"
          ref={slider}
        >
          <div className="tw-flex tw-flex-grow tw-flex-nowrap tw-relative tw-mb-12 ">
            {galery.map((item) => {
              return (
                <div className="tw-px-4 tw-relative tw-w-[75vw] md:tw-w-[50vw] md:tw-h-[400px] panel tw-flex tw-items-center tw-justify-center">
                  <Image
                    key={item.id}
                    src={item.imageurl}
                    alt="Image"
                    width={1200}
                    height={1200}
                    className="md:tw-w-[50vw] md:tw-h-[400px] tw-object-contain "
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GaleriGSAPClient;
