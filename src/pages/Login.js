import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../App';
import '../style/Login.css';
import { signInWithPassword } from '../componant/Login/Login.manager';
import Navbar from '../componant/Home/Navbar';
import logo from '../assets/logo.svg';

function Login() {
    const [user, setUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        signInWithPassword(data.email, data.password)
            .then(response => {
                setUser(response);
                if (response.email) {
                    history.push('/home');
                }
            })
    };

    return (
        <>
            <Navbar />
            <div style={{ height: '100vh' }} className="d-flex justify-content-center align-items-center">

                <div className="card loginCard p-5">
                    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="text-center">
                            <img src={logo} alt="" className="img-fluid" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                placeholder="enter your email"
                                type="email"
                                {...register("email")}
                            />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                placeholder="Enter your passwoed"
                                type="password"
                                {...register("password")}
                            />
                        </div>

                        <div>
                            <h6 className="text-danger">{!user.email && user}</h6>
                        </div>
                        <input type="submit" value="Log in" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
