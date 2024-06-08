"use client";
import Image from "next/image";
import { Card, Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
const HaberlerClient = (props) => {
  const { haberler } = props;

  return (
    <Container>
      <div className="tw-flex tw-items-center tw-justify-center">
        <div className="tw-px-12 tw-py-6 tw-border-8 tw-bg-sky-600 tw-border-sky-800 tw-rounded-full tw-text-white tw-text-2xl tw-font-extrabold tw-mb-6">
          HABERLER
        </div>
      </div>
      <div className="Title">
        <Row>
          {haberler.map((elm) => (
            <Col xl={4} lg={4} md={4} sm={6} xs={12} key={elm?.id}>
              <Card className="Course-Card">
                <div className="course-card-img">
                  <Link href={elm.href}>
                    <Image
                      src={elm.imgurl}
                      alt={elm.title}
                      width={700}
                      height={700}
                      className="img-fluid mx-auto"
                    />
                  </Link>
                </div>
                <Card.Body className="Courses-body">
                  <Card.Title as={"h6"}>
                    <Link
                      href={elm.href}
                      className="tw-text-inherit tw-decoration-inherit"
                    >
                      {elm?.h3}
                    </Link>
                  </Card.Title>
                  <Card.Text as={"div"} className="Courses-text">
                    <p className="tw-line-clamp-5">{elm?.p}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default HaberlerClient;
