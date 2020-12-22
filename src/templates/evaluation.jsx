// Card
import Clicking from '../components/Clicking/Clicking';
import Popping from '../components/Popping/Popping';
import Locking from '../components/Locking/Locking';

// Cards
import CaseType from '../components/CaseType/CaseType';
import ModelLeft from '../components/ModelLeft/ModelLeft';
import ModelRight from '../components/ModelRight/ModelRight';
import PatientHabits from '../components/PatientHabits/PatientHabits';
import Trauma from '../components/Trauma/Trauma';
import EarLevel from '../components/EarLevel/EarLevel';
import ShoulderLevel from '../components/ShoulderLevel/ShoulderLevel';
import EyeLevel from '../components/EyeLevel/EyeLevel';
import PatientFeatures from '../components/FacialFeatures/FacialFeatures';
import FacialProfile from '../components/FacialProfile/FacialProfile';
import FacialHeight from '../components/FacialHeight/FacialHeight';
import MandibularPlane from '../components/MandibularPlane/MandibularPlane';
import GrowthDirection from '../components/GrowthDirection/GrowthDirection';
import MaxillaPosition from '../components/MaxillaPosition/MaxillaPosition';
import HeadPosture from '../components/HeadPosture/HeadPosture';
import DentalArches from '../components/DentalArches/DentalArches';

// Text Input
import PatientInfo from '../components/PatientInfo/PatientInfo';
import Concerns from '../components/Concerns/Concerns';
import Treatment from '../components/Treatment/Treatment';

// Number Input
import DentalMeasurements from '../components/Malocclusion/Malocclusion';
import SpaceShortage from '../components/SpaceShortage/SpaceShortage';

// Rating
import PatientQualifier from '../components/PatientQualifier/PatientQualifier';

// Unique
import RangeOfMotion from '../components/RangeOfMotion/RangeOfMotion';
import Upload from '../components/Upload/Upload';
import Review from '../components/Review/Review';

// Evaluation Form Template
const evaluation = [
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
        title: "Dental Measurements",
        instructions: "Input all the following measurements:",
        content: <DentalMeasurements />
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
        title: "Underlying Issues",
        instructions: "Select all applicable trauma the patient has:",
        content: <Trauma />
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
        content: <RangeOfMotion />
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
        title: "Head Posture",
        instructions: "Select the applicable for each side of the patient:",
        content: <HeadPosture />
    },
    {
        title: "Eye Level",
        instructions: "Select the applicable for each side of the patient:",
        content: <EyeLevel />
    },
    {
        title: "Ear Level",
        instructions: "Select the applicable for each side of the patient:",
        content: <EarLevel />
    },
    {
        title: "Shoulder Level",
        instructions: "Select the applicable for each side of the patient:",
        content: <ShoulderLevel />
    },
    {
        title: "Dental Arches",
        instructions: "Select the applicable for each side of the patient:",
        content: <DentalArches />
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
        instructions: "Comment on any treatment concerns:",
        content: <Concerns />
    },
    {
        title: "Treatment Objectives",
        instructions: "Comment on your overall treatment objectives or goals:",
        content: <Treatment />
    },
    {
        title: "Upload Dental Records",
        instructions: "Not sure what records are required? View our upload walkthrough",
        content: <Upload />
    },
    {
        title: "Review Case Details",
        instructions: "Confirm your case details are inputed correctly:",
        content: <Review />
    },
]

export default evaluation;

/*
import CaseType from '../components/CaseType/CaseType';
import PatientInfo from '../components/PatientInfo/PatientInfo';
import PatientQualifier from '../components/PatientQualifier/PatientQualifier';
import ModelLeft from '../components/ModelLeft/ModelLeft';
import ModelRight from '../components/ModelRight/ModelRight';
import Malocclussion from '../components/Malocclusion/Malocclusion';
import SpaceShortage from '../components/SpaceShortage/SpaceShortage';
import PatientHabits from '../components/PatientHabits/PatientHabits';
import PatientFeatures from '../components/FacialFeatures/FacialFeatures';
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

*/