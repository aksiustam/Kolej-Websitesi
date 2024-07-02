"use client";

import { Row, Col } from "react-bootstrap";
import Icon1 from "@/public/assets/Images/WeProvide/Icon1.png";
import Icon2 from "@/public/assets/Images/WeProvide/Icon2.png";
import Icon3 from "@/public/assets/Images/WeProvide/Icon3.png";
import Icon4 from "@/public/assets/Images/WeProvide/Icon4.png";

import Image from "next/image";
import "./WeProvidecss.css";
import { useState } from "react";

import imgbg from "@/public/assets/style/pattern-bogazici.png";
import { GiRialtoBridge } from "react-icons/gi";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaSchoolFlag } from "react-icons/fa6";

import { GiBrain } from "react-icons/gi";
import { GrVirtualMachine } from "react-icons/gr";
export default function WeProvide() {
  const [boxes, setBoxes] = useState(0);

  const renderContent = () => {
    switch (boxes) {
      case 0:
        return (
          <p className="paragraph">
            Bridge adını &quot;köprü&quot; sözcüğünden alır. Okul öncesinden 5.
            sınıfa kadar öğrencilerimizin Matematik, Fen Bilgisi ve Hayat
            Bilgisi derslerinin konularını hem Türkçe hem de İngilizce olarak
            işlemeleri ve bu süreçte ihtiyaç duyacakları Yabancı Dili de kalıcı
            olarak edinmelerini hedefler.
          </p>
        );
      case 1:
        return (
          <p className="paragraph">
            Boresis - YETİ insanda doğal olarak bulunan bir şeyi yapabilme gücü,
            doğal yatkınlık olarak açıklanmaktadır. İnsandaki düşünme, anlama,
            kavrama ya da imgeleme gibi doğal zihinsel süreçlerden her biri
            olarak tanımlanmaktadır.
          </p>
        );
      case 2:
        return (
          <p className="paragraph">
            Global Schools Programı, UNESCO’nun sürdürülebilir Kalkınma için
            Eğitime Yönelik Küresel Eylem Programını (ESD) destekleyen Birleşmiş
            Milletler Sürdürülebilir Kalkınma Çözümleri Ağı’nın bir girişimidir.
          </p>
        );
      case 3:
        return (
          <p className="paragraph">
            Bütüncül Eğitim felsefesi eğitimin en etkili yöntemidir.
            Öğrencilerimizin zihinsel, fiziksel, duygusal, sosyal ve kültürel
            olarak çok yönlü; değerler konusunda kendisini tamamlamı, başarılı
            bireysel olarak gelişmesini hedefler.
          </p>
        );
      case 4:
        return (
          <p className="paragraph">
            Endüstri 5.0 Küresel farklılıklara yöneliş, kültürler arasındaki
            ortak noktalarında keşfedilmesini sağlar. Dünya vatandaşı beyinlere
            erişmenin temel noktası küresel farkındalığa sahip, uzlaşmacı
            bireyler yetiştirmektir.
          </p>
        );
      default:
        return null;
    }
  };
  const renderContentH = () => {
    switch (boxes) {
      case 0:
        return <h2>1. Bridge</h2>;
      case 1:
        return <h2>2. Boresis - YETİ</h2>;
      case 2:
        return <h2>3. Global Schools</h2>;
      case 3:
        return <h2>4. Bütüncül Eğitim</h2>;
      case 4:
        return <h2>5. Endüstri 5.0</h2>;
      default:
        return null;
    }
  };
  return (
    <>
      <section
        className="tw-bg-gray-200 tw-py-5"
        style={{
          backgroundImage: `url(${imgbg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="aboutus spacing">
            <Row className="align-items-center">
              <Col
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="details-icon"
              >
                <Row>
                  <Col xl={4} lg={4} md={6} sm={6} xs={6}>
                    <div
                      className="weProBox tw-flex tw-flex-col tw-items-center tw-justify-center tw-cursor-pointer tw-group"
                      onClick={() => setBoxes(0)}
                      data-aos="fade-up"
                      onMouseEnter={() => setBoxes(0)}
                    >
                      <div className="weProBoxImg">
                        <GiRialtoBridge
                          size={50}
                          className="tw-text-red-500 group-hover:tw-text-white"
                        />
                      </div>
                      <div className="weProBoxText tw-text-center">
                        <h6 className="tw-text-nowrap xl:tw-text-wrap">
                          1. Bridge
                        </h6>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4} lg={4} md={6} sm={6} xs={6}>
                    <div
                      className="weProBox tw-flex tw-flex-col tw-items-center tw-justify-center tw-cursor-pointer tw-group"
                      onClick={() => setBoxes(1)}
                      data-aos="fade-up"
                      onMouseEnter={() => setBoxes(1)}
                    >
                      <div className="weProBoxImg">
                        <FaPeopleRoof
                          size={50}
                          className="tw-text-red-500 group-hover:tw-text-white"
                        />
                      </div>
                      <div className="weProBoxText tw-text-center">
                        <h6 className="tw-text-nowrap xl:tw-text-wrap">
                          2. Boresis - YETİ
                        </h6>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4} lg={4} md={6} sm={6} xs={6}>
                    <div
                      className="weProBox tw-flex tw-flex-col tw-items-center tw-justify-center tw-cursor-pointer tw-group"
                      onClick={() => setBoxes(2)}
                      data-aos="fade-up"
                      onMouseEnter={() => setBoxes(2)}
                    >
                      <div className="weProBoxImg">
                        <FaSchoolFlag
                          size={50}
                          className="tw-text-red-500 group-hover:tw-text-white"
                        />
                      </div>
                      <div className="weProBoxText tw-text-center">
                        <h6 className="tw-text-nowrap xl:tw-text-wrap">
                          3. Global Schools
                        </h6>
                      </div>
                    </div>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <div
                      className="weProBox tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-justify-center tw-cursor-pointer  tw-group"
                      onClick={() => setBoxes(3)}
                      data-aos="fade-up"
                      data-aos-delay="200"
                      onMouseEnter={() => setBoxes(3)}
                    >
                      <div className="weProBoxImg">
                        <GiBrain
                          size={50}
                          className="tw-text-red-500 group-hover:tw-text-white"
                        />
                      </div>
                      <div className="weProBoxText tw-text-center">
                        <h6 className="tw-text-nowrap xl:tw-text-wrap">
                          4. Bütüncül Eğitim
                        </h6>
                      </div>
                    </div>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <div
                      className="weProBox tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-justify-center tw-cursor-pointer  tw-group"
                      onClick={() => setBoxes(4)}
                      data-aos="fade-up"
                      data-aos-delay="200"
                      onMouseEnter={() => setBoxes(4)}
                    >
                      <div className="weProBoxImg">
                        <GrVirtualMachine
                          size={50}
                          className="tw-text-red-500 group-hover:tw-text-white tw-mr-0 lg:tw-mr-4"
                        />
                      </div>
                      <div className="weProBoxText tw-text-center">
                        <h6 className="tw-text-nowrap xl:tw-text-wrap">
                          5. Endüstri 5.0
                        </h6>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                data-aos="fade-up"
                className="details-summary"
              >
                <div className="titleFont">
                  <h3 className="!tw-mb-4 md:!tw-mb-1">
                    Geleceğe Hazırlayan <br />
                    <span className="tw-text-sm md:tw-text-base">
                      Eğitim Modellerimiz
                    </span>
                  </h3>
                  {renderContentH()}
                </div>
                {renderContent()}
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
}
