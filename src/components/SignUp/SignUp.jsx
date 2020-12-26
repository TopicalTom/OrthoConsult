import React, { useState } from 'react';
import { useModal } from "../../contexts/ModalProvider";
import { useAuth } from "../../contexts/AuthProvider";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import "./SignUp.scss"

// Images
import Google from "../../assets/logos/Google.svg";

Modal.setAppElement('*');

function SignUp() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth(); 
    const { signUpIsOpen, toggleSignUp, switchToLogin } = useModal();

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
        setPhone(null)
        setEmail("")
        setPassword("")
        toggleSignUp()
    }

    return (
        <Modal
            isOpen={signUpIsOpen}
            onRequestClose={toggleSignUp}
            className="signup"
            overlayClassName="overlay"
        >
            <div className="signup__section signup__section--cta">
                <div className="signup__cta">
                    <h1 className="signup__title">Pre-case Evaluations</h1>
                    <p className="signup__details">Case Evaluations are exclusive to clients so please sign up in order to complete the pre-case evaluation.</p>
                    <a className="signup__learn">Learn More</a>
                </div>
            </div>
            <div className="signup__section signup__section--auth">
                <h2 className="signup__header">Sign Up</h2>
                <button
                    className="signup__button signup__button--google"
                    disabled={loading}
                    type="auth">
                    <img 
                        className="signup__logo"
                        src={Google}
                    />
                    Sign in with Google
                </button>
                <p className="signup__break">or</p>
                <form 
                    className="signup__form"
                    onSubmit={handleSubmit}>
                    <input
                        className="signup__input signup__input--text"
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        onChange={handleNameInput}
                        value={name}
                    />
                    <input
                        className="signup__input signup__input--text"
                        type="number"
                        name="phone"
                        placeholder="Phone Number"
                        onChange={handlePhoneInput}
                        value={phone}
                    />
                    <input
                        className="signup__input signup__input--text"
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={handleEmailInput}
                        value={email}
                    />
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
                        <button 
                            className="signup__switch"
                            onClick={switchToLogin}>
                            Log-In
                        </button>
                    </span>
                </form>
            </div>
        </Modal>
    );
}

export default SignUp;