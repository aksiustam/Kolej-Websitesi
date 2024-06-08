"use client";
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import About1 from "@/public/assets/AboutUs/About1.png";
import image1 from "@/public/image/oyun/image1.jpg";

import "@/public/css/HomePage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
export default class Client extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      slide: ".slick-slideshow__slide",
      slidesToShow: 2,
      centerMode: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      centerPadding: "110px",
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 2,
            centerMode: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            centerMode: false,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            centerMode: false,
            slidesToShow: 2,
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
        <div className="container">
          <div className="mainAboutUs">
            <Row>
              <Col xl={6} lg={6} data-aos="fade-up">
                <div className="aboutSliderDiv">
                  <Slider className="aboutSlider" {...settings}>
                    <div>
                      <Image
                        src={image1}
                        alt="Oyun Odası Resmi1"
                        width={500}
                        height={500}
                        className="tw-h-96 tw-w-full mx-auto"
                      />
                    </div>
                    <div>
                      <Image
                        src={image1}
                        alt="Oyun Odası Resmi1"
                        width={500}
                        height={500}
                        className="tw-h-96 tw-w-full mx-auto"
                      />
                    </div>
                  </Slider>
                </div>
              </Col>

              <Col xl={6} lg={6} data-aos="fade-up">
                <div className="aboutUs">
                  <div className="titleFont">
                    <h2 className="tw-mb-4">
                      Fen Bilimleri Eğitiminin Amaç ve Hedefleri
                    </h2>
                    <p className="tw-mb-8">
                      Okulumuzda fen bilimleri dersinde amaç kalıcı öğrenmeyi
                      gerçekleştirmektir. Kalıcı öğrenmenin sağlanabilmesi için
                      düz anlatım yerine öğrencilerin aktif olduğu etkinlik ve
                      uygulamaların yapıldığı bir öğretim ortamı
                      oluşturulmaktadır. Her ünite sonunda öğrencilerle konu ile
                      ilgili sınıf içi etkinlikler yapılmaktadır. Konu ile
                      ilgili çeşitli oyunlar hazırlanarak öğrenciler aktif hale
                      getirilmektedir. Tüm sınıfların fen bilimleri dersi
                      haricinde laboratuvar dersleri de mevcuttur. Laboratuvar
                      derslerinde öğrenilen konularla ilgili deneyler, maketler
                      yapılarak hem kalıcı öğrenme hem de öğrencilerin bilimsel
                      yöntemleri kullanarak günlük yaşantılarda karşılaşılan
                      problemlere çözüm üretme becerileri geliştirilmektedir.
                      Boğaziçi Koleji ile feni sever ve yeni şeyler öğreniriz.
                    </p>
                  </div>
                  <div className="aboutIconMainDivFloat">
                    <div className="aboutIconMainDiv">
                      <div className="aboutIconCircle">
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
                      <h6 className="!tw-font-extrabold">Günde 2 Saat</h6>
                      <p>12-15 Yaş Gruplarında</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}
