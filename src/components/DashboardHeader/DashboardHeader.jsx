import React from 'react';
import "../../pages/Dashboard/Dashboard.scss";

// Components
import Button from '../Button/Button';
import SearchBar from '../SearchBar/SeachBar';

const DashboardHeader = (props) => {
    const { title } = props;

    return (
        <header className="dashboard__header">
            <h2 
                className="dashboard__title">
                {title || "Cases"}
            </h2>
            <SearchBar className="dashboard__searchbar"/>
            <Button 
                className="dashboard__cta"
                type="primary" 
                to="/evaluation">
                New case
            </Button>
    </header>
    );
};

export default DashboardHeader;

/*

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import { useDashboard } from '../../contexts/DashboardProvider';
import "../../pages/Dashboard/Dashboard.scss";

// Assets
import add from "../../assets/icons/add.svg";
import search from "../../assets/icons/search.svg";

// Components
import Breadcrumbs from '../DashboardBreadcrumbs/DashboardBreadcrumbs';

const DashboardHeader = () => {
    const { currentUser } = useAuth();
    const { page, subPage } = useDashboard();
    const welcome = `Welcome, Dr. ${currentUser.displayName.split(" ").pop()}`;

    return (
        <header className="dashboard__header" >
            <h2 className="dashboard__context">{page}</h2>
            <div className="dashboard__searchbar">
                <img 
                    className="dashboard__icon dashboard__icon--search" 
                    src={search}
                />
                <input className="dashboard__field" placeholder="Search" />
            </div>
            <Link 
                className="dashboard__cta" 
                to="/evaluation">
                New case
            </Link>
        </header>
    );
};

export default DashboardHeader;

*/

/*
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import "../../pages/Dashboard/Dashboard.scss";

// Components
// Path
// SearchBar
// Button

const DashboardHeader = () => {
    const location = useLocation(); 
    const { currentUser } = useAuth();

    return (
        <header className="dashboard__header" >
            <h2 
                className="dashboard__path">
                {currentUser && location.pathname !== "/dashboard"
                    ?   location.pathname.split("/dashboard/")
                    :   `Welcome, Dr. ${currentUser.displayName.split(" ")[1]}`
                }
            </h2>
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

*/