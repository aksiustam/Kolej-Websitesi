"use client";
import { useState } from "react";
import { Row, Col, Collapse, Container, Button } from "react-bootstrap";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import logo from "@/public/image/bogazlogo.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [Useopen, UsesetOpen] = useState(false);
  const [Sopen, SsetOpen] = useState(false);
  const [Copen, CsetOpen] = useState(false);
  return (
    <>
      <div className="Footer">
        <Container>
          <Row className="Footerbox">
            <Col xl={4} lg={4} md={4}>
              <div className="F-col-1 footer-text">
                <div className="tw-pb-2 tw-border-b-2 tw-border-white">
                  <h2>
                    <Image
                      src={logo}
                      alt="logo"
                      width={210}
                      height={45}
                      className="mx-auto img-fluid"
                    />
                  </h2>
                </div>

                <p>
                  DreamLand Anaokulu, Konya’da Montessori eğitimi ile okul
                  öncesi eğitim sunan yenilikçi bir kurumdur.DreamLand
                  öğrencilerin öğrenme süreçlerinde aktif rol almalarını teşvik
                  eder ve doğayı anlamaları ile korumaları için kendi
                  keşiflerini yapmalarına olanak tanır.
                </p>
                <ul className="list-unstyled social-icon">
                  <li className="d-inline-block ">
                    <a href="/" className="d-block">
                      <i>
                        <GrFacebookOption />
                      </i>
                    </a>
                  </li>
                  <li className="d-inline-block">
                    <a href="/" className="d-block">
                      <i>
                        <FaLinkedinIn />
                      </i>
                    </a>
                  </li>
                  <li className="d-inline-block">
                    <a href="/" className="d-block">
                      <i>
                        <FaPinterestP />
                      </i>
                    </a>
                  </li>
                  <li className="d-inline-block">
                    <a href="/" className="d-block">
                      <i>
                        <BsTwitter />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={2} lg={2} md={2}>
              <div className="F-col-3 footer-text FooterVertical">
                <h2 className="footerLinkHeading">
                  Kurumsal
                  <Button
                    className="Footer-button"
                    onClick={() => UsesetOpen(!Useopen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={Useopen}
                  ></Button>
                </h2>
                <Collapse in={Useopen}>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/hakkimizda">Hakkımızda</Link>
                    </li>
                    <li>
                      <Link href="/fiziki-yapi">Fiziki Yapı</Link>
                    </li>
                    <li>
                      <Link href="/kurucumuz">Kurucumuz</Link>
                    </li>
                    <li>
                      <Link href="/ekibimiz">Ekibimiz</Link>
                    </li>
                    <li>
                      <Link href="/vizyon">Vizyonumuz</Link>
                    </li>
                    <li>
                      <Link href="/veli-gorus ">Veli Görüşlerimiz</Link>
                    </li>
                  </ul>
                </Collapse>
              </div>
            </Col>

            <Col xl={2} lg={2} md={2}>
              <div className="F-col-3 footer-text FooterVertical">
                <h2 className="footerLinkHeading">
                  Atolyeler
                  <Button
                    className="Footer-button"
                    onClick={() => SsetOpen(!Sopen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={Sopen}
                  ></Button>
                </h2>
                <Collapse in={Sopen}>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/aboutus">Tamirhane</Link>
                    </li>
                    <li>
                      <Link href="/gallery">Tamirhane</Link>
                    </li>
                    <li>
                      <Link href="/course">Tamirhane</Link>
                    </li>
                    <li>
                      <Link href="/faq">Tamirhane</Link>
                    </li>
                    <li>
                      <Link href="/terms">Tamirhane</Link>
                    </li>
                    <li>
                      <Link href="/policy ">Tamirhane</Link>
                    </li>
                  </ul>
                </Collapse>
              </div>
            </Col>
            <Col xl={4} lg={4} md={4}>
              <div className="F-col-4 footer-text FooterVertical">
                <h2 className="footerLinkHeading">
                  İletişim
                  <Button
                    className="Footer-button"
                    onClick={() => CsetOpen(!Copen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={Copen}
                  ></Button>
                </h2>
                <Collapse in={Copen}>
                  <ul className="list-unstyled">
                    <li>
                      <h4>Adress :</h4>
                      <span>Yazır, Batıhan Sk. 42250 Selçuklu/Konya</span>
                    </li>
                    <li>
                      <h4>Telefon :</h4>
                      <span>0530 607 71 68</span>
                    </li>
                  </ul>
                </Collapse>
              </div>
              <div className="F-col-4 footer-text FooterVertical">
                <h2 className="footerLinkHeading tw-mt-2 tw-border-b-2">
                  GİRİŞ ÇIKIŞ SAATLERİ
                  <Button
                    className="Footer-button"
                    onClick={() => CsetOpen(!Copen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={Copen}
                  ></Button>
                </h2>
                <Collapse in={Copen}>
                  <ul className="list-unstyled">
                    <li>
                      <h4>Nöbetçi Öğretmen</h4>
                      <span>07.15 - 18.45</span>
                    </li>
                    <li>
                      <h4>Eğitim Öğretim</h4>
                      <span>08.30 - 17.00</span>
                    </li>
                    <li>
                      <h4>Öğretmen</h4>
                      <span>08.00 - 17.30</span>
                    </li>
                    <li>
                      <h4>Cumartesi (Sadece Kayıt)</h4>
                      <span>10.00 - 17.00</span>
                    </li>
                    <li>
                      <h4>Pazar Kapalı</h4>
                    </li>
                  </ul>
                </Collapse>
              </div>
            </Col>
          </Row>
          <div className="Footer-bottom">
            <h6 className="F-copywrite">Copyright © 2024 . AYD TANITIM</h6>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
