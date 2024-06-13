"use client";

import Image from "next/image";
import logo from "@/public/assets/common/bogazlogokare.png";
const AnasayfaClient = () => {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
      <div className="tw-w-[400px] tw-h-[400px]">
        <Image
          src={logo}
          alt="Logo"
          width={1222}
          height={1222}
          className="tw-object-contain"
        />
      </div>
      <div className="tw-w-full tw-text-center tw-text-3xl tw-text-shadow-lg tw-font-bold">
        ADMİN PANELİ
      </div>
    </div>
  );
};

export default AnasayfaClient;
