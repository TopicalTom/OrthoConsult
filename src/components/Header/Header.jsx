import React, {useState, useLayoutEffect} from 'react';
import { Link } from 'react-scroll';
import { useLocation } from 'react-router-dom';
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
    const [ mode, setMode ] = useState("Alt");
    const links = [
        {
            to: "results",
            name: "Why us"
        },
        {
            to: "service",
            name: "Platform"
        },
        {
            to: "about",
            name: "Background"
        },
        {
            to: "contact",
            name: "Contact"
        },
    ]

    // Handles On Scroll actions
    useLayoutEffect(() => {
        const isScrolledDown = previousScroll < currentScroll;

        setHide(isScrolledDown && currentScroll > 10
            ?   "hidden"
            :   ""
        );

        setToggle(currentScroll > 550
            ?   "active"
            :   "inactive"
        )

        setMode(currentScroll > 550
            ?   ""
            :   "Alt"
        )
    }, [previousScroll, currentScroll]);

    return (
        <header className={`header ${hide} header--${toggle}`}>
            <div className="header__container">
            <Link
                className={`header__watermark header__watermark--${toggle}`}
                spy={true}
                smooth={true}
                offset={-170}
                duration={500}
                to="hero">
                OrthoConsult
            </Link>
            <nav className={`header__nav ${location.pathname === "/register" || location.pathname === "/login" ? "hide" : ""}`}>
                <ul className={`header__links header__links--${toggle}`}>
                    {links.map((link => {
                        return (
                            <li>
                                <Link
                                    activeClass="active"
                                    className={`header__link header__link--${toggle}`}
                                    spy={true}
                                    smooth={true}
                                    offset={-170}
                                    duration={500}
                                    to={link.to}>
                                    {link.name}
                                </Link>
                            </li>
                        )
                    }))}
                </ul>
            </nav>
            <div className={`header__actions ${location.pathname === "/register" || location.pathname === "/login" ? "hide" : ""}`}>
                <Button
                    className={`header__button isAction${mode}`}
                    type="route"
                    to={!currentUser ? "/login" : "/dashboard"}>
                    {!currentUser ? "Sign in" : "Dashboard"}
                </Button>
                <Button
                    className={`header__button isPrimary${mode}`}
                    type="route"
                    to={!currentUser ? "/register" : "/evaluation"}>
                    {!currentUser ? "Sign up" : "New case"}
                </Button>
            </div>

            </div>
        </header>
    );
};

export default Header;

/*
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
                            className={`header__link header__link--${toggle}`}
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
                            className={`header__link header__link--${toggle}`}
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
                            className={`header__link header__link--${toggle}`}
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
                            className={`header__link header__link--${toggle}`}
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

*/