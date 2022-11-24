import React, { useState } from "react";
import { Container} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../redux/User/userSlice";
import { API_KEY } from "../utils/constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Header from "../components/Header";
import Footer from '../components/Footer'


export default function Login() {
    const dispatch = useDispatch();
    // const token = useSelector((state) => state.userReducer.token);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submit = async () => {
        try {
            const res = await axios.post(
                `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
                {
                    email: email,
                    password: password,
                    returnSecureToken: true,
                }
            );
            await signInWithEmailAndPassword(auth, email, password);
            dispatch(login(res.data));
            navigate("/home");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <Header></Header>
            <div className="login-form">
                <Container>
                    <h1 className="mb-3">Sign In</h1>
                    <div className="mb-3">
                        <label className="mb-2">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="mb-2">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="">
                        <button
                            // type="submit"
                            className="btn btn-primary d-inline-flex"
                            onClick={() => submit()}
                        >
                            Submit
                        </button>
                    </div>
                </Container>
            </div>
            <Footer />
            
        </>
    );
}
