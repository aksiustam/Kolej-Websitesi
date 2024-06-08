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
                    <h2>Matematik</h2>
                    <p className="tw-mb-2">
                      Bilimdeki ilerlemelerle matematiği kullanma ve anlama
                      gereksinimi artmaktadır. Matematik, hem günlük yaşamda hem
                      de bilimde problemlerin çözümünde önemli bir araçtır.
                      Matematiğin üç temel özelliği vardır: bir sistem olması,
                      yapılardan ve ilişkilerden oluşması, ve ardışık
                      soyutlamalarla yapıların oluşturulması. Okulumuzda 5.
                      sınıftan 8. sınıfa kadar bireysel etütlendirme ile
                      öğrencilerin eksikleri tespit edilip pekiştirme
                      sağlanmaktadır. Kullanılan kaynaklar:
                    </p>
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
                      yapılarak ünite sonunda yapmış olduğu sınav sonucuna göre
                      ödevlendirme ve etüt takip sistemi ile öğrenciler sürece
                      dahil edilir. Ayrıca her hafta sonu yapılan deneme
                      sınavında öğrencilerimizin haftalık konu tekrarlarının
                      takibi yapılmaktadır.
                    </p>
                    <p>
                      Okulumuzda öncelikle her öğrencinin bireysel farklılıkları
                      gözetilerek her sınıf seviyesine ve öğrenci seviyelerine
                      uygun olarak sorumluluk ve ödev bilinci kazandırılır.
                      Örneğin; 5. sınıflarda 5 yayın, 6. sınıflarda 6 yayın, 7.
                      sınıflarda 7 yayın ve 8. sınıflarda ise minimum 8 yayın
                      çözdürülüp takibi yapılmaktadır.
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
