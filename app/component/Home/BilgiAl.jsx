import React from "react";
import bgurl from "@/public/assets/style/dot-white-map-01.png";
import { Col, Container, Row } from "react-bootstrap";
const BilgiAl = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bgurl.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="tw-bg-red-600 tw-pt-4 tw-pb-4"
      data-aos="fade-up"
    >
      <Container>
        <Row className="align-items-center">
          <Col xl={12} lg={12} md={12} sm={12}>
            <div className="titleFont tw-text-center">
              <h2 className="!tw-text-white">
                Konya Boğaziçi Kolejini yakından tanımak ister misiniz?
              </h2>
              <p className="tw-text-white">
                Bilgi almak için aşağıdaki formu doldurmanız yeterli.
              </p>
            </div>
          </Col>
          <Col xl={12} lg={12} md={12} sm={12}>
            <form className="form tw-px-6 tw-py-8 tw-bg-[#192136] tw-rounded-3xl tw-flex tw-flex-col tw-gap-2">
              <div className="tw-flex tw-gap-12">
                <div className="form-inputs ">
                  <div className="input-container tw-flex tw-items-center tw-justify-center">
                    <i className="fa fa-envelope icon "></i>
                    <input
                      className="form-input input-field tw-max-w-96"
                      type="text"
                      name="name"
                      placeholder="Ad Soyad"
                    />
                  </div>
                </div>
                <div className="form-inputs">
                  <div className="input-container tw-flex tw-items-center tw-justify-center">
                    <i className="fa fa-key icon"></i>
                    <input
                      className="form-input input-field tw-max-w-96"
                      type="text"
                      name="tel"
                      placeholder="Telefon No"
                    />
                  </div>
                </div>
              </div>
              <div className="tw-flex tw-items-center tw-justify-between">
                <div className="tw-flex">
                  <div className="form-inputs">
                    <div className="input-container tw-flex tw-items-center tw-justify-center tw-gap-3">
                      <input
                        className="form-input input-field tw-min-w-5 tw-min-h-5"
                        type="checkbox"
                        name="text"
                      />
                      <label className="form-check-label text-white tw-text-nowrap">
                        <a
                          target="_blank"
                          className="text-white"
                          href="https://www.bogazici.k12.tr/kvkk-metni"
                        >
                          KVKK Metnini
                        </a>{" "}
                        okudum ve onaylıyorum
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" tw-flex tw-items-center tw-justify-center">
                  <div className="input-container">
                    <button
                      className="button  tw-min-w-40 tw-bg-red-600 before:tw-bg-red-600 tw-text-white"
                      type="submit"
                    >
                      Gönder
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BilgiAl;
