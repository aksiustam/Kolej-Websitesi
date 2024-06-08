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
                    <h2>Beden Eğitimi</h2>
                    <p className="tw-mb-4">
                      Boğaziçi Koleji’nde beden eğitimi dersinin amacı
                      öğrencilerin bütün organ ve sistemleri seviyesine uygun
                      olarak güçlendirebilmek ve geliştirebilmek, sinir, kas ve
                      eklem koordinasyonunu sağlayabilmek, ritim ve müzik
                      eşliğinde hareketler yapabilmektir.
                    </p>
                    <p className="tw-mb-4">
                      Ayrıca öğrencinin görev ve sorumluluk alabilmesini, lidere
                      uyma ve liderlik yapabilmesini, kendine güven duymasını,
                      yerinde ve çabuk karar verebilmesini, dostça oynayabilmesi
                      ve yarışabilmesini, kazanma, takdir etme, kaybetmeyi kabul
                      etme, hile ve haksızlık karşısında durabilmeyi
                      sağlamaktır.
                    </p>
                    <p className="tw-mb-4">
                      Gazi Mustafa Kemal Atatürk’ün de dediği gibi ‘’Türk sosyal
                      bünyesinde spor düzenlemekle vazifeli olanlar, Türk
                      çocuklarının spor hayatını yüceltmeyi düşünürken sadece
                      gösteriş için herhangi bir yarışmada kazanmak azmiyle spor
                      yaptırmazlar. Esas olan bütün yaştaki Türkler için beden
                      eğitimi ve terbiyesini sağlamaktır.’
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
