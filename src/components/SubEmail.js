import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendEmail } from "../redux/ClientEmail/EmailSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function SubEmail() {
    const dispatch = useDispatch()
    
    const [statusSubmit, setstatusSubmit] = useState(true)
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const listEmail = useSelector(state => state.emailReducer)


    const schema = yup.object().shape({
        email: yup.string().email().required(),
    });

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const submit = (data) => {
    
        const check  =  Object.values(listEmail.data).filter(item => {
            return item.arg === data.email
        })

        if (check.length < 1) {
            dispatch(sendEmail(data.email))
            setstatusSubmit(true)
        } else {
            setstatusSubmit(false)
        }
        setShowModal(true);


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
                            <div className="subemail__form">
                                
                                <form className="d-flex justify-content-end align-items-center" onSubmit={handleSubmit(submit)}>
                                    <div className="flex-grow-1 me-3 text-end subemail__form__input">
                                    <input
                                        type="email"
                                        placeholder="Enter email"
                                        className="ms-auto w-100"
                                        {...register('email')}
                                        required
                                    />
                                    <p>{errors.email?.message}</p>
                                    </div>

                                <button>
                                Subscribe
                                </button>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Modal show={showModal} onHide={handleClose} animation={true}>
                <Modal.Body>
                    {statusSubmit ? "Email registration successful" : "This email is already registered"}
                    
                </Modal.Body>
            </Modal>
            </Container>
        </div>
    );
}

