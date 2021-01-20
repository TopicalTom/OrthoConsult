import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./Footer.scss";

function Footer() {

    return (
        <footer className="footer">
            <div className="footer__container">
                <h2 className="footer__header">OrthoConsult</h2>
            </div>
            <div className="footer__links1">
                <h3>Quick links</h3>
                <ul className="footer__links">
                    <li className="footer__link">
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li className="footer__link">
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="footer__links2">
                <h3>Dashboard</h3>
                <ul className="footer__links">
                    <li className="footer__link">
                        <Link to="/dashboard">
                            Home
                        </Link>
                    </li>
                    <li className="footer__link">
                        <Link to="/dashboard/cases">
                            Cases
                        </Link>
                    </li>
                    <li className="footer__link">
                        <Link to="/dashboard/resources">
                            Resources
                        </Link>
                    </li>
                    <li className="footer__link">
                        <Link to="/dashboard/education">
                            Self Study
                        </Link>
                    </li>
                    <li className="footer__link">
                        <Link to="/dashboard/account">
                            Account
                        </Link>
                    </li>
                    <li className="footer__link">
                        <Link to="/dashboard/payments">
                            Payments
                        </Link>
                    </li>
                    <li className="footer__link">
                        <Link to="/dashboard/legal">
                            Legal
                        </Link>
                    </li>
                    <li className="footer__link">
                        <Link to="/dashboard/settings">
                            Settings
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;