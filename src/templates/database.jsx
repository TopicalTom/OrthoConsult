const database = { 
    timestamp: new Date().toDateString(),
    caseType: "",
    patient: "",
    patientInfo: {
        dob: "",
        height: "",
        gender: "",
        ethnicity: "",
        motivation: "",
        hygiene: "",
        finances: "",
        medicated: "",
        medicationDetails: ""
    },
    patientHabits: {
        mouthBreather: false,
        snores: false,
        tongueThrust: false,
        thumbSuck: false,
        none: false
    },
    dental: {
        modelLeft: "",
        modelRight: "",
        hereditary: "",
        overjet: null,
        overbite: null,
        maxOpening: "",
        wisdomTeeth: "",
        wisdomTeethDetails: "",
        missingTeeth: "",
        missingTeethDetails: ""
    },
    modelHindrances: {
        constriction: false,
        incisalDeflection: false,
        crossbite: false,
        openBite: false,
        none: false
    },
    spaceShortage: {
        urCentral: null,
        ulCentral: null,
        urLateral: null,
        ulLateral: null,
        transpalatal: null,
    },
    clicking: {
        none: false,
        left: false,
        right: false
    },
    popping: {
        none: false,
        left: false,
        right: false
    },
    locking: {
        none: false,
        left: false,
        right: false
    },
    underlyingIssues: {
        trauma: false,
        headaches: false,
        none: false
    },
    facial: {
        profile: "",
        hereditary: false,
        height: "",
    },
    features: {
        nostrilsDeveloped: false,
        eyeDarkness: false,
        weakLips: false,
        poorLipSeal: false,
        none: false
    },
    earLevel: {
        left: "",
        right: "",
    },
    shoulderLevel: {
        left: "",
        right: ""
    },
    eyeLevel: {
        left: "",
        right: ""
    },
    cranial: {
        headPosture: null,
        mandibularPlane: "",
        growthDirection: "",
        maxillaPosition: "",
        maxillaCant: ""
    },
    treatment: {
        type: "",
        objective: "",
        patientConcerns: "",
        parentConcerns: "",
    },
    cephalometric: false,
    confirmation: false
};  

export default database;

/*
const database = { 
    caseType: "",
    patient: "",
    patientInfo: {
        dob: "",
        height: "",
        gender: "",
        ethnicity: "",
        motivation: "",
        hygiene: "",
        finances: ""
    },
    habits: {
        mouthBreather: false,
        snores: false,
        tongueThrust: false,
        thumbSuck: false,
        none: false
    },
    dental: {
        model: {
            left: "",
            right: "",
            overjet: null,
            overbite: null,
        },
        space: {
            urCentral: null,
            ulCentral: null,
            urLateral: null,
            ulLateral: null,
            transpalatal: null,
        }
    },
    joint: {
        clicking: {
            none: false,
            left: false,
            right: false
        },
        popping: {
            none: false,
            left: false,
            right: false
        },
        locking: {
            none: false,
            left: false,
            right: false
        },
        maxOpening: "",
        rangeOfMotion: [],
        issues: {
            trauma: false,
            headaches: false,
            none: false
        }
    },
    facial: {
        profile: "",
        hereditary: false,
        height: "",
        features: {
            nostrilsDeveloped: false,
            eyeDarkness: false,
            weakLips: false,
            poorSeal: false,
            none: false
        }
    },
    cranial: {
        earLevel: {
            left: "",
            right: "",
        },
        shoulderLevel: {
            left: "",
            right: ""
        },
        eyeLevel: {
            left: "",
            right: ""
        },
        dentalArches: {
            left: "",
            right: ""
        },
        headPosture: null,
        mandibularPlane: "",
        growthDirection: "",
        maxillaPosition: ""
    },
    concerns: {
        patient: "",
        parent: "",
    },
    objective: {
        type: "",
        details: ""
    },
    records: [],
    confirmation: false
};  

export default database;

*/