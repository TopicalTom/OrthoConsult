import React, { useContext, useState, createContext, useEffect } from 'react';
import { useEvaluation } from "./EvaluationProvider";

// Custom Step Management Hook
const QuestionContext = createContext(0);

export function useQuestion() {
    return useContext(QuestionContext)
}

// Handles Form Step Changes
export function QuestionProvider({ children }) {
    const { dataState } = useEvaluation();
    const repeatedList = [
        {
            id: "high",
            label: "High",
            value: "High"
        },
        {
            id: "low",
            label: "Low",
            value: "Low"
        },
        {
            id: "normal",
            label: "Normal",
            value: "Normal"
        }
    ]
    
    const questions = [
        {
            title: "Case Type",
            instructions: "Select the type of case we are looking at:",
            layout: "duo",
            type: "radios",
            name: "caseType",
            callback: "STORE_DATA",
            data: dataState.caseType,
            options: [
                {
                    id: "newCase",
                    label: "New Case",
                    value: "New Case",
                    details: "$150"
                },
                {
                    id: "ongoingCase",
                    label: "Ongoing Case",
                    value: "Ongoing Case",
                    details: "$100"
                },
            ]
        },
        {
            title: "Patient Info",
            instructions: "Input all of the following information regarding the patient:",
            layout: "wrap",
            type: "info",
            group: "patientInfo",
            path: dataState.patientInfo,
            options: [
                {
                    name: "patient",
                    label: "Full Name",
                    callback: "STORE_DATA",
                    check: "CHECK_TEXT",
                    type: "text",
                    value: dataState.patient,
                },
                {
                    name: "dob",
                    label: "Date of Birth",
                    callback: "STORE_AS_NESTED_DATA",
                    check: "CHECK_TEXT",
                    type: "date",
                    value: dataState.patientInfo.dob,
                },
                {
                    name: "height",
                    label: "Height",
                    callback: "STORE_AS_NESTED_DATA",
                    check: "CHECK_NUMBER",
                    type: "number",
                    criteria: "cm",
                    value: dataState.patientInfo.height,
                },
                {
                    name: "gender",
                    label: "Gender",
                    data: dataState.patientInfo.gender,
                    list: [
                        {
                            id: "male",
                            label: "Male",
                            value: "Male"
                        },
                        {
                            id: "female",
                            label: "Female",
                            value: "Female"
                        },
                    ]
                },
            ]
        },
        {
            title: "Patient Ethnicity",
            instructions: "Select the patients age from the calendar dropdown:",
            layout: "duo",
            type: "ethnicity",
            data: dataState.patientInfo.ethnicity,
            group: "patientInfo",
            name: "ethnicity",
            path: dataState.patientInfo,
            options: [
                {
                    list: [
                        {
                            id: "americanIndianOrAlaskaNative",
                            label: "American Indian or Alaska Native",
                            value: "American Indian or Alaska Native"
                        },
                        {
                            id: "asian",
                            label: "Asian",
                            value: "Asian"
                        },
                        {
                            id: "black",
                            label: "Black or African American",
                            value: "Black or African American"
                        },
                        {
                            id: "hispanicOrLatino",
                            label: "Hispanic or Latino",
                            value: "Hispanic or Latino"
                        },
                        {
                            id: "hawaiianNativeOrPacificIslander",
                            label: "Native Hawaiian or Other Pacific Islander",
                            value: "Native Hawaiian or Other Pacific Islander",
                        },
                        {
                            id: "white",
                            label: "White",
                            value: "White"
                        },
                        {
                            id: "otherRace",
                            label: "Other",
                            value: "Other",
                            field: true
                        }
                    ]
                }
            ]
        },
        {
            title: "Patient Habits",
            instructions: "Select all applicable habits the patient exhibits:",
            layout: "table",
            type: "checkbox",
            group: "patientHabits",
            path: dataState.patientHabits,
            options: [
                {
                    name: "mouthBreather",
                    label: "Mouth Breather",
                    details: "Feature",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.patientHabits.mouthBreather,
                },
                {
                    name: "snores",
                    label: "Snores",
                    details: "Habit",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.patientHabits.snores,
                },
                {
                    name: "tongueThrusts",
                    label: "Tongue Thrusts",
                    details: "Habit",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.patientHabits.tongueThrusts,
                },
                {
                    name: "thumbSucking",
                    label: "Thumb Sucking",
                    details: "Habit",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.patientHabits.thumbSucking,
                },
                {
                    name: "none",
                    label: "None",
                    callback: "STORE_AS_EMPTY_NESTED_COLLECTION_DATA",
                    value: dataState.patientHabits.none,
                },
            ]
        },
        {
            title: "Patient Underlying Issues",
            instructions: "Select all applicable trauma the patient has:",
            layout: "triple",
            type: "checkbox",
            group: "underlyingIssues",
            path: dataState.underlyingIssues,
            options: [
                {
                    name: "trauma",
                    label: "Trauma",
                    details: "MVA and/or sports",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.underlyingIssues.trauma,
                },
                {
                    name: "headaches",
                    label: "Headaches",
                    details: "",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.underlyingIssues.headaches,
                },
                {
                    name: "none",
                    label: "None",
                    details: "",
                    callback: "STORE_AS_EMPTY_NESTED_COLLECTION_DATA",
                    value: dataState.underlyingIssues.none,
                }
            ]
        },
        {
            title: "Patient Medicated",
            instructions: "Comment on your overall treatment objectives or goals:",
            layout: "layer",
            type: "treatment",
            group: "patientInfo",
            path: dataState.patientInfo,
            options: [
                {
                    name: "medicated",
                    label: "Is the patient medicated",
                    data: dataState.patientInfo.medicated,
                    list: [
                        {
                            id: "yes",
                            label: "Yes",
                            value: "Yes"
                        },
                        {
                            id: "no",
                            label: "No",
                            value: "No"
                        }
                    ]
                },
                {
                    name: "medicationDetails",
                    label: "Explain",
                    value: dataState.patientInfo.medicationDetails,
                }
            ]
        },
        {
            title: "Patient Hygiene",
            instructions: "Rate all of the following classifications regarding the patient:",
            layout: "triple",
            type: "radios",
            name: "hygiene",
            callback: "STORE_AS_NESTED_DATA",
            data: dataState.patientInfo.hygiene,
            group: "patientInfo",
            path:  dataState.patientInfo,
            options: [
                {
                    id: "hygienePoor",
                    label: "Poor",
                    value: "Poor",
                },
                {
                    id: "hygieneFair",
                    label: "Fair",
                    value: "Fair",
                },
                {
                    id: "hygieneExcellent",
                    label: "Excellent",
                    value: "Excellent",
                }
            ]
        },
        {
            title: "Patient Motivation",
            instructions: "Rate all of the following classifications regarding the patient:",
            layout: "triple",
            type: "radios",
            name: "motivation",
            callback: "STORE_AS_NESTED_DATA",
            data: dataState.patientInfo.motivation,
            group: "patientInfo",
            path:  dataState.patientInfo,
            options: [
                {
                    id: "motivationLow",
                    label: "Low",
                    value: "Low",
                },
                {
                    id: "motivationAverage",
                    label: "Average",
                    value: "Anterior",
                },
                {
                    id: "motivationHigh",
                    label: "High",
                    value: "High",
                }
            ]
        },
        {
            title: "Patient Finances",
            instructions: "Rate all of the following classifications regarding the patient:",
            layout: "triple",
            type: "radios",
            name: "finances",
            callback: "STORE_AS_NESTED_DATA",
            data: dataState.patientInfo.finances,
            group: "patientInfo",
            path:  dataState.patientInfo,
            options: [
                {
                    id: "financesLimited",
                    label: "Limited",
                    value: "Limited",
                },
                {
                    id: "financesModerate",
                    label: "Moderate",
                    value: "Moderate",
                },
                {
                    id: "financesExcellent",
                    label: "Excellent",
                    value: "Excellent",
                }
            ]
        },
        {
            title: "Treatment Concerns",
            instructions: "Comment on any treatment concerns:",
            layout: "stack",
            type: "concerns",
            group: "treatment",
            path: dataState.treatment,
            options: [
                {
                    name: "patientConcerns",
                    label: "Patient Concerns",
                    value: dataState.treatment.patientConcerns,
                },
                {
                    name: "parentConcerns",
                    label: "Parent Concerns - optional",
                    value: dataState.treatment.parentConcerns,
                },
            ]
        },
        {
            title: "Facial Profile",
            instructions: "Select the type of facial profile the patient has:",
            layout: "triple",
            type: "radios",
            name: "profile",
            callback: "STORE_AS_NESTED_DATA",
            data: dataState.facial.profile,
            group: "facial",
            path: dataState.facial,
            options: [
                {
                    id: "facialClassI",
                    label: "Class I",
                    details: "This is info about...",
                    value: "Class I",
                },
                {
                    id: "facialClassII",
                    label: "Class II",
                    details: "This is info about...",
                    value: "Class II",
                },
                {
                    id: "facialClassIII",
                    label: "Class III",
                    details: "This is info about...",
                    value: "Class III",
                }
            ]
        },
        {
            title: "Facial Height",
            instructions: "Select the type of facial height the patient has:",
            layout: "triple",
            type: "radios",
            name: "height",
            callback: "STORE_AS_NESTED_DATA",
            data: dataState.facial.height,
            group: "facial",
            path: dataState.facial,
            options: [
                {
                    id: "facialLong",
                    label: "Long",
                    details: "This is info about...",
                    value: "Long",
                },
                {
                    id: "facialShort",
                    label: "Short",
                    details: "This is info about...",
                    value: "Short",
                },
                {
                    id: "facialIdeal",
                    label: "Ideal",
                    details: "This is info about...",
                    value: "Ideal",
                }
            ]
        },
        {
            title: "Facial Features",
            instructions: "Select all applicable facial features of the patient:",
            layout: "table",
            type: "checkbox",
            group: "features",
            path: dataState.features,
            options: [
                {
                    name: "eyeDarkness",
                    label: "Eye Darkness",
                    details: "Feature",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.features.eyeDarkness,
                },
                {
                    name: "nostrilsDeveloped",
                    label: "Nostrils Developed",
                    details: "Feature",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.features.nostrilsDeveloped
                },
                {
                    name: "weakLips",
                    label: "Weak Lips",
                    details: "Feature",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.features.weakLips
                },
                {
                    name: "poorLipSeal",
                    label: "Poor Lip Seal",
                    details: "Feature",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.features.poorLipSeal
                },
                {
                    name: "none",
                    label: "None",
                    callback: "STORE_AS_EMPTY_NESTED_COLLECTION_DATA",
                    value: dataState.features.none
                }
            ]
        },
        {
            title: "Head Posture",
            instructions: "Select the applicable for each side of the patient:",
            layout: "duo",
            type: "radios",
            name: "headPosture",
            callback: "STORE_AS_NESTED_DATA",
            data: dataState.cranial.headPosture,
            group: "cranial",
            path: dataState.cranial,
            options: [
                {
                    id: "forward",
                    label: "Forward",
                    value: "Forward",
                },
                {
                    id: "normal",
                    label: "Normal",
                    value: "Normal",
                },
            ]
        },
        {
            title: "Eye Level",
            instructions: "Select the applicable for each side of the patient:",
            layout: "split",
            type: "multi",
            group: "eyeLevel",
            path: dataState.eyeLevel,
            callback: "STORE_AS_NESTED_DATA",
            options: [
                {
                    name: "left",
                    category: "Patient Left",
                    data: dataState.eyeLevel.left,
                    list: repeatedList
                },
                {
                    name: "right",
                    category: "Patient Right",
                    data: dataState.eyeLevel.right,
                    list: repeatedList
                }
            ]
        },
        {
            title: "Ear Level",
            instructions: "Select the applicable for each side of the patient:",
            layout: "split",
            type: "multi",
            group: "earLevel",
            path: dataState.earLevel,
            callback: "STORE_AS_NESTED_DATA",
            options: [
                {
                    name: "left",
                    category: "Patient Left",
                    data: dataState.earLevel.left,
                    list: repeatedList
                },
                {
                    name: "right",
                    category: "Patient Right",
                    data: dataState.earLevel.right,
                    list: repeatedList
                }
            ]
        },
        {
            title: "Shoulder Level",
            instructions: "Select the applicable for each side of the patient:",
            layout: "split",
            type: "multi",
            group: "shoulderLevel",
            path: dataState.shoulderLevel,
            callback: "STORE_AS_NESTED_DATA",
            options: [
                {
                    name: "left",
                    category: "Patient Left",
                    data: dataState.shoulderLevel.left,
                    list: repeatedList
                },
                {
                    name: "right",
                    category: "Patient Right",
                    data: dataState.shoulderLevel.right,
                    list: repeatedList
                }
            ]
        },
        {
            title: "Maxilla Cant",
            instructions: "Select the applicable for each side of the patient:",
            layout: "triple",
            type: "radios",
            group: "cranial",
            name: "maxillaCant",
            path: dataState.cranial,
            callback: "STORE_AS_NESTED_DATA",
            data: dataState.cranial.maxillaCant,
            options: [
                {
                    id: "maxillaCantRight",
                    label: "Patient Right",
                    value: "Patient Right",
                },
                {
                    id: "maxillaCantLeft",
                    label: "Patient Left",
                    value: "Patient Left",
                },
                {
                    id: "maxillaIsLevel",
                    label: "None",
                    value: "None",
                }
            ]
        },
        {
            title: "Maxilla Position",
            instructions: "Select the type of maxilla position the patient has:",
            layout: "triple",
            type: "radios",
            name: "maxillaPosition",
            callback: "STORE_AS_NESTED_DATA",
            data: dataState.cranial.maxillaPosition,
            group: "cranial",
            path: dataState.cranial,
            options: [
                {
                    id: "posterior",
                    label: "Posterior",
                    value: "Posterior",
                },
                {
                    id: "anterior",
                    label: "Anterior",
                    value: "Anterior",
                },
                {
                    id: "normal",
                    label: "Normal",
                    value: "Normal",
                }
            ]
        },
        {
            title: "Mandibular Plane Angle",
            instructions: "Select the type of mandibular plane angle the patient has:",
            layout: "duo",
            type: "radios",
            name: "mandibularPlane",
            callback: "STORE_AS_NESTED_DATA",
            data: dataState.cranial.mandibularPlane,
            group: "cranial",
            path: dataState.cranial,
            options: [
                {
                    id: "steep",
                    label: "Steep",
                    value: "Steep"
                },
                {
                    id: "normal",
                    label: "Normal",
                    value: "Normal"
                }
            ]
        },
        {
            title: "Growth Direction",
            instructions: "Select the type of growth direction the patient has:",
            layout: "triple",
            type: "radios",
            name: "growthDirection",
            callback: "STORE_AS_NESTED_DATA",
            data: dataState.cranial.growthDirection,
            group: "cranial",
            path: dataState.cranial,
            options: [
                {
                    id: "deep",
                    label: "Deep",
                    value: "Deep",
                },
                {
                    id: "open",
                    label: "Open",
                    value: "Open",
                },
                {
                    id: "normal",
                    label: "Normal",
                    value: "Normal",
                }
            ]
        },
        {
            title: "Joint Clicking",
            instructions: "Select all applicable areas the patient experiences clicking:",
            layout: "triple",
            type: "checkbox",
            group: "clicking",
            path: dataState.clicking,
            options: [
                {
                    name: "left",
                    label: "Left",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.clicking.left
                },
                {
                    name: "right",
                    label: "Right",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.clicking.right
                },
                {
                    name: "none",
                    label: "None",
                    callback: "STORE_AS_EMPTY_NESTED_COLLECTION_DATA",
                    value: dataState.clicking.none
                }
            ]
        },
        {
            title: "Joint Popping",
            instructions: "Select all applicable areas the patient experiences popping:",
            layout: "triple",
            type: "checkbox",
            group: "popping",
            path: dataState.popping,
            options: [
                {
                    name: "left",
                    label: "Left",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.popping.left
                },
                {
                    name: "right",
                    label: "Right",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.popping.right
                },
                {
                    name: "none",
                    label: "None",
                    callback: "STORE_AS_EMPTY_NESTED_COLLECTION_DATA",
                    value: dataState.popping.none
                }
            ]
        },
        {
            title: "Joint Locking",
            instructions: "Select all applicable areas the patient experiences locking:",
            layout: "triple",
            type: "checkbox",
            group: "locking",
            path: dataState.locking,
            options: [
                {
                    name: "left",
                    label: "Left",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.locking.left
                },
                {
                    name: "right",
                    label: "Right",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.locking.right
                },
                {
                    name: "none",
                    label: "None",
                    callback: "STORE_AS_EMPTY_NESTED_COLLECTION_DATA",
                    value: dataState.locking.none
                }
            ]
        },
        {
            title: "Joint Range of Motion",
            instructions: "Draw the patient's joint range of motion below:",
            layout: "none",
            type: "draw"
        },
        {
            title: "Model Classification",
            instructions: "Select the class type for the patients' left side:",
            layout: "split-alt",
            type: "multi",
            group: "dental",
            path: dataState.dental,
            callback: "STORE_AS_NESTED_DATA",
            options: [
                {
                    name: "modelLeft",
                    category: "Patient Left",
                    data: dataState.dental.modelLeft,
                    list: [
                        {
                            id: "leftClassI",
                            label: "Class I",
                            value: "Class I"
                        },
                        {
                            id: "leftHalfTooth",
                            label: "Half Tooth",
                            value: "Class II: Half Tooth",
                            details: "Class II"
                        },
                        {
                            id: "leftFullTooth",
                            label: "Full Tooth",
                            value: "Class II: Full Tooth",
                            details: "Class II"
                        },
                        {
                            id: "leftClassIII",
                            label: "Class III",
                            value: "Class III"
                        }
                    ]
                },
                {
                    name: "modelRight",
                    category: "Patient Right",
                    data: dataState.dental.modelRight,
                    list: [
                        {
                            id: "rightClassI",
                            label: "Class I",
                            value: "Class I"
                        },
                        {
                            id: "rightHalfTooth",
                            label: "Half Tooth",
                            value: "Class II: Half Tooth",
                            details: "Class II"
                        },
                        {
                            id: "rightFullTooth",
                            label: "Full Tooth",
                            value: "Class II: Full Tooth",
                            details: "Class II"
                        },
                        {
                            id: "rightClassIII",
                            label: "Class III",
                            value: "Class III"
                        },
                    ]
                }
            ]
        },
        {
            title: "If the Model is Class III...",
            instructions: "Select the type of case we are looking at:",
            layout: "triple",
            type: "radios",
            name: "hereditary",
            group: "dental",
            callback: "STORE_AS_NESTED_DATA",
            path: dataState.dental,
            data: dataState.dental.hereditary,
            options: [
                {
                    id: "isHereditary",
                    label: "Yes",
                    value: "Yes",
                },
                {
                    id: "isntHereditary",
                    label: "No",
                    value: "No",
                },
                {
                    id: "notClassIII",
                    label: "Not Applicable",
                    value: "Not Applicable",
                },
            ]
        },
        {
            title: "Model Hindrances",
            instructions: "Select all applicable facial features of the patient:",
            layout: "table",
            type: "checkbox",
            group: "modelHindrances",
            path: dataState.modelHindrances,
            options: [
                {
                    name: "constriction",
                    label: "Constriction",
                    details: "Hindrance",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.modelHindrances.constriction,
                },
                {
                    name: "incisalDeflection",
                    label: "Incisal Deflection",
                    details: "Hindrance",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.modelHindrances.incisalDeflection
                },
                {
                    name: "crossbite",
                    label: "Crossbite",
                    details: "Hindrance",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.modelHindrances.crossbite
                },
                {
                    name: "openBite",
                    label: "Open Bite",
                    details: "Hindrance",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.modelHindrances.openBite
                },
                {
                    name: "none",
                    label: "None",
                    callback: "STORE_AS_EMPTY_NESTED_COLLECTION_DATA",
                    value: dataState.modelHindrances.none
                }
            ]
        },
        {
            title: "Congentially Missing Teeth",
            instructions: "Comment on your overall treatment objectives or goals:",
            layout: "layer",
            type: "treatment",
            group: "dental",
            path: dataState.dental,
            options: [
                {
                    name: "missingTeeth",
                    label: "Does the patient have missing teeth?",
                    data: dataState.dental.missingTeeth,
                    list: [
                        {
                            id: "teethMissing",
                            label: "Yes",
                            value: "Yes"
                        },
                        {
                            id: "allPresent",
                            label: "No",
                            value: "No"
                        }
                    ]
                },
                {
                    name: "missingTeethDetails",
                    label: "Indicate the missing teeth - optional",
                    value: dataState.dental.missingTeethDetails,
                }
            ]
        },
        {
            title: "Wisdom Teeth",
            instructions: "Comment on your overall treatment objectives or goals:",
            layout: "layer",
            type: "treatment",
            group: "dental",
            path: dataState.dental,
            options: [
                {
                    name: "wisdomTeeth",
                    label: "Does the patient have missing teeth?",
                    data: dataState.dental.wisdomTeeth,
                    list: [
                        {
                            id: "present",
                            label: "Present",
                            value: "Present"
                        },
                        {
                            id: "impacted",
                            label: "Impacted",
                            value: "Impacted"
                        },
                        {
                            id: "extracted",
                            label: "Extracted",
                            value: "Extracted"
                        },
                        {
                            id: "congentiallyMissing",
                            label: "Congentially Missing",
                            value: "Congentially Missing"
                        },
                        {
                            id: "notApplicable",
                            label: "Not Applicable",
                            value: "Not Applicable"
                        }
                    ]
                },
                {
                    name: "wisdomTeethDetails",
                    label: "Indicate which wisdom teeth - optional",
                    value: dataState.dental.wisdomTeethDetails,
                }
            ]
        },
        {
            title: "Dental Measurements",
            instructions: "Input all the following measurements:",
            layout: "wrap",
            type: "calculations",
            group: "dental",
            path: dataState.dental,
            options: [
                {
                    name: "overjet",
                    label: "Overjet",
                    criteria: "mm",
                    value: dataState.dental.overjet,
                },
                {
                    name: "overbite",
                    label: "Overbite",
                    criteria: "%",
                    value: dataState.dental.overbite,
                },
                {
                    name: "maxOpening",
                    label: "Max Opening",
                    criteria: "mm",
                    value: dataState.dental.maxOpening,
                }
            ]
        },
        {
            title: "Space Shortage Calculation",
            instructions: "Input all of the following calculations for space shortage:",
            layout: "wrap",
            type: "calculations",
            group: "spaceShortage",
            path: dataState.spaceShortage,
            options: [
                {
                    name: "urCentral",
                    label: "U/R Central",
                    criteria: "mm",
                    value: dataState.spaceShortage.urCentral,
                },
                {
                    name: "urLateral",
                    label: "U/R Lateral",
                    criteria: "mm",
                    value: dataState.spaceShortage.urLateral,
                },
                {
                    name: "transpalatal",
                    label: "Transpalatal distance",
                    criteria: "mm",
                    value: dataState.spaceShortage.transpalatal,
                },
                {
                    name: "ulCentral",
                    label: "U/L Central",
                    criteria: "mm",
                    value: dataState.spaceShortage.ulCentral,
                },
                {
                    name: "ulLateral",
                    label: "U/L Lateral",
                    criteria: "mm",
                    value: dataState.spaceShortage.ulLateral,
                }
            ]
        },
        {
            title: "Treatment Objectives",
            instructions: "Comment on your overall treatment objectives or goals:",
            layout: "layer",
            type: "treatment",
            group: "treatment",
            path: dataState.treatment,
            options: [
                {
                    name: "type",
                    label: "Treatment Type",
                    data: dataState.treatment.type,
                    list: [
                        {
                            id: "fixedFunctional",
                            label: "Fixed / Functional",
                            value: "Fixed / Functional"
                        },
                        {
                            id: "fixed",
                            label: "Fixed",
                            value: "Fixed"
                        }
                    ]
                },
                {
                    name: "objective",
                    label: "Your objective",
                    value: dataState.treatment.objective,
                }
            ]
        },
        {
            title: "Upload Dental Records",
            instructions: "Not sure what to upload? View records required",
            layout: "offset",
            type: "upload",
            options: [
                {
                    id: "ceph",
                    name: "cephalometric",
                    label: "I would like a cephalometric tracing completed ($50)",
                    value: dataState.cephalometric
                }
            ]
        },
        {
            title: "Confirm Evaluation Agreement",
            instructions: "Review our terms and policy before agreeing:",
            layout: "layers",
            type: "review",
            options: [
                {
                    id: "confirm",
                    name: "confirmation",
                    label: "I agree to the ",
                    value: dataState.confirmation,
                    link: "terms of service"
                }
            ]
        },
    ]

    const length = questions.length;
    const [ currentQuestion, setCurrentQuestion ] = useState(0);
    const [ question, setQuestion ] = useState(questions[currentQuestion]);

    useEffect(() => {
        setQuestion(questions[currentQuestion])
    }, [dataState]);

    function next() {
        let current = currentQuestion
        // If the current question is length of questions array, then add one on "next" button click
        current = current >= (length - 1) ? length : current + 1
        setCurrentQuestion(current)
        setQuestion(questions[current])
    }

    function previous() {
        let current = currentQuestion
        // If the current question is 0 or 1, then add one on "next" button click
        current = current <= 0 ? 1 : current - 1
        setCurrentQuestion(current)
        setQuestion(questions[current])
    }
    
    return (
        <QuestionContext.Provider value={{ question, currentQuestion, previous, next, length }}>
            {children}
        </QuestionContext.Provider>
    )
}

