import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import { API_KEY } from "../utils/constant";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function SignUp() {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).max(32).required(),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords must match"),
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
            if (value.confirmPassword === value.password) {
                const res = await axios.post(
                    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
                    {
                        email: value.email,
                        password: value.password,
                        returnSecureToken: true,
                    }
                );
                navigate("/signin");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Header />
            <Breadcrumb data={"Sign Up"} />
            <div className="login-form">
                <Container>

                    <form onSubmit={handleSubmit(submit)}>
                        <label className="mb-2">Email address</label>
                        <input
                            type="email"
                            className="form-control"
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
                        <label className="mb-2">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            {...register("confirmPassword")}
                            required
                        />
                        <p>{errors.confirmPassword?.message}</p>
                        <button
                            type="submit"
                            className="btn btn-primary d-inline-flex mt-5"
                        >
                            Submit
                        </button>
                    </form>
                    <Link className="mt-3 d-inline-block" to={"/signin"}>
                        {" "}
                        Sign in now
                    </Link>
                </Container>
            </div>
            <Footer />
        </>
    );
}
