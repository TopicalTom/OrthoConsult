import React from 'react';
import { Element } from 'react-scroll';
import { ScrollProvider } from '../../contexts/ScrollProvider';
import "./Main.scss";

// Components
import Header from "../../components/Header/Header";
import ScrollBar from "../../components/ScrollBar/ScrollBar";
import Copy from "../../components/Copy/Copy";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import VideoCarousel from "../../components/VideoCarousel/VideoCarousel";
import Testimonies from "../../components/Testimonies/Testimonies";
import Footer from "../../components/Footer/Footer";

function Main() {
    const sections = [
        {
            type: "hero",
            theme: "dark",
            header: "Orthodontic case evaluations",
            details: "Providing streamlined and informative case evaluations to provide your clients with the best service. Never has orthodontic treatment been quite so efficient.",
            buttons: [
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
        },
        {
            type: "results",
            theme: "dark",
            title: "Turn a problematic case into a success story",
            subtitle: "Visible results",
            details: "We have a proven track record of taking orthodontic challenges and turning them into success stories. Sign up and see how we can make a difference.",
            content: <ImageCarousel />
        },
        {
            type: "service",
            theme: "light",
            title: "Say goodbye to paper and hello to the cloud",
            subtitle: "Personal platform",
            content: <VideoCarousel />
        },
        {
            type: "about",
            theme: "light",
            title: "Leverage 40+ years of dental knowledge",
            subtitle: "Experienced hands",
            details: "I have over 30 years of working in the orthodontic field and have helped over 1000 doctorrs. I have over 30 years of working in the orthodontic field and have helped over 1000 doctorrs. ",
            content: <Testimonies />
        },
        {
            type: "contact",
            theme: "light",
            title: "Still unsure? Contact us",
            subtitle: "Register today",
            details: "I have over 30 years of working in the orthodontic field and have helped over 1000 doctorrs. I have over 30 years of working in the orthodontic field and have helped over 1000 doctorrs.",
            buttons: [
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
                    text: "Contact us",
                    authText: "Contact us",
                    icon: false
                }
            ]
        },
    ]

    return (
        <ScrollProvider>
            <Header />
            <main className="main">
                {sections && sections.map((item) => {
                    return (
                        <Element className={`main__section main__section--${item.type}`} name={item.type}>
                            <Copy 
                                type={item.type}
                                theme={item.theme}
                                header={item.header}
                                title={item.title}
                                subtitle={item.subtitle}
                                details={item.details}
                                buttons={item.buttons}
                            />
                            {item.content}
                        </Element>
                    )
                })}
                <div className="main__partition"/>
                <div className="main__partition2"/>
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
import Copy from "../../components/Copy/Copy";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import Footer from "../../components/Footer/Footer";

function Main() {
    const sections = [
        {
            type: "hero",
            theme: "dark",
            header: "Orthodontic case evaluations",
            details: "Providing streamlined and informative case evaluations to provide your clients with the best service. Never has orthodontic treatment been better.",
            buttons: [
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
                    authText: "Why us",
                    icon: false
                }
            ]
        },
        {
            type: "results",
            theme: "dark",
            title: "Turn any case into a success story",
            subtitle: "Visible results",
            details: "We have a proven track record of taking orthodontic challenges and turning them into success stories. Sign up and see how we can make a difference.",
            buttons: [ 
                {
                    type: "primary",
                    link: "/evaluation",
                    authLink: "/register",
                    text: "Get started",
                    authText: "Get started",
                    icon: true
                }
            ]
        },
        {
            type: "service",
            theme: "light",
            title: "Say goodbye to paper and hello to digital",
            subtitle: "Future proof",
            details: "We have a proven track record of taking orthodontic challenges and turning them into success stories. Sign up and see how we can make a difference.",
            buttons: [ 
                {
                    type: "primary",
                    link: "/evaluation",
                    authLink: "/register",
                    text: "Get started",
                    authText: "Get started",
                    icon: true
                }
            ]
        },
        {
            type: "about",
            theme: "light",
            title: "Tap into 40+ years of experience in the field",
            subtitle: "Backed by experience",
            details: "I have over 30 years of working in the orthodontic field and have helped over 1000 doctorrs. I have over 30 years of working in the orthodontic field and have helped over 1000 doctorrs.",
            buttons: [ 
                {
                    type: "primary",
                    link: "/evaluation",
                    authLink: "/register",
                    text: "Get started",
                    authText: "Get started",
                    icon: true
                }
            ]
        },
        {
            type: "contact",
            theme: "light",
            title: "Become a client and start making a difference",
            subtitle: "Start today",
            details: "I have over 30 years of working in the orthodontic field and have helped over 1000 doctorrs. I have over 30 years of working in the orthodontic field and have helped over 1000 doctorrs.",
            buttons: [
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
                    link: "/contact",
                    authLink: "/contact",
                    text: "Contact",
                    authText: "Contact",
                    icon: false
                }
            ]
        },
    ]

    return (
        <ScrollProvider>
            <Header />
            <main className="main">
                {sections && sections.map((item) => {
                    return (
                        <Element className={`main__section main__section--${item.type}`}>
                            <Copy 
                                type={item.type}
                                theme={item.theme}
                                header={item.header}
                                details={item.details}
                                buttons={item.buttons}
                            />
                        </Element>
                    )
                })}
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
                    <diagram className="main__diagram">
                        Placeholder
                    </diagram>
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
                    <diagram className="main__testimony main__testimony--test1">
                        Placeholder
                    </diagram>
                    <diagram className="main__testimony main__testimony--test2">
                        Placeholder
                    </diagram>
                    <diagram className="main__testimony main__testimony--test3">
                        Placeholder
                    </diagram>
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

*/

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