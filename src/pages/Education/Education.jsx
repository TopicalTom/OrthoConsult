import React from 'react';
import "./Education.scss";

// Layout
import Page from '../../components/DashboardPage/DashboardPage';

// Components
import Section from '../../components/DashboardSection/DashboardSection';
import Tabs from '../../components/DashboardTabs/DashboardTabs';

const Education = () => {

    const tabs = [
        {
            title: "all"
        },
        {
            title: "courses"
        },
        {
            title: "books"
        },
    ]

    return (
        <Page className="education" title="self study">
            <Section className="education__section education__section--overview">
                <h3>Overview</h3>
                <p>Coninue your education with our hosted education resources. Complete courses and gain credit.</p>
            </Section>
            <Section className="education__section education__section--recommended">
                <h3>Recommended</h3>
                <div className="education__videos">
                    <iframe 
                        className="education__video"
                        src="https://www.youtube.com/embed/qE2iLIWh7cY" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen 
                    />
                    <iframe 
                        className="education__video"
                        src="https://www.youtube.com/embed/QhPV1-Kdkow"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </div>
            </Section>
            <Tabs 
                className="education__section education__section--options" 
                tabs={tabs}>
            </Tabs>
        </Page>
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