import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { API_KEY } from "../../utils/constant";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginAdmin } from "../../redux/User/userSlice";

export default function AdminLogin() {

    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).max(32).required(),
    });

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const submit = async (value) => {
        try {
            const res = await axios.post(
                `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
                {
                    email: value.email,
                    password: value.password,
                    returnSecureToken: true,
                }
            );
            await signInWithEmailAndPassword(auth, value.email, value.password);
            dispatch(loginAdmin(res.data));
            navigate("/home");
        } catch (error) {
            console.log(error);
            setShowModal(true)
        }
    };



  return (
    <div className="login-form mt-5">
    
                <Container>
                    <form onSubmit={handleSubmit(submit)}>
                        <label className="mb-2">Email address</label>
                        <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Your email"
                            {...register("email")}
                            required
                        />
                        <p>{errors.email?.message}</p>

                        <label className="mb-2">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            {...register("password")}
                            required
                        />
                        <p>{errors.password?.message}</p>

                        <button
                            type="submit"
                            className="btn btn-primary d-inline-flex"
                        >
                            Sign In
                        </button>
                    </form>


                    {/* <Modal show={showModal} onHide={handleClose} animation={true}>
                    <Modal.Body>
                            Incorrect account or password
                            <Link className="d-inline-block ms-2" to={"/signup"}>
                                No account? Create one here
                            </Link>
                        </Modal.Body>
                    </Modal> */}
                </Container>
            </div>
  )
}
