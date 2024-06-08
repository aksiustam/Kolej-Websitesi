"use client";

import { Card, Col, Container, Row } from "react-bootstrap";
import img1 from "@/public/assets/common/muzik.jpg";

import Image from "next/image";
import Link from "next/link";
import "./paralel.css";
import "@/public/css/Portfolio.css";
const DerslerClient = () => {
  const dersler = [
    {
      id: 0,
      name: "Din Kültürü",
      slug: "dindersi",
      url: img1,
      hex: "#008B8B",
    },
    { id: 1, name: "Fen Bilimleri", slug: "fen", url: img1, hex: "#228B22" },
    { id: 2, name: "Türkçe", slug: "turkce", url: img1, hex: "#D2691E" },
    {
      id: 3,
      name: "Sosyal Bilgiler",
      slug: "sosyal",
      url: img1,
      hex: "#FF8C00",
    },
    { id: 4, name: "İngilizce", slug: "ingilizce", url: img1, hex: "#C71585" },
    {
      id: 5,
      name: "Görsel Sanatlar",
      slug: "resim",
      url: img1,
      hex: "#B8860B",
    },

    { id: 6, name: "Matematik", slug: "matematik", url: img1, hex: "#9932CC" },
    { id: 7, name: "Beden Eğitimi", slug: "beden", url: img1, hex: "#8B4513" },
    { id: 8, name: "Müzik", slug: "muzik", url: img1, hex: "#8B0000" },
    {
      id: 9,
      name: "Bilişim Teknolojileri ve Yazılım",
      slug: "bilisim",
      url: img1,
      hex: "#483D8B",
    },
  ];
  return (
    <>
      <div className="otherPageBanner portfolioBanner">
        <div className="text-center title">
          <h6 className="tw-text-shadow-md">DERSLERİMİZ</h6>
        </div>
      </div>
      <section className="tw-px-6 tw-py-8 tw-bg-slate-100">
        <Container className="tw-my-12">
          <div className="tw-flex tw-items-center tw-justify-center tw-mb-4">
            <span className="tw-text-5xl tw-font-extrabold tw-text-shadow-lg"></span>
          </div>

          <div className="SelfDevelopment tw-p-12">
            <Row>
              {dersler.map((item) => (
                <Col xl={4} lg={4} md={6} sm={12} className="tw-mb-5">
                  <div className="CInstrucation-box ">
                    <Card className="CInstrucation-card tw-px-4 tw-py-2 !tw-bg-slate-50">
                      <div className="CInstrucation-card-img">
                        <Link href={`/dersler/${item?.slug}`}>
                          <Image
                            src={item?.url}
                            alt={item?.name}
                            width={500}
                            height={500}
                            className=" mx-auto tw-w-72 tw-h-72 tw-rounded-full"
                          />
                        </Link>
                      </div>
                      <Card.Body className="CInstrucation-body !tw-pt-0 tw-transform -tw-translate-y-7">
                        <Card.Title
                          className={`CInstrucation-title parallel tw-text-center tw-py-1 `}
                          style={{ backgroundColor: item?.hex }}
                        >
                          <Link
                            href={`/dersler/${item?.slug}`}
                            className=" tw-text-inherit tw-decoration-transparent"
                          >
                            <h2 className="!tw-text-2xl noparallel !tw-font-extrabold tw-text-slate-200  tw-pt-2">
                              {item?.name}
                            </h2>
                          </Link>
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default DerslerClient;
