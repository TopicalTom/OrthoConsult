import React from 'react';
import { Switch } from "react-router";
import { DashboardProvider } from '../../contexts/DashboardProvider';

// Components
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Nav from '../../components/DashboardNav/DashboardNav';

// Pages
import Settings from "../Settings/Settings";
import Education from '../Education/Education';
import Resources from "../Resources/Resources";
import Legal from "../Legal/Legal";
import Contact from "../Contact/Contact";
import Payments from "../Payments/Payments";
import Cases from "../Cases/Cases";
import Home from "../Home/Home";

const Dashboard = () => {
    return (
        <DashboardProvider>
            <main className="dashboard">
                <Nav />
                <Switch>
                    <PrivateRoute path="/dashboard/cases?filter=:filterQuery&case=:caseQuery" component={Cases} />
                    <PrivateRoute path="/dashboard/cases" component={Cases} />
                    <PrivateRoute path="/dashboard/resources" component={Resources} />
                    <PrivateRoute path="/dashboard/self-study" component={Education} />
                    <PrivateRoute path="/dashboard/contact" component={Contact} />
                    <PrivateRoute path="/dashboard/payments" component={Payments} />
                    <PrivateRoute path="/dashboard/legal" component={Legal} />
                    <PrivateRoute path="/dashboard/settings" component={Settings} />
                    <PrivateRoute path="/dashboard" exact component={Home} />
                </Switch>
            </main>
        </DashboardProvider>
    );
}

export default Dashboard;