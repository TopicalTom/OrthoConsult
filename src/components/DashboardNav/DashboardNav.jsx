import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import { useDashboard } from '../../contexts/DashboardProvider';
import "../../pages/Dashboard/Dashboard.scss";

// Assets 
import logoutIcon from '../../assets/icons/logout.svg';
import home from "../../assets/icons/homealt.svg";
import cases from "../../assets/icons/folder.svg";
import resources from "../../assets/icons/printer.svg";
import education from "../../assets/icons/education.svg";
import legal from "../../assets/icons/cases.svg";
import contact from "../../assets/icons/message.svg";
import settings from "../../assets/icons/settings.svg";
import payment from "../../assets/icons/payment.svg";

const DashboardNav = () => {
    const { logout } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const { currentCase } = useDashboard();
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

    const handleLogout = () => {
        logout()
        history.push('/');
    }

    return (
        <nav className="dashboard__nav" >
            <Link className="dashboard__watermark" to="/">
                <h2>OrthoConsult</h2>
            </Link>
            <ul className="dashboard__routes">
                {routes && routes.map(route => {
                    return (
                        <li style={{gridArea: `${route.id}`}}>
                            <Link
                                className={`dashboard__tab dashboard__tab--${
                                    location.pathname === route.url
                                        ?   "active"
                                        :   "inactive"
                                }`}
                                to={route.url}
                                >
                                <img 
                                    className={`dashboard__icon dashboard__icon--${route.id}`}
                                    src={route.icon}
                                />
                                <span className="dashboard__link">{route.name}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <div className="dashboard__logout">
                <button 
                    className="dashboard__tab dashboard__tab--logout "
                    onClick={handleLogout}>
                    <img 
                        className="dashboard__icon dashboard__icon--logout"
                        src={logoutIcon}
                    />
                    <span className="dashboard__link">Logout</span>
                </button>
            </div>
        </nav>
    );
};

export default DashboardNav;