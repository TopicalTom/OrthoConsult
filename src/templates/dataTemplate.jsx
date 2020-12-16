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
    airway: {
        mouthBreather: false,
        snores: false,
        nostrilsDeveloped: false,
        eyeDarkness: false,
        weakLips: false,
        poorSeal: false,
        tongueThrust: false,
        thumbSuck: false
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
        }
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
        forwardPosture: false,
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