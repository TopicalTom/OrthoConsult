import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthProvider";
import { useScroll } from "../../contexts/ScrollProvider";
import "./Header.scss";

function Header() {
    const { currentUser, logout } = useAuth();
    const { position } = useScroll();
    const [ currentUrl, setCurrentUrl ] = useState("");

    useEffect(() => {
        const path = window.location.pathname;

        setCurrentUrl(path)

    }, [window.location.pathname]);

    return (
        <header className={`header header--${position > 200 ? "inactive" : "inactive"}`}>
            <div className="header__container">
                <Link
                    className="header__watermark"
                    to="/">
                    OrthoConsult
                </Link>
                <nav className={`header__nav header__nav--${position > 200 ? "inactive" : "inactive"}`}>
                    <ul className="header__links">
                        <li>Our Service</li>
                        <li>Why Us</li>
                        <li>Background</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                    </ul>
                </nav>
                <div className={`header__actions header__actions--${currentUrl === "/" ? "active" : "inactive"}`}>
                    {!currentUser
                        ?   <Link
                                className="header__button header__button--secondary"
                                to="/login">
                                Sign in
                            </Link>
                        :   <button
                                className="header__button header__button--secondary"
                                onClick={logout}>
                                Logout
                            </button>
                    }
                    <Link
                        className="header__button header__button--primary"
                        to={!currentUser ? "/register" : "/dashboard"}
                        >
                        {!currentUser ? "Sign Up" : "Dashboard"}
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;

/*
                    <button 
                        className={`header__button header__button--${!currentUser ? "signup" : "case"}`}
                        onClick={!currentUser ? toggleSignUp : toggleCase}>
                        {!currentUser ? "Sign Up" : "Submit Case"}
                    </button>
                                        <button
                        className={`header__button header__button--${!currentUser ? "login" : "logout"}`}
                        onClick={!currentUser ? toggleLogin : toggleCase}>
                        {!currentUser ? "Sign in" : "Dashboard"}
                    </button>

*/