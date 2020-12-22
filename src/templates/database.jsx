const database = { 
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
            traumaDetails: "",
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