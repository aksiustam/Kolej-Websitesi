"use client";
import { useRef, useState } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import logo from "@/public/assets/common/bogazlogo.png";

import Image from "next/image";
import Link from "next/link";
import { CgScreenWide } from "react-icons/cg";
const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showBtn1, setShowBtn1] = useState(false);
  const [showBtn2, setShowBtn2] = useState(false);
  const timeoutRef = useRef(null);

  const onToggle = () => {
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("stamenu").className = "active";
  };

  const onCloseNav = () => {
    document.getElementById("myOverlay").style.display = "none";
    document.getElementById("stamenu").className = "";
  };

  const handleMouseOver = (props) => {
    clearTimeout(timeoutRef.current);
    switch (props) {
      case "Menu1":
        timeoutRef.current = setTimeout(() => setShowDropdown(true), 100);
        break;
      case "Btn1":
        timeoutRef.current = setTimeout(() => setShowBtn1(true), 100);
        break;
      case "Btn2":
        timeoutRef.current = setTimeout(() => setShowBtn2(true), 100);
        break;

      default:
        break;
    }
  };

  const handleMouseLeave = (props) => {
    clearTimeout(timeoutRef.current);
    switch (props) {
      case "Menu1":
        timeoutRef.current = setTimeout(() => setShowDropdown(false), 320);
        break;
      case "Btn1":
        timeoutRef.current = setTimeout(() => setShowBtn1(false), 320);

        break;
      case "Btn2":
        timeoutRef.current = setTimeout(() => setShowBtn2(false), 320);

        break;

      default:
        break;
    }
  };
  return (
    <>
      <div className="header">
        <div className="sticky-top " id="stamenu">
          <Navbar expand="lg" collapseOnSelect>
            <div className="container">
              <div className="inner-header">
                <Navbar.Brand href="/">
                  <Image
                    src={logo}
                    alt="logo"
                    width={130}
                    height={35}
                    className="img-fluid mx-auto "
                  />
                </Navbar.Brand>
                <Button
                  className="btn-navbar navbar-toggle"
                  onClick={onToggle}
                  data-toggle="collapse"
                  data-target=".nabar-ex1-collapse"
                >
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </Button>

                <div id="mySidenav" className="sidenav menu-vertical">
                  <div className="close-nav hidden-md hidden-lg hidden-xl ">
                    <span>Menu</span>
                    <Button
                      className="closebtn pull-right"
                      onClick={onCloseNav}
                    >
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </Button>
                  </div>

                  <Nav
                    className="justify-content-center"
                    id="myOverlay"
                    style={{ flex: 1 }}
                  >
                    <Link href="/" legacyBehavior passHref>
                      <Nav.Link className="nav-links">Anasayfa</Nav.Link>
                    </Link>
                    <NavDropdown
                      title="Kurumsal"
                      id="collasible-nav-dropdown "
                      show={showDropdown}
                      onMouseLeave={() => handleMouseLeave("Menu1")}
                      onMouseOver={() => handleMouseOver("Menu1")}
                    >
                      <Link href="/hakkimizda" legacyBehavior passHref>
                        <NavDropdown.Item>Hakkımızda</NavDropdown.Item>
                      </Link>
                      <Link href="/kurucumuz" legacyBehavior passHref>
                        <NavDropdown.Item>Kurucumuz</NavDropdown.Item>
                      </Link>
                      <Link href="/ekibimiz" legacyBehavior passHref>
                        <NavDropdown.Item>Ekibimiz</NavDropdown.Item>
                      </Link>
                      <Link href="/egitim-sistemimiz" legacyBehavior passHref>
                        <NavDropdown.Item>Eğitim Sistemimiz</NavDropdown.Item>
                      </Link>
                    </NavDropdown>
                    <Link href="/dersler" legacyBehavior passHref>
                      <Nav.Link className="nav-links">Dersler</Nav.Link>
                    </Link>
                    <Link href="/kuluplar" legacyBehavior passHref>
                      <Nav.Link className="nav-links">Kulüpler</Nav.Link>
                    </Link>
                    <Link href="/galeri" legacyBehavior passHref>
                      <Nav.Link className="nav-links">Galeri</Nav.Link>
                    </Link>
                    <Link href="/haberler" legacyBehavior passHref>
                      <Nav.Link className="nav-links">Haberler</Nav.Link>
                    </Link>

                    <Link href="/iletisim" legacyBehavior passHref>
                      <Nav.Link className="nav-links">İletişim</Nav.Link>
                    </Link>
                  </Nav>
                </div>
                <div className="w3-overlay w3-animate-opacity"></div>
                <NavDropdown
                  title="Boğaziçi Dijital"
                  id="collasible-nav-dropdown"
                  show={showBtn1}
                  onMouseLeave={() => handleMouseLeave("Btn1")}
                  onMouseOver={() => handleMouseOver("Btn1")}
                  className="button tw-flex tw-items-center tw-justify-center tw-text-white tw-h-10 -tw-mr-12"
                >
                  <CgScreenWide size={24} color="white" />
                  <NavDropdown.Item href="https://ogrenci.bogazici.k12.tr">
                    Öğrenci Girişi
                  </NavDropdown.Item>

                  <NavDropdown.Item href="https://ogrenci.bogazici.k12.tr/">
                    Veli Girişi
                  </NavDropdown.Item>

                  <NavDropdown.Item href="https://asistan.bogazici.k12.tr/">
                    Öğretmen Girişi
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Boğaziçi Store"
                  id="collasible-nav-dropdown"
                  show={showBtn2}
                  onMouseLeave={() => handleMouseLeave("Btn2")}
                  onMouseOver={() => handleMouseOver("Btn2")}
                  className="button tw-flex tw-items-center tw-justify-center tw-text-white tw-h-10"
                >
                  <NavDropdown.Item href="https://bogazici.okulavm.com/kullanici/login">
                    Kitap Satışı
                  </NavDropdown.Item>

                  <NavDropdown.Item href="https://ogrenci.bogazici.k12.tr/">
                    Yemek Ödemesi
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
          </Navbar>
        </div>
      </div>
    </>
  );
};
export default Header;
