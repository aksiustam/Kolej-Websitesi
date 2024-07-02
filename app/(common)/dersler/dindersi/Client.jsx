"use client";
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import About1 from "@/public/assets/common/About1.png";
import image1 from "@/public/assets/common/dersler/chess.jpg";

import "@/public/css/HomePage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import "@/public/css/Portfolio.css";
import DersNavbar from "../DersNavbar";

export default class Client extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
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
                <DersNavbar />
              </Col>
              <Col xl={9} lg={9} md={7} sm={12} xs={12}>
                <div className="container tw-mt-6 md:tw-mt-0">
                  <div className="mainAboutUs">
                    <Row>
                      <Col
                        xl={12}
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}
                        data-aos="fade-up"
                      >
                        <div className="aboutUs">
                          <div className="titleFont">
                            <h1 className="tw-mb-4">
                              Din Kültürü ve Ahlak Bilgisi
                            </h1>
                            <p className="tw-mb-4 tw-text-lg">
                              Din Kültürü ve Ahlak Bilgisi dersinin genel amacı
                              eğitimin, yaşamın tüm ögeleriyle uyumlu bir
                              şekilde hayatını devam ettirmeyi öğrencilerimize
                              öğretip huzurlu ve mutlu bireyler yetiştirmektir.
                              Eğitimimizin vazifesi, değişen kültür şartlarına
                              göre daima yeni intibaklar sağlayacak gençleri
                              değil, fakat değişmelere müsbet bir yön verme
                              gücünde olan gençler yetiştirmektir.
                            </p>
                            <p className="tw-mb-4 tw-mt-2">
                              Okulumuzun Din Kültürü ve Ahlak Bilgisi
                              öğretiminin genel amacı: Temel ve ortaöğretimde
                              öğrenciye, Türk Milli Eğitim Politikası
                              doğrultusunda genel amaçlarına, ilkelerine ve
                              Atatürk’ün laiklik ilkesine uygun, din, İslam dini
                              ve ahlak bilgisi ile ilgili yeterli temel
                              bilgileri kazandırmak; böylece Atatürkçülüğün,
                              milli birlik ve beraberliğin, insan sevgisinin,
                              dini ve ahlaki yönden geliştirilmesini sağlamak,
                              iyi ahlaklı ve faziletli insanlar yetiştirmektir.
                            </p>
                            <p className="tw-mb-6">
                              <strong>Derste Kullandığımız Yöntemler:</strong>{" "}
                              Konu ile ilgili çeşitli etkinlikler, oyunlar,
                              geziler, video gösterimi ile öğrenmeyi en üst
                              düzeyde sağlamaktayız. Milli Eğitim Bakanlığı
                              kitaplarının yanında soru bankaları, yaprak
                              testler, konu anlatımlı yardımcı kaynaklar
                              kullanmaktayız. Ayrıca öğrenmeyi kalıcı hale
                              getirebilmek için her ay deneme sınavı, her konu
                              bitiminde ise konu tarama testi yapmaktayız. Akbim
                              sistemi ile ödev kontrollerini veli ile işbirliği
                              içerisinde takip etmekteyiz.
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
