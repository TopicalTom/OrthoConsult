import React from 'react';
import { useModal } from "../../contexts/ModalProvider";
import { useAuth } from "../../contexts/AuthProvider";
import "./Header.scss";

function Header() {
    const { toggleSignUp, toggleCase, toggleLogin } = useModal();
    const { currentUser, logout } = useAuth();

    return (
        <header className="header">
            <div className="header__container">
                <h3 className="header__watermark">OrthoConsult</h3>
                <nav className="header__nav">
                    <ul className="header__links">
                        <li><a>Our Service</a></li>
                        <li>Why Us</li>
                        <li>Background</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                    </ul>
                </nav>
                <div>
                    <button
                        className={`header__button header__button--${!currentUser ? "login" : "logout"}`}
                        onClick={!currentUser ? toggleLogin : logout}>
                        {!currentUser ? "Login" : "Log Out"}
                    </button>
                    <button 
                        className={`header__button header__button--${!currentUser ? "signup" : "case"}`}
                        onClick={!currentUser ? toggleSignUp : toggleCase}>
                        {!currentUser ? "Sign Up" : "Submit Case"}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;