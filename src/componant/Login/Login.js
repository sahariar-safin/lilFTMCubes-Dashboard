import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import './Login.css'
import { signInWithPassword } from './Login.manager';

function Login() {
    const [user, setUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        signInWithPassword(data.email, data.password)
            .then(response => {
                console.log(response)
                setUser(response)
                if (response.email) {
                    history.push('/allblog');
                }
            })
    };

    return (
        <div style={{ background: "#778beb", height: '100vh' }} className="d-flex justify-content-center align-items-center">

            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <h1>Log In</h1>
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
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login
