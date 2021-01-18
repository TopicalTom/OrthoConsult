import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDashboard } from '../../contexts/DashboardProvider';
import "../../pages/Dashboard/Dashboard.scss";

const DashboardBar = () => {
    const { clientCases } = useDashboard();
    const location = useLocation();

    return (
        <nav className="dashboard__bar">
            <div className="dashboard__items dashboard__items--selected">
                <p className="dashboard__label">Currently viewing</p>
                {clientCases && clientCases
                    .filter(item => {
                        return item.uid === location.pathname.split("/dashboard/cases/")[1]
                    })
                    .map(item => {
                        return (
                            <div className="dashboard__item">
                                <Link
                                    to={`/dashboard/cases/${item.uid}`}>
                                    {item.patient}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <div className="dashboard__items dashboard__items--all">
                <p className="dashboard__label">All Cases</p>
                <ul className="dashboard__caselist">
                    {clientCases && clientCases
                        .filter(item => {
                            return item.uid !== location.pathname.split("/dashboard/cases/")[1]
                        })
                        .map((item) => {
                            return (
                                <li className="dashboard__item">
                                    <Link
                                        to={`/dashboard/cases/${item.uid}`}>
                                        {item.patient}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    );
};

export default DashboardBar;