import React from 'react';
import "./Patient.scss";

// Utilities
import condenseData from '../../utils/condenseData';
import calculateSpaceShortage from '../../utils/calculateSpaceShortage';

// Context
import { useDashboard } from '../../contexts/DashboardProvider';

// Assets
import cat from "../../assets/files/teeth.jpg";

// Components
import Section from '../../components/DashboardSection/DashboardSection';
import Tabs from '../../components/DashboardTabs/DashboardTabs';
import Tab from '../../components/DashboardTab/DashboardTab';
import Records from '../../components/PatientRecords/PatientRecords';
import Status from '../../components/CaseStatus/CaseStatus';
import Page from '../../components/DashboardPage/DashboardPage';
import Reference from '../../components/CaseRef/CaseRef';
import List from '../../components/DataList/DataList';
import Table from '../../components/DataTable/DataTable';
import Block from '../../components/DataBlock/DataBlock';

const Patient = (props) => {
    const { status, createdAt, type } = props;
    const submitted = createdAt.seconds
    const caseOverview = { type, submitted, status };

    const { caseDetails } = useDashboard();
    const patient = caseDetails.patient;

    // Patient Info Fields
    const { dob, ethnicity, gender, height, motivation, hygiene, finances, patientConcerns, guardianConcerns, medicationDetails } = caseDetails.patientInfo;
    const patientInfo = { dob, ethnicity, gender, height, motivation, hygiene, finances };

    // Dental Fields
    const { crLeft, crRight, overjet, overbite, maxOpening } = caseDetails.dental;
    const spaceShortage = calculateSpaceShortage(caseDetails.spaceShortage);
    const occlusionHindrances = condenseData(caseDetails.occlusionHindrances);

    // Habits
    const habits = condenseData(caseDetails.patientHabits);

    // Face Fields
    const features = condenseData(caseDetails.features);
    const { profile } = caseDetails.facial; // Fix Height
    const face = { profile, features};

    // TMJ Fields
    const popping = condenseData(caseDetails.popping);
    const locking = condenseData(caseDetails.locking);
    const clicking = condenseData(caseDetails.clicking);
    const underlyingIssues = condenseData(caseDetails.underlyingIssues);

    // Cranial Fields
    const maxillaLevel = condenseData(caseDetails.maxillaCant);
    const { headPosture, earLevel, eyeLevel, shoulderLevel, mandibularPlane, growthDirection, maxillaPosition } = caseDetails.cranial;

    // Treatment Fields
    const { objective } = caseDetails.treatment;

    const evaluation = [
        {
            title: "Dental",
            data: { 
                crRight, 
                crLeft, 
                overjet, 
                overbite, 
                spaceShortage, 
                occlusionHindrances
            }
        },
        {
            title: "Airway",
            data: { habits }
        },
        {
            title: "Face",
            data: { profile, features }
        },
        {
            title: "TMJ",
            data: { 
                clicking, 
                popping, 
                locking, 
                maxOpening, 
                underlyingIssues 
            }
        },
        {
            title: "Cranial",
            data: { 
                headPosture, 
                earLevel, 
                eyeLevel, 
                shoulderLevel, 
                maxillaLevel, 
                maxillaPosition, 
                mandibularPlane, 
                growthDirection
            }
        }
    ]

    const treatment = [
        {
            title: "Objective",
            data: objective
        },
        {
            title: "Patient Concerns",
            data: patientConcerns
        },
        {
            title: "Parent Concerns",
            data: guardianConcerns
        },
    ]

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

    return (
        <Page className="patient" title={patient}>
            <Status 
                className="patient__section patient__section--overview"
                details={caseOverview}
            />
            <Reference />
            <Section className="patient__section patient__section--info">
                <h3>Patient Info</h3>
                <List data={patientInfo} />
            </Section>
            <Tabs 
                className="patient__section patient__section--evaluation" 
                tabs={tabs}>
                <Tab id="records">
                    <Records />
                </Tab>
                <Tab id="evaluation">
                    {evaluation.map(table => {
                        return (
                            <Table 
                                title={table.title} 
                                data={table.data} 
                            />
                        )
                    })}
                </Tab>
                <Tab id="treatment">
                    {treatment.map(block => {
                        return (
                            <Block
                                title={block.title} 
                                data={block.data} 
                            />
                        )
                    })}
                </Tab>
            </Tabs>
        </Page>
    );
};

export default Patient;