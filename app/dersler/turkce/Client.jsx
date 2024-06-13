"use client";
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import About1 from "@/public/assets/common/About1.png";
import turkce1 from "@/public/assets/dersler/turkce1.jpg";
import turkce2 from "@/public/assets/dersler/turkce2.jpg";
import turkce3 from "@/public/assets/dersler/turkce3.jpg";

import "@/public/css/HomePage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import "@/public/css/Portfolio.css";
import { IoIosArrowForward } from "react-icons/io";

export default class Client extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      slide: ".slick-slideshow__slide",
      slidesToShow: 1,
      centerMode: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      centerPadding: "110px",
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            centerMode: false,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            centerMode: false,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          },
        },
      ],
    };

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
        <div className="otherPageBanner portfolioBanner">
          <div className="text-center title">
            <h6 className="tw-text-shadow-md">DERSLERİMİZ</h6>
          </div>
        </div>
        <section className="tw-px-6 tw-py-8 tw-bg-slate-100">
          <Container className="tw-my-12">
            <Row>
              <Col xl={3} lg={3} md={5} sm={12} xs={12}>
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
                          className="group-hover:tw-text-white"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </Col>
              <Col xl={9} lg={9} md={7} sm={12} xs={12}>
                <div className="container tw-mt-6 md:tw-mt-0">
                  <div className="mainAboutUs">
                    <Row>
                      <Col
                        xl={5}
                        lg={5}
                        md={12}
                        sm={12}
                        xs={12}
                        data-aos="fade-up"
                      >
                        <div className="aboutUs">
                          <div className="titleFont">
                            <h1>Türkçe</h1>
                            <p className="tw-mb-2 tw-text-lg">
                              Türkçe dersi, çocukta dil becerilerini geliştirme,
                              anadil bilincini kazandırma, iletişim becerilerini
                              arttırma, kendini en iyi şekilde ifade edebilme ve
                              diğer derslerle olan yakın ilişkileri nedeniyle
                              çok yönlü bir derstir. Özellikle son yıllarda
                              değişen soru tipleriyle birlikte, okuduğunu anlama
                              ve yorum yapabilme kabiliyeti tüm dersleri
                              etkilediğinden Türkçe dersi, çok daha fazla ön
                              plana çıkmaktadır.
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col
                        xl={7}
                        lg={7}
                        md={12}
                        sm={12}
                        xs={12}
                        data-aos="fade-up"
                      >
                        <div className="aboutSliderDiv">
                          <Slider className="aboutSlider" {...settings}>
                            <Image
                              src={turkce1}
                              alt="Boğaziçi Türkçe"
                              width={500}
                              height={500}
                              className="tw-h-96 tw-w-full mx-auto"
                            />
                            <Image
                              src={turkce2}
                              alt="Boğaziçi Türkçe"
                              width={500}
                              height={500}
                              className="tw-h-96 tw-w-full mx-auto"
                            />
                            <Image
                              src={turkce3}
                              alt="Boğaziçi Türkçe"
                              width={500}
                              height={500}
                              className="tw-h-96 tw-w-full mx-auto"
                            />
                          </Slider>
                        </div>
                      </Col>
                      <Col
                        xl={12}
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}
                        data-aos="fade-up"
                      >
                        <div className="aboutUs tw-mt-4">
                          <div className="titleFont">
                            <p className="tw-mb-3">
                              Boğaziçi Kolejinde, bilimsel düşünen, özgüven ve
                              özsaygısı yüksek, insan haklarına saygılı,
                              sorunlara çözüm üreten, barışçıl, ileri görüşlü,
                              entelektüel yönü gelişmiş, Türkçeyi yaşamında
                              etkin biçimde kullanan bireyler yetiştirmek Türkçe
                              dersinin amaçları arasındadır.
                            </p>
                          </div>
                          <div className="aboutIconMainDivFloat tw-mt-4">
                            <div className="aboutIconMainDiv">
                              <div className="aboutIconCircle tw-mr-4">
                                <Image
                                  src={About1}
                                  alt="OurFeature"
                                  width={50}
                                  height={50}
                                  className="img-fluid mx-auto"
                                />
                              </div>
                            </div>
                            <div className="aboutUsIconSideText !tw-flex tw-flex-col tw-justify-center">
                              <h6 className="!tw-font-extrabold">
                                Günde 2 Saat
                              </h6>
                              <p>12-15 Yaş Gruplarında</p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
