import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import "../../pages/Dashboard/Dashboard.scss";

const DashboardNav = props => {
    const { links } = props;
    const { logout } = useAuth();

    return (
        <aside className="dashboard__nav" >
            <Link to="/">
                <h3 
                    className="dashboard__watermark">
                    OrthoConsult
                </h3>
            </Link>
            <ul className="dashboard__links">
                {links && links.map(link => {
                    return (
                        <li>
                            <Link
                                className="dashboard__link"
                                to={link.url}
                                >
                                {link.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => logout}>
                Logout
            </button>
        </aside>
    );
};

export default DashboardNav;