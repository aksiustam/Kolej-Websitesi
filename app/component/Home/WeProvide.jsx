"use client";

import { Row, Col } from "react-bootstrap";
import Icon1 from "@/public/assets/Images/WeProvide/Icon1.png";
import Icon2 from "@/public/assets/Images/WeProvide/Icon2.png";
import Icon3 from "@/public/assets/Images/WeProvide/Icon3.png";
import Icon4 from "@/public/assets/Images/WeProvide/Icon4.png";

import Image from "next/image";
import "./WeProvidecss.css";
import { useState } from "react";
export default function WeProvide() {
  const [boxes, setBoxes] = useState(0);

  const renderContent = () => {
    switch (boxes) {
      case 0:
        return (
          <p className="paragraph">
            Bridge adını "köprü" sözcüğünden alır. Okul öncesinden 5. sınıfa
            kadar öğrencilerimizin Matematik, Fen Bilgisi ve Hayat Bilgisi
            derslerinin konularını hem Türkçe hem de İngilizce olarak işlemeleri
            ve bu süreçte ihtiyaç duyacakları Yabancı Dili de kalıcı olarak
            edinmelerini hedefler.
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
  return (
    <>
      <div className="container">
        <div className="aboutus spacing">
          <Row className="align-items-center">
            <Col xl={6} lg={6} md={6} sm={6} xs={12} className="details-icon">
              <Row>
                <Col xl={4} lg={4} md={6} sm={6} xs={6}>
                  <div
                    className="weProBox tw-flex tw-flex-col tw-items-center tw-justify-center tw-cursor-pointer"
                    onClick={() => setBoxes(0)}
                  >
                    <div className="weProBoxImg">
                      <Image
                        src={Icon1}
                        alt="AboutUs"
                        width={300}
                        height={300}
                        className="img-fluid mx-auto"
                      />
                    </div>
                    <div className="weProBoxText tw-text-center">
                      <h6>1. Bridge</h6>
                    </div>
                  </div>
                </Col>
                <Col xl={4} lg={4} md={6} sm={6} xs={6}>
                  <div
                    className="weProBox tw-flex tw-flex-col tw-items-center tw-justify-center tw-cursor-pointer"
                    onClick={() => setBoxes(1)}
                  >
                    <div className="weProBoxImg">
                      <Image
                        src={Icon2}
                        alt="AboutUs"
                        width={300}
                        height={300}
                        className="img-fluid mx-auto"
                      />
                    </div>
                    <div className="weProBoxText tw-text-center">
                      <h6>2. Boresis - YETİ</h6>
                    </div>
                  </div>
                </Col>
                <Col xl={4} lg={4} md={6} sm={6} xs={6}>
                  <div
                    className="weProBox tw-flex tw-flex-col tw-items-center tw-justify-center tw-cursor-pointer"
                    onClick={() => setBoxes(2)}
                  >
                    <div className="weProBoxImg">
                      <Image
                        src={Icon3}
                        alt="AboutUs"
                        width={300}
                        height={300}
                        className="img-fluid mx-auto"
                      />
                    </div>
                    <div className="weProBoxText tw-text-center">
                      <h6>3. Global Schools</h6>
                    </div>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                  <div
                    className="weProBox tw-cursor-pointer"
                    onClick={() => setBoxes(3)}
                  >
                    <div className="weProBoxImg">
                      <Image
                        src={Icon4}
                        alt="AboutUs"
                        width={300}
                        height={300}
                        className="img-fluid mx-auto"
                      />
                    </div>
                    <div className="weProBoxText">
                      <h6>4. Bütüncül Eğitim</h6>
                    </div>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                  <div
                    className="weProBox tw-cursor-pointer"
                    onClick={() => setBoxes(4)}
                  >
                    <div className="weProBoxImg">
                      <Image
                        src={Icon4}
                        alt="AboutUs"
                        width={300}
                        height={300}
                        className="img-fluid mx-auto"
                      />
                    </div>
                    <div className="weProBoxText">
                      <h6>5. Endüstri 5.0</h6>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col
              xl={6}
              lg={6}
              md={6}
              sm={6}
              xs={12}
              data-aos="fade-up"
              className="details-summary"
            >
              <div className="titleFont">
                <h3>Geleceğe Hazırlayan</h3>
                <h2>Eğitim Modellerimiz</h2>
              </div>
              {renderContent()}
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
