"use client";

import { Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "./galerycss.css";
const GaleriClient = (props) => {
  const { galery } = props;

  const url = galery.map((item) => ({
    original: item.imageurl,
    thumbnail: item.imageurl,
  }));

  return (
    <Container>
      <div className="tw-flex tw-items-center tw-justify-center tw-mb-8 tw-mt-12">
        <span className="tw-text-5xl tw-font-extrabold tw-text-shadow-lg">
          GALERİ
        </span>
      </div>

      <div className="tw-flex tw-items-center tw-justify-center">
        <ImageGallery items={url} />
      </div>
    </Container>
  );
};

export default GaleriClient;
