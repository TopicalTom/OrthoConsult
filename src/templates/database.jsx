const database = { 
    timestamp: new Date(),
    caseType: "",
    patient: "",
    patientInfo: {
        birthday: "",
        height: "",
        gender: "",
        ethnicity: "",
        motivation: "",
        hygiene: "",
        finances: "",
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
        modelLeft: "",
        modelRight: "",
        overjet: null,
        overbite: null,
        maxOpening: "",
        development: "",
        developmentDetails: "",
        history: "",
        historyDetails: "",
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
        earAsymmetry: "",
        eyeAsymmetry: "",
        shoulderAsymmetry: "",
        mandibularPlane: "",
        growthDirection: "",
        maxillaPosition: "",
    },
    maxillaAsymmetry: {
        upward: false,
        downward: false,
        patientLeft: false,
        patientRight: false,
        none: false
    },
    treatment: {
        type: "",
        objective: "",
        medicated: "",
        medicationDetails: "",
        patientConcerns: "",
        guardianConcerns: "",
    },
    cephalometric: false,
    confirmation: false
};  

export default database;