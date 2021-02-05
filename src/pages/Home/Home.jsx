import React from 'react';
import { Link } from "react-router-dom";
import "./Home.scss";

// Assets
import Evaluation from '../../assets/images/marketingevaluation.png';
import SelfStudy from '../../assets/images/marketingstudy.png';
import payment from "../../assets/icons/pay.svg";
import reviewing from "../../assets/icons/reviewing.svg";
import feedback from "../../assets/icons/feedback.svg";

// Utilities
import getQuickLink from '../../utils/getQuickLink';

// Context
import { useAuth } from '../../contexts/AuthProvider';
import { useDashboard } from '../../contexts/DashboardProvider';

// Components
import Page from '../../components/DashboardPage/DashboardPage';
import Section from '../../components/DashboardSection/DashboardSection';
import Card from '../../components/Card/Card';

const Home = () => {
    const { clientCases, currentCase } = useDashboard();
    const { currentUser } = useAuth();
    const welcomeUser = `Welcome, Dr. ${currentUser.displayName.split(" ").pop()}`;
    
    const updates = [
        {
            name: "payment",
            type: "Awaiting payment",
            status: "Have invoices that still require payment",
            icon: payment
        },
        {
            name: "review",
            type: "In review",
            status: "Are being reviewed by us for feedback",
            icon: reviewing
        },
        {
            name: "feedback",
            type: "Reviewed",
            status: "Have feedback that you are able to download",
            icon: feedback
        }
    ]

    return (
        <Page className="home" title={welcomeUser}>
            <Section className="home__section home__section--overview">
                <h3>Account</h3>
                <div className="home__overview">
                    <ul>
                        <li>
                            <span>Total cases</span>
                            <span>{clientCases.length}</span>
                        </li>
                        <li>
                            <span>Course credits</span>
                            <span>34pts</span>
                        </li>
                        <li>
                            <span>Client since</span>
                            <span>{currentUser.createdOn.seconds}</span>
                        </li>
                    </ul>
                </div>
            </Section>
            <Section className="home__section home__section--updates">
                <h3>Cases overview</h3>
                <div className="home__container home__container--updates">
                    {updates.map(item => {
                        const quickLink = getQuickLink({clientCases, type: item.type, currentCase});
                        const statusCount = clientCases.filter(type => type.status === item.type).length;
                        return (
                            <Card 
                                className={`home__status home__status--${item.name}`}
                                quickLink={quickLink}
                                statusCount={statusCount}
                                status={item.status}
                                name={item.name}
                                icon={item.icon}
                            />
                        )
                    })}
                </div>
            </Section>
            <Section className="home__section home__section--actions">
                <h3>Suggested actions</h3>
                <div className="home__container home__container--actions">
                    <Link
                        className="home__card"
                        to="/evaluation">
                        <div className="home__details">
                            <h2 className="home__title">Case evaluation</h2>
                            <p className="home__caption">Get feedback on how to proceed with a patient's treatment.</p>
                            <span className="home__redirect">Get started</span>  
                        </div>
                        <div className="home__preview">
                            <img className="home__image" src={Evaluation}/>
                        </div>
                    </Link>
                    <Link
                        className="home__card"
                        to="/dashboard/self-study">
                        <div className="home__details">
                            <h2 className="home__title">Continue studies</h2>
                            <p className="home__caption">Learn orthodontic best practices and gain accredidation.</p>
                            <span className="home__redirect">Get started</span>  
                        </div>
                        <div className="home__preview">
                            <img className="home__image" src={SelfStudy}/>
                        </div>
                    </Link>
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