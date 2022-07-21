import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../data/Pictures/Group 336.png";
import { RiShoppingCartLine, RiMenu2Line, RiCloseLine } from "react-icons/ri";
import "./Navigation.css";
import React, { useState } from "react";
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBBtn,
} from "mdb-react-ui-kit";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerMenuHandler = () => {
    setOpen(!open);
    console.log(open);
  };
  // const [showAnimated, setShowAnimated] = useState(false);

  return (
    // <>
    //   <section className="mb-3 navigation">
    //     <MDBNavbar>
    //       <MDBContainer fluid>
    //         <MDBNavbarToggler
    //           type="button"
    //           className="first-button"
    //           data-target="#navbarToggleExternalContent"
    //           aria-controls="navbarToggleExternalContent"
    //           aria-expanded="false"
    //           aria-label="Toggle navigation"
    //           onClick={() => setShowAnimated(!showAnimated)}
    //         >
    //           <div className={`animated-icon1 ${showAnimated && "open"}`}>
    //             <span></span>
    //             <span></span>
    //             <span></span>
    //           </div>
    //         </MDBNavbarToggler>
    //         <div className="plantShopLogo">
    //           <img src={logo} alt="logo" />
    //           <p className="plant">Plant</p>
    //           <p className="shopping">Shopping</p>{" "}
    //         </div>
    //         <div className="cartShopping">
    //           <RiShoppingCartLine className="cartLogo" />
    //           <span>0</span>
    //         </div>
    //       </MDBContainer>
    //     </MDBNavbar>

    //     <MDBCollapse show={showAnimated}>
    //       <div className="bg-light shadow-3 p-4">
    //         <MDBBtn block className="border-bottom m-0" color="link">
    //           Link 1
    //         </MDBBtn>
    //         <MDBBtn block className="border-bottom m-0" color="link">
    //           Link 2
    //         </MDBBtn>
    //         <MDBBtn block className="border-bottom m-0" color="link">
    //           Link 2
    //         </MDBBtn>
    //       </div>
    //     </MDBCollapse>
    //   </section>
    // </>
    <Navbar expand="md" className="navigation">
      <Container>
        <div className="cartShopping">
          <RiShoppingCartLine className="cartLogo" />
          <span>0</span>
        </div>
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
          {!open ? <RiMenu2Line /> : <RiCloseLine />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
