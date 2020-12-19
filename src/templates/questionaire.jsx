// Components
import CaseType from '../components/CaseType/CaseType';
import PatientInfo from '../components/PatientInfo/PatientInfo';
import PatientQualifier from '../components/PatientQualifier/PatientQualifier';
import ModelLeft from '../components/Step3/Step3';
import ModelRight from '../components/Step4/Step4';
import Malocclussion from '../components/Step5/Step5';
import SpaceShortage from '../components/Step6/Step6';
import PatientHabits from '../components/Step7/Step7';
import PatientFeatures from '../components/Step8/Step8';
import Clicking from '../components/Step9/Step9';
import Popping from '../components/Step10/Step10';
import Locking from '../components/Step11/Step11';
import Deviation from '../components/Step12/Step12';
import FacialProfile from '../components/Step13/Step13';
import FacialHeight from '../components/Step14/Step14';
import CranialAbnormalities from '../components/Step15/Step15';
import MandibularPlane from '../components/Step16/Step16';
import GrowthDirection from '../components/Step17/Step17';
import MaxillaPosition from '../components/Step18/Step18';
import Concerns from '../components/Step19/Step19';
import Objective from '../components/Step20/Step20';
import Records from '../components/Step21/Step21';
import Review from '../components/Step22/Step22';

// Case Evaluation Form Template
const questionaire = [
    {
        title: "Case Type",
        instructions: "Select the type of case we are looking at:",
        content: <CaseType />
    },
    {
        title: "Patient Information",
        instructions: "Input all of the following information regarding the patient:",
        content: <PatientInfo />
    },
    {
        title: "Patient Qualifiers",
        instructions: "Rate all of the following qualifiers regarding the patient:",
        content: <PatientQualifier />
    },
    {
        title: "Model Left Classification",
        instructions: "Select the class type for the patients' left side:",
        content: <ModelLeft />
    },
    {
        title: "Model Right Classification",
        instructions: "Select the class type for the patients' right side:",
        content: <ModelRight />
    },
    {
        title: "Malocclusion Calculation",
        instructions: "Input all the following calculations for malocclusion:",
        content: <Malocclussion />
    },
    {
        title: "Space Shortage Calculation",
        instructions: "Input all of the following calculations for space shortage:",
        content: <SpaceShortage />
    },
    {
        title: "Patient Habits",
        instructions: "Select all applicable habits the patient exhibits:",
        content: <PatientHabits />
    },
    {
        title: "Facial Features",
        instructions: "Select all applicable facial features of the patient:",
        content: <PatientFeatures />
    },
    {
        title: "Joint Clicking",
        instructions: "Select all applicable areas the patient experiences clicking:",
        content: <Clicking />
    },
    {
        title: "Joint Popping",
        instructions: "Select all applicable areas the patient experiences popping:",
        content: <Popping />
    },
    {
        title: "Joint Locking",
        instructions: "Select all applicable areas the patient experiences locking:",
        content: <Locking />
    },
    {
        title: "Joint Range of Motion",
        instructions: "Draw the patient's joint range of motion below:",
        content: <Deviation />
    },
    {
        title: "Facial Profile",
        instructions: "Select the type of facial profile the patient has:",
        content: <FacialProfile />
    },
    {
        title: "Facial Height",
        instructions: "Select the type of facial height the patient has:",
        content: <FacialHeight />
    },
    {
        title: "Cranial Abnormalities",
        instructions: "Comment on the presence of any abnormalites the patient might have:",
        content: <CranialAbnormalities />
    },
    {
        title: "Mandibular Plane Angle",
        instructions: "Select the type of mandibular plane angle the patient has:",
        content: <MandibularPlane />
    },
    {
        title: "Growth Direction",
        instructions: "Select the type of growth direction the patient has:",
        content: <GrowthDirection />
    },
    {
        title: "Maxilla Position",
        instructions: "Select the type of maxilla position the patient has:",
        content: <MaxillaPosition />
    },
    {
        title: "General Concerns",
        instructions: "Comment on any treatment concerns the patient or guardian may have:",
        content: <Concerns />
    },
    {
        title: "Treatment Objectives",
        instructions: "Comment on your overall treatment objectives or goals:",
        content: <Objective />
    },
    {
        title: "Upload Dental Records",
        instructions: "Not sure what records are required? View our upload walkthrough",
        content: <Records />
    },
    {
        title: "Review Case Details",
        instructions: "Confirm your case details are inputed correctly:",
        content: <Review />
    },
]

export default questionaire;