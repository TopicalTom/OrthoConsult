
import React, { useState, useEffect } from 'react';
import { useDashboard } from '../../contexts/DashboardProvider';
import "../Dashboard/Dashboard.scss";

// Components
import Table from '../../components/Table/Table';

function Cases() {
    const { caseDetails, retrieveCase } = useDashboard();
    const cases = [
        {
            type: "Case Type",
            value: caseDetails && caseDetails.caseType,
            category: "--"
        },
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
        },
        {
            type: "Patient Habits",
            value: caseDetails && caseDetails.habits && (Object.keys(caseDetails.habits).filter(value => caseDetails.habits[value] === true)).splice(","),
            category: "Patient Info"
        },
        {
            type: "Model Left",
            value: caseDetails && caseDetails.dental && caseDetails.dental.model && caseDetails.dental.model.left,
            category: "Dental Model"
        },
        {
            type: "Model Right",
            value: caseDetails && caseDetails.dental && caseDetails.dental.model && caseDetails.dental.model.right,
            category: "Dental Model"
        },
        {
            type: "Overjet",
            value: caseDetails && caseDetails.dental && caseDetails.dental.model && caseDetails.dental.model.overjet,
            category: "Malocclussion"
        },
        {
            type: "Overbite",
            value: caseDetails && caseDetails.dental && caseDetails.dental.model && caseDetails.dental.model.overbite,
            category: "Malocclussion"
        },
        {
            type: "UR Central",
            value: caseDetails && caseDetails.dental && caseDetails.dental.space && caseDetails.dental.space.urCentral,
            category: "Space Shortage"
        },
    ]

    useEffect(() => {
        retrieveCase();
    }, []);

    return (
        <div className="dashboard__content">
            <Table cases={cases}/>
        </div>
    );
};

export default Cases;


