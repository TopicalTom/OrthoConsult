import React from 'react';
import { ScrollProvider } from '../../contexts/ScrollProvider';
import { Link } from "react-router-dom";
import "./SignUp.scss";

// Components
import Header from "../../components/Header/Header";
import Form from "../../components/SignUpForm/SignUpForm";

// CTA Steps
const steps = [
    {
        action: "Create an account",
        details: "Fill out the following form to get access to your personal OrthoConsult Dashboard"
    },
    {
        action: "Submit a case",
        details: 'Gain access to our evaluation form where you will upload any relevant dental records'
    },
    {
        action: "Complete payment",
        details: "Upon submission, you will recieve a secure Stripe link for processing payment for your case"
    },
]

const SignUp = () => {
    
    return (
        <ScrollProvider>
        <Header />
        <main className="signup">
            <div className="signup__cta">
                <h2 
                    className="signup__subtitle">
                    It's simple!
                </h2>
                <ul className="signup__steps">
                    {steps && steps.map((item) => {
                        return (                    
                            <li className="signup__step">
                                <svg 
                                    className="signup__icon signup__icon--check"
                                    aria-hidden="true"
                                    viewBox="0 0 16 16">
                                    <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.083-11.005L7 9.085 5.207 7.294a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4.79-4.798a1 1 0 1 0-1.414-1.414z" fill-rule="evenodd" />
                                </svg>
                                <div className="signup__item">
                                    <h4 
                                        className="signup__action">
                                        {item.action}
                                    </h4>
                                    <p
                                        className="signup__details">
                                        {item.details}
                                    </p>
                                </div>
                            </li> 
                        )
                    })}
                </ul>
            </div>
            <Form />
            <span className="signup__redirect">
                Have an account? 
                <Link
                    to="/login"
                    className="signup__switch">
                    Sign in
                </Link>
            </span>
            <div className="signup__partition" />
        </main>
        </ScrollProvider>
    );
};

export default SignUp;

/*
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ScrollProvider } from '../../contexts/ScrollProvider';
import { useAuth } from "../../contexts/AuthProvider";
import "./SignUp.scss";

// Components
import Header from "../../components/Header/Header";
import Toggle from "../../components/Toggle/Toggle";

function SignUp() {
    const [name, setName] = useState("");
    const [location, setLocation] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth(); 

    function handleNameInput(e) {
        setName(e.target.value)
    }

    function handleLocationInput(e) {
        setLocation(e.target.value)
    }

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
            await signup(email, password, name, location)
        } catch {
            setError("Failed to create an account")
        }
        setLoading(false)
        setName("")
        setLocation("")
        setEmail("")
        setPassword("")
    }
    const options = [
        {
            label: "Full Name",
            name: "name",
            type: "text",
            callback: handleNameInput,
            value: name
        },
        {
            label: "Location",
            name: "location",
            type: "text",
            callback: handleLocationInput,
            value: location
        },
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
    const steps = [
        {
            action: "Create your account",
            details: "Gain access to your OrthoConsult dashboard for use in viewing cases and additional resources"
        },
        {
            action: "Link payment details",
            details: "Setup once and have transactions be completed whenever you submit a new case"
        },
        {
            action: "Start submitting",
            details: "Send a case when you have one; no barriers to when and how many you can submit"
        },
    ]
    
    return (
        <ScrollProvider>
        <Header />
        <main className="signup">
            <div className="signup__cta">
                <h2 
                    className="signup__subtitle">
                    It's simple!
                </h2>
                <ul className="signup__steps">
                    {steps && steps.map((item) => {
                        return (                    
                            <li className="signup__step">
                                <svg 
                                    className="signup__icon signup__icon--check"
                                    aria-hidden="true"
                                    viewBox="0 0 16 16">
                                    <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.083-11.005L7 9.085 5.207 7.294a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4.79-4.798a1 1 0 1 0-1.414-1.414z" fill-rule="evenodd" />
                                </svg>
                                <div className="signup__item">
                                    <h4 
                                        className="signup__action">
                                        {item.action}
                                    </h4>
                                    <p
                                        className="signup__details">
                                        {item.details}
                                    </p>
                                </div>
                            </li> 
                        )
                    })}
                </ul>
            </div>
            <form 
                className="signup__form"
                onSubmit={handleSubmit}
                >
                <h2 
                    className="signup__header">
                    Become a client
                </h2>
                {options && options.map((item) => {
                    const {name, label, value, type, callback} = item;
                    return (
                        <>
                            <label 
                                className="signup__label"
                                htmlFor={name}>
                                {label}
                            </label>
                            <input 
                                className="signup__input"
                                type={type}
                                name={name}
                                placeholder=""
                                onChange={callback}
                                value={value}
                            />
                        </>
                    )
                })}
                <Toggle />
                <button 
                    className="signup__button"
                    type="submit">
                    Create Account
                </button>
                <span className="signup__redirect">
                    Have an account? 
                    <Link
                        to="/login"
                        className="signup__link">
                        Sign in
                    </Link>
                </span>
            </form>
            <div className="signup__partition" />
        </main>
        </ScrollProvider>
    );
};

export default SignUp;

*/