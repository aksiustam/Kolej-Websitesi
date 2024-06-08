"use client";
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import About1 from "@/public/assets/Images/AboutUs/About1.png";
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
                    <h2 className="tw-mb-4">Din Kültürü ve Ahlak Bilgisi</h2>
                    <p className="tw-mb-4">
                      Din Kültürü ve Ahlak Bilgisi dersinin genel amacı
                      eğitimin, yaşamın tüm ögeleriyle uyumlu bir şekilde
                      hayatını devam ettirmeyi öğrencilerimize öğretip huzurlu
                      ve mutlu bireyler yetiştirmektir. Eğitimimizin vazifesi,
                      değişen kültür şartlarına göre daima yeni intibaklar
                      sağlayacak gençleri değil, fakat değişmelere müsbet bir
                      yön verme gücünde olan gençler yetiştirmektir.
                    </p>
                    <p className="tw-mb-4">
                      Okulumuzun Din Kültürü ve Ahlak Bilgisi öğretiminin genel
                      amacı: Temel ve ortaöğretimde öğrenciye, Türk Milli Eğitim
                      Politikası doğrultusunda genel amaçlarına, ilkelerine ve
                      Atatürk’ün laiklik ilkesine uygun, din, İslam dini ve
                      ahlak bilgisi ile ilgili yeterli temel bilgileri
                      kazandırmak; böylece Atatürkçülüğün, milli birlik ve
                      beraberliğin, insan sevgisinin, dini ve ahlaki yönden
                      geliştirilmesini sağlamak, iyi ahlaklı ve faziletli
                      insanlar yetiştirmektir.
                    </p>
                    <p className="tw-mb-6">
                      <strong>Derste Kullandığımız Yöntemler:</strong> Konu ile
                      ilgili çeşitli etkinlikler, oyunlar, geziler, video
                      gösterimi ile öğrenmeyi en üst düzeyde sağlamaktayız.
                      Milli Eğitim Bakanlığı kitaplarının yanında soru
                      bankaları, yaprak testler, konu anlatımlı yardımcı
                      kaynaklar kullanmaktayız. Ayrıca öğrenmeyi kalıcı hale
                      getirebilmek için her ay deneme sınavı, her konu bitiminde
                      ise konu tarama testi yapmaktayız. Akbim sistemi ile ödev
                      kontrollerini veli ile işbirliği içerisinde takip
                      etmekteyiz.
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
