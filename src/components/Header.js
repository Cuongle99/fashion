import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    };
    const hideDropdown = (e) => {
        setShow(false);
    };
    return (
        <div className="header">
            <Navbar key="lg" expand="lg" className="">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="logo " />
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls={`offcanvasNavbar-expand-lg`} className="order-last ms-5"
                    />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title
                                id={`offcanvasNavbarLabel-expand-lg`}
                            >
                                <Navbar.Brand href="/">
                                  <img src={logo} alt="logo " />
                              </Navbar.Brand>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-start flex-grow-1 ps-5">
                                <Nav.Item>
                                    <Link to={"/"}>Home</Link>
                                </Nav.Item>
                                <NavDropdown
                                    title="Shop"
                                    id={`offcanvasNavbarDropdown-expand-lg`}
                                    show={show}
                                    onMouseEnter={showDropdown}
                                    onMouseLeave={hideDropdown}
                                >
                                    <Nav.Item>
                                        <Link to={"/product"}>Product</Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Link to={"/category"}>Category</Link>
                                    </Nav.Item>
                                </NavDropdown>
                                <Nav.Item>
                                    <Link to={"/blog"}>Blog</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to={"/about"}>About</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to={"/contact"}>Contact</Link>
                                </Nav.Item>
                            </Nav>
                            {/* <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">
                                    Search
                                </Button>
                            </Form> */}


                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <div className="header__right flex-grow-1">
                        <div className="header__right__item">
                            <i className="bx bx-search"></i>
                        </div>
                        <div className="header__right__item">
                          <Link to={"/favourite"}>
                          <i className='bx bx-heart'></i>
                          </Link>
                        </div>
                        <div className="header__right__item">
                            <Link to="/cart">
                                <i className="bx bx-shopping-bag"></i>
                            </Link>
                        </div>
                        <div className="header__right__item">
                            <i className="bx bx-user"></i>
                        </div>
                    </div>
                    
                </Container>
            </Navbar>
        </div>
    );
}
