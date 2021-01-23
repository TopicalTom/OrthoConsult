import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./Footer.scss";

function Footer() {

    return (
        <footer className="footer">
            <div className="footer__container">
                <h2 className="footer__header">OrthoConsult</h2>
            </div>
        </footer>
    );
};

export default Footer;