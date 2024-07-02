"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "@/public/css/Home.css";
const BlogPage = (props) => {
  const { blog } = props;

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="slick-arrow right-arrow tw-bg-slate-400 tw-p-1 tw-rounded-full"
        onClick={onClick}
      >
        <FaChevronRight color="black" size={24} />
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="slick-arrow left-arrow tw-bg-slate-400 tw-p-1 tw-rounded-full"
        onClick={onClick}
      >
        <FaChevronLeft color="black" size={24} />
      </div>
    );
  };
  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="tw-w-full tw-h-full tw-py-12">
      <Container className="tw-bg-gray-100 tw-shadow-2xl tw-shadow-gray-400 tw-rounded-3xl tw-py-6">
        <div className="tw-w-full tw-flex tw-flex-col tw-items-center tw-justify-center tw-mb-6">
          <h6 className="tw-text-red-600 tw-text-2xl">
            -Konya Boğaziçi Haberleri-
          </h6>
        </div>
        <div className="SelfDevelopment tw-p-4 md:tw-p-12">
          <Row>
            <Slider {...settings} className="tw-w-full">
              {blog?.slice(0, 15).map((item) => (
                <Col key={item.id} xl={4} lg={4} md={6} sm={12}>
                  <div className="CInstrucation-box ">
                    <Card className="CInstrucation-card">
                      <div className="CInstrucation-card-img">
                        <Link href={`/blog/${item?.slug}`}>
                          <Image
                            src={item?.images[0]?.imageurl}
                            alt="BlogPost"
                            width={1200}
                            height={1200}
                            className="mx-auto tw-h-[20rem] tw-object-cover"
                          />
                        </Link>
                      </div>
                      <Card.Body className="CInstrucation-body tw-min-h-[8rem]">
                        <Card.Title className="CInstrucation-title">
                          <h5>{item.name}</h5>
                        </Card.Title>
                        <Link
                          href={`/blog/${item?.slug}`}
                          className="tw-text-red-600 tw-mt-auto"
                        >
                          Devamını Oku
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              ))}
            </Slider>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default BlogPage;
