import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ScrollProvider } from '../../contexts/ScrollProvider';
import { useAuth } from "../../contexts/AuthProvider";
import "./SignUp.scss";

// Components
import Header from "../../components/Header/Header";

function SignUp() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth(); 

    function handleNameInput(e) {
        setName(e.target.value)
    }

    function handlePhoneInput(e) {
        setPhone(e.target.value)
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
            await signup(email, password, name, phone)
        } catch {
            setError("Failed to create and account")
        }
        setLoading(false)
        setName("")
        setPhone("")
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
            label: "Phone Number",
            name: "phone",
            type: "text",
            callback: handlePhoneInput,
            value: phone
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
            details: "This enables us to provide your case details with you in an accessible way"
        },
        {
            action: "Sign our agreement",
            details: "We will email you an agreement that you can look over and sign"
        },
        {
            action: "Start submitting",
            details: "You will be granted access to our form for use in sending us case evaluations"
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
                    return (
                        <>
                            <label 
                                className="signup__label"
                                htmlFor={item.name}>
                                    {item.label}
                            </label>
                            <input 
                                className="signup__input"
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
                    className="signup__button"
                    type="submit"
                >
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

/*
            <div className="signup__section signup__section--cta">
                <div className="signup__cta">
                    <h1 className="signup__title">Pre-case Evaluations</h1>
                    <p className="signup__details">Case Evaluations are exclusive to clients so please sign up in order to complete the pre-case evaluation.</p>
                    <a className="signup__learn">Learn More</a>
                </div>
            </div>
            <div className="signup__section signup__section--auth">
                <h2 className="signup__header">Create an OrthoConsult account</h2>
                <form 
                    className="signup__form"
                    onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input
                        className="signup__input signup__input--text"
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={handleEmailInput}
                        value={email}
                    />
                    <label>Phone Number</label>
                    <input
                        className="signup__input signup__input--text"
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        onChange={handlePhoneInput}
                        value={phone}
                    />
                    <label className="signup__label">Full Name</label>
                    <input
                        className="signup__input signup__input--text"
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        onChange={handleNameInput}
                        value={name}
                    />
                    <label>Password</label>
                    <input
                        className="signup__input signup__input--text"
                        type="text"
                        name="password"
                        placeholder="Password"
                        onChange={handlePasswordInput}
                        value={password}
                    />
                    <button
                        className="signup__button signup__button--submit"
                        disabled={loading}
                        type="submit">
                        Create Account
                    </button>
                    <span 
                        className="signup__redirect">
                        Already a Client? 
                        <Link
                            className="signup__switch"
                            to="/login">
                            Log-In
                        </Link>
                    </span>
                </form>
            </div>

*/