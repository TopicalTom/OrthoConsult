import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import { useDashboard } from '../../contexts/DashboardProvider';
import "../../pages/Dashboard/Dashboard.scss";

// Assets 
import logoutIcon from '../../assets/icons/logout.svg';
import home from "../../assets/icons/homealt.svg";
import cases from "../../assets/icons/folder.svg";
import resources from "../../assets/icons/printer.svg";
import education from "../../assets/icons/education.svg";
import account from "../../assets/icons/user.svg";
import legal from "../../assets/icons/cases.svg";
import contact from "../../assets/icons/message.svg";
import settings from "../../assets/icons/settings.svg";
import payment from "../../assets/icons/payment.svg";

const DashboardNav = () => {
    const { logout } = useAuth();
    const { page, currentCase } = useDashboard();
    const routes = [
        {
            id: "home",
            name: "Home",
            url: "/dashboard",
            icon: home,
        },
        {
            id: "cases",
            name: "Cases",
            url: `/dashboard/cases/${currentCase}`,
            icon: cases,
        },
        {
            id: "resources",
            name: "Resources",
            url: "/dashboard/resources",
            icon: resources,
        },
        {
            id: "education",
            name: "Self Study",
            url: "/dashboard/education",
            icon: education,
        },
        {
            id: "contact",
            name: "Contact",
            url: "/dashboard/contact",
            icon: contact,
        },
        {
            id: "account",
            name: "Account",
            url: "/dashboard/account",
            icon: account,
        },
        {
            id: "payments",
            name: "Payments",
            url: "/dashboard/payments",
            icon: payment,
        },
        {
            id: "legal",
            name: "Legal",
            url: "/dashboard/legal",
            icon: legal,
        },
        {
            id: "settings",
            name: "Settings",
            url: "/dashboard/settings",
            icon: settings,
        }
    ]

    return (
        <aside className="dashboard__nav" >
            <Link className="dashboard__watermark" to="/">
                <h3 
                    className="dashboard__watermark">
                    OrthoConsult
                </h3>
            </Link>
            <ul className="dashboard__links">
                {routes && routes.map(link => {
                    return (
                        <li style={{gridArea: `${link.id}`}}>
                            <Link
                                className={`dashboard__tab dashboard__tab--${
                                    page === link.id
                                        ?   "active"
                                        :   "inactive"
                                }`}
                                to={link.url}
                                >
                                <img 
                                    className={`dashboard__icon dashboard__icon--${link.id}`}
                                    src={link.icon}
                                />
                                <span className="dashboard__link">{link.name}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <button 
                className="dashboard__logout"
                onClick={() => logout}>
                <img 
                    className="dashboard__icon dashboard__icon--logout"
                    src={logoutIcon}
                />
                <span className="dashboard__link">Logout</span>
            </button>
        </aside>
    );
};

export default DashboardNav;

/*
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import "../../pages/Dashboard/Dashboard.scss";

// Assets 
import logoutIcon from '../../assets/icons/logout.svg';

const DashboardNav = props => {
    const { links } = props;
    const { logout } = useAuth();

    return (
        <aside className="dashboard__nav" >
            <Link className="dashboard__watermark" to="/">
                <h3 
                    className="dashboard__watermark">
                    OrthoConsult
                </h3>
            </Link>
            <ul className="dashboard__links">
                {links && links.map(link => {
                    return (
                        <li 
                            className="dashboard__toucharea"
                            style={{gridArea: `${link.id}`}}>
                            <img 
                                className={`dashboard__icon dashboard__icon--${link.id}`}
                                src={link.icon}
                            />
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
            <button 
                className="dashboard__logout"
                onClick={() => logout}>
                <img 
                    className="dashboard__icon dashboard__icon--logout"
                    src={logoutIcon}
                />
                <span className="dashboard__link">Logout</span>
            </button>
        </aside>
    );
};

export default DashboardNav;

*/