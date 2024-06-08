"use client";
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import About1 from "@/public/assets/AboutUs/About1.png";
import image1 from "@/public/image/oyun/image1.jpg";
import image2 from "@/public/image/oyun/image2.jpeg";
import image3 from "@/public/image/oyun/image3.jpg";
import image4 from "@/public/image/oyun/image4.jpeg";
import image5 from "@/public/image/oyun/image5.jpg";
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
                    <h2>Müzik</h2>
                    <p>
                      Müzik, öncelikle okul ve okul öncesi dönemde çocuğa şarkı
                      ve tekerlemeler yolu ile dil gelişimine katkı sağlar.
                      Bunun yanında müzikal etkinlikler de çocuğun
                      yaratıcılığına yaratıcılık katar. Araştırmaların sonucunda
                      çocuğa dinletilmesi gereken müzikler genel olarak klasik
                      müzik ve çocuk şarkıları olmalıdır. Çocuğun kelime
                      dağarcığını olumsuz etkileyecek müziklerden
                      kaçınılmalıdır.
                    </p>
                    <p>
                      Çocuklarımızın bu dönemde hızlı soru çözebilme ve
                      adaptasyonu sağlaması adına konsantrasyon becerilerini
                      destekler, müzik beynin birden fazla alanını aktive
                      ettiğinden dikkat süreleri ve dikkat becerileri artar. Bu
                      çocukların uyaranları ayırt edebilme de diğer çocuklara
                      göre daha başarılı oldukları araştırılmıştır.{" "}
                    </p>
                    <p>
                      Çocuğu müzikle tanıştırmak için belirli bir program
                      izlenmelidir. Evde televizyon yerine müzik dinleme
                      saatleri yapmak, konserlere gitmek ve uyumadan önce klasik
                      müzik dinletmek hem rahat uyumasını sağlar hem de müziğe
                      ilgisini artırır. Çocuğun müzik kulağı ve yatkınlığına
                      dikkat edilmeli, anne baba model olmalı ve ilgi duyduğu
                      müzik aletini çalması için teşvik etmelidir.
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
                      <p>3-5 Yaş Gruplarında</p>
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
