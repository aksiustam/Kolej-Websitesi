"use client";
import React from "react";
import FAQ from "@/public/assets/Images/Faq/FAQ.jpg";
import { Row, Col, Accordion } from "react-bootstrap";
import Image from "next/image";
function HomeFAQ() {
  return (
    <>
      <div className="container">
        <div className="spacing">
          <Row className="homeFAQRow">
            <Col xl={6} lg={6} md={6}>
              <div className="titleFont">
                <h3> Frequently Asked Questions </h3>
                <h2>You’ve got questions and we’ve got answers</h2>
              </div>
              <div className="homeFAQ">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      How much does it cost to create a website?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Can you help my current site look more professional?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      I am not sure if my use is covered. what should i do?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      Buyers guide to youtube content & copyright notices?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
            <Col xl={6} lg={6} md={6}>
              <Image
                src={FAQ}
                alt="AboutUs"
                width={1500}
                height={1500}
                className="img-fluid mx-auto"
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default HomeFAQ;
