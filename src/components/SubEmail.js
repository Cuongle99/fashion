import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function SubEmail() {
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
                            <Form className="subemail__form d-flex justify-content-end align-items-center">
                                <Form.Group className="flex-grow-1 me-2" 
                                    controlId="formBasicEmail"
                                >
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        className="ms-auto"
                                    />
                                </Form.Group>
                                <Button type="submit">
                                Subscribe
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
