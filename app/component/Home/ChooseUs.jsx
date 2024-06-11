"use client";

import { Row, Col } from "react-bootstrap";

import Icon1 from "@/public/assets/Images/Choose/Icon1.png";
import Icon2 from "@/public/assets/Images/Choose/Icon2.png";
import Icon3 from "@/public/assets/Images/Choose/Icon3.png";
import Icon4 from "@/public/assets/Images/Choose/Icon4.png";
import CountUp from "react-countup";
import Image from "next/image";

export default function ChooseUs() {
  return (
    <>
      <div className="chooseBanneImg">
        <div className="container">
          <Row className="align-items-center">
            <Col xl={7} lg={7} md={6} sm={12} data-aos="fade-up">
              <div className="titleFont">
                <h3>Neden Bizi Tercih Etmeli?</h3>
                <h2>Öğrenci Merkezli Eğitim Sunuyoruz</h2>
              </div>
              <p className="paragraph">
                Boğaziçi Koleji olarak, öğrenci odaklı yaklaşımlarımızla
                eğitimde en iyisini hedefliyoruz. Her öğrencinin potansiyelini
                en üst seviyeye çıkarmak için modern eğitim teknikleri ve
                bireysel destek sağlıyoruz.
              </p>
            </Col>
            <Col xl={5} lg={5} md={6} sm={12} data-aos="flip-down">
              <Row>
                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                  <div className="chooseBox text-center">
                    <Image
                      src={Icon1}
                      alt="Choose us"
                      width={50}
                      height={50}
                      className="img-fluid mx-auto"
                    />

                    <h3>
                      <CountUp end={2570} duration={5.74} />
                    </h3>
                    <h6>Mezun Öğrenci</h6>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                  <div className="chooseBox text-center">
                    <Image
                      src={Icon2}
                      alt="Choose us"
                      width={50}
                      height={50}
                      className="img-fluid mx-auto"
                    />

                    <h3>
                      <CountUp end={224} duration={5.75} />
                    </h3>
                    <h6>Başarılı Öğrenci</h6>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                  <div className="chooseBox text-center">
                    <Image
                      src={Icon3}
                      alt="Choose us"
                      width={50}
                      height={50}
                      className="img-fluid mx-auto"
                    />

                    <h3>
                      <CountUp end={64} duration={5.75} />
                    </h3>
                    <h6>Öğretim Üyesi </h6>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                  <div className="chooseBox text-center">
                    <Image
                      src={Icon4}
                      alt="Choose us"
                      width={50}
                      height={50}
                      className="img-fluid mx-auto"
                    />

                    <h3>
                      <CountUp end={10} duration={5.75} />
                    </h3>
                    <h6>Yıldır Tecrübe</h6>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
