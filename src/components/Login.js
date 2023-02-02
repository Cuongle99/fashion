import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../redux/User/userSlice";
import { API_KEY } from "../utils/constant";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "./Breadcrumb";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Login() {
    const dispatch = useDispatch();

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
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
            dispatch(login(res.data));
            navigate("/home");
        } catch (error) {
            console.log(error);
        }
    };

    // const test = (data) => {
    //     console.log(data.email);
    // };
    return (
        <>
            <Header></Header>
            <Breadcrumb data={"Sign In"} />
            <div className="login-form">
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

                    <Link className="mt-3 d-inline-block" to={"/signup"}>
                        No account? Create one here
                    </Link>
                </Container>
            </div>
            <Footer />
        </>
    );
}
