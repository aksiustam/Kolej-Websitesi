"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Col, Container, Row } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import "./mybox.css";

const Layout = (props) => {
  const pathname = usePathname();
  return (
    <Container style={{ marginTop: "48px" }}>
      <Row>
        <Col xl={3} lg={3} md={4} sm={12}>
          <div className="dashboard_tab_button">
            <ul role="tablist" className="nav">
              <li className="tw-w-48">
                <Link
                  href="/admin/anasayfa"
                  className={pathname === "/admin/anasayfa" ? "active" : null}
                >
                  <div className="tw-flex tw-gap-2 tw-items-center ">
                    <FaHome size={20} />
                    Admin Anasayfa
                  </div>
                </Link>
              </li>
              <li className="tw-w-48">
                <Link
                  href="/admin/galeri"
                  className={pathname === "/admin/galeri" ? "active" : null}
                >
                  <div className="tw-flex tw-gap-2 tw-items-center ">
                    <FaHome size={20} /> Galeri
                  </div>
                </Link>
              </li>
              <li className="tw-w-48">
                <Link
                  href="/admin/blog"
                  className={pathname === "/admin/blog" ? "active" : null}
                >
                  <div className="tw-flex tw-gap-2 tw-items-center ">
                    <FaHome size={20} /> Blog
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col xl={9} lg={9} md={8} sm={12}>
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
