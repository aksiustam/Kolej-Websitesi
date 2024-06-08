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
                    <h2>İngilizce Dersi ve Önemi</h2>
                    <p className="tw-mb-4">
                      İngilizce, küresel çağın en önemli iletişim araçlarından
                      bir tanesidir. Eğitim ve ticaret dili olarak dünyanın her
                      yerinde kullanılmaktadır. Boğaziçi Kolejinde İngilizce
                      öğretimindeki amaç, öğrencilerimizin bilgi ve becerilerini
                      en üst düzeyde tutarak akademik başarılarını artırmaktır.
                      Ancak ülkemizde sınav gerçeğini de unutmadan
                      öğrencilerimizin her yönden gelişmesini sağlamaktır.
                    </p>
                    <p className="tw-mb-4">
                      5. sınıflara 12 saat İngilizce eğitimi verilerek
                      öğrencilerimizin B1 düzeyine ulaşması sağlanmaktır. Aynı
                      zamanda 6-7 ve 8. Sınıflara yönelik aktivitelerle
                      İngilizce dersini sevdirmek ve yaşamlarında aktif olarak
                      kullanabilme imkanı sunulmaktadır.
                    </p>
                    <p className="tw-mb-4">
                      İngilizce oyun, drama, sunum, şarkı vb. gibi öğretim
                      teknikleri kullanılarak eğlenceli hale getirilip
                      sevdirilmektedir. Aynı zamanda derslerimizde “ Listening,
                      Speaking, Reading, Writing “ becerileri aktif olarak
                      kullanılıp öğrencilerimizin her anlamda gelişmesi
                      sağlanmaktadır.
                    </p>
                    <p className="tw-mb-4">
                      Öğrencilerimiz aynı zamanda İngiltere merkezli sınavlara
                      girerek öğrencilerimizin hem dijital ortamda sınav
                      olmaları hem de bu dört beceriyi aktif bir şekilde sınavda
                      görmeleri sağlanmaktadır.
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
