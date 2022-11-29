import React, { useReducer, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/User/userSlice";
import { signOut } from "firebase/auth";
import { Button, Form, Modal } from "react-bootstrap";

export default function Header() {
    const [show, setShow] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const token = useSelector((state) => state.userReducer.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const showDropdown = (e) => {
        setShow(!show);
    };
    const hideDropdown = (e) => {
        setShow(false);
    };

    const signOut = () => {
        dispatch(logout());
        navigate("/home");
    };

    const handleClose = () => {
        setShowSearch(false);
    }
    const handleShow = () => setShowSearch(true);
    return (
        <div className="header">
            <Navbar key="lg" expand="lg" className="">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="logo " />
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls={`offcanvasNavbar-expand-lg`}
                        className="order-last ms-5"
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
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <div className="header__right flex-grow-1">
                        <div
                            className="header__right__item"
                            
                        >
                            <i className="bx bx-search" onClick={handleShow}></i>
                            <Modal show={showSearch} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="exampleForm.ControlInput1"
                                        >
                                            <Form.Label>
                                                Email address
                                            </Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="name@example.com"
                                                autoFocus
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="exampleForm.ControlTextarea1"
                                        >
                                            <Form.Label>
                                                Example textarea
                                            </Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                            />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        // variant="secondary"
                                        onClick={handleClose}
                                    >
                                        Close
                                    </Button>
                                    <Button
                                        // variant="primary"
                                        onClick={handleClose}
                                    >
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                        <div className="header__right__item">
                            <Link to={"/favourite"}>
                                <i className="bx bx-heart"></i>
                            </Link>
                        </div>
                        <div className="header__right__item">
                            <Link to="/cart">
                                <i className="bx bx-shopping-bag"></i>
                            </Link>
                        </div>
                        <Dropdown className="header__right__item">
                            <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic"
                            >
                                <i className="bx bx-user"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {token != null ? (
                                    <>
                                        <Link to={"/myaccount"}>
                                            My account
                                        </Link>
                                        <div onClick={() => signOut()}>
                                            Sign out
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <Link to={"/signin"}>Sign In</Link>
                                        <Link to={"/signup"}>Sign Up</Link>
                                    </>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
}
