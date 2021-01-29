import React from 'react';
import "./Resources.scss";

// Layout
import Page from '../../components/DashboardLayout/DashboardLayout';

// Components
import Section from '../../components/DashboardSection/DashboardSection';
import Tabs from '../../components/DashboardTabs/DashboardTabs';

const Resources = () => {

    const tabs = [
        {
            title: "all"
        },
        {
            title: "casts"
        },
        {
            title: "files"
        },
    ]

    return (
        <Page className="resources" title="resources">
            <Section className="resources__section resouces__section--overview">
                <h3>Overview</h3>
                <p>Retrieve files and documents to enable your to provide the best experience.</p>
            </Section>
            <Tabs 
                className="resources__section resources__section--options" 
                tabs={tabs}>
            </Tabs>
        </Page>
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