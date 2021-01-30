import React from 'react';
import "./Patient.scss";

// Context
import { useDashboard } from '../../contexts/DashboardProvider';

// Assets
import cat from "../../assets/files/teeth.jpg";

// Components
import Table from '../../components/Table/Table';
import Section from '../../components/DashboardSection/DashboardSection';
import Tabs from '../../components/DashboardTabs/DashboardTabs';
import Records from '../../components/PatientRecords/PatientRecords';
import Status from '../../components/DashboardStatus/DashboardStatus';
import Page from '../../components/DashboardPage/DashboardPage';

const Patient = (props) => {
    const { status, createdAt, type } = props;
    const submitted = createdAt.seconds
    const caseOverview = { type, submitted, status };
    const { caseDetails } = useDashboard();
    const patient = caseDetails.patient;
    const { dob, ethnicity, gender, height, motivation, hygiene, finances } = caseDetails.patientInfo;
    const habits = { dob, ethnicity, gender, height };
    const ratings = { motivation, hygiene, finances};

    console.log(props)

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



    //Object.entries(patientHabits).forEach(([key, value]) => console.log(`${key}: ${value}`))

    return (
        <Page className="patient" title={patient}>
            <Status 
                className="patient__section patient__section--overview"
                details={caseOverview}
            />
            <Section className="patient__section patient__section--patient">
                <h3>Patient Info</h3>
                <div className="patient__split">
                <ul className="patient__list">
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
                <ul className="patient__list">
                    {Object.entries(ratings).map(([key, value]) => {
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
                    })}
                </ul>

                </div>
            </Section>
            <Tabs 
                className="patient__section patient__section--data" 
                tabs={tabs}>
                <Records 
                    className="patient__container"
                    records={records} 
                    id="records"
                />
                <div 
                    className="patient__container"
                    id="evaluation">
                    <Section className="patient__section">
                        <p>Airway</p>
                    </Section>
                    <Section className="patient__section">
                        <p>Dental</p>
                    </Section>
                    <Section className="patient__section">
                        <p>Skeletal</p>
                    </Section>
                </div>
                <div 
                    className="patient__container"
                    id="treatment">
                    <Section className="patient__section">
                        <p>Type</p>
                    </Section>
                    <Section className="patient__section">
                        <p>Objectives</p>
                    </Section>
                    <Section className="patient__section">
                        <p>Patient Concerns</p>
                    </Section>
                    <Section className="patient__section">
                        <p>Parent Concerns</p>
                    </Section>
                </div>
            </Tabs>
        </Page>
    );
};

export default Patient;