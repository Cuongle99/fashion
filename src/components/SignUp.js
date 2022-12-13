import React, {useState} from 'react'
import { Container} from "react-bootstrap";
import Footer from './Footer';
import Header from './Header';
import {API_KEY} from '../utils/constant';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';

export default function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const submit = async () => {
        try {

            if(confirmPassword === password) {
                const res = await axios.post(
                    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
                    {
                        email: email,
                        password: password,
                        returnSecureToken: true,
                    }
                );
                navigate('/signin')
            }
            
            
        } catch (error) {
            console.log(error);
        }
        
    }

  return (
    <>
            <Header/>
            <Breadcrumb data={'Sign Up'} />
            <div className="login-form">
                <Container>
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
                    <div className="mb-3">
                        <label className="mb-2">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={confirmPassword}
                            onChange={(e) => setconfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="mt-5">
                        <button
                            // type="submit"
                            className="btn btn-primary d-inline-flex"
                            onClick={() => submit()}
                        >
                            Submit
                        </button>
                    </div>
                    <Link className='mt-3 d-inline-block' to={'/signin'}> Sign in now</Link>
                </Container>
            </div>
            <Footer />
            
        </>
  )
}
