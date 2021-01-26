import React from 'react';
import { Element } from 'react-scroll';
import { ScrollProvider } from '../../contexts/ScrollProvider';
import "./Main.scss";

// Components
import Hero from '../../components/Hero/Hero';
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
            type: "results",
            theme: "dark",
            title: "Turn a problematic case into a success story",
            subtitle: "Visible results",
            details: "Diagnosis is the key to a successful treatment outcome. Each case evaluation outlines a comprehensive treatment outline from Phase I through to retention. You ",
            content: <ImageCarousel />
        },
        {
            type: "service",
            theme: "light",
            title: "Say goodbye to paper and hello to the cloud",
            subtitle: "Digital delivery",
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
                <Hero />
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
            subtitle: "Digital delivery",
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

*/