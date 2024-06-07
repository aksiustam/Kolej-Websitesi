"use client";

import aboutus from "@/public/assets/Images/AboutUs/aboutus.jpg";
import { Row, Col } from "react-bootstrap";

import Image from "next/image";
export default function AboutUs() {
  return (
    <>
      <div className="container">
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
                <h3>About Our Company</h3>
                <h2>More Than 20 Years We Provide Designing Service For You</h2>
              </div>
              <p className="paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the is the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make.
              </p>
              <div className="aboutUsPoint">
                <Row>
                  <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <div className="aboutCheckPoint">
                      <i className="fas fa-check-circle"></i>
                      <span>Brilient Client Service</span>
                    </div>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <div className="aboutCheckPoint">
                      <i className="fas fa-check-circle"></i>
                      <span>24/7 Support</span>
                    </div>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <div className="aboutCheckPoint">
                      <i className="fas fa-check-circle"></i>
                      <span>Friendly Support</span>
                    </div>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <div className="aboutCheckPoint">
                      <i className="fas fa-check-circle"></i>
                      <span>Unique Design</span>
                    </div>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <div className="aboutCheckPoint">
                      <i className="fas fa-check-circle"></i>
                      <span>Proffesional</span>
                    </div>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <div className="aboutCheckPoint">
                      <i className="fas fa-check-circle"></i>
                      <span>Best Services</span>
                    </div>
                  </Col>
                </Row>
              </div>
              <button className="button tw-text-white">More About Us</button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
