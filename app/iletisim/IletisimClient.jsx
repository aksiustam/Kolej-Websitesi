"use client";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Iframe from "react-iframe";
import Aos from "aos";
import "aos/dist/aos.css";
const IletisimClient = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Container className="tw-mt-12">
        <div className="Title">
          <Row>
            <Col xl={6} lg={6} md={6} sm={12}>
              <div className="contact" data-aos="fade-up">
                <div className="Contact-title">
                  <h6>İletişim</h6>
                  <h2>Konya Boğaziçi Koleji</h2>
                  <p>
                    Eğitime gönül vermenin ülke geleceğine ne denli fayda
                    sağlayacağının farkındalığına sahip olan Boğaziçi Koleji
                    eğitime, bilime, gelişime sevdalı bir kurumdur. Dimağındaki
                    çağdaş eğitim düsturuyla eğitime öncü hizmetler vermektedir.
                  </p>
                </div>
                <div className="Contact-Social">
                  <div className="Contact-Social-box">
                    <div className="Contact-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="Conact-icon-detail">
                      <h3>E-Mail</h3>
                      <div>
                        <a
                          className="Contact-no-mail"
                          href="mailto:konyabogazicikoleji@gmail.com"
                        >
                          konyabogazicikoleji@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="Contact-Social-box">
                    <div className="Contact-icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="Conact-icon-detail">
                      <h3>Telefon</h3>
                      <div>
                        <span className="Contact-Social-text">Tel :</span>
                        <span className="Contact-no-mail">0332 323 00 99</span>

                        <div>
                          <span className="Contact-Social-text">Tel :</span>
                          <span className="Contact-no-mail">
                            0332 353 84 84
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="Contact-Social-box">
                    <div className="Contact-icon">
                      <i className="far fa-map"></i>
                    </div>
                    <div className="Conact-icon-detail">
                      <h3>Adress</h3>
                      <div>
                        <div>
                          <span className="Contact-Social-text">
                            Kılınçarslan Mahallesi Denizli Sokak No:20 Selçuklu
                            / Konya
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12}>
              <div className="form-box" data-aos="fade-up">
                <div className="Contact-form">
                  <h2 className="tw-mb-4">Bizimle İletişimde Kalınız</h2>
                  <Row>
                    <Col xl={6} lg={6} sm={6}>
                      <div className="Form-group">
                        <span>
                          <input
                            type="text"
                            name="name"
                            placeholder="Ad Soyad"
                          />
                        </span>
                      </div>
                    </Col>
                    <Col xl={6} lg={6} sm={6}>
                      <div className="Form-group">
                        <span>
                          <input type="email" placeholder="Email" />
                        </span>
                      </div>
                    </Col>
                    <Col xl={12} lg={12} sm={12}>
                      <div className="Form-group">
                        <span>
                          <input type="text" placeholder="Konu" />
                        </span>
                      </div>
                    </Col>
                    <Col xl={12} lg={12} sm={12}>
                      <div className="Form-group Contact-textarea">
                        <span>
                          <textarea type="text" placeholder="Mesajınız..." />
                        </span>
                      </div>
                    </Col>

                    <Col xl={12} lg={12} sm={12}>
                      <div>
                        <Button className="btn-box-common">Gönder</Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="Map">
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3148.834625286771!2d32.471472!3d37.88755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d085bfbdd19d1b%3A0xd3e4a356189f4ea4!2sKonya%20Bo%C4%9Fazi%C3%A7i%20Koleji!5e0!3m2!1str!2str!4v1717675495682!5m2!1str!2str"
          frameBorder="0"
          height="450"
        />
      </div>
    </>
  );
};
export default IletisimClient;
