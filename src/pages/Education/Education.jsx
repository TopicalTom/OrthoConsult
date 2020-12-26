import React from 'react';
import "../../pages/Dashboard/Dashboard.scss";

function Education() {
    return (
        <section className="dashboard__content">
            <h3 className="dashboard__subtitle">Recommended</h3>
            <p className="dashboard__details">This is </p>
            <h3 className="dashboard__subtitle">All</h3>
            <p className="dashboard__details">This is </p>
        </section>
    );
};

export default Education;

/*
import React from 'react';
import { ScrollProvider } from '../../contexts/ScrollProvider';
import "./Education.scss";

// Components
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";

function Education() {
    const links = [
        {
            name: "Link 1",
            url: "/"
        },
        {
            name: "Link 2",
            url: "/"
        }
    ]

    return (
        <ScrollProvider>
            <Header />
            <main className="education">
                <SideNav links={links}/>
                <section className="education__container">
                    <h1 className="education__header">Education</h1>
                    <p 
                        className="education__details">
                        Click any of the links on the left to learn about the best that orthodontics has to offer. Click any of the links on the left to learn about the best that orthodontics has to offer. Click any of the links on the left to learn about the best that orthodontics has to offer.Click any of the links on the left to learn about the best that orthodontics has to offer.
                    </p>
                </section>
            </main>
            <Footer />
        </ScrollProvider>
    );
};

export default Education;

*/