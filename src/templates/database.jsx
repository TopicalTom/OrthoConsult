const database = { 
    timestamp: new Date(),
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
        medicationDetails: "",
        history: "",
    },
    patientHabits: {
        mouthBreather: false,
        snores: false,
        tongueThrust: false,
        thumbSuck: false,
        none: false
    },
    underlyingIssues: {
        trauma: false,
        headaches: false,
        none: false
    },
    dental: {
        crLeft: "",
        crRight: "",
        overjet: null,
        overbite: null,
        maxOpening: "",
        development: "",
        developmentDetails: ""
    },
    occlusionHindrances: {
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
    facial: {
        profile: "",
        height: "",
    },
    features: {
        constrictedNostrils: false,
        eyeDarkness: false,
        weakLips: false,
        poorLipSeal: false,
        none: false
    },
    cranial: {
        headPosture: null,
        earLevel: "",
        eyeLevel: "",
        shoulderLevel: "",
        mandibularPlane: "",
        growthDirection: "",
        maxillaPosition: "",
    },
    maxillaCant: {
        upward: false,
        downward: false,
        patientLeft: false,
        patientRight: false,
        none: false
    },
    treatment: {
        type: "",
        objective: "",
        patientConcerns: "",
        guardianConcerns: "",
    },
    cephalometric: false,
    confirmation: false
};  

export default database;