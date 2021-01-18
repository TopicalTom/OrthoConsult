import React, { useState, useEffect } from 'react';
import { useDashboard } from '../../contexts/DashboardProvider';
import "../Dashboard/Dashboard.scss";

function Patient() {
    const { caseDetails, retrieveCase } = useDashboard();
    const sections = [
        {
            name: "Patient Info",
            blocks: [
                {
                    name: "Demographics",
                    values: [
                        {
                            label: "Date of Birth",
                            value: caseDetails.patientInfo && caseDetails.patientInfo.dob
                        },
                        {
                            label: "Height",
                            value: `${caseDetails.patientInfo && caseDetails.patientInfo.height} cm`
                        },
                        {
                            label: "Gender",
                            value: caseDetails.patientInfo && caseDetails.patientInfo.gender
                        },
                        {
                            label: "Ethnicity",
                            value: caseDetails.patientInfo && caseDetails.patientInfo.ethnicity
                        },
                    ]
                },
                {
                    name: "Qualifiers",
                    values: [
                        {
                            label: "Motivation",
                            value: caseDetails.patientInfo && caseDetails.patientInfo.motivation
                        },
                        {
                            label: "Hygiene",
                            value: caseDetails.patientInfo && caseDetails.patientInfo.hygiene
                        },
                        {
                            label: "Finances",
                            value: caseDetails.patientInfo && caseDetails.patientInfo.finances
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
                    values: caseDetails.habits && (Object.keys(caseDetails.habits).filter(value => caseDetails.habits[value] === true)).splice(",")
                },
                {
                    name: "Dental Model",
                    values: [
                        {
                            label: "Model Left",
                            value: caseDetails.dental && caseDetails.dental.model && caseDetails.dental.model.left
                        },
                        {
                            label: "Model Right",
                            value: caseDetails.dental && caseDetails.dental.model && caseDetails.dental.model.right
                        },
                    ]
                },
                {
                    name: "Malocclussion",
                    values: [
                        {
                            label: "Overjet",
                            value: `${caseDetails.dental && caseDetails.dental.model && caseDetails.dental.model.overjet} mm`
                        },
                        {
                            label: "Overbite",
                            value: `${caseDetails.dental && caseDetails.dental.model && caseDetails.dental.model.overbite} mm`
                        },
                    ]
                },
                {
                    name: "Space Shortage",
                    values: [
                        {
                            label: "UR Central",
                            value: caseDetails.dental && caseDetails.dental.space && caseDetails.dental.space.urCentral
                        },
                        {
                            label: "UL Central",
                            value: caseDetails.dental && caseDetails.dental.space && caseDetails.dental.space.ulCentral
                        },
                        {
                            label: "UR Lateral",
                            value: caseDetails.dental && caseDetails.dental.space && caseDetails.dental.space.urLateral
                        },
                        {
                            label: "UL Lateral",
                            value: caseDetails.dental && caseDetails.dental.space && caseDetails.dental.space.ulLateral
                        },
                        {
                            label: "Transpalatal",
                            value: caseDetails.dental && caseDetails.dental.space && caseDetails.dental.space.transpalatal
                        },
                    ]
                },
                {
                    name: "Joint",
                    values: [
                        {
                            label: "Clicking",
                            value: caseDetails.joint && (Object.keys(caseDetails.joint.clicking).filter(value => caseDetails.joint.clicking[value] === true)).splice(",")
                        },
                        {
                            label: "Popping",
                            value: caseDetails.joint && (Object.keys(caseDetails.joint.popping).filter(value => caseDetails.joint.popping[value] === true)).splice(",")
                        },
                        {
                            label: "Locking",
                            value: caseDetails.joint && (Object.keys(caseDetails.joint.locking).filter(value => caseDetails.joint.locking[value] === true)).splice(",")
                        },
                        {
                            label: "Max Opening",
                            value: caseDetails.joint && caseDetails.joint.maxOpening
                        }
                    ]
                },
                {
                    name: "Face",
                    values: [
                        {
                            label: "Profile",
                            value: caseDetails.facial && caseDetails.facial.profile
                        },
                        {
                            label: "Height",
                            value: caseDetails.facial && caseDetails.facial.height
                        },
                        {
                            label: "Features",
                            value: caseDetails.facial && (Object.keys(caseDetails.facial.features).filter(value => caseDetails.facial.features[value] === true)).splice(",")
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

export default Patient;

/*
import React, { useState, useEffect } from 'react';
//import { useLocation } from "react-router-dom";
//import { useAuth } from '../../contexts/AuthProvider';
import { useDashboard } from '../../contexts/DashboardProvider';
//import { firestore } from "../../firebase";
import "../Dashboard/Dashboard.scss";

function Patient() {
    const { caseDetails, retrieveCase } = useDashboard();

    useEffect(() => {
        retrieveCase();
    }, []);

    return (
        <div className="dashboard__content">
            {caseDetails
                ?   <>
                        {caseDetails.patientInfo &&
                            <section className="dashboard__section">
                                <h3 className="dashboard__subtitle">Patient Overview</h3>
                                <ul>
                                    {Object.values(caseDetails.patientInfo).map((item) => {
                                        return (
                                        <li>{item}</li>
                                        )
                                    })}
                                </ul>
                            </section>
                        }
                        {caseDetails.habits &&
                            <section className="dashboard__section">
                                <h3 className="dashboard__subtitle">Patient Habits</h3>
                                <ul>
                                    {Object.values(caseDetails.habits).filter(habit => habit === false)
                                    }
                                </ul>
                            </section>
                        }
                    </>
                :   <p>You don't have permission to view these details</p>
            }
        </div>
    );
};

export default Patient;
*/