"use client";
import { useRef, useState } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import logo from "@/public/assets/common/bogazlogo.png";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiStudentFill } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showBtn1, setShowBtn1] = useState(false);
  const [showBtn2, setShowBtn2] = useState(false);
  const timeoutRefs = useRef({});

  const onToggle = () => {
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("stamenu").className = "active";
  };

  const onCloseNav = () => {
    document.getElementById("myOverlay").style.display = "none";
    document.getElementById("stamenu").className = "";
  };

  const handleMouseLeave = (props) => {
    clearTimeout(timeoutRefs.current[props]);
    timeoutRefs.current[props] = setTimeout(() => {
      switch (props) {
        case "Menu1":
          setShowDropdown(false);
          break;
        case "Btn1":
          setShowBtn1(false);
          break;
        case "Btn2":
          setShowBtn2(false);
          break;
        default:
          break;
      }
    }, 250);
  };

  const handleMouseOver = (props) => {
    clearTimeout(timeoutRefs.current[props]);
    timeoutRefs.current[props] = setTimeout(() => {
      switch (props) {
        case "Menu1":
          setShowDropdown(true);
          break;
        case "Btn1":
          setShowBtn1(true);
          break;
        case "Btn2":
          setShowBtn2(true);
          break;
        default:
          break;
      }
    }, 100);
  };

  const pathname = usePathname();
  const checkadmin = pathname.startsWith("/admin");

  return (
    <>
      {!checkadmin && (
        <div className="header">
          <div className="sticky-top " id="stamenu">
            <Navbar expand="lg" collapseOnSelect>
              <div className="container">
                <div className="inner-header tw-min-h-16">
                  <Navbar.Brand href="/">
                    <Image
                      src={logo}
                      alt="logo"
                      width={130}
                      height={35}
                      className="img-fluid mx-auto tw-hidden md:tw-block"
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
                      <Link href="/dersler/dindersi" legacyBehavior passHref>
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

                  <div className="tw-flex tw-items-center tw-justify-center tw-gap-3">
                    <NavDropdown
                      title="Boğaziçi Dijital"
                      id="collasible-nav-dropdown"
                      show={showBtn1}
                      onMouseLeave={() => handleMouseLeave("Btn1")}
                      onMouseOver={() => handleMouseOver("Btn1")}
                      className="button tw-flex tw-items-center tw-justify-center tw-text-white tw-h-10 -tw-mr-0 md:tw-mr-4"
                    >
                      <NavDropdown.Item
                        href="https://ogrenci.bogazici.k12.tr"
                        className="!tw-flex tw-gap-3 tw-items-center tw-justify-start"
                      >
                        <PiStudentFill size={19} color="blue" />
                        Öğrenci Girişi
                      </NavDropdown.Item>

                      <NavDropdown.Item
                        href="https://ogrenci.bogazici.k12.tr/"
                        className="!tw-flex tw-gap-3 tw-items-center tw-justify-start"
                      >
                        <RiParentFill size={19} color="blue" />
                        Veli Girişi
                      </NavDropdown.Item>

                      <NavDropdown.Item
                        href="https://asistan.bogazici.k12.tr/"
                        className="!tw-flex tw-gap-3 tw-items-center tw-justify-start"
                      >
                        <GiTeacher size={19} color="blue" />
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
                      <NavDropdown.Item
                        href="https://bogazici.okulavm.com/kullanici/login"
                        className="!tw-flex tw-gap-3 tw-items-center tw-justify-start"
                      >
                        <FaBook size={19} color="blue" />
                        Kitap Satışı
                      </NavDropdown.Item>

                      <NavDropdown.Item
                        href="https://ogrenci.bogazici.k12.tr/"
                        className="!tw-flex tw-gap-3 tw-items-center tw-justify-start"
                      >
                        <GiForkKnifeSpoon size={19} color="blue" />
                        Yemek Ödemesi
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                  <Navbar.Brand href="/" className="tw-pr-2">
                    <Image
                      src={logo}
                      alt="logo"
                      width={90}
                      height={35}
                      className="img-fluid mx-auto tw-block md:tw-hidden"
                    />
                  </Navbar.Brand>
                  <div className="w3-overlay w3-animate-opacity"></div>
                </div>
              </div>
            </Navbar>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
