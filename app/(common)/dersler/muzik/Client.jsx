"use client";
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import About1 from "@/public/assets/common/About1.png";
import muzik1 from "@/public/assets/dersler/muzik1.jpg";
import muzik2 from "@/public/assets/dersler/muzik2.jpg";

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
                        xl={5}
                        lg={5}
                        md={12}
                        sm={12}
                        xs={12}
                        data-aos="fade-up"
                      >
                        <div className="aboutUs">
                          <div className="titleFont">
                            <h1>Müzik</h1>
                            <p className="tw-mb-2 tw-text-lg">
                              Müzik, öncelikle okul ve okul öncesi dönemde
                              çocuğa şarkı ve tekerlemeler yolu ile dil
                              gelişimine katkı sağlar. Bunun yanında müzikal
                              etkinlikler de çocuğun yaratıcılığına yaratıcılık
                              katar. Araştırmaların sonucunda çocuğa
                              dinletilmesi gereken müzikler genel olarak klasik
                              müzik ve çocuk şarkıları olmalıdır. Çocuğun kelime
                              dağarcığını olumsuz etkileyecek müziklerden
                              kaçınılmalıdır.
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
                              src={muzik1}
                              alt="Boğaziçi Müzik"
                              width={500}
                              height={500}
                              className="tw-h-96 tw-w-full mx-auto tw-object-contain"
                            />
                            <Image
                              src={muzik2}
                              alt="Boğaziçi Müzik"
                              width={500}
                              height={500}
                              className="tw-h-96 tw-w-full mx-auto tw-object-contain"
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
                            <p>
                              Çocuklarımızın bu dönemde hızlı soru çözebilme ve
                              adaptasyonu sağlaması adına konsantrasyon
                              becerilerini destekler, müzik beynin birden fazla
                              alanını aktive ettiğinden dikkat süreleri ve
                              dikkat becerileri artar. Bu çocukların uyaranları
                              ayırt edebilme de diğer çocuklara göre daha
                              başarılı oldukları araştırılmıştır.{" "}
                            </p>
                            <p>
                              Çocuğu müzikle tanıştırmak için belirli bir
                              program izlenmelidir. Evde televizyon yerine müzik
                              dinleme saatleri yapmak, konserlere gitmek ve
                              uyumadan önce klasik müzik dinletmek hem rahat
                              uyumasını sağlar hem de müziğe ilgisini artırır.
                              Çocuğun müzik kulağı ve yatkınlığına dikkat
                              edilmeli, anne baba model olmalı ve ilgi duyduğu
                              müzik aletini çalması için teşvik etmelidir.
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
