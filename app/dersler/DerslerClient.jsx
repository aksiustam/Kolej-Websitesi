"use client";

import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import "@/public/css/Portfolio.css";
import { IoIosArrowForward } from "react-icons/io";

const DerslerClient = () => {
  const dersler = [
    {
      id: 0,
      name: "Din Kültürü",
      slug: "dindersi",
      hex: "#008B8B",
    },
    { id: 1, name: "Fen Bilimleri", slug: "fen", hex: "#228B22" },
    { id: 2, name: "Türkçe", slug: "turkce", hex: "#D2691E" },
    {
      id: 3,
      name: "Sosyal Bilgiler",
      slug: "sosyal",
      hex: "#FF8C00",
    },
    { id: 4, name: "İngilizce", slug: "ingilizce", hex: "#C71585" },
    {
      id: 5,
      name: "Görsel Sanatlar",
      slug: "resim",
      hex: "#B8860B",
    },
    { id: 6, name: "Matematik", slug: "matematik", hex: "#9932CC" },
    { id: 7, name: "Beden Eğitimi", slug: "beden", hex: "#8B4513" },
    { id: 8, name: "Müzik", slug: "muzik", hex: "#8B0000" },
    {
      id: 9,
      name: "Bilişim Teknolojileri ve Yazılım",
      slug: "bilisim",
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
          <Row>
            <Col xl={3} lg={3} md={5} sm={12} xs={12}>
              <div className="tw-bg-white tw-p-3 tw-rounded-2xl">
                {dersler?.map((item) => (
                  <Link
                    key={item.id}
                    href={`/dersler/${item?.slug}`}
                    className="tw-text-inherit tw-decoration-transparent"
                  >
                    <div className="tw-mb-3 tw-px-4 tw-py-4 tw-bg-gray-200 tw-rounded-xl   tw-group tw-flex tw-items-center tw-justify-between tw-relative">
                      <div className="tw-absolute tw-inset-0 tw-bg-blue-800 tw-transform tw-scale-x-0 group-hover:tw-scale-x-100 tw-transition-transform tw-duration-1000 tw-origin-left tw-rounded-xl"></div>

                      <div className="tw-font-semibold tw-text-[#666666] group-hover:tw-text-white tw-z-10">
                        {item.name}
                      </div>
                      <IoIosArrowForward
                        size={16}
                        className="group-hover:tw-text-white  tw-z-10"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </Col>
            <Col xl={8} lg={8} md={7} sm={12} xs={12}>
              <div>SİDEBAR</div>
            </Col>
          </Row>

          {/* <div className="SelfDevelopment tw-p-6">
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
          </div> */}
        </Container>
      </section>
    </>
  );
};

export default DerslerClient;
