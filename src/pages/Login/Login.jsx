import React from 'react';
import { ScrollProvider } from '../../contexts/ScrollProvider';
import { Link } from "react-router-dom";
import "./Login.scss";

// Components
import Header from "../../components/Header/Header";
import Form from "../../components/LoginForm/LoginForm";

function Login() {
    
    return (
        <ScrollProvider>
        <Header />
        <main className="login">
            <Form />
            <span className="login__redirect">
                Need an account? 
                <Link
                    to="/register"
                    className="login__switch">
                    Sign up
                </Link>
            </span>
            <div className="login__partition" />
        </main>
        </ScrollProvider>
    );
};

export default Login;

/*
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ScrollProvider } from '../../contexts/ScrollProvider';
import { useAuth } from "../../contexts/AuthProvider";
import "./Login.scss";

// Components
import Header from "../../components/Header/Header";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useAuth(); 

    function handleEmailInput(e) {
        setEmail(e.target.value)
    }

    function handlePasswordInput(e) {
        setPassword(e.target.value)
    }


    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            setError("")
            setLoading(true)
            await login(email, password)
        } catch {
            setError("Failed to login to account")
        }
        setLoading(false)
        setEmail("")
        setPassword("")
    }

    const options = [
        {
            label: "Email",
            name: "email",
            type: "email",
            callback: handleEmailInput,
            value: email
        },
        {
            label: "Password",
            name: "password",
            type: "password",
            callback: handlePasswordInput,
            value: password
        }
    ]
    
    return (
        <ScrollProvider>
        <Header />
        <main className="login">
            <form 
                className="login__form"
                onSubmit={handleSubmit}
                >
                <h2 
                    className="login__header">
                    Login
                </h2>
                {options && options.map((item) => {
                    return (
                        <>
                            <label 
                                className="login__label"
                                htmlFor={item.name}>
                                    {item.label}
                            </label>
                            <input 
                                className="login__input"
                                type={item.type}
                                name={item.name}
                                placeholder=""
                                onChange={item.callback}
                                value={item.value}
                            />
                        </>
                    )
                })}
                <button 
                    className="login__button"
                    type="submit"
                    disabled={loading}>
                    Continue
                </button>
                <span className="login__redirect">
                    Need an account? 
                    <Link
                        to="/register"
                        className="login__link">
                        Sign up
                    </Link>
                </span>
            </form>
            <div className="login__partition" />
        </main>
        </ScrollProvider>
    );
};

export default Login;

*/