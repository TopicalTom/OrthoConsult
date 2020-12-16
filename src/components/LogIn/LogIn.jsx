import React, { useState } from 'react';
import { useModal } from "../../contexts/ModalProvider";
import { useAuth } from "../../contexts/AuthProvider";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import "./LogIn.scss";

// Images
import Google from "../../assets/logos/Google.svg";

Modal.setAppElement('*');

function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useAuth(); 
    const { loginIsOpen, toggleLogin, switchToSignUp } = useModal();

    function handleEmailInput(e) {
        setEmail(e.target.value)
    }

    function handlePasswordInput(e) {
        setPassword(e.target.value)
    }

    function handleRememberSwitch(e) {
        setRemember(e.target.value)
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
        setRemember(false)
        toggleLogin()
    }

    return (
        <Modal
            isOpen={loginIsOpen}
            onRequestClose={toggleLogin}
            className="login"
            overlayClassName="overlay"
        >
            <div className="login__content">
                <h2 
                    className="login__header">
                    Log In
                </h2>
                <form 
                    className="login__form" 
                    onSubmit={handleSubmit}>
                    <input
                        className="login__input login__input--text"
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={handleEmailInput}
                        value={email}
                    />
                    <input
                        className="login__input login__input--text"
                        type="text"
                        name="password"
                        placeholder="Password"
                        onChange={handlePasswordInput}
                        value={password}
                    />
                    <a className="login__link">Forgot password</a>
                    <button
                        className="login__button login__button--submit"
                        disabled={loading}
                        type="submit">
                        Log In
                    </button>
                </form>
                <span
                    className="login__redirect"
                    >
                    New Client?
                    <button
                        className="login__switch"
                        onClick={switchToSignUp}
                        >
                        Sign Up
                    </button>
                </span>

            </div>
        </Modal>
    );
}

export default LogIn;