"use client";

import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import "@/public/css/Home.css";
import "@/public/css/Portfolio.css";
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const page = () => {
  const imageUrls = Array.from({ length: 61 }, (_, i) => `/kadro/${i + 1}.png`);

  return (
    <>
      <div className="otherPageBanner portfolioBanner">
        <div className="text-center title">
          <h6 className="tw-text-shadow-md">KADROMUZ</h6>
        </div>
      </div>
      <section className="tw-py-6">
        <Container className="tw-my-12">
          <div className="SelfDevelopment tw-px-8 tw-py-16">
            <Row>
              {imageUrls.map((url, index) => (
                <Col
                  key={index}
                  xl={3}
                  lg={3}
                  md={6}
                  sm={12}
                  className="tw-px-4 even:-tw-my-12 odd:tw-my-4 "
                >
                  <div
                    className="tw-border-[12px] tw-rounded-lg"
                    style={{ borderColor: getRandomColor() }}
                  >
                    <Image
                      src={url}
                      width={500}
                      height={500}
                      alt={`Resim ${index + 1}`}
                      className={`tw-w-full tw-h-full `}
                    />
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

export default page;
