import React from 'react';
import "./Cases.scss";

// Assets
import search from "../../assets/icons/search.svg";
import cat from "../../assets/files/teeth.jpg";

// Components
import Nav from '../../components/CasesNav/CasesNav';
import Case from '../Patient/Patient';

const Cases = () => {
    return (
        <div className="cases">
            <Nav />
            <Case />
        </div>
    );
};

export default Cases;

/*
import React from 'react';
import { Link } from 'react-router-dom';
import "./Cases.scss";

// Assets
import search from "../../assets/icons/search.svg";
import cat from "../../assets/files/teeth.jpg";

// Components
import Table from '../../components/Table/Table';
import CaseList from '../../components/DashboardBar/DashboardBar';
import Header from '../../components/DashboardHeader/DashboardHeader';
import Section from '../../components/DashboardSection/DashboardSection';
import Tabs from '../../components/DashboardTabs/DashboardTabs';
import Button from '../../components/Button/Button';
import Records from '../../components/CaseRecords/CaseRecords';
import Status from '../../components/DashboardStatus/DashboardStatus';

const Cases = () => {
    
    //const evaluate = { patientHabits, underlyingIssues, dental,   };
    //const treatment = { objective, patientConcerns, guardianConcerns };


    const tabs = [
        {
            title: "records"
        },
        {
            title: "evaluation"
        },
        {
            title: "treatment"
        },
    ]

    const records = [
        {
            title: "evaluation",
            image: cat
        },
        {
            title: "records",
            image: cat
        },
        {
            title: "evaluation",
            image: cat
        },
        {
            title: "records",
            image: cat
        },
        {
            title: "evaluation",
            image: cat
        },
        {
            title: "records",
            image: cat
        },
        {
            title: "records",
            image: cat
        },
        {
            title: "evaluation",
            image: cat
        },
        {
            title: "records",
            image: cat
        },
    ]

    const habits = {
        dob: "July 12th, 1995",
        height: "90",
        gender: "Male",
        ethnicity: "White",
        motivation: "Low",
        hygiene: "Poor",
        finances: "Limited",
    };

    //Object.entries(patientHabits).forEach(([key, value]) => console.log(`${key}: ${value}`))

    return (
        <div className="cases">
            <header className="cases__header">
                <h2 className="cases__context">David Prue</h2>
                <div className="cases__searchbar">
                    <img 
                        className="cases__icon cases__icon--search" 
                        src={search}
                    />
                    <input className="cases__field" placeholder="Search" />
                </div>
                <Button 
                    className="cases__cta"
                    type="primary" 
                    to="/evaluation">
                    New case
                </Button>
            </header>
            <CaseList />
            <div className="cases__content">
                <Section className="cases__section cases__section--patient">
                    <h3>General</h3>
                    <ul className="cases__list">
                        <li>
                            <p>
                                Type
                            </p>
                            <p>
                                New Case
                            </p>
                        </li>
                        <li>
                            <p>
                                Submitted
                            </p>
                            <p>
                                Jan 12, 2021
                            </p>
                        </li>
                    </ul>
                    <ul className="cases__list">
                        {Object.entries(habits).map(([key, value]) => {
                            if(key !== "height") {
                                return (
                                    <li>
                                        <p>
                                            {key}
                                        </p>
                                        <p>
                                            {value}
                                        </p>
                                    </li>
                                )
                            } else {
                                return (
                                    <li>
                                        <p>
                                            {key}
                                        </p>
                                        <p>
                                            {value} cm
                                        </p>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </Section>
                <Status 
                    className="cases__section cases__section--overview"
                    status="Awaiting payment"
                />
                <Tabs 
                    className="cases__section cases__section--data" 
                    tabs={tabs}>
                    <Records 
                        className="cases__container"
                        records={records} 
                        id="records"
                    />
                    <div 
                        className="cases__container"
                        id="evaluation">
                        <Section className="cases__section">
                            <p>Airway</p>
                        </Section>
                        <Section className="cases__section">
                            <p>Dental</p>
                        </Section>
                        <Section className="cases__section">
                            <p>Skeletal</p>
                        </Section>
                    </div>
                    <div 
                        className="cases__container"
                        id="treatment">
                        <Section className="cases__section">
                            <p>Type</p>
                        </Section>
                        <Section className="cases__section">
                            <p>Objectives</p>
                        </Section>
                        <Section className="cases__section">
                            <p>Patient Concerns</p>
                        </Section>
                        <Section className="cases__section">
                            <p>Parent Concerns</p>
                        </Section>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default Cases;

*/

