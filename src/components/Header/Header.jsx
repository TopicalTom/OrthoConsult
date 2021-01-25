import React, {useState, useEffect} from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthProvider";
import { useScroll } from "../../contexts/ScrollProvider";
import "./Header.scss";

// Components 
import Button from '../Button/Button';

function Header() {
    const { currentUser } = useAuth();
    const location = useLocation();
    const { previousScroll, currentScroll } = useScroll();
    const [ hide, setHide ] = useState("");
    const [ toggle, setToggle ] = useState("inactive");

    // Handles On Scroll actions
    useEffect(() => {
        const isScrolledDown = previousScroll < currentScroll;

        setHide(isScrolledDown && currentScroll > 10
            ?   "hidden"
            :   ""
        );

        setToggle(currentScroll > 768
            ?   "active"
            :   "inactive"
        )
    }, [previousScroll, currentScroll]);

    return (
        <header className={`header ${hide} header--${toggle}`}>
            <div className="header__container">
            <Link
                className={`header__watermark header__watermark--${toggle}`}
                to="/">
                OrthoConsult
            </Link>
            <nav className={`header__nav ${location.pathname === "/register" || location.pathname === "/login" ? "hide" : ""}`}>
                <ul className={`header__links header__links--${toggle}`}>
                    <li>
                        <ScrollLink
                            activeClass="active"
                            className="header__link"
                            spy={true}
                            smooth={true}
                            offset={-170}
                            duration={500}
                            to="results">
                            Why us
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            activeClass="active"
                            className="header__link"
                            spy={true}
                            smooth={true}
                            offset={-170}
                            duration={500}
                            to="service">
                            Platform
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            activeClass="active"
                            className="header__link"
                            spy={true}
                            smooth={true}
                            offset={-170}
                            duration={500}
                            to="about">
                            Background
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            activeClass="active"
                            className="header__link"
                            spy={true}
                            smooth={true}
                            offset={-170}
                            duration={500}
                            to="contact">
                            Testimonies
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            activeClass="active"
                            className="header__link"
                            spy={true}
                            smooth={true}
                            offset={-170}
                            duration={500}
                            to="contact">
                            Contact
                        </ScrollLink>
                    </li>

                </ul>
            </nav>
            <div className={`header__actions ${location.pathname === "/register" || location.pathname === "/login" ? "hide" : ""}`}>
                <Link
                    className="header__button header__button--secondary"
                    to={!currentUser 
                        ?   "/login" 
                        :   "/dashboard"
                    }>
                    {!currentUser 
                        ?   "Sign in" 
                        :   "Dashboard" 
                    }
                </Link>
                <Link
                    className="header__button header__button--primary"
                    to={!currentUser 
                        ?   "/register" 
                        :   "/evaluation"
                    }>
                    {!currentUser 
                        ?   "Sign up" 
                        :   "New case" 
                    }
                </Link>
            </div>

            </div>
        </header>
    );
};

export default Header;

/*

import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthProvider";
import { useScroll } from "../../contexts/ScrollProvider";
import "./Header.scss";

// Components 
import Button from '../Button/Button';

function Header() {
    const { currentUser, logout } = useAuth();
    const location = useLocation();
    const { previousScroll, currentScroll } = useScroll();
    const [ hide, setHide ] = useState("");
    const [ toggle, setToggle ] = useState("inactive");

    // Handles On Scroll actions
    useEffect(() => {
        const minimum = 10;
        const isScrolledDown = previousScroll < currentScroll;
        const isMinimumScrolled = currentScroll > minimum;

        setHide(isScrolledDown && isMinimumScrolled
            ?   "hidden"
            :   ""
        );

        setToggle(currentScroll > 900
            ?   "active"
            :   "inactive"
        )
    }, [previousScroll, currentScroll]);

    return (
        <header className={`header ${hide} header--${toggle}`}>
            <div className="header__container">
                <Link
                    className={`header__watermark header__watermark--${toggle}`}
                    to="/">
                    OrthoConsult
                </Link>
                <nav className={`header__nav ${location.pathname === "/register" || location.pathname === "/login" ? "hide" : ""}`}>
                    <ul className={`header__links header__links--${toggle}`}>

                    </ul>
                </nav>
                <div className={`header__actions ${location.pathname === "/register" || location.pathname === "/login" ? "hide" : ""}`}>
                    <Button 
                        theme="dark"
                        type="secondary"
                        link="/dashboard" 
                        authLink="/login"
                        text="Dashboard" 
                        authText="Log in"
                    />
                    <Button 
                        theme="dark"
                        type="primary"
                        link="/evaluation" 
                        authLink="/register"
                        text="New case" 
                        authText="Register"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;

*/