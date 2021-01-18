import React from 'react';
import { Link } from 'react-router-dom';
import "../../pages/Dashboard/Dashboard.scss";

// Assets
import add from "../../assets/icons/add.svg";
import search from "../../assets/icons/search.svg";

// Components
import Breadcrumbs from '../DashboardBreadcrumbs/DashboardBreadcrumbs';
//import SearchBar from '../DashboardSearchBar/DashboardSearchBar';
// SearchBar
// Button

const DashboardHeader = () => {
    return (
        <header className="dashboard__header" >
            <Breadcrumbs />
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
                <img 
                    className="dashboard__icon" 
                    src={add}
                />
            </Link>
        </header>
    );
};

export default DashboardHeader;

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