/*
import React, { useContext, useState, createContext, useEffect } from 'react';
import { useEvaluation } from "./EvaluationProvider";

// Custom Step Management Hook
const QuestionContext = createContext(0);

export function useQuestion() {
    return useContext(QuestionContext)
}

// Handles Form Step Changes
export function QuestionProvider({ children }) {
    const { dataState } = useEvaluation();
    const repeatedList = [
        {
            id: "high",
            label: "High",
            value: "High"
        },
        {
            id: "low",
            label: "Low",
            value: "Low"
        },
        {
            id: "normal",
            label: "Normal",
            value: "Normal"
        }
    ]
    
    const questions = [
        {
            title: "Case Type",
            instructions: "Select the type of case we are looking at:",
            layout: "duo",
            type: "radios",
            name: "caseType",
            callback: "STORE_DATA",
            data: dataState.caseType,
            options: [
                {
                    id: "newCase",
                    label: "New Case",
                    value: "New Case",
                    details: "$150"
                },
                {
                    id: "ongoingCase",
                    label: "Ongoing Case",
                    value: "Ongoing Case",
                    details: "$100"
                },
            ]
        },
        {
            title: "Patient Info",
            instructions: "Input all of the following information regarding the patient:",
            layout: "wrap",
            type: "info",
            group: "patientInfo",
            path: dataState.patientInfo,
            options: [
                {
                    name: "patient",
                    label: "Full Name",
                    callback: "STORE_DATA",
                    check: "CHECK_TEXT",
                    type: "text",
                    value: dataState.patient,
                },
                {
                    name: "dob",
                    label: "Date of Birth",
                    callback: "STORE_AS_NESTED_DATA",
                    check: "CHECK_TEXT",
                    type: "date",
                    value: dataState.patientInfo.dob,
                },
                {
                    name: "height",
                    label: "Height",
                    callback: "STORE_AS_NESTED_DATA",
                    check: "CHECK_NUMBER",
                    type: "number",
                    criteria: "cm",
                    value: dataState.patientInfo.height,
                },
                {
                    name: "gender",
                    label: "Gender",
                    data: dataState.patientInfo.gender,
                    list: [
                        {
                            id: "male",
                            label: "Male",
                            value: "Male"
                        },
                        {
                            id: "female",
                            label: "Female",
                            value: "Female"
                        },
                    ]
                },
            ]
        },
        {
            title: "Patient Ethnicity",
            instructions: "Select the patients age from the calendar dropdown:",
            layout: "duo",
            type: "ethnicity",
            data: dataState.patientInfo.ethnicity,
            group: "patientInfo",
            name: "ethnicity",
            path: dataState.patientInfo,
            options: [
                {
                    list: [
                        {
                            id: "americanIndianOrAlaskaNative",
                            label: "American Indian or Alaska Native",
                            value: "American Indian or Alaska Native"
                        },
                        {
                            id: "asian",
                            label: "Asian",
                            value: "Asian"
                        },
                        {
                            id: "black",
                            label: "Black or African American",
                            value: "Black or African American"
                        },
                        {
                            id: "hispanicOrLatino",
                            label: "Hispanic or Latino",
                            value: "Hispanic or Latino"
                        },
                        {
                            id: "hawaiianNativeOrPacificIslander",
                            label: "Native Hawaiian or Other Pacific Islander",
                            value: "Native Hawaiian or Other Pacific Islander",
                        },
                        {
                            id: "white",
                            label: "White",
                            value: "White"
                        },
                        {
                            id: "otherRace",
                            label: "Other",
                            value: "Other",
                            field: true
                        }
                    ]
                }
            ]
        },
        {
            title: "Patient Habits",
            instructions: "Select all applicable habits the patient exhibits:",
            layout: "table",
            type: "checkbox",
            group: "patientHabits",
            path: dataState.patientHabits,
            options: [
                {
                    name: "mouthBreather",
                    label: "Mouth Breather",
                    details: "Feature",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.patientHabits.mouthBreather,
                },
                {
                    name: "snores",
                    label: "Snores",
                    details: "Habit",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.patientHabits.snores,
                },
                {
                    name: "tongueThrusts",
                    label: "Tongue Thrusts",
                    details: "Habit",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.patientHabits.tongueThrusts,
                },
                {
                    name: "thumbSucking",
                    label: "Thumb Sucking",
                    details: "Habit",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.patientHabits.thumbSucking,
                },
                {
                    name: "none",
                    label: "None",
                    callback: "STORE_AS_EMPTY_NESTED_COLLECTION_DATA",
                    value: dataState.patientHabits.none,
                },
            ]
        },
        {
            title: "Patient Underlying Issues",
            instructions: "Select all applicable trauma the patient has:",
            layout: "triple",
            type: "checkbox",
            group: "underlyingIssues",
            path: dataState.underlyingIssues,
            options: [
                {
                    name: "trauma",
                    label: "Trauma",
                    details: "MVA and/or sports",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.underlyingIssues.trauma,
                },
                {
                    name: "headaches",
                    label: "Headaches",
                    details: "",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.underlyingIssues.headaches,
                },
                {
                    name: "none",
                    label: "None",
                    details: "",
                    callback: "STORE_AS_EMPTY_NESTED_COLLECTION_DATA",
                    value: dataState.underlyingIssues.none,
                }
            ]
        },
        {
            title: "Patient Motivation",
            instructions: "Rate all of the following classifications regarding the patient:",
            layout: "triple",
            type: "radios",
            name: "motivation",
            callback: "STORE_AS_NESTED_DATA",
            data: dataState.patientInfo.motivation,
            group: "patientInfo",
            path:  dataState.patientInfo,
            options: [
                {
                    id: "motivationLow",
                    label: "Low",
                    value: "Low",
                },
                {
                    id: "motivationAverage",
                    label: "Average",
                    value: "Anterior",
                },
                {
                    id: "motivationHigh",
                    label: "High",
                    value: "High",
                }
            ]
        },
        {
            title: "Patient Hygiene",
            instructions: "Rate all of the following classifications regarding the patient:",
            layout: "triple",
            type: "radios",
            name: "hygiene",
            callback: "STORE_AS_NESTED_DATA",
            data: dataState.patientInfo.hygiene,
            group: "patientInfo",
            path:  dataState.patientInfo,
            options: [
                {
                    id: "hygienePoor",
                    label: "Poor",
                    value: "Poor",
                },
                {
                    id: "hygieneFair",
                    label: "Fair",
                    value: "Fair",
                },
                {
                    id: "hygieneExcellent",
                    label: "Excellent",
                    value: "Excellent",
                }
            ]
        },
        {
            title: "Patient Finances",
            instructions: "Rate all of the following classifications regarding the patient:",
            layout: "triple",
            type: "radios",
            name: "finances",
            callback: "STORE_AS_NESTED_DATA",
            data: dataState.patientInfo.finances,
            group: "patientInfo",
            path:  dataState.patientInfo,
            options: [
                {
                    id: "financesLimited",
                    label: "Limited",
                    value: "Limited",
                },
                {
                    id: "financesModerate",
                    label: "Moderate",
                    value: "Moderate",
                },
                {
                    id: "financesExcellent",
                    label: "Excellent",
                    value: "Excellent",
                }
            ]
        },
        {
            title: "Treatment Concerns",
            instructions: "Comment on any treatment concerns:",
            layout: "stack",
            type: "concerns",
            group: "treatment",
            path: dataState.treatment,
            options: [
                {
                    name: "patientConcerns",
                    label: "Patient Concerns",
                    value: dataState.treatment.patientConcerns,
                },
                {
                    name: "parentConcerns",
                    label: "Parent Concerns - optional",
                    value: dataState.treatment.parentConcerns,
                },
            ]
        },
        {
            title: "Model Classification",
            instructions: "Select the class type for the patients' left side:",
            layout: "split-alt",
            type: "multi",
            group: "dental",
            path: dataState.dental,
            callback: "STORE_AS_NESTED_DATA",
            options: [
                {
                    name: "modelLeft",
                    category: "Patient Left",
                    data: dataState.dental.modelLeft,
                    list: [
                        {
                            id: "leftClassI",
                            label: "Class I",
                            value: "Class I"
                        },
                        {
                            id: "leftHalfTooth",
                            label: "Half Tooth",
                            value: "Class II: Half Tooth",
                            details: "Class II"
                        },
                        {
                            id: "leftFullTooth",
                            label: "Full Tooth",
                            value: "Class II: Full Tooth",
                            details: "Class II"
                        },
                        {
                            id: "leftClassIII",
                            label: "Class III",
                            value: "Class III"
                        }
                    ]
                },
                {
                    name: "modelRight",
                    category: "Patient Right",
                    data: dataState.dental.modelRight,
                    list: [
                        {
                            id: "rightClassI",
                            label: "Class I",
                            value: "Class I"
                        },
                        {
                            id: "rightHalfTooth",
                            label: "Half Tooth",
                            value: "Class II: Half Tooth",
                            details: "Class II"
                        },
                        {
                            id: "rightFullTooth",
                            label: "Full Tooth",
                            value: "Class II: Full Tooth",
                            details: "Class II"
                        },
                        {
                            id: "rightClassIII",
                            label: "Class III",
                            value: "Class III"
                        },
                    ]
                }
            ]
        },
        {
            title: "Dental Measurements",
            instructions: "Input all the following measurements:",
            layout: "wrap",
            type: "calculations",
            group: "dental",
            path: dataState.dental,
            options: [
                {
                    name: "overjet",
                    label: "Overjet",
                    criteria: "mm",
                    value: dataState.dental.overjet,
                },
                {
                    name: "overbite",
                    label: "Overbite",
                    criteria: "%",
                    value: dataState.dental.overbite,
                },
                {
                    name: "maxOpening",
                    label: "Max Opening",
                    criteria: "mm",
                    value: dataState.dental.maxOpening,
                }
            ]
        },
        {
            title: "Space Shortage Calculation",
            instructions: "Input all of the following calculations for space shortage:",
            layout: "wrap",
            type: "calculations",
            group: "spaceShortage",
            path: dataState.spaceShortage,
            options: [
                {
                    name: "urCentral",
                    label: "U/R Central",
                    criteria: "mm",
                    value: dataState.spaceShortage.urCentral,
                },
                {
                    name: "urLateral",
                    label: "U/R Lateral",
                    criteria: "mm",
                    value: dataState.spaceShortage.urLateral,
                },
                {
                    name: "transpalatal",
                    label: "Transpalatal distance",
                    criteria: "mm",
                    value: dataState.spaceShortage.transpalatal,
                },
                {
                    name: "ulCentral",
                    label: "U/L Central",
                    criteria: "mm",
                    value: dataState.spaceShortage.ulCentral,
                },
                {
                    name: "ulLateral",
                    label: "U/L Lateral",
                    criteria: "mm",
                    value: dataState.spaceShortage.ulLateral,
                }
            ]
        },
        {
            title: "Facial Features",
            instructions: "Select all applicable facial features of the patient:",
            layout: "table",
            type: "checkbox",
            group: "features",
            path: dataState.features,
            options: [
                {
                    name: "eyeDarkness",
                    label: "Eye Darkness",
                    details: "Feature",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.features.eyeDarkness,
                },
                {
                    name: "nostrilsDeveloped",
                    label: "Nostrils Developed",
                    details: "Feature",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.features.nostrilsDeveloped
                },
                {
                    name: "weakLips",
                    label: "Weak Lips",
                    details: "Feature",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.features.weakLips
                },
                {
                    name: "poorLipSeal",
                    label: "Poor Lip Seal",
                    details: "Feature",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.features.poorLipSeal
                },
                {
                    name: "none",
                    label: "None",
                    callback: "STORE_AS_EMPTY_NESTED_COLLECTION_DATA",
                    value: dataState.features.none
                }
            ]
        },
        {
            title: "Joint Clicking",
            instructions: "Select all applicable areas the patient experiences clicking:",
            layout: "triple",
            type: "checkbox",
            group: "clicking",
            path: dataState.clicking,
            options: [
                {
                    name: "left",
                    label: "Left",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.clicking.left
                },
                {
                    name: "right",
                    label: "Right",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.clicking.right
                },
                {
                    name: "none",
                    label: "None",
                    callback: "STORE_AS_EMPTY_NESTED_COLLECTION_DATA",
                    value: dataState.clicking.none
                }
            ]
        },
        {
            title: "Joint Popping",
            instructions: "Select all applicable areas the patient experiences popping:",
            layout: "triple",
            type: "checkbox",
            group: "popping",
            path: dataState.popping,
            options: [
                {
                    name: "left",
                    label: "Left",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.popping.left
                },
                {
                    name: "right",
                    label: "Right",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.popping.right
                },
                {
                    name: "none",
                    label: "None",
                    callback: "STORE_AS_EMPTY_NESTED_COLLECTION_DATA",
                    value: dataState.popping.none
                }
            ]
        },
        {
            title: "Joint Locking",
            instructions: "Select all applicable areas the patient experiences locking:",
            layout: "triple",
            type: "checkbox",
            group: "locking",
            path: dataState.locking,
            options: [
                {
                    name: "left",
                    label: "Left",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.locking.left
                },
                {
                    name: "right",
                    label: "Right",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.locking.right
                },
                {
                    name: "none",
                    label: "None",
                    callback: "STORE_AS_EMPTY_NESTED_COLLECTION_DATA",
                    value: dataState.locking.none
                }
            ]
        },
        {
            title: "Joint Range of Motion",
            instructions: "Draw the patient's joint range of motion below:",
            layout: "none",
            type: "draw"
        },
        {
            title: "Facial Profile",
            instructions: "Select the type of facial profile the patient has:",
            layout: "triple",
            type: "radios",
            name: "profile",
            callback: "STORE_AS_NESTED_DATA",
            data: dataState.facial.profile,
            group: "facial",
            path: dataState.facial,
            options: [
                {
                    id: "facialClassI",
                    label: "Class I",
                    details: "This is info about...",
                    value: "Class I",
                },
                {
                    id: "facialClassII",
                    label: "Class II",
                    details: "This is info about...",
                    value: "Class II",
                },
                {
                    id: "facialClassIII",
                    label: "Class III",
                    details: "This is info about...",
                    value: "Class III",
                }
            ]
        },
        {
            title: "Facial Height",
            instructions: "Select the type of facial height the patient has:",
            layout: "triple",
            type: "radios",
            name: "height",
            callback: "STORE_AS_NESTED_DATA",
            data: dataState.facial.height,
            group: "facial",
            path: dataState.facial,
            options: [
                {
                    id: "facialLong",
                    label: "Long",
                    details: "This is info about...",
                    value: "Long",
                },
                {
                    id: "facialShort",
                    label: "Short",
                    details: "This is info about...",
                    value: "Short",
                },
                {
                    id: "facialIdeal",
                    label: "Ideal",
                    details: "This is info about...",
                    value: "Ideal",
                }
            ]
        },
        {
            title: "Head Posture",
            instructions: "Select the applicable for each side of the patient:",
            layout: "duo",
            type: "radios",
            name: "headPosture",
            callback: "STORE_AS_NESTED_DATA",
            data: dataState.cranial.headPosture,
            group: "cranial",
            path: dataState.cranial,
            options: [
                {
                    id: "forward",
                    label: "Forward",
                    value: "Forward",
                },
                {
                    id: "normal",
                    label: "Normal",
                    value: "Normal",
                },
            ]
        },
        {
            title: "Eye Level",
            instructions: "Select the applicable for each side of the patient:",
            layout: "split",
            type: "multi",
            group: "eyeLevel",
            path: dataState.eyeLevel,
            callback: "STORE_AS_NESTED_DATA",
            options: [
                {
                    name: "left",
                    category: "Patient Left",
                    data: dataState.eyeLevel.left,
                    list: repeatedList
                },
                {
                    name: "right",
                    category: "Patient Right",
                    data: dataState.eyeLevel.right,
                    list: repeatedList
                }
            ]
        },
        {
            title: "Ear Level",
            instructions: "Select the applicable for each side of the patient:",
            layout: "split",
            type: "multi",
            group: "earLevel",
            path: dataState.earLevel,
            callback: "STORE_AS_NESTED_DATA",
            options: [
                {
                    name: "left",
                    category: "Patient Left",
                    data: dataState.earLevel.left,
                    list: repeatedList
                },
                {
                    name: "right",
                    category: "Patient Right",
                    data: dataState.earLevel.right,
                    list: repeatedList
                }
            ]
        },
        {
            title: "Shoulder Level",
            instructions: "Select the applicable for each side of the patient:",
            layout: "split",
            type: "multi",
            group: "shoulderLevel",
            path: dataState.shoulderLevel,
            callback: "STORE_AS_NESTED_DATA",
            options: [
                {
                    name: "left",
                    category: "Patient Left",
                    data: dataState.shoulderLevel.left,
                    list: repeatedList
                },
                {
                    name: "right",
                    category: "Patient Right",
                    data: dataState.shoulderLevel.right,
                    list: repeatedList
                }
            ]
        },
        {
            title: "Dental Arches",
            instructions: "Select the applicable for each side of the patient:",
            layout: "split",
            type: "multi",
            group: "dentalArches",
            path: dataState.dentalArches,
            callback: "STORE_AS_NESTED_DATA",
            options: [
                {
                    name: "left",
                    category: "Patient Left",
                    data: dataState.dentalArches.left,
                    list: repeatedList
                },
                {
                    name: "right",
                    category: "Patient Right",
                    data: dataState.dentalArches.right,
                    list: repeatedList
                }
            ]
        },
        {
            title: "Mandibular Plane Angle",
            instructions: "Select the type of mandibular plane angle the patient has:",
            layout: "duo",
            type: "radios",
            name: "mandibularPlane",
            callback: "STORE_AS_NESTED_DATA",
            data: dataState.cranial.mandibularPlane,
            group: "cranial",
            path: dataState.cranial,
            options: [
                {
                    id: "steep",
                    label: "Steep",
                    value: "Steep"
                },
                {
                    id: "normal",
                    label: "Normal",
                    value: "Normal"
                }
            ]
        },
        {
            title: "Growth Direction",
            instructions: "Select the type of growth direction the patient has:",
            layout: "triple",
            type: "radios",
            name: "growthDirection",
            callback: "STORE_AS_NESTED_DATA",
            data: dataState.cranial.growthDirection,
            group: "cranial",
            path: dataState.cranial,
            options: [
                {
                    id: "deep",
                    label: "Deep",
                    value: "Deep",
                },
                {
                    id: "open",
                    label: "Open",
                    value: "Open",
                },
                {
                    id: "normal",
                    label: "Normal",
                    value: "Normal",
                }
            ]
        },
        {
            title: "Maxilla Position",
            instructions: "Select the type of maxilla position the patient has:",
            layout: "triple",
            type: "radios",
            name: "maxillaPosition",
            callback: "STORE_AS_NESTED_DATA",
            data: dataState.cranial.maxillaPosition,
            group: "cranial",
            path: dataState.cranial,
            options: [
                {
                    id: "posterior",
                    label: "Posterior",
                    value: "Posterior",
                },
                {
                    id: "anterior",
                    label: "Anterior",
                    value: "Anterior",
                },
                {
                    id: "normal",
                    label: "Normal",
                    value: "Normal",
                }
            ]
        },
        {
            title: "Treatment Objectives",
            instructions: "Comment on your overall treatment objectives or goals:",
            layout: "layer",
            type: "treatment",
            group: "treatment",
            path: dataState.treatment,
            options: [
                {
                    name: "type",
                    label: "Treatment Type",
                    data: dataState.treatment.type,
                    list: [
                        {
                            id: "fixedFunctional",
                            label: "Fixed / Functional",
                            value: "Fixed / Functional"
                        },
                        {
                            id: "fixed",
                            label: "Fixed",
                            value: "Fixed"
                        }
                    ]
                },
                {
                    name: "objective",
                    label: "Your objective",
                    value: dataState.treatment.objective,
                }
            ]
        },
        {
            title: "Upload Dental Records",
            instructions: "Not sure what to upload? View records required",
            layout: "offset",
            type: "upload",
            options: [
                {
                    id: "ceph",
                    name: "cephalometric",
                    label: "I would like a cephalometric tracing completed ($50)",
                    value: dataState.cephalometric
                }
            ]
        },
        {
            title: "Confirm Evaluation Agreement",
            instructions: "Review our terms and policy before agreeing:",
            layout: "layers",
            type: "review",
            options: [
                {
                    id: "confirm",
                    name: "confirmation",
                    label: "I agree to the ",
                    value: dataState.confirmation,
                    link: "terms of service"
                }
            ]
        },
    ]

    const length = questions.length;
    const [ currentQuestion, setCurrentQuestion ] = useState(0);
    const [ question, setQuestion ] = useState(questions[currentQuestion]);

    useEffect(() => {
        setQuestion(questions[currentQuestion])
    }, [dataState]);

    function next() {
        let current = currentQuestion
        // If the current question is length of questions array, then add one on "next" button click
        current = current >= (length - 1) ? length : current + 1
        setCurrentQuestion(current)
        setQuestion(questions[current])
    }

    function previous() {
        let current = currentQuestion
        // If the current question is 0 or 1, then add one on "next" button click
        current = current <= 0 ? 1 : current - 1
        setCurrentQuestion(current)
        setQuestion(questions[current])
    }
    
    return (
        <QuestionContext.Provider value={{ question, currentQuestion, previous, next, length }}>
            {children}
        </QuestionContext.Provider>
    )
}

*/