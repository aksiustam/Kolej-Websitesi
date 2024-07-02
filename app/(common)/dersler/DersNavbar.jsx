"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
const DersNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const dersler = [
    { id: 0, name: "Matematik", slug: "matematik", hex: "#9932CC" },
    { id: 1, name: "Fen Bilimleri", slug: "fen", hex: "#228B22" },
    { id: 2, name: "Türkçe", slug: "turkce", hex: "#D2691E" },
    { id: 3, name: "Sosyal Bilgiler", slug: "sosyal", hex: "#FF8C00" },
    { id: 4, name: "İngilizce", slug: "ingilizce", hex: "#C71585" },
    { id: 5, name: "Görsel Sanatlar", slug: "resim", hex: "#B8860B" },
    { id: 6, name: "Beden Eğitimi", slug: "beden", hex: "#8B4513" },
    { id: 7, name: "Müzik", slug: "muzik", hex: "#8B0000" },
    {
      id: 8,
      name: "Bilişim Teknolojileri ve Yazılım",
      slug: "bilisim",
      hex: "#483D8B",
    },
    { id: 9, name: "Din Kültürü", slug: "dindersi", hex: "#008B8B" },
  ];
  return (
    <>
      {isSidebarOpen === true ? (
        <div className="tw-bg-white tw-p-3 tw-rounded-2xl">
          {dersler?.map((item) => (
            <Link
              key={item.id}
              href={`/dersler/${item?.slug}`}
              className="tw-text-inherit tw-decoration-transparent"
            >
              <div className="tw-mb-3 tw-px-4 tw-py-4 tw-bg-gray-200 tw-rounded-xl   tw-group tw-flex tw-items-center tw-justify-between tw-relative">
                <div className="tw-absolute tw-inset-0 tw-bg-blue-800 tw-transform tw-scale-x-0 group-hover:tw-scale-x-100 tw-transition-transform tw-duration-1000 tw-origin-left tw-rounded-xl"></div>

                <div className="tw-font-semibold tw-text-[#666666] group-hover:tw-text-white tw-z-[1]">
                  {item.name}
                </div>
                <IoIosArrowForward
                  size={16}
                  className="group-hover:tw-text-white tw-z-[1]"
                />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="tw-bg-white tw-p-6 tw-rounded-2xl tw-flex tw-flex-nowrap tw-gap-2 tw-overflow-x-scroll">
          {dersler?.map((item) => (
            <Link
              key={item.id}
              href={`/dersler/${item?.slug}`}
              className="tw-text-inherit tw-decoration-transparent hover:tw-bg-slate-100"
            >
              <span className="tw-font-semibold tw-text-[#666666] tw-text-lg tw-rounded-full tw-px-5 tw-py-3 tw-bg-slate-100 tw-mb-2 tw-text-nowrap">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default DersNavbar;

{
  /* <div className="tw-mb-3 tw-px-4 tw-py-4 tw-bg-gray-200 tw-rounded-xl   tw-group tw-flex tw-items-center tw-justify-between tw-relative">
                <div className="tw-absolute tw-inset-0 tw-bg-blue-800 tw-transform tw-scale-x-0 group-hover:tw-scale-x-100 tw-transition-transform tw-duration-1000 tw-origin-left tw-rounded-xl"></div>

                <div className="tw-font-semibold tw-text-[#666666] group-hover:tw-text-white tw-z-[1]">
                  
                </div>
                <IoIosArrowForward
                  size={16}
                  className="group-hover:tw-text-white tw-z-[1]"
                />
              </div> */
}
