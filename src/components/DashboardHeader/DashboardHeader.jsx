import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../../pages/Dashboard/Dashboard.scss";

const DashboardHeader = () => {
    const location = useLocation(); 

    return (
        <header className="dashboard__header" >
            <h2 className="dashboard__path">{location.pathname.split("/dashboard/")}</h2>
            <input className="dashboard__searchbar" placeholder="Search"/>
            <Link 
                className="dashboard__cta" 
                to="/evaluation">
                New case
            </Link>
        </header>
    );
};

export default DashboardHeader;