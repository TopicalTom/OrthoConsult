import React from 'react';
import { Switch } from "react-router";
import { useLocation } from "react-router-dom";
import { DashboardProvider } from '../../contexts/DashboardProvider';
import { SearchProvider } from '../../contexts/SearchProvider';

// Components
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Nav from '../../components/DashboardNav/DashboardNav';
import Header from '../../components/DashboardHeader/DashboardHeader';
import Bar from '../../components/DashboardBar/DashboardBar';

// Pages
import Settings from "../Settings/Settings";
import Account from "../Account/Account";
import Education from '../Education/Education';
import Resources from "../Resources/Resources";
import Legal from "../Legal/Legal";
import Contact from "../Contact/Contact";
import Payments from "../Payments/Payments";
import Cases from "../Cases/Cases";
import Home from "../Home/Home";

function Dashboard() {
    const location = useLocation();

    return (
        <DashboardProvider>
            <main 
                className={`dashboard ${location.pathname.includes("/dashboard/cases/") 
                    ? "dashboard--cases" 
                    : ""
                }`}>
                <Nav />
                <SearchProvider>
                    {location.pathname.includes("/dashboard/cases/")
                        ?   <Bar />
                        :   <></>
                    }
                    <Header />
                    <Switch>
                        <PrivateRoute path="/dashboard/cases/:id" component={Cases} />
                        <PrivateRoute path="/dashboard/resources" component={Resources} />
                        <PrivateRoute path="/dashboard/education" component={Education} />
                        <PrivateRoute path="/dashboard/contact" component={Contact} />
                        <PrivateRoute path="/dashboard/account" component={Account} />
                        <PrivateRoute path="/dashboard/payments" component={Payments} />
                        <PrivateRoute path="/dashboard/legal" component={Legal} />
                        <PrivateRoute path="/dashboard/settings" component={Settings} />
                        <PrivateRoute path="/dashboard" exact component={Home} />
                    </Switch>
                </SearchProvider>
            </main>
        </DashboardProvider>
    );
}

export default Dashboard;

/*
                        {routes.map((route) => {
                            return (
                                <PrivateRoute 
                                    path={route.url} 
                                    exact={route.exact} 
                                    component={route.component} 
                                />
                            )
                        })}
                        <PrivateRoute path="/dashboard/cases/:id" component={Patient} />
                        <PrivateRoute path="/dashboard/cases" component={Cases} />
                        <PrivateRoute path="/dashboard/resources" component={Resources} />
                        <PrivateRoute path="/dashboard/education" component={Education} />
                        <PrivateRoute path="/dashboard/contact" component={Contact} />
                        <PrivateRoute path="/dashboard/account" component={Account} />
                        <PrivateRoute path="/dashboard/payments" component={Payments} />
                        <PrivateRoute path="/dashboard/contract" component={Contract} />
                        <PrivateRoute path="/dashboard/settings" component={Settings} />
                        <PrivateRoute path="/dashboard" exact component={Home} />

*/