/*
import React, { useState, useEffect } from 'react';
import { useDashboard } from '../../contexts/DashboardProvider';
import "../Dashboard/Dashboard.scss";

// Components
import Table from '../../components/Table/Table';

function Cases() {
    const { caseDetails, retrieveCase } = useDashboard();

    const cases = [
        {
            type: "Date of Birth",
            value: caseDetails && caseDetails.patientInfo && caseDetails.patientInfo.dob,
            category: "Patient Info"
        },
        {
            type: "Height",
            value: `${caseDetails && caseDetails.patientInfo && caseDetails.patientInfo.height} cm`,
            category: "Patient Info"
        },
        {
            type: "Gender",
            value: caseDetails && caseDetails.patientInfo && caseDetails.patientInfo.gender,
            category: "Patient Info"
        },
        {
            type: "Ethnicity",
            value: caseDetails && caseDetails.patientInfo && caseDetails.patientInfo.ethnicity,
            category: "Patient Info"
        },
        {
            type: "Motivation",
            value: caseDetails && caseDetails.patientInfo && caseDetails.patientInfo.motivation,
            category: "Patient Info"
        },
        {
            type: "Hygiene",
            value: caseDetails && caseDetails.patientInfo && caseDetails.patientInfo.hygiene,
            category: "Patient Info"
        },
        {
            type: "Finances",
            value: caseDetails && caseDetails.patientInfo && caseDetails.patientInfo.finances,
            category: "Patient Info"
        }
    ]

    useEffect(() => {
        retrieveCase();
    }, []);

    return (
        <div className="dashboard__content dashboard__content--cases">
            <section className="dashboard__container dashboard__container--patient">
                <h3 className="dashboard__subtitle">Patient Info</h3>
                <Table cases={cases}/>
            </section>
            <section className="dashboard__container dashboard__container--overview">
                <div className="dashboard__section">
                    <h3 className="dashboard__subtitle">Overview</h3>
                    <p className="dashboard__details">
                        By becoming a client of OrthoConsult you acknowledged the following documents. You can read each of the following below, or download them for your own records:
                    </p>
                    <button className="dashboard__button">
                        Download Feedback
                    </button>
                </div>
                <div className="dashboard__section">
                <h3 className="dashboard__subtitle">Evaluation Treatment Records</h3>
                <p className="dashboard__subsection">Habits</p>
                {caseDetails && caseDetails.patientHabits && caseDetails.patientHabits.none !== true
                    ?   <h4>{(Object.keys(caseDetails.patientHabits).filter(value => caseDetails.patientHabits[value] === true)).splice(",")}</h4>
                    :   <h4>None listed</h4>
                }
                <p className="dashboard__subsection">Underlying Issues</p>
                {caseDetails && caseDetails.underlyingIssues && caseDetails.underlyingIssues.none !== true
                    ?   <h4>{(Object.keys(caseDetails.underlyingIssues).filter(value => caseDetails.underlyingIssues[value] === true)).splice(",")}</h4>
                    :   <h4>None listed</h4>
                }
                <p className="dashboard__subsection">Facial Features</p>
                {caseDetails && caseDetails.features && caseDetails.features.none !== true
                    ?   <h4>{(Object.keys(caseDetails.features).filter(value => caseDetails.features[value] === true)).splice(",")}</h4>
                    :   <h4>None listed</h4>
                }
                <p className="dashboard__subsection">Dental</p>
                <h4>None listed</h4>
                <p className="dashboard__subsection">Occlusion Hindrances</p>
                {caseDetails && caseDetails.occlussionHindrances && caseDetails.occlussionHindrances.none !== true
                    ?   <h4>{(Object.keys(caseDetails.occlussionHindrances).filter(value => caseDetails.occlusionHindrances[value] === true)).splice(",")}</h4>
                    :   <h4>None listed</h4>
                }
                <p className="dashboard__subsection">Space Shortage</p>
                <h4>None listed</h4>
                <p className="dashboard__subsection">TMJ</p>
                <h4>None listed</h4>
                <p className="dashboard__subsection">Cranial</p>
                <h4>None listed</h4>
                <p className="dashboard__subsection">Skeletal</p>
                <h4>None listed</h4>

                </div>
            </section>
        </div>
    );
};

export default Cases;

*/