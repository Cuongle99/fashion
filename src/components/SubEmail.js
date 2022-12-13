import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendEmail } from "../redux/ClientEmail/EmailSlice";

export default function SubEmail() {
    const dispatch = useDispatch()
    const [emailValue, setEmailValue] = useState(null)
    const navigate = useNavigate()

    const handleOnChange = (e) => {
        setEmailValue(e.target.value)
    }

    return (
        <div className="boxSubemail">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <div className="subemail__left">
                            <h1 className="subemail__title">
                                Get Expert Tips In Your Inbox
                            </h1>
                            <p className="subemail__subtitle">
                                Subscribe to our newsletter and stay updated.
                            </p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="subemail__right">   
                            <div className="subemail__form d-flex justify-content-end align-items-center">
                                <Form.Group className="flex-grow-1 me-2" 
                                    controlId="formBasicEmail"
                                >
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        className="ms-auto"
                                        onChange={handleOnChange}
                                    />
                                </Form.Group>
                                <Button onClick={() => {
                                    dispatch(sendEmail(emailValue))
                                    navigate('/')
                                    }}>
                                Subscribe
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
