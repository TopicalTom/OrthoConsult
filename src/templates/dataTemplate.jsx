const caseEvaluation = { 
    caseType: "",
    patient: "",
    doctor: "",
    contactInfo: {
        email: "",
        phone: null
    },
    patientInfo: {
        dob: "",
        height: "",
        gender: "",
        ethnicity: "",
        motivation: "",
        hygiene: "",
        finances: "",
        oversight: null
    },
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
    },
    habits: {
        mouthBreather: false,
        snores: false,
        tongueThrust: false,
        thumbSuck: false,
        none: false
    },
    features: {
        nostrilsDeveloped: false,
        eyeDarkness: false,
        weakLips: false,
        poorSeal: false,
        none: false
    },
    tmj: {
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
        rangeOfMotion: []
    },
    facial: {
        profile: "",
        hereditary: false,
        height: "",
    },
    cranial: {
        dentalArches: "",
        earLevel: "",
        eyeLevel: "",
        shoulderLevel: "",
        forwardPosture: null,
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

export default caseEvaluation;