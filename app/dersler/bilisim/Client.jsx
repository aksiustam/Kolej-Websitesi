"use client";
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import About1 from "@/public/assets/AboutUs/About1.png";
import image1 from "@/public/image/oyun/image1.jpg";
import image2 from "@/public/image/oyun/image2.jpeg";

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
      autoplaySpeed: 2000,
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
            slidesToShow: 3,
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
                        src={image2}
                        alt="Oyun Odası Resmi2"
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
                    <h2>Bilişim Teknolojileri ve Yazılım</h2>
                    <p className="tw-mb-4">
                      Boğaziçi Kolejinde Bilişim Teknolojileri ve Yazılım
                      dersinin amacı, öğrencilere algoritmik ve hesaplamalı
                      düşünme becerisi kazandırarak çevrelerini ve dünyayı
                      anlamalarını kolaylaştırmaktır. Kodlama çalışmaları,
                      matematik ve fen bilimleriyle yakından ilişkilidir ve bu
                      alanlardaki gerçek yaşam problemleri, bilgisayar
                      programları aracılığıyla gerçeğe en yakın çözümlerle
                      canlandırılır.
                    </p>
                    <p className="tw-mb-4">
                      Öğrenciler bu eğitimler aracılığı ile bilgisayar
                      bilimlerinin temelini kavrayıp, soyutlama ve hayal gücünü
                      genişleterek, mantık, algoritma ve veri tanımlarını gerçek
                      hayat problemlerini çözerken de kullanabilecektir.
                    </p>
                    <p className="tw-mb-4">
                      Öğrenciler problemleri hesaplamalı terimler ile ifade
                      edebilecek, algoritmalar kurabilecek ve uzun hesaplamalar
                      ve zaman gerektiren işlemleri bilgisayarlar aracılığı ile
                      yapabilecektir.
                    </p>
                    <p className="tw-mb-4">
                      Öğrenciler bilgi teknolojilerini daha bilinçli kullanmayı
                      öğrenirken kullandıkları cihazları kendi çözümlerine uygun
                      olarak programlamayı öğreneceklerdir.
                    </p>
                    <p className="tw-mb-4">
                      Öğrenciler bilgi ve iletişim teknolojilerinin artık
                      yaratıcı birer kullanıcısı olmanın yanında sorumluluk
                      sahibi, yetkin, kendine güvenen bireyler olarak
                      eğitimlerine devam edeceklerdir.
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
                    <div className="aboutUsIconSideText">
                      <h6 className="!tw-font-extrabold"> Günde 2 Saat </h6>
                      <p>13-15 Yaş Gruplarında</p>
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
