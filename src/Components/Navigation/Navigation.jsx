import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../data/Pictures/Group 336.png";
import { RiShoppingCartLine, RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import "./Navigation.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [boxShadow, setBoxShadow] = useState(false);

  const hamburgerMenuHandler = () => {
    setOpen(!open);
  };

  const changeNavbarBoxShadow = () => {
    if (window.scrollY >= 80) {
      setBoxShadow(true);
    } else {
      setBoxShadow(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBoxShadow);

  return (
    <Navbar
      expand="md"
      className={boxShadow ? "navigation scrollNavbar" : "navigation"}
    >
      <Container>
        <NavLink to="/cart" className="cartShopping">
          <RiShoppingCartLine className="cartLogo" />
          <span>0</span>
        </NavLink>
        <Navbar.Brand href="#home">
          <div className="plantShopLogo">
            <img src={logo} alt="logo" />
            <p className="plant">Plant</p>
            <p className="shopping">Shopping</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={hamburgerMenuHandler}
        >
          {!open ? <RiMenu3Fill /> : <RiCloseLine />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" dir="rtl">
          <Nav className="me-auto align-items-md-center d-flex justify-content-between">
            <section className="d-flex flex-column flex-md-row">
              <LinkContainer to="/login">
                <Nav.Link className="authentication-button mt-3 mt-md-0">
                  <button className="loginButton">ورود</button>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signUp">
                <Nav.Link className="authentication-button ">
                  <button className="signUp">ثبت نام</button>
                </Nav.Link>
              </LinkContainer>
            </section>
            <section className="d-flex flex-column flex-md-row menuItem">
              <LinkContainer to="/">
                <Nav.Link>خانه</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/category">
                <Nav.Link>گیاهان آپارتمانی</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/aboutUs">
                <Nav.Link>درباره ما</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contactUs">
                <Nav.Link>ارتباط با ما</Nav.Link>
              </LinkContainer>
            </section>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
