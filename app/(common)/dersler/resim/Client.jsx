"use client";
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import About1 from "@/public/assets/common/About1.png";
import sanat1 from "@/public/assets/dersler/sanat1.jpg";
import sanat2 from "@/public/assets/dersler/sanat2.jpg";
import sanat3 from "@/public/assets/dersler/sanat3.jpg";

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
                            <h1>Görsel Sanatlar Dersi</h1>
                            <p className="tw-mb-4 tw-text-base">
                              Görsel Sanatlar eğitiminin temelinde, öğrenciyi
                              gözle düşünmeye alıştırmak, doğaya, olaylara ve
                              yaşama bilinçle bakmayı öğretmek vardır. Özellikle
                              ortaöğretim düzeyindeki öğrencilere kendini ifade
                              etme ve iletişim kurma imkanı kazandırır. Kısaca
                              Görsel Sanatlar dersimizde öğreniyor, uyguluyor,
                              öğretiyor, düşünüyor ve sorguluyoruz. Boğaziçi
                              Eğitim Kurumları olarak Görsel Sanatlar dersimizde
                              herkesi sanatçı yapmak için değil, çağdaş dünyanın
                              bir gereği olarak herkesi sanattan bir parça
                              anlayabilir hale getirmeyi amaçlıyoruz.
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
                              src={sanat1}
                              alt="Boğaziçi Görsel Sanat"
                              width={500}
                              height={500}
                              className="tw-h-96 tw-w-full mx-auto tw-object-contain"
                            />
                            <Image
                              src={sanat2}
                              alt="Boğaziçi Görsel Sanat"
                              width={500}
                              height={500}
                              className="tw-h-96 tw-w-full mx-auto tw-object-contain"
                            />
                            <Image
                              src={sanat3}
                              alt="Boğaziçi Görsel Sanat"
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
                            <p className="tw-mb-4">
                              Öğrencilerimizin resim yapmak için çok iyi bir
                              gözlemci olmalarını, ayrıca sabırlı ve araştırmacı
                              kimlik kazanmalarını sağlamaktayız. Başarılı olmak
                              için titiz ve özenli çalışmaları gereken eğitimi
                              vermekteyiz.
                            </p>
                            <p className="tw-mb-4">
                              Sanat daha yaşanılabilir, barış içinde, mutlu,
                              huzurlu, sağlıklı ve insanca bir dünya kurmada en
                              büyük etkenlerden biridir. Bu nedenle toplumların
                              gelişmesinde öğrenciye verilen görsel sanat
                              eğitimi, geleceğe ışık tutmakta ve sanata bakış
                              açısını geliştirmektedir.
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
