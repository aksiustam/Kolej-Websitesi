"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./mybox.css";
import { HiMiniBars3 } from "react-icons/hi2";
import { BiWorld } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { BiAperture } from "react-icons/bi";
import { FaImages } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoMdExit } from "react-icons/io";
import { signOut } from "next-auth/react";
const AdminLayout = ({ children }) => {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const pathname = usePathname();
  const logout = () => {
    signOut();
    router.push("/");
    router.refresh();
  };
  return (
    <div>
      <nav className="md:tw-left-0 md:tw-block md:tw-fixed md:tw-top-0 md:tw-bottom-0 md:tw-overflow-y-auto md:tw-flex-row md:tw-flex-nowrap md:tw-overflow-hidden tw-shadow-xl tw-bg-white tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-relative md:tw-w-64 tw-z-10 tw-py-4 tw-px-6">
        <div className="md:tw-flex-col md:tw-items-stretch md:tw-min-h-full md:tw-flex-nowrap tw-px-0 tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-w-full tw-mx-auto">
          {/* Toggler */}
          <button
            className="tw-cursor-pointer tw-text-black tw-opacity-50 md:tw-hidden tw-px-3 tw-py-1 tw-text-xl tw-leading-none  tw-rounded tw-border tw-border-solid "
            type="button"
            onClick={() =>
              setCollapseShow("tw-bg-white tw-m-2 tw-py-3 tw-px-6")
            }
          >
            <HiMiniBars3 size={24} />
          </button>
          {/* Brand */}
          <Link
            href="/admin"
            className="md:tw-flex md:tw-pb-2 tw-text-blueGray-600 tw-mr-0 tw-inline-block tw-text-sm tw-uppercase tw-font-bold tw-p-4 tw-px-0 tw-text-center"
          >
            Boğaziçi Koleji Admin Paneli
          </Link>
          <div className="tw-w-full tw-flex tw-items-center tw-justify-center">
            <div className="tw-w-16 tw-h-16">
              <Image
                src={"/assets/common/bogazlogokare.png"}
                alt={"LOGO"}
                fill
                className="!tw-relative tw-object-contain"
              />
            </div>
          </div>
          {/* Collapse */}
          <div
            className={
              "md:tw-flex md:tw-flex-col md:tw-items-stretch md:tw-opacity-100 md:tw-relative md:tw-mt-4 md:tw-shadow-none tw-shadow tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-z-40 tw-overflow-y-auto tw-overflow-x-hidden tw-h-auto tw-items-center tw-flex-1 tw-rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:tw-min-w-full md:tw-hidden tw-block tw-pb-4 tw-mb-4 tw-border-b tw-border-solid tw-border-blueGray-200">
              <div className="tw-flex tw-flex-wrap">
                <div className="tw-w-6/12">
                  <Link
                    href="/"
                    className="md:tw-block tw-text-left md:tw-pb-2 tw-text-blueGray-600 tw-mr-0 tw-inline-block tw-whitespace-nowrap tw-text-sm tw-uppercase tw-font-bold tw-p-4 tw-px-0"
                  >
                    Admin Paneli
                  </Link>
                </div>

                <div className="tw-w-6/12 tw-flex tw-justify-end">
                  <button
                    type="button"
                    className="tw-cursor-pointer tw-text-black tw-opacity-50 md:tw-hidden tw-px-3 tw-py-1 tw-text-xl tw-leading-none tw-rounded tw-border tw-border-solid"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <HiMiniBars3 size={24} />
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="tw-my-4 md:tw-min-w-full" />

            <ul className="md:tw-flex-col md:tw-min-w-full tw-flex tw-flex-col tw-list-none">
              <li className="tw-items-center">
                <Link
                  href="/"
                  className={
                    "tw-text-xs tw-uppercase tw-py-3 tw-font-bold tw-flex tw-flex-row tw-items-center tw-justify-start " +
                    (pathname.indexOf("/home") !== -1
                      ? "tw-text-sky-600 hover:tw-text-sky-700"
                      : "hover:tw-text-sky-600")
                  }
                >
                  <BiWorld size={24} className={"tw-mr-2 "} />
                  WEBSİTE
                </Link>
              </li>
              <li className="tw-items-center">
                <Link
                  href="/admin/anasayfa"
                  className={
                    "tw-text-xs tw-uppercase tw-py-3 tw-font-bold tw-flex tw-flex-row tw-items-center tw-justify-start " +
                    (pathname === "/admin/anasayfa"
                      ? "tw-text-sky-600 hover:tw-text-sky-700"
                      : "hover:tw-text-sky-600")
                  }
                >
                  <FaHome size={24} className={"tw-mr-2 "} />
                  ANASAYFA
                </Link>
              </li>
              <li className="tw-items-center">
                <Link
                  href="/admin/galeri"
                  className={
                    "tw-text-xs tw-uppercase tw-py-3 tw-font-bold tw-flex tw-flex-row tw-items-center tw-justify-start " +
                    (pathname.indexOf("/admin/galeri") !== -1
                      ? "tw-text-sky-600 hover:tw-text-sky-700"
                      : "hover:tw-text-sky-600")
                  }
                >
                  <FaImages size={24} className={"tw-mr-2 "} />
                  GALERİ
                </Link>
              </li>
              <li className="tw-items-center">
                <Link
                  href="/admin/blog"
                  className={
                    "tw-text-xs tw-uppercase tw-py-3 tw-font-bold tw-flex tw-flex-row tw-items-center tw-justify-start " +
                    (pathname.indexOf("/admin/blog") !== -1
                      ? "tw-text-sky-600 hover:tw-text-sky-700"
                      : "hover:tw-text-sky-600")
                  }
                >
                  <IoNewspaperOutline size={24} className={"tw-mr-2 "} />
                  BLOG
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="tw-my-2 md:tw-min-w-full" />
            {/* Heading */}
            <h6 className="md:tw-min-w-full tw-text-blueGray-500 tw-text-xs tw-uppercase tw-font-bold tw-block tw-pt-1 tw-pb-4 tw-no-underline">
              AYARLAR
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="tw-items-center">
                <Link
                  href="/admin/ayarlar"
                  className={
                    "tw-text-xs tw-uppercase tw-py-3 tw-font-bold tw-flex tw-flex-row tw-items-center tw-justify-start " +
                    (pathname.indexOf("/admin/ayarlar") !== -1
                      ? "tw-text-sky-600 hover:tw-text-sky-700"
                      : "hover:tw-text-sky-600")
                  }
                >
                  <BiAperture size={24} className={"tw-mr-2 "} />
                  SİTE AYARLARI
                </Link>
              </li>
              <li className="tw-items-center">
                <span
                  className={
                    "tw-text-xs tw-uppercase tw-py-3 tw-font-bold tw-flex tw-flex-row tw-items-center tw-justify-start hover:tw-text-sky-600 tw-cursor-pointer"
                  }
                  onClick={() => logout()}
                >
                  <IoMdExit size={24} className={"tw-mr-2 "} />
                  ÇIKIŞ YAP
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="tw-relative md:tw-ml-64 tw-mt-12">
        <main className="tw-px-4 md:tw-px-10 tw-mx-auto tw-w-full">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
