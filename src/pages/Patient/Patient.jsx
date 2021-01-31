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
import Status from '../../components/CaseStatus/CaseStatus';
import Page from '../../components/DashboardPage/DashboardPage';
import Button from '../../components/Button/Button';

const Patient = (props) => {
    const { status, createdAt, type } = props;
    const submitted = createdAt.seconds
    const caseOverview = { type, submitted, status };
    const { caseDetails } = useDashboard();
    const patient = caseDetails.patient;
    const { dob, ethnicity, gender, height, motivation, hygiene, finances } = caseDetails.patientInfo;
    const patientInfo = { dob, ethnicity, gender, height, motivation, hygiene, finances };

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
            <Button className="patient__section patient__section--ref">
                Ref: asdadshasdhjjhasdhjjhasd
            </Button>
            <Section className="patient__section patient__section--info">
                <h3>Patient Info</h3>
                <ul className="patient__list">
                    {Object.entries(patientInfo).map(([key, value]) => {
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
            <Tabs 
                className="patient__section patient__section--evaluation" 
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