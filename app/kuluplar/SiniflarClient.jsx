"use client";
import { Card, Container, Row, Col } from "react-bootstrap";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});
import "@/public/css/Home.css";
import "./videocss.css";
import "@/public/css/Portfolio.css";
const SiniflarClient = () => {
  const siniflar = [
    {
      id: 0,
      name: "Akıl Oyunları Kulübümüz",
      url: "https://www.youtube.com/watch?v=_nvMdAsEyQQ",
      hex: "#4B0082",
    },
    {
      id: 1,
      name: "Bilim Fen ve Teknoloji Kulübümüz",
      url: "https://youtu.be/H8FQYNSV8pU",
      hex: "#228B22",
    },
    {
      id: 2,
      name: "Fotoğrafçılık Kulübümüz",
      url: "https://www.youtube.com/shorts/MvgdR5-Zzo4",
      hex: "#FF8C00",
      short: true,
    },
    {
      id: 3,
      name: "Ahşap Boyama Kulübümüz",
      url: "https://www.youtube.com/shorts/CBdO543Kjds",
      hex: "#556B2F",
      short: true,
    },
    {
      id: 4,
      name: "Masa Tenisi Kulübümüz",
      url: "https://www.youtube.com/watch?v=64g6o9RsJQ8",
      hex: "#9932CC",
    },
    {
      id: 5,
      name: "Halk Oyunları Kulübümüz",
      url: "https://www.youtube.com/watch?v=XFpNBLtrkGc",
      hex: "#E9967A",
    },
    {
      id: 6,
      name: "Robotik Kodlama Kulübümüz",
      url: "https://www.youtube.com/shorts/MwUi8--ciO8",
      hex: "#8B4513",
      short: true,
    },
    {
      id: 7,
      name: "Voleybol Kulübümüz",
      url: "https://www.youtube.com/watch?v=7E13dn1kKw0",
      hex: "#2E8B57",
    },
    {
      id: 8,
      name: "İngilizce Çeviri Kulübümüz",
      url: "https://www.youtube.com/watch?v=NcBV6ov7LmE",
      hex: "#FFD700",
    },
    {
      id: 9,
      name: "Müzik Kulübümüz",
      url: "https://www.youtube.com/watch?v=CJ-UxkXzUQ8",
      hex: "#8B0000",
    },
    {
      id: 10,
      name: "İngilizce Kulübümüz",
      url: "https://www.youtube.com/watch?v=nC2tnVNZ34Y",
      hex: "#556B2F",
    },
  ];

  return (
    <>
      <div className="otherPageBanner portfolioBanner">
        <div className="text-center title">
          <h6 className="tw-text-shadow-md"> KULÜPLER</h6>
        </div>
      </div>
      <section className="tw-px-6 tw-py-8 tw-bg-slate-100">
        <Container className="tw-my-12">
          <div className="SelfDevelopment md:tw-p-12">
            <Row>
              {siniflar.map((item) => (
                <Col
                  xl={4}
                  lg={4}
                  md={12}
                  sm={12}
                  className="tw-mb-5"
                  key={item?.id}
                >
                  <div className="CInstrucation-box ">
                    <Card className="CInstrucation-card tw-px-4 tw-py-2 !tw-bg-slate-50">
                      <div className="CInstrucation-card-img video-container">
                        <ReactPlayer
                          url={item?.url}
                          playing={false}
                          controls={false}
                          loop={true}
                          volume={0}
                        />
                      </div>

                      <Card.Body className="CInstrucation-body !tw-pt-0 tw-transform -tw-translate-y-7">
                        <Card.Title
                          className={`CInstrucation-title parallel tw-text-center tw-py-1 `}
                          style={{ backgroundColor: item?.hex }}
                        >
                          <h2 className="!tw-text-2xl noparallel !tw-font-extrabold !tw-text-slate-200  tw-pt-2 tw-pb-2 tw-text-center">
                            {item?.name}
                          </h2>
                        </Card.Title>
                      </Card.Body>
                    </Card>
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
export default SiniflarClient;
