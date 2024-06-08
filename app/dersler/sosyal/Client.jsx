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
                    <h2>Sosyal Bilgiler Dersi Amacı</h2>
                    <p className="tw-mb-2">
                      Öğretmenlerimiz tarafından hazırlanan müfredat kapsamını
                      destekleyen yayınlar ve ders slaytları, belgeseller,
                      İnternet aracılığı ile yapılan sanal müze gezileri ile
                      konular görselleştirilmekte ve bilgilerin kalıcılığı
                      sağlanmaktadır.
                    </p>
                    <p className="tw-mb-2">
                      İnsan ve toplum hayatında var olan değişim ve gelişimin
                      sürekliliğini fark ederek buna uyum sağlayan, değişime
                      açık bireyler olarak yetişmeleri diğer önemli
                      hedeflerimizdir.
                    </p>
                    <p className="tw-mb-2">
                      Öğrencilerimizin öğrenme sürecinde yaparak ve yaşayarak
                      sağlıklı düşünme ortamına ulaşabilmesi için derslerimizde
                      drama tekniği kullanılmaktadır.
                    </p>
                    <p className="tw-mb-2">
                      Öğrencilerimize hayat boyu kullanabilecekleri yaratıcı ve
                      eleştirel düşünme becerisi kazandırılmaktadır.
                    </p>
                    <p className="tw-mb-2">
                      Öğrencilerimizin kültürel mirasa sahip çıkmaları ve
                      kültürel mirası tanımaları için müze eğitimi çalışmaları
                      yapılmakta, tarihi ve doğal yerlere geziler
                      düzenlenmektedir.
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
