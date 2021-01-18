import React from 'react';
import { Link } from "react-router-dom";
import { useDashboard } from '../../contexts/DashboardProvider';
import "../Dashboard/Dashboard.scss";

function Home() {
    const { clientCases } = useDashboard();

    return (
        <div className="dashboard__content">
            <section className="dashboard__section">
                <h3 className="dashboard__subtitle">Cases overview</h3>
                    <ul className="dashboard__cases">
                            <li className="dashboard__case">
                                <Link
                                    to={`/dashboard/cases`}>
                                    Feedback provided
                                    <p></p>
                                </Link>
                            </li>
                            <li className="dashboard__case">
                                <Link
                                    to={`/dashboard/cases`}>
                                    Awaiting Feedback
                                </Link>
                            </li>
                            <li className="dashboard__case">
                                <Link
                                    to={`/dashboard/cases`}>
                                    Total Cases
                                    <p>{clientCases.length}</p>
                                </Link>
                            </li>
                    </ul>                           
            </section>
            <section className="dashboard__section">
                <h3 className="dashboard__subtitle">Suggested actions</h3>
                <div className="dashboard__cards">
                    <div className="dashboard__action">
                    
                    </div>
                    <div className="dashboard__action">
                    
                    </div>
                    <div className="dashboard__action">
                    
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;