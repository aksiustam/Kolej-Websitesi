"use client";
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import About1 from "@/public/assets/common/About1.png";
import matematik1 from "@/public/assets/dersler/matematik1.jpg";
import matematik2 from "@/public/assets/dersler/matematik2.jpg";

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
                            <h1>Matematik</h1>
                            <p className="tw-mb-2 tw-text-lg">
                              Bilimdeki ilerlemelerle matematiği kullanma ve
                              anlama gereksinimi artmaktadır. Matematik, hem
                              günlük yaşamda hem de bilimde problemlerin
                              çözümünde önemli bir araçtır. Matematiğin üç temel
                              özelliği vardır: bir sistem olması, yapılardan ve
                              ilişkilerden oluşması, ve ardışık soyutlamalarla
                              yapıların oluşturulması. Okulumuzda 5. sınıftan 8.
                              sınıfa kadar bireysel etütlendirme ile
                              öğrencilerin eksikleri tespit edilip pekiştirme
                              sağlanmaktadır. Kullanılan kaynaklar:
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
                              src={matematik1}
                              alt="Boğaziçi Matematik"
                              width={500}
                              height={500}
                              className="tw-h-96 tw-w-full mx-auto tw-object-contain"
                            />
                            <Image
                              src={matematik2}
                              alt="Boğaziçi Matematik"
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
                        <div className="aboutUs">
                          <div className="titleFont">
                            <p className="tw-mb-1">
                              Okulumuzda kullanmakta olduğumuz kaynaklar:
                            </p>
                            <ul>
                              <li> ● Meb kaynaklarımız</li>
                              <li> ● Çalışma fasikülleri</li>
                              <li> ● Soru bankaları</li>
                              <li> ● Yaprak test</li>
                              <li> ● Check-up sınavı</li>
                            </ul>
                            <p className="tw-mb-4">
                              Check-up sınavı ile öğrencilerimizin sınav takibi
                              yapılarak ünite sonunda yapmış olduğu sınav
                              sonucuna göre ödevlendirme ve etüt takip sistemi
                              ile öğrenciler sürece dahil edilir. Ayrıca her
                              hafta sonu yapılan deneme sınavında
                              öğrencilerimizin haftalık konu tekrarlarının
                              takibi yapılmaktadır.
                            </p>
                            <p>
                              Okulumuzda öncelikle her öğrencinin bireysel
                              farklılıkları gözetilerek her sınıf seviyesine ve
                              öğrenci seviyelerine uygun olarak sorumluluk ve
                              ödev bilinci kazandırılır. Örneğin; 5. sınıflarda
                              5 yayın, 6. sınıflarda 6 yayın, 7. sınıflarda 7
                              yayın ve 8. sınıflarda ise minimum 8 yayın
                              çözdürülüp takibi yapılmaktadır.
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
