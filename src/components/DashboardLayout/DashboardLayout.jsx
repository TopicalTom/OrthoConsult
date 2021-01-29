import React from 'react';
import "../../pages/Dashboard/Dashboard.scss";

// Components
import Header from '../DashboardHeader/DashboardHeader';

const DashboardPage = ({ children, ...props }) => {
    const { className, title } = props;

    return (
        <div className="dashboard__page">
            <Header title={title} />
            <main className={`dashboard__content ${className}`}>
                {children}
            </main>
        </div>
    );
}

export default DashboardPage;