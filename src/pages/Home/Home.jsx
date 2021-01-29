import React from 'react';
import { Link } from "react-router-dom";
import "./Home.scss";

// Context
import { useAuth } from '../../contexts/AuthProvider';
import { useDashboard } from '../../contexts/DashboardProvider';

// Layout
import Page from '../../components/DashboardLayout/DashboardLayout';

// Components
import Section from '../../components/DashboardSection/DashboardSection';

const Home = () => {
    const { clientCases } = useDashboard();
    const { currentUser } = useAuth();
    const welcomeUser = `Welcome, Dr. ${currentUser.displayName.split(" ").pop()}`;

    const updates = [
        {
            count: clientCases.filter(item => item.status === "Awaiting payment").length,
            status: "Require payment",
            caption: "Cases that still have invoices you need to finish paying for",
            cta: "View invoices",
            link: "/dashboard/payments"
        },
        {
            count: clientCases.filter(item => item.status === "Reviewing").length,
            status: "Being reviewed",
            caption: "Cases from you that we are actively working on feedback for",
            cta: "Contact us",
            link: "/dashboard/contact"
        },
        {
            count: clientCases.filter(item => item.status === "Feedback provided").length,
            status: "Have feedback",
            caption: "Cases with new feedback that have yet to be viewed by you",
            cta: "View most recent",
            link: "/dashboard/cases"
        },
        {
            count: clientCases.length,
            status: "Total submitted",
            caption: "The number of active and archived cases connected to your account",
            cta: "View archived",
            link: "/dashboard/cases"
        },
    ]

    const actions = [
        {
            cta: "Submit a case",
        },
        {
            cta: "View cases",
        },
        {
            cta: "Continue education",
        },
    ]
    
    return (
        <Page className="home" title={welcomeUser}>
            <Section className="home__section home__section--overview">
                <h3>Account overview</h3>
                <div className="home__container home__container--overview">
                    {updates.map(item => {
                        return (
                            <Link
                                className="home__card"
                                to={item.link}>
                                <h1>{item.count}</h1>
                                <h3>{item.status}</h3>
                                <h4>{item.caption}</h4>
                                <a>{item.cta}</a>
                            </Link>
                        )
                    })}
                </div>
            </Section>
            <Section className="home__section home__section--actions">
                <h3>Suggested actions</h3>
                <div className="home__container home__container--actions">
                    {actions.map(item => {
                        return (
                            <Link
                                className="home__action"
                                to={item.link}>
                                <a>{item.cta}</a>
                            </Link>
                        )
                    })}
                </div>
            </Section>
        </Page>
    );
};

export default Home;


/*
import React from 'react';
import { Link } from "react-router-dom";
import { useDashboard } from '../../contexts/DashboardProvider';


import Page from '../../components/DashboardLayout/DashboardLayout';
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

*/