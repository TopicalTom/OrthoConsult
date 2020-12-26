import React from 'react';
import { Switch } from "react-router";

// Components
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Nav from '../../components/DashboardNav/DashboardNav';
import Header from '../../components/DashboardHeader/DashboardHeader';

// Pages
import Settings from "../Settings/Settings";
import Account from "../Account/Account";
import Education from '../Education/Education';
import Resources from "../Resources/Resources";
import Cases from "../Cases/Cases";
import Home from "../Home/Home";

function Dashboard() {
    const links = [
        {
            name: "Home",
            url: "/dashboard"
        },
        {
            name: "Cases",
            url: "/dashboard/cases"
        },
        {
            name: "Resources",
            url: "/dashboard/resources"
        },
        {
            name: "Education",
            url: "/dashboard/education"
        },
        {
            name: "Account",
            url: "/dashboard/account"
        },
        {
            name: "Settings",
            url: "/dashboard/settings"
        }
    ]

    return (
        <main className="dashboard">
            <Nav links={links}/>
            <Header />
            <Switch>
                <PrivateRoute path="/dashboard/search" component={Settings} />
                <PrivateRoute path="/dashboard/settings" component={Settings} />
                <PrivateRoute path="/dashboard/account" component={Account} />
                <PrivateRoute path="/dashboard/education" component={Education} />
                <PrivateRoute path="/dashboard/resources" component={Resources} />
                <PrivateRoute path="/dashboard/cases" component={Cases} />
                <PrivateRoute path="/dashboard" exact component={Home} />
            </Switch>
        </main>
    );
}

export default Dashboard;