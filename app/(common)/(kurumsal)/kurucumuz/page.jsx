import React from "react";

import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import "@/public/css/Home.css";

import "@/public/css/Portfolio.css";
const page = () => {
  return (
    <>
      <div className="otherPageBanner portfolioBanner">
        <div className="text-center title">
          <h6 className="tw-text-shadow-md">MÜDÜRÜMÜZ</h6>
        </div>
      </div>
      <section>
        <Container className="tw-my-12">
          <div className="SelfDevelopment tw-p-12">
            <Row>
              <Col xl={4} lg={4} md={4} sm={5} xs={12}>
                <div></div>
              </Col>
              <Col xl={8} lg={8} md={8} sm={7} xs={12}>
                <div className="SelfDevelopment-Content !tw-mt-1">
                  <h5 className="!tw-text-3xl tw-my-3 !tw-text-black !tw-font-extrabold">
                    Kuruluş Müdürü
                  </h5>
                  <p className="!tw-font-bold tw-mb-2 !tw-text-base">
                    Kurucumuz kendi alanında 26 yıllık bir tecrübeye sahip olup,
                    Selçuk Üniversitesi Mesleki Eğitim Fakültesi Çocuk Gelişimi
                    Eğitimi Öğretmenliği ve Toros Üniversitesi İşletme
                    Bölümlerinden mezun olmuştur. Bitirme tezi olarak okul
                    öncesi öğretmenlerinin kaynaştırma eğitimindeki
                    yeterlilikleri hakkında yapmıştır. Ayrıca bu konu hakkında
                    bir makale yazarak Prag'da Amerikan Angola Üniversitesi'nin
                    hazırladığı seminerde sunum yapmış ve uluslararası bir bilim
                    dergisinde yayınlanmıştır.
                  </p>
                  <p className="!tw-font-bold tw-mb-2 !tw-text-base">
                    Kendi alanında kişisel eğitimleri için başta Montesorri
                    eğitmen eğitimi olmak üzere, Reggio Emilio, Waldorf eğitimi,
                    akıl zeka, dil ve konuşma bozukluğu, oyun terapisi, aile
                    danışmanlığı, eğitim yönetimi, etkili iletişim gibi
                    konularda sertifikaların sahibidir.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default page;
