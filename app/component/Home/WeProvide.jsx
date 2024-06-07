"use client";
import React, { useEffect } from "react";

import { Row, Col } from "react-bootstrap";
import Icon1 from "@/public/assets/Images/WeProvide/Icon1.png";
import Icon2 from "@/public/assets/Images/WeProvide/Icon2.png";
import Icon3 from "@/public/assets/Images/WeProvide/Icon3.png";
import Icon4 from "@/public/assets/Images/WeProvide/Icon4.png";

import Image from "next/image";

export default function WeProvide() {
  return (
    <>
      <div className="container">
        <div className="aboutus spacing">
          <Row className="align-items-center">
            <Col xl={6} lg={6} md={6} sm={6} xs={12} className="details-icon">
              <Row>
                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                  <div className="weProBox">
                    <div className="weProBoxImg">
                      <Image
                        src={Icon1}
                        alt="AboutUs"
                        width={300}
                        height={300}
                        className="img-fluid mx-auto"
                      />
                    </div>
                    <div className="weProBoxText">
                      <h6>UI/UX Design Service</h6>
                    </div>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                  <div className="weProBox">
                    <div className="weProBoxImg">
                      <Image
                        src={Icon2}
                        alt="AboutUs"
                        width={300}
                        height={300}
                        className="img-fluid mx-auto"
                      />
                    </div>
                    <div className="weProBoxText">
                      <h6>Web Interactive</h6>
                    </div>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                  <div className="weProBox">
                    <div className="weProBoxImg">
                      <Image
                        src={Icon3}
                        alt="AboutUs"
                        width={300}
                        height={300}
                        className="img-fluid mx-auto"
                      />
                    </div>
                    <div className="weProBoxText">
                      <h6>Graphic Design</h6>
                    </div>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                  <div className="weProBox">
                    <div className="weProBoxImg">
                      <Image
                        src={Icon4}
                        alt="AboutUs"
                        width={300}
                        height={300}
                        className="img-fluid mx-auto"
                      />
                    </div>
                    <div className="weProBoxText">
                      <h6>Corporate Solution</h6>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col
              xl={6}
              lg={6}
              md={6}
              sm={6}
              xs={12}
              data-aos="fade-up"
              className="details-summary"
            >
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

              <button className="button">More About Us</button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
