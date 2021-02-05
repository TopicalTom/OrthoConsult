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
import List from '../../components/DataList/DataList';
import Table from '../../components/DataTable/DataTable';
import Block from '../../components/DataBlock/DataBlock';

const Patient = (props) => {
    const { status, type } = props;
    const caseOverview = { type, status };

    const { caseDetails } = useDashboard();
    const patient = caseDetails.patient;

    // Patient Info Fields
    const { birthday, ethnicity, gender, height, motivation, hygiene, finances } = caseDetails.patientInfo;
    const patientInfo = { birthday, ethnicity, gender, height, motivation, hygiene, finances };

    // Dental Fields
    const { modelLeft, modelRight, overjet, overbite, maxOpening, development, developmentDetails, history, historyDetails } = caseDetails.dental;
    const spaceShortage = calculateSpaceShortage(caseDetails.spaceShortage);
    const occlusionHindrances = condenseData(caseDetails.occlusionHindrances);
    const dental = { modelLeft, modelRight, overjet, overbite, maxOpening, spaceShortage, occlusionHindrances };

    // Habits
    const habits = condenseData(caseDetails.patientHabits);

    // Face Fields
    const features = condenseData(caseDetails.features);

    // TMJ Fields
    const popping = condenseData(caseDetails.popping);
    const locking = condenseData(caseDetails.locking);
    const clicking = condenseData(caseDetails.clicking);
    const underlyingIssues = condenseData(caseDetails.underlyingIssues);

    // Cranial Fields
    const maxillaAsymmetry = condenseData(caseDetails.maxillaAsymmetry);

    // Treatment Fields
    const { objective, patientConcerns, guardianConcerns } = caseDetails.treatment;

    const evaluation = [
        {
            title: "Dental",
            data: dental
        },
        {
            title: "Airway",
            data: { habits }
        },
        {
            title: "Face",
            data: { 
                ...caseDetails.facial, 
                features 
            }
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
                ...caseDetails.cranial,
                maxillaAsymmetry
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