/*
import React, { useState, useEffect } from 'react';
import { useDashboard } from '../../contexts/DashboardProvider';
import "../Dashboard/Dashboard.scss";

function Cases() {
    const { caseDetails, retrieveCase, currentCase } = useDashboard();
    const sections = [
        {
            name: "Patient Info",
            blocks: [
                {
                    name: "Demographics",
                    values: [
                        {
                            label: "Date of Birth",
                            value: caseDetails && caseDetails.patientInfo && caseDetails.patientInfo.dob
                        },
                        {
                            label: "Height",
                            value: `${caseDetails && caseDetails.patientInfo && caseDetails.patientInfo.height} cm`
                        },
                        {
                            label: "Gender",
                            value: caseDetails && caseDetails.patientInfo && caseDetails.patientInfo.gender
                        },
                        {
                            label: "Ethnicity",
                            value: caseDetails && caseDetails.patientInfo && caseDetails.patientInfo.ethnicity
                        },
                    ]
                },
                {
                    name: "Qualifiers",
                    values: [
                        {
                            label: "Motivation",
                            value: caseDetails && caseDetails.patientInfo && caseDetails.patientInfo.motivation
                        },
                        {
                            label: "Hygiene",
                            value: caseDetails && caseDetails.patientInfo && caseDetails.patientInfo.hygiene
                        },
                        {
                            label: "Finances",
                            value: caseDetails && caseDetails.patientInfo && caseDetails.patientInfo.finances
                        }
                    ]
                }
            ]
        },
        {
            name: "Evaluation",
            blocks: [
                {
                    name: "Patient Habits",
                    values: caseDetails && caseDetails.habits && (Object.keys(caseDetails.habits).filter(value => caseDetails.habits[value] === true)).splice(",")
                },
                {
                    name: "Dental Model",
                    values: [
                        {
                            label: "Model Left",
                            value: caseDetails && caseDetails.dental && caseDetails.dental.model && caseDetails.dental.model.left
                        },
                        {
                            label: "Model Right",
                            value: caseDetails && caseDetails.dental && caseDetails.dental.model && caseDetails.dental.model.right
                        },
                    ]
                },
                {
                    name: "Malocclussion",
                    values: [
                        {
                            label: "Overjet",
                            value: `${caseDetails && caseDetails.dental && caseDetails.dental.model && caseDetails.dental.model.overjet} mm`
                        },
                        {
                            label: "Overbite",
                            value: `${caseDetails && caseDetails.dental && caseDetails.dental.model && caseDetails.dental.model.overbite} mm`
                        },
                    ]
                },
                {
                    name: "Space Shortage",
                    values: [
                        {
                            label: "UR Central",
                            value: caseDetails && caseDetails.dental && caseDetails.dental.space && caseDetails.dental.space.urCentral
                        },
                        {
                            label: "UL Central",
                            value: caseDetails && caseDetails.dental && caseDetails.dental.space && caseDetails.dental.space.ulCentral
                        },
                        {
                            label: "UR Lateral",
                            value: caseDetails && caseDetails.dental && caseDetails.dental.space && caseDetails.dental.space.urLateral
                        },
                        {
                            label: "UL Lateral",
                            value: caseDetails && caseDetails.dental && caseDetails.dental.space && caseDetails.dental.space.ulLateral
                        },
                        {
                            label: "Transpalatal",
                            value: caseDetails && caseDetails.dental && caseDetails.dental.space && caseDetails.dental.space.transpalatal
                        },
                    ]
                },
                {
                    name: "Joint",
                    values: [
                        {
                            label: "Clicking",
                            value: caseDetails && caseDetails.joint && (Object.keys(caseDetails.joint.clicking).filter(value => caseDetails.joint.clicking[value] === true)).splice(",")
                        },
                        {
                            label: "Popping",
                            value: caseDetails && caseDetails.joint && (Object.keys(caseDetails.joint.popping).filter(value => caseDetails.joint.popping[value] === true)).splice(",")
                        },
                        {
                            label: "Locking",
                            value: caseDetails && caseDetails.joint && (Object.keys(caseDetails.joint.locking).filter(value => caseDetails.joint.locking[value] === true)).splice(",")
                        },
                        {
                            label: "Max Opening",
                            value: caseDetails && caseDetails.joint && caseDetails.joint.maxOpening
                        }
                    ]
                },
                {
                    name: "Face",
                    values: [
                        {
                            label: "Profile",
                            value: caseDetails && caseDetails.facial && caseDetails.facial.profile
                        },
                        {
                            label: "Height",
                            value: caseDetails && caseDetails.facial && caseDetails.facial.height
                        },
                        {
                            label: "Features",
                            value: caseDetails && caseDetails.facial && (Object.keys(caseDetails.facial.features).filter(value => caseDetails.facial.features[value] === true)).splice(",")
                        },
                    ]
                }
            ]
        }
    ]

    useEffect(() => {
        retrieveCase();
    }, []);

    return (
        <div className="dashboard__content dashboard__content--patient">
            {caseDetails
                ?   <>
                    {sections.map((section) => {
                        return (
                            <section className="dashboard__section">
                                <h3 className="dashboard__subtitle">{section.name}</h3>
                                {section.blocks && section.blocks.map((block) => {
                                    return (
                                        <div>
                                            <h4>{block.name}</h4>
                                            <ul className="dashboard__data">
                                                {block.values && block.values.map((number) => {
                                                    return (
                                                        <li className="dashboard__row">
                                                            <p>{number.label}</p>
                                                            <p>{number.value}</p>
                                                        </li>
                                                    )
                                                })}
                                                <p className="dashboard__test">{block.items}</p>
                                            </ul>
                                        </div>
                                    )
                                })}
                            </section>
                        )
                    })}
                    </>
                :   <></>
            }
        </div>
    );
};

export default Cases;


/*
import React from 'react';
import { Link } from "react-router-dom";
import { useDashboard } from '../../contexts/DashboardProvider';
import "../../pages/Dashboard/Dashboard.scss";

function Cases() {
    const { clientCases } = useDashboard();

    return (
        <div className="dashboard__content">
            <section className="dashboard__section">
                <h3 className="dashboard__subtitle">Recently viewed</h3>
                <p className="dashboard__details">Your most recent viewed case will show up here...</p>
            </section>
            <section className="dashboard__section">
                <h3 className="dashboard__subtitle">All cases</h3>
                <ul className="dashboard__cases">
                {clientCases && clientCases.map((item) => {
                    return (
                        <li className="dashboard__case">
                            <Link
                                to={`/dashboard/cases/${item.uid}`}>
                                {item.patient}
                            </Link>
                        </li>
                    )
                })}
                </ul>
            </section>
        </div>
    );
};

export default Cases;

*/