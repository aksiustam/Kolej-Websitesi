"use client";

import { Col, Container, Row } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "./galerycss.css";
import "@/public/css/Portfolio.css";
const GaleriClient = (props) => {
  const { galery } = props;

  const data1 = galery.filter((item) => item.category === "Doğa").reverse();
  const data2 = galery.filter((item) => item.category === "Etkinlik").reverse();
  const data3 = galery
    .filter((item) => item.category === "Özel Tarihler")
    .reverse();
  const data4 = galery.filter((item) => item.category === "Çocuklar").reverse();

  const url1 = data1.map((item) => ({
    original: item.imageurl,
    thumbnail: item.imageurl,
  }));
  const url2 = data2.map((item) => ({
    original: item.imageurl,
    thumbnail: item.imageurl,
  }));
  const url3 = data3.map((item) => ({
    original: item.imageurl,
    thumbnail: item.imageurl,
  }));
  const url4 = data4.map((item) => ({
    original: item.imageurl,
    thumbnail: item.imageurl,
  }));

  return (
    <>
      <div className="otherPageBanner portfolioBanner">
        <div className="text-center title">
          <h6 className="tw-text-shadow-md">KONYA BOĞAZİÇİ GALERİ</h6>
        </div>
      </div>
      <Container className="tw-overflow-x-clip">
        <Row>
          <Col xl={12}>
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-my-12">
              <div className="tw-text-2xl tw-text-shadow-md tw-font-bold tw-mb-6">
                Doğa Temalı
              </div>
              <div className="tw-w-full tw-flex tw-items-center tw-justify-center tw-px-4">
                <ImageGallery items={url1} />
              </div>
            </div>
          </Col>
          <Col xl={12}>
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-my-12">
              <div className="tw-text-2xl tw-text-shadow-md tw-font-bold tw-mb-6">
                Etkinlikler
              </div>
              <div className="tw-w-full tw-flex tw-items-center tw-justify-center tw-px-4">
                <ImageGallery items={url2} />
              </div>
            </div>
          </Col>
          <Col xl={12}>
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-my-12">
              <div className="tw-text-2xl tw-text-shadow-md tw-font-bold tw-mb-6">
                Özel Günler
              </div>
              <div className="tw-w-full tw-flex tw-items-center tw-justify-center tw-px-4">
                <ImageGallery items={url3} />
              </div>
            </div>
          </Col>
          <Col xl={12}>
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-my-12">
              <div className="tw-text-2xl tw-text-shadow-md tw-font-bold tw-mb-6">
                Çocuklar
              </div>
              <div className="tw-w-full tw-flex tw-items-center tw-justify-center tw-px-4">
                <ImageGallery items={url4} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GaleriClient;
