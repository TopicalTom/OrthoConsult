import React from 'react';
import { Element } from 'react-scroll';
import { ScrollProvider } from '../../contexts/ScrollProvider';
import "./Main.scss";

// Components
import Header from "../../components/Header/Header";
import ScrollBar from "../../components/ScrollBar/ScrollBar";
import Copy from "../../components/Copy/Copy";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import Footer from "../../components/Footer/Footer";

// Sections
import Hero from "../../components/Hero/Hero";
import Results from "../../components/Results/Results";
import Process from "../../components/Process/Process";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";

function Main() {
    const buttons = [
        {
            type: "primary",
            link: "/evaluation",
            authLink: "/register",
            text: "Get started",
            authText: "Get started",
            icon: true
        },
        {
            type: "secondary",
            link: "/evaluation",
            authLink: "/register",
            text: "Learn more",
            authText: "Learn more",
            icon: false
        }
    ]

    return (
        <ScrollProvider>
            <Header />
            <main className="main">
                <Element className="main__section main__section--hero">
                    <Copy 
                        type="hero"
                        theme="dark"
                        header="Orthodontic case evaluations"
                        details="Providing streamlined and informative case evaluations to provide your clients with the best service. Never has orthodontic treatment been better."
                        buttons={buttons}
                    />
                </Element>
                <Element className="main__section main__section--results">
                    <Copy 
                        type="point"
                        theme="dark"
                        title="Turn any case into a success story"
                        subtitle="Visible results"
                        details="We have a proven track record of taking orthodontic challenges and turning them into success stories. Sign up and see how we can make a difference."
                        buttons={buttons}
                    />
                    <ImageCarousel />
                </Element>
                <Element className="main__section main__section--service">
                    <Copy 
                        type="point"
                        theme="light"
                        title="Say goodbye to paper and hello to digital"
                        subtitle="Modern service"
                        details="We have a proven track record of taking orthodontic challenges and turning them into success stories. Sign up and see how we can make a difference."
                        buttons={buttons}
                    />
                </Element>
                <Element className="main__section main__section--about">
                    <Copy 
                        type="point"
                        theme="light"
                        title="Tap into 40+ years of experience in the field"
                        subtitle="Backed by experience"
                        details="I have over 30 years of working in the orthodontic field and have helped over 1000 doctorrs. I have over 30 years of working in the orthodontic field and have helped over 1000 doctorrs."
                        buttons={buttons}
                    />
                </Element>
                <Element className="main__section main__section--contact">
                    <Copy 
                        type="point"
                        theme="light"
                        title="Ready to start?"
                        subtitle="Become a client"
                        details="I have over 30 years of working in the orthodontic field and have helped over 1000 doctorrs. I have over 30 years of working in the orthodontic field and have helped over 1000 doctorrs."
                        buttons={buttons}
                    />
                </Element>
                <div className="main__partition"/>
            </main>
            <Footer />
            <ScrollBar />
        </ScrollProvider>
    );
};

export default Main;

/*
import React from 'react';
import { Element } from 'react-scroll';
import { ScrollProvider } from '../../contexts/ScrollProvider';
import "./Main.scss";

// Components
import Header from "../../components/Header/Header";
import ScrollBar from "../../components/ScrollBar/ScrollBar";
import Footer from "../../components/Footer/Footer";

// Sections
import Hero from "../../components/Hero/Hero";
import Results from "../../components/Results/Results";
import Process from "../../components/Process/Process";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";

function Main() {

    return (
        <ScrollProvider>
            <Header />
            <main className="main">
                <Hero />
                <Results />
                <Process />
                <About />
                <Contact />
                <div className="main__partition"/>
            </main>
            <Footer />
            <ScrollBar />
        </ScrollProvider>
    );
};

export default Main;

*/