import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import { useDashboard } from '../../contexts/DashboardProvider';
import "../../pages/Dashboard/Dashboard.scss";

// Templates
import dashboard from '../../templates/dashboard';

// Assets 
import logoutIcon from '../../assets/icons/logout.svg';

const DashboardNav = () => {
    const { logout } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const { currentCase, clientCases } = useDashboard();
    const routes = dashboard({currentCase, clientCases});

    // Logs Account out and returns to Home
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
                                className={`
                                dashboard__tab 
                                dashboard__tab--${route.id} 
                                dashboard__tab--${location.pathname === route.url ? "active" : "inactive"}`}
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