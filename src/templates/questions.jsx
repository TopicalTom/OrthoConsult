const questions = (props) => {
    const { dataState, currentUser } = props

    return [
        {
            title: "Case Type",
            instructions: "Select the case type you are submitting:",
            layout: "duo",
            type: "radios",
            name: "caseType",
            callback: "STORE_DATA",
            data: dataState.caseType,
            options: [
                {
                    id: "newCase",
                    label: "New Case ($150)",
                    value: "New Case",
                    details: "Select if you haven't already opened a case with us for this patient"
                },
                {
                    id: "ongoingCase",
                    label: "Ongoing Case ($100)",
                    value: "Ongoing Case",
                    details: "Select if you are continuing treatment for a patient"
                },
            ]
        },
        {
            title: "Patient Info",
            instructions: "Provide each of the following:",
            layout: "new",
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
                    name: "birthday",
                    label: "Date of Birth",
                    callback: "STORE_AS_NESTED_DATA",
                    check: "CHECK_TEXT",
                    type: "text",
                    placeholder: "MM/YY/DD",
                    value: dataState.patientInfo.birthday,
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
                {
                    name: "ethnicity",
                    label: "Ethnicity",
                    data: dataState.patientInfo.ethnicity,
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
                            label: "Native Hawaiian or Pacific Islander",
                            value: "Native Hawaiian or Pacific Islander",
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
                        }
                    ]
                }
            ]
        },
        {
            title: "Patient Habits",
            instructions: "Select all applicable from the following:",
            layout: "table",
            type: "checkbox",
            group: "patientHabits",
            path: dataState.patientHabits,
            options: [
                {
                    name: "mouthBreather",
                    label: "Mouth Breather",
                    details: "",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.patientHabits.mouthBreather,
                },
                {
                    name: "snores",
                    label: "Snores",
                    details: "",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.patientHabits.snores,
                },
                {
                    name: "tongueThrusts",
                    label: "Tongue Thrusts",
                    details: "",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.patientHabits.tongueThrusts,
                },
                {
                    name: "thumbSucking",
                    label: "Thumb Sucking",
                    details: "",
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
            title: "Patient Dental Hygiene",
            instructions: "Select one of the following:",
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
                    details: "Does not floss and brush regularily",
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
            instructions: "Select one of the following:",
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
                    details: "Patient does not seem interested in treatment",
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
                    details: "Patient is highly motivated to receive treatment",
                    value: "High",
                }
            ]
        },
        {
            title: "Patient Finances",
            instructions: "Select one of the following:",
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
                    details: "Patient has no dental coverage",
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
            title: "Patient Underlying Issues",
            instructions: "Select all applicable from the following:",
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
                    details: "and/or migraines",
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
            instructions: "Indicate if the patient is using pain medications to alleviate their underlying issues:",
            layout: "layer",
            type: "treatment",
            group: "treatment",
            path: dataState.treatment,
            options: [
                {
                    name: "medicated",
                    data: dataState.treatment.medicated,
                    list: [
                        {
                            id: "no",
                            label: "No",
                            value: "No"
                        },
                        {
                            id: "yes",
                            label: "Yes, (Explain below)",
                            value: "Yes"
                        },
                    ]
                },
                {
                    name: "medicationDetails",
                    label: "Additonal information:",
                    placeholder: "i.e. medication and duration",
                    value: dataState.treatment.medicationDetails,
                }
            ]
        },
        {
            title: "Patient Family History",
            instructions: "Indicate if there is history of Dental Class III in the family:",
            layout: "layer",
            type: "treatment",
            group: "dental",
            path: dataState.dental,
            options: [
                {
                    name: "history",
                    data: dataState.dental.history,
                    list: [
                        {
                            id: "no",
                            label: "No",
                            value: "No"
                        },
                        {
                            id: "yes",
                            label: "Yes, (Explain below)",
                            value: "Yes"
                        },
                    ]
                },
                {
                    name: "historyDetails",
                    label: "Additonal information:",
                    placeholder: "",
                    value: dataState.dental.historyDetails,
                }
            ]
        },
        {
            title: "Patient Concerns",
            instructions: "Explain the treatment request(s):",
            layout: "stack",
            type: "concerns",
            group: "treatment",
            path: dataState.treatment,
            options: [
                {
                    name: "patientConcerns",
                    label: "Patient's Concerns",
                    value: dataState.treatment.patientConcerns,
                },
                {
                    name: "guardianConcerns",
                    label: "Guardian's Concerns (optional)",
                    placeholder: "",
                    value: dataState.treatment.guardianConcerns,
                },
            ]
        },
        {
            title: "Facial Profile",
            instructions: "Select one of the following:",
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
                    details: "Ideal face and harmonious relationship of the teeth and jaws",
                    value: "Class I",
                },
                {
                    id: "facialClassII",
                    label: "Class II",
                    details: "Recessed lower jaw with protruding upper lip",
                    value: "Class II",
                },
                {
                    id: "facialClassIII",
                    label: "Class III",
                    details: "Underdevelopment of the upper jaw and protruding lower jaw",
                    value: "Class III",
                }
            ]
        },
        {
            title: "Facial Height",
            instructions: "Select one of the following:",
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
                    details: "Face has a long lower 1/3",
                    value: "Long",
                },
                {
                    id: "facialShort",
                    label: "Short",
                    details: "Face has a short lower 1/3",
                    value: "Short",
                },
                {
                    id: "facialIdeal",
                    label: "Ideal",
                    details: "Face is held in a 1/3 relationship",
                    value: "Ideal",
                }
            ]
        },
        {
            title: "Facial Features",
            instructions: "Select all applicable from the following:",
            layout: "table",
            type: "checkbox",
            group: "features",
            path: dataState.features,
            options: [
                {
                    name: "constrictedNostrils",
                    label: "Constricted Nostrils",
                    details: "",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.features.constrictedNostrils
                },
                {
                    name: "eyeDarkness",
                    label: "Darkness Under Eyes",
                    details: "",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.features.eyeDarkness,
                },
                {
                    name: "weakLips",
                    label: "Weak Lips",
                    details: "",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.features.weakLips
                },
                {
                    name: "poorLipSeal",
                    label: "Poor Lip Seal",
                    details: "",
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
            instructions: "Select one of the following:",
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
                    label: "Forward Head Posture",
                    value: "Forward Head Posture",
                },
                {
                    id: "ideal",
                    label: "Ideal",
                    value: "Ideal Head Posture",
                },
            ]
        },
        {
            title: "Eye Asymmetry",
            instructions: "Select one of the following:",
            layout: "triple",
            type: "radios",
            name: "eyeAsymmetry",
            callback: "STORE_AS_NESTED_DATA",
            data: dataState.cranial.eyeAsymmetry,
            group: "cranial",
            path: dataState.cranial,
            options: [
                {
                    id: "patientRight",
                    label: "Right Cant",
                    details: "Patient's right eye is low relative to their left",
                    value: "Patient Right",
                },
                {
                    id: "patientLeft",
                    label: "Left Cant",
                    details: "Patient's left eye is low relative to their right",
                    value: "Patient Left",
                },
                {
                    id: "none",
                    label: "None",
                    details: "Both are level",
                    value: "None",
                }
            ]
        },
        {
            title: "Ear Asymmetry",
            instructions: "Select one of the following:",
            layout: "triple",
            type: "radios",
            name: "earAsymmetry",
            callback: "STORE_AS_NESTED_DATA",
            data: dataState.cranial.earAsymmetry,
            group: "cranial",
            path: dataState.cranial,
            options: [
                {
                    id: "patientRight",
                    label: "Right Cant",
                    details: "Patient's right ear is low relative to their left",
                    value: "Patient Right",
                },
                {
                    id: "patientLeft",
                    label: "Left Cant",
                    details: "Patient's left ear is low relative to their right",
                    value: "Patient Left",
                },
                {
                    id: "none",
                    label: "None",
                    details: "Both are level",
                    value: "None",
                }
            ]
        },
        {
            title: "Shoulder Asymmetry",
            instructions: "Select one of the following:",
            layout: "triple",
            type: "radios",
            name: "shoulderAsymmetry",
            callback: "STORE_AS_NESTED_DATA",
            data: dataState.cranial.shoulderAsymmetry,
            group: "cranial",
            path: dataState.cranial,
            options: [
                {
                    id: "patientRight",
                    label: "Right Cant",
                    details: "Patient's right shoulder is low relative to their left",
                    value: "Patient Right",
                },
                {
                    id: "patientLeft",
                    label: "Left Cant",
                    details: "Patient's left shoulder is low relative to their right",
                    value: "Patient Left",
                },
                {
                    id: "none",
                    label: "None",
                    details: "Both are level",
                    value: "None",
                }
            ]
        },
        {
            title: "Maxilla Asymmetry",
            instructions: "Select all applicable from the following:",
            layout: "table",
            type: "checkbox",
            group: "maxillaAsymmetry",
            path: dataState.maxillaAsymmetry,
            options: [
                {
                    name: "patientRight",
                    label: "Right Cant",
                    details: "Patient's maxilla is lower on their right side",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.maxillaAsymmetry.patientRight,
                },
                {
                    name: "patientLeft",
                    label: "Left Cant",
                    details: "Patient's maxilla is lower on their left side",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.maxillaAsymmetry.patientLeft,
                },
                {
                    name: "upward",
                    label: "Upward",
                    details: "",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.maxillaAsymmetry.upward,
                },
                {
                    name: "downward",
                    label: "Downward",
                    details: "",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.maxillaAsymmetry.downward,
                },
                {
                    name: "none",
                    label: "None",
                    callback: "STORE_AS_EMPTY_NESTED_COLLECTION_DATA",
                    value: dataState.maxillaAsymmetry.none,
                }
            ]
        },
        {
            title: "Maxilla Position",
            instructions: "Select one of the following:",
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
                    id: "ideal",
                    label: "Ideal",
                    value: "Ideal",
                }
            ]
        },
        {
            title: "Mandibular Plane Angle",
            instructions: "Select one of the following:",
            layout: "triple",
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
                    details: "High angle",
                    value: "Steep",
                },
                {
                    id: "low",
                    label: "Low",
                    details: "Low angle",
                    value: "Low",
                },
                {
                    id: "ideal",
                    label: "Ideal",
                    value: "Ideal",
                }
            ]
        },
        {
            title: "Growth Direction",
            instructions: "Select one of the following:",
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
                    details: "Counter-clockwise",
                    value: "Deep",
                },
                {
                    id: "open",
                    label: "Open",
                    details: "Clockwise",
                    value: "Open",
                },
                {
                    id: "ideal",
                    label: "Ideal",
                    value: "Ideal",
                }
            ]
        },
        {
            title: "Joint Clicking",
            instructions: "Select all applicable from the following:",
            layout: "triple",
            type: "checkbox",
            group: "clicking",
            path: dataState.clicking,
            options: [
                {
                    name: "right",
                    label: "Patient Right",
                    details: "Experiences clicking on their right",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.clicking.right,
                },
                {
                    name: "left",
                    label: "Patient Left",
                    details: "Experiences clicking on their left",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.clicking.left,
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
            instructions: "Select all applicable from the following:",
            layout: "triple",
            type: "checkbox",
            group: "popping",
            path: dataState.popping,
            options: [
                {
                    name: "right",
                    label: "Patient Right",
                    details: "Experiences popping on their right",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.popping.right,
                },
                {
                    name: "left",
                    label: "Patient Left",
                    details: "Experiences popping on their left",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.popping.left,
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
            instructions: "Select all applicable from the following:",
            layout: "triple",
            type: "checkbox",
            group: "locking",
            path: dataState.locking,
            options: [
                {
                    name: "right",
                    label: "Patient Right",
                    details: "Experiences locking on their right",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.locking.right,
                },
                {
                    name: "left",
                    label: "Patient Left",
                    details: "Experiences locking on their left",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.locking.left,
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
            title: "TMJ Range of Motion",
            instructions: "Draw the patient's range of motion upon opening and closing below:",
            layout: "none",
            type: "draw"
        },
        {
            title: "Dental Measurements",
            instructions: "Input each of the following:",
            layout: "wrap-row",
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
                    name: "maxOpening",
                    label: "Max Opening",
                    criteria: "mm",
                    value: dataState.dental.maxOpening,
                },
                {
                    name: "overbite",
                    label: "Overbite",
                    criteria: "%",
                    value: dataState.dental.overbite,
                },
            ]
        },
        {
            title: "Centric Relationship (Patient Right)",
            instructions: "Select one of the following for this quadrant:",
            layout: "table",
            type: "radios",
            name: "modelRight",
            callback: "STORE_AS_NESTED_DATA",
            data: dataState.dental.modelRight,
            group: "dental",
            path: dataState.dental,
            options: [
                {
                    id: "classI",
                    label: "Class I",
                    value: "Class I",
                },
                {
                    id: "classIIHalfTooth",
                    label: "Class II: Half Tooth",
                    details: "",
                    value: "Class II: Half Tooth",
                },
                {
                    id: "classIIFullTooth",
                    label: "Class II: Full Tooth",
                    details: "",
                    value: "Class II: Full Tooth",
                },
                {
                    id: "classIIIHalfTooth",
                    label: "Class III: Half Tooth",
                    details: "",
                    value: "Class III: Half Tooth",
                },
                {
                    id: "classIIIFullTooth",
                    label: "Class III: Full Tooth",
                    details: "",
                    value: "Class III: Full Tooth",
                },
            ]
        },
        {
            title: "Centric Relationship (Patient Left)",
            instructions: "Select one of the following for this quadrant:",
            layout: "table",
            type: "radios",
            name: "modelLeft",
            callback: "STORE_AS_NESTED_DATA",
            data: dataState.dental.modelLeft,
            group: "dental",
            path: dataState.dental,
            options: [
                {
                    id: "classI",
                    label: "Class I",
                    value: "Class I",
                },
                {
                    id: "classIIHalfTooth",
                    label: "Class II: Half Tooth",
                    details: "",
                    value: "Class II: Half Tooth",
                },
                {
                    id: "classIIFullTooth",
                    label: "Class II: Full Tooth",
                    details: "",
                    value: "Class II: Full Tooth",
                },
                {
                    id: "classIIIHalfTooth",
                    label: "Class III: Half Tooth",
                    details: "",
                    value: "Class III: Half Tooth",
                },
                {
                    id: "classIIIFullTooth",
                    label: "Class III: Full Tooth",
                    details: "",
                    value: "Class III: Full Tooth",
                },
            ]
        },
        {
            title: "Occlusion Hindrances",
            instructions: 'Select all applicable from the following, when dental casts are held in "as if" Class I:',
            layout: "table",
            type: "checkbox",
            group: "occlusionHindrances",
            path: dataState.occlusionHindrances,
            options: [
                {
                    name: "constriction",
                    label: "Constriction",
                    details: "",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.occlusionHindrances.constriction,
                },
                {
                    name: "incisalDeflection",
                    label: "Incisal Deflection",
                    details: "",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.occlusionHindrances.incisalDeflection
                },
                {
                    name: "crossbite",
                    label: "Crossbite",
                    details: "",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.occlusionHindrances.crossbite
                },
                {
                    name: "openBite",
                    label: "Open Bite",
                    details: "",
                    callback: "STORE_AS_NESTED_COLLECTION_DATA",
                    value: dataState.occlusionHindrances.openBite
                },
                {
                    name: "none",
                    label: "None",
                    callback: "STORE_AS_EMPTY_NESTED_COLLECTION_DATA",
                    value: dataState.occlusionHindrances.none
                }
            ]
        },
        {
            title: "Dental Development",
            instructions: "Indicate if the patient has any development concerns:",
            layout: "layer",
            type: "treatment",
            group: "dental",
            path: dataState.dental,
            options: [
                {
                    name: "development",
                    data: dataState.dental.development,
                    list: [
                        {
                            id: "no",
                            label: "No",
                            value: "No"
                        },
                        {
                            id: "yes",
                            label: "Yes, (Explain below)",
                            value: "Yes"
                        },
                    ]
                },
                {
                    name: "developmentDetails",
                    label: "Additonal information:",
                    value: dataState.dental.developmentDetails,
                    placeholder: "i.e. extracted, congentially missing, size descrepancies, impacted, etc."
                }
            ]
        },
        {
            title: "Space Shortage Calculation",
            instructions: "Input each of the following based on caliper measurements:",
            layout: "wrap-column",
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
                    label: "Transpalatal Disance",
                    help: "Distance between upper 1st bicuspids",
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
            instructions: "Indicate the intended treatment type below:",
            layout: "layer",
            type: "treatment",
            group: "treatment",
            path: dataState.treatment,
            options: [
                {
                    name: "type",
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
                    label: "Comment on your objectives and any additional info:",
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
            title: "Confirm Agreement",
            instructions: `You will receive your invoice by email (${currentUser.email}) after submission:`,
            layout: "layers",
            type: "review",
            options: [
                {
                    id: "confirm",
                    name: "confirmation",
                    label: "I agree to the terms of service and privacy policy",
                    value: dataState.confirmation,
                }
            ]
        },
    ]
}
export default questions;