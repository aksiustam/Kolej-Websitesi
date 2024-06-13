"use client";

import aboutus from "@/public/assets/Images/AboutUs/aboutus.jpg";
import { Row, Col } from "react-bootstrap";

import Image from "next/image";
import Link from "next/link";
export default function AboutUs() {
  return (
    <>
      <div className="container -tw-mt-6">
        <div className="aboutus spacing">
          <Row className="aboutRow">
            <Col xl={6} lg={6} md={6} sm={5} xs={12}>
              <Image
                src={aboutus}
                alt="AboutUs"
                width={1424}
                height={768}
                className="img-fluid mx-auto"
                data-aos="flip-down"
              />
            </Col>

            <Col xl={6} lg={6} md={6} sm={7} xs={12} data-aos="fade-up">
              <div className="titleFont">
                <h3>Konya Boğaziçi Koleji</h3>
                <h2>
                  DAHA İYİ BİR GELECEK İÇİN{" "}
                  <span className="tw-text-red-600">BOĞAZİÇİ</span>
                </h2>
              </div>
              <p className="paragraph">
                Eğitime gönül vermenin ülke geleceğine ne denli fayda
                sağlayacağının farkındalığına sahip olan Boğaziçi Koleji
                eğitime, bilime, gelişime sevdalı bir kurumdur. Dimağındaki
                çağdaş eğitim düsturuyla eğitime öncü hizmetler vermektedir.
              </p>
              <div className="aboutUsPoint">
                <Row>
                  <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <div className="aboutCheckPoint">
                      <i className="fas fa-check-circle"></i>
                      <span>Bilgili</span>
                    </div>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <div className="aboutCheckPoint">
                      <i className="fas fa-check-circle"></i>
                      <span>Evrensel</span>
                    </div>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <div className="aboutCheckPoint">
                      <i className="fas fa-check-circle"></i>
                      <span>Duyarlı</span>
                    </div>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <div className="aboutCheckPoint">
                      <i className="fas fa-check-circle"></i>
                      <span>İşbirlikçi</span>
                    </div>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <div className="aboutCheckPoint">
                      <i className="fas fa-check-circle"></i>
                      <span>Açık Fikirli</span>
                    </div>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <div className="aboutCheckPoint">
                      <i className="fas fa-check-circle"></i>
                      <span>Düşünen</span>
                    </div>
                  </Col>
                </Row>
              </div>
              <button className="button tw-text-white">
                <Link href={"/egitim-sistemimiz"} className="tw-text-white">
                  Daha Fazla
                </Link>
              </button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
