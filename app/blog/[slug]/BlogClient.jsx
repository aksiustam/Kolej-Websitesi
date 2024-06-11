"use client";

import "@/public/css/Portfolio.css";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import "@/public/css/HomePage.css";

import Link from "next/link";
const BlogClient = (props) => {
  const { blog, blogs } = props;
  const settings = {
    dots: false,
    arrows: true,
    slide: ".slick-slideshow__slide",
    slidesToShow: 2,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    centerPadding: "110px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="otherPageBanner portfolioBanner">
        <div className="text-center title">
          <h6 className="tw-text-shadow-md">BLOGLAR</h6>
        </div>
      </div>
      <section className="tw-px-6 tw-py-8 tw-bg-slate-100">
        <Container className="tw-my-12">
          <Row>
            <Col xl={3} lg={3} md={5} sm={12} xs={12}>
              <div className="tw-bg-white tw-p-3 tw-rounded-2xl">
                {blogs?.slice(0, 8)?.map((item) => (
                  <Link
                    key={item.id}
                    href={`/blog/${item?.slug}`}
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
            <Col xl={9} lg={9} md={7} sm={12} xs={12}>
              <div className="container tw-bg-white tw-py-6 tw-rounded-2xl">
                <div className="mainAboutUs">
                  <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                      <div className="aboutSliderDiv">
                        <Slider className="aboutSlider" {...settings}>
                          {blog?.images.map((item) => (
                            <div className="tw-px-5">
                              <Image
                                src={item?.imageurl}
                                alt="Blog resmi"
                                width={1200}
                                height={1200}
                                className="tw-h-96 tw-w-full mx-auto tw-object-cover"
                              />
                            </div>
                          ))}
                        </Slider>
                      </div>
                      <div className="aboutUs">
                        <div className="titleFont tw-mt-4 tw-ml-2">
                          <h1 className="tw-font-bold tw-text-2xl">
                            {blog?.name}
                          </h1>
                          <div
                            className="description tw-mt-4"
                            dangerouslySetInnerHTML={{ __html: blog?.quill }}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogClient;
