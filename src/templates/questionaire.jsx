// Components
import CaseType from '../components/CaseType/CaseType';
import PatientInfo from '../components/Step1/Step1';
import PatientQualifier from '../components/Step2/Step2';
import ModelLeft from '../components/Step3/Step3';
import ModelRight from '../components/Step4/Step4';
import Maloclussion from '../components/Step5/Step5';
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
        instructions: "Input all of the following details regarding your patient",
        content: <CaseType />
    },
    {
        title: "Patient Information",
        instructions: "Input all of the following details regarding your patient",
        content: <PatientInfo />
    },
    {
        title: "Patient Qualifiers",
        instructions: "Input all of the following details regarding your patient",
        content: <PatientQualifier />
    },
    {
        title: "Model Left Classification",
        instructions: "Input all of the following details regarding your patient",
        content: <ModelLeft />
    },
    {
        title: "Model Right Classification",
        instructions: "Input all of the following details regarding your patient",
        content: <ModelRight />
    },
    {
        title: "Malocclusion Calculation",
        instructions: "Input all of the following details regarding your patient",
        content: <Maloclussion />
    },
    {
        title: "Space Shortage Calculation",
        instructions: "Input all of the following details regarding your patient",
        content: <SpaceShortage />
    },
    {
        title: "Patient Habits",
        instructions: "Input all of the following details regarding your patient",
        content: <PatientHabits />
    },
    {
        title: "Patient Features",
        instructions: "Input all of the following details regarding your patient",
        content: <PatientFeatures />
    },
    {
        title: "TMJ Clicking",
        instructions: "Input all of the following details regarding your patient",
        content: <Clicking />
    },
    {
        title: "TMJ Popping",
        instructions: "Input all of the following details regarding your patient",
        content: <Popping />
    },
    {
        title: "TMJ Locking",
        instructions: "Input all of the following details regarding your patient",
        content: <Locking />
    },
    {
        title: "TMJ Deviation",
        instructions: "Input all of the following details regarding your patient",
        content: <Deviation />
    },
    {
        title: "Facial Profile",
        instructions: "Input all of the following details regarding your patient",
        content: <FacialProfile />
    },
    {
        title: "Facial Height",
        instructions: "Input all of the following details regarding your patient",
        content: <FacialHeight />
    },
    {
        title: "Cranial Abnormalities",
        instructions: "Input all of the following details regarding your patient",
        content: <CranialAbnormalities />
    },
    {
        title: "Mandibular Plane Angle",
        instructions: "Input all of the following details regarding your patient",
        content: <MandibularPlane />
    },
    {
        title: "Growth Direction",
        instructions: "Input all of the following details regarding your patient",
        content: <GrowthDirection />
    },
    {
        title: "Maxilla Position",
        instructions: "Input all of the following details regarding your patient",
        content: <MaxillaPosition />
    },
    {
        title: "General Concerns",
        instructions: "Input all of the following details regarding your patient",
        content: <Concerns />
    },
    {
        title: "Treatment Objectives",
        instructions: "Input all of the following details regarding your patient",
        content: <Objective />
    },
    {
        title: "Upload Dental Records",
        instructions: "Input all of the following details regarding your patient",
        content: <Records />
    },
    {
        title: "Review Case Details",
        instructions: "Input all of the following details regarding your patient",
        content: <Review />
    },
]

export default questionaire;