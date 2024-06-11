"use client";
import Image from "next/image";
import { Card, Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import "@/public/css/Portfolio.css";
const HaberlerClient = (props) => {
  const { haberler } = props;

  return (
    <>
      <section>
        <div className="otherPageBanner portfolioBanner">
          <div className="text-center title">
            <h6 className="tw-text-shadow-md">HABERLER</h6>
          </div>
        </div>
        <Container>
          <div className="Title tw-mt-12">
            <Row>
              {haberler?.map((elm) => (
                <Col xl={4} lg={4} md={4} sm={6} xs={12} key={elm?.id}>
                  <Card className="Course-Card !tw-rounded-3xl">
                    <div className="course-card-img">
                      <Link href={elm.href}>
                        <Image
                          src={elm.img}
                          alt={elm.title}
                          width={700}
                          height={700}
                          className="tw-w-full tw-h-80 tw-object-cover  !tw-rounded-t-3xl"
                        />
                      </Link>
                    </div>
                    <Card.Body className="Courses-body">
                      <Card.Title as={"h6"}>
                        <Link
                          href={elm.href}
                          className="tw-text-inherit tw-decoration-inherit"
                        >
                          {elm?.title}
                        </Link>
                      </Card.Title>
                      <Card.Text as={"div"} className="Courses-text">
                        <p className="tw-line-clamp-5">{elm?.text}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HaberlerClient;
