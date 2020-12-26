import React from 'react';
import "../../pages/Dashboard/Dashboard.scss";

function Resources() {

    return (
        <section className="dashboard__content">
            <h3 className="dashboard__subtitle">Pinned</h3>
            <p className="dashboard__details">This is </p>
            <h3 className="dashboard__subtitle">All</h3>
            <p className="dashboard__details">This is </p>
        </section>
    );
};

export default Resources;

/*
import React from 'react';
import { ScrollProvider } from '../../contexts/ScrollProvider';
import "./Resources.scss";

// Components
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";

function Resources() {
    const links = [
        {
            name: "Records Required",
            url: "/"
        },
        {
            name: "Space Shortage",
            url: "/"
        },
        {
            name: "Informed Consent",
            url: "/"
        },
        {
            name: "Crowded Teeth",
            url: "/"
        },
        {
            name: "2nd Molar Replacement",
            url: "/"
        },
        {
            name: "2nd Molar Tx",
            url: "/"
        },
    ]

    return (
        <ScrollProvider>
            <Header />
            <main className="resources">
                <SideNav links={links}/>
                <section className="resources__container">
                    <h1 className="resources__header">Resources</h1>
                    <p 
                        className="resources__details">
                        Click any of the links on the left to learn about the best that orthodontics has to offer. Click any of the links on the left to learn about the best that orthodontics has to offer. Click any of the links on the left to learn about the best that orthodontics has to offer.Click any of the links on the left to learn about the best that orthodontics has to offer.
                    </p>
                </section>
            </main>
            <Footer />
        </ScrollProvider>
    );
};

export default Resources;

*/