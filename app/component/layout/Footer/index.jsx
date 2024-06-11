"use client";
import { useState } from "react";
import { Row, Col, Collapse, Container, Button } from "react-bootstrap";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import logo from "@/public/assets/common/bogazlogo.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const [Useopen, UsesetOpen] = useState(false);
  const [Sopen, SsetOpen] = useState(false);
  const pathname = usePathname();
  const checkadmin = pathname.startsWith("/admin");

  return (
    <>
      {!checkadmin && (
        <div className="Footer tw-bg-[#041D74] tw-pt-12">
          <Container>
            <Row className="Footerbox">
              <Col xl={4} lg={4} md={4}>
                <div className="F-col-1 footer-text">
                  <div className="tw-text-[#b7b1b1]">İLETİŞİM BİLGİLERİ</div>
                  <p>
                    Telefon: 0332 323 00 99
                    <br />
                    E-mail: konyabogazicikoleji@gmail.com <br /> Adres:
                    Kılınçarslan Mahallesi, Denizli Sokak, No:20 Selçuklu/Konya
                  </p>
                  <ul className="list-unstyled social-icon ">
                    <li className="d-inline-block ">
                      <a
                        href="https://www.facebook.com/konyabogazici"
                        className="d-block !tw-bg-[#041D74]"
                      >
                        <i>
                          <FaFacebook size={35} color="white" />
                        </i>
                      </a>
                    </li>
                    <li className="d-inline-block">
                      <a
                        href="https://www.instagram.com/konyabogazicikolej/"
                        className="d-block !tw-bg-[#041D74]"
                      >
                        <i>
                          <FaInstagram size={35} color="white" />
                        </i>
                      </a>
                    </li>
                    <li className="d-inline-block">
                      <a
                        href="https://x.com/konyabogazici"
                        className="d-block !tw-bg-[#041D74]"
                      >
                        <i>
                          <FaSquareXTwitter size={35} color="white" />
                        </i>
                      </a>
                    </li>
                    <li className="d-inline-block">
                      <a
                        href="https://www.youtube.com/channel/UC6DDVun_Ylu-L_njbkjEjBw"
                        className="d-block !tw-bg-[#041D74]"
                      >
                        <i>
                          <FaYoutube size={35} color="white" />
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
                        <Link href="/kurucumuz">Kurucumuz</Link>
                      </li>
                      <li>
                        <Link href="/ekibimiz">Ekibimiz</Link>
                      </li>
                      <li>
                        <Link href="/egitim-sistemimi">Eğitim Sistemimiz</Link>
                      </li>
                    </ul>
                  </Collapse>
                </div>
              </Col>

              <Col
                xl={{ span: 2, offset: 4 }}
                lg={{ span: 2, offset: 4 }}
                md={{ span: 2, offset: 4 }}
              >
                <div className="F-col-4 footer-text FooterVertical">
                  <div className="tw-pb-2 tw-border-b-2 tw-border-white">
                    <h2>
                      <Image
                        src={logo}
                        alt="logo"
                        width={220}
                        height={30}
                        className="mx-auto img-fluid"
                      />
                    </h2>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="Footer-bottom tw-bg-red-600 tw-px-4 tw-py-4">
            <Container>
              <h6 className="F-copywrite tw-text-white">
                Copyright © 2024 . AYD TANITIM
              </h6>
            </Container>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
