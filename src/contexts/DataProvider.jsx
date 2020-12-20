import React, { useContext, useReducer, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from "./AuthProvider";
import { firestore } from "../firebase";

// State Template
import dataTemplate from "../templates/dataTemplate";

// Custom Data Management Hook
const DataContext = createContext({});

export function useData() {
    return useContext(DataContext)
}

// Handles Firebase Data Creation
export function DataProvider({ children }) {
    const { currentUser } = useAuth();
    const initialState = dataTemplate; 
    const [state, dispatch] = useReducer(reducer, initialState);

    // Handles Case Evaluation Form Logic
    function reducer(state, action) {
        switch (action.type) {

            // Case Type Fields
            case "CASE_TYPE":
                return {
                    ...state,
                    caseType: action.payload
                };
            
            // Patient Information Fields
            case "PATIENT_NAME":
                return {
                    ...state,
                    patient: action.payload
                };
            case "PATIENT_BIRTHDAY":
                return {
                    ...state,
                    patientInfo: {
                        ...state.patientInfo,
                        dob: action.payload
                    }
                };
            case "PATIENT_HEIGHT":
                return {
                    ...state,
                    patientInfo: {
                        ...state.patientInfo,
                        height: action.payload
                    }
                };
            case "PATIENT_GENDER":
                return {
                    ...state,
                    patientInfo: {
                        ...state.patientInfo,
                        gender: action.payload,
                    }
                };
            case "PATIENT_ETHNICITY":
                return {
                    ...state,
                    patientInfo: {
                        ...state.patientInfo,
                        ethnicity: action.payload,
                    }
                };            
            case "PATIENT_OVERSIGHT":
                return {
                    ...state,
                    patientInfo: {
                        ...state.patientInfo,
                        oversight: action.payload,
                    }
                };
            
            // Patient Qualifiers Fields
            case "PATIENT_MOTIVATION":
                return {
                    ...state,
                    patientInfo: {
                        ...state.patientInfo,
                        motivation: action.payload
                    }
                };            
            case "PATIENT_HYGIENE":
                return {
                    ...state,
                    patientInfo: {
                        ...state.patientInfo,
                        hygiene: action.payload
                    }
                };            
            case "PATIENT_FINANCES":
                return {
                    ...state,
                    patientInfo: {
                        ...state.patientInfo,
                        finances: action.payload
                    }
                };

            // Model Left Classification Fields
            case "MODEL_LEFT":
                return {
                    ...state,
                    model: {
                        ...state.model,
                        left: action.payload,
                    }
                };  

            // Model Right Classification Fields
            case "MODEL_RIGHT":
                return {
                    ...state,
                    model: {
                        ...state.model,
                        right: action.payload
                    }
                };            

            // Malocclusion Calculation Fields
            case "MODEL_OVERJET":
                return {
                    ...state,
                    model: {
                        ...state.model,
                        overjet: action.payload
                    }
                };
            case "MODEL_OVERBITE":
                return {
                    ...state,
                    model: {
                        ...state.model,
                        overbite: action.payload
                    }
                };

            // Space Shortage Fields
            case "UR_CENTRAL":
                return {
                    ...state,
                    space: {
                        ...state.space,
                        urCentral: action.payload
                    }
                };
            case "UL_CENTRAL":
                return {
                    ...state,
                    space: {
                        ...state.space,
                        ulCentral: action.payload
                    }
                };
            case "UR_LATERAL":
                return {
                    ...state,
                    space: {
                        ...state.space,
                        urLateral: action.payload
                    }
                };
            case "UL_LATERAL":
                return {
                    ...state,
                    space: {
                        ...state.space,
                        ulLateral: action.payload
                    }
                };
            case "TRANSPALATAL_DISTANCE":
                return {
                    ...state,
                    space: {
                        ...state.space,
                        transpalatal: action.payload
                    }
                };

            // Features & Habits Fields
            case "MOUTH_BREATHER":
                return {
                    ...state,
                    habits: {
                        ...state.habits,
                        none: false,
                        mouthBreather: action.payload,
                    }
                };
            case "SNORES":
                return {
                    ...state,
                    habits: {
                        ...state.habits,
                        none: false,
                        snores: action.payload,
                    }
                };
            case "TONGUE_THRUSTS":
                return {
                    ...state,
                    habits: {
                        ...state.habits,
                        none: false,
                        tongueThrusts: action.payload,
                    }
                };
            case "THUMB_SUCKING":
                return {
                    ...state,
                    habits: {
                        ...state.habits,
                        none: false,
                        thumbSucking: action.payload,
                    }
                };
            case "HABITS_NONE":
                return {
                    ...state,
                    habits: {
                        mouthBreather: false,
                        snores: false,
                        tongueThrusts: false,
                        thumbSucking: false,
                        none: action.payload
                    }
                };

            // Features Fields
            case "NOSTRILS_DEVELOPED":
                return {
                    ...state,
                    features: {
                        ...state.features,
                        none: false,
                        nostrilsDeveloped: action.payload,
                    }
                };
            case "EYE_DARKNESS":
                return {
                    ...state,
                    features: {
                        ...state.features,
                        none: false,
                        eyeDarkness: action.payload,
                    }
                };
            case "WEAK_LIPS":
                return {
                    ...state,
                    features: {
                        ...state.features,
                        none: false,
                        weakLips: action.payload,
                    }
                };
            case "POOR_SEAL":
                return {
                    ...state,
                    features: {
                        ...state.features,
                        none: false,
                        poorSeal: action.payload,
                    }
                };             
            case "FEATURES_NONE":
                return {
                    ...state,
                    features: {
                        nostrilsDeveloped: false,
                        eyeDarkness: false,
                        weakLips: false,
                        poorSeal: false,
                        none: action.payload
                    }
                };

    
            // Clicking Fields
            case "CLICKING_LEFT":
                return {
                    ...state,
                    tmj: {
                        ...state.tmj,
                        clicking: {
                            ...state.tmj.clicking,
                            left: action.payload,
                            none: false
                        }
                    }
                };            
            case "CLICKING_RIGHT":
                return {
                    ...state,
                    tmj: {
                        ...state.tmj,
                        clicking: {
                            ...state.tmj.clicking,
                            right: action.payload,
                            none: false
                        }
                    }
                };  
            case "CLICKING_NONE":
                return {
                    ...state,
                    tmj: {
                        ...state.tmj,
                        clicking: {
                            left: false,
                            right: false,
                            none: action.payload
                        }
                    }
                }; 

            // Popping Fields
            case "POPPING_LEFT":
                return {
                    ...state,
                    tmj: {
                        ...state.tmj,
                        popping: {
                            ...state.tmj.popping,
                            left: action.payload,
                            none: false
                        }
                    }
                };            
            case "POPPING_RIGHT":
                return {
                    ...state,
                    tmj: {
                        ...state.tmj,
                        popping: {
                            ...state.tmj.popping,
                            right: action.payload,
                            none: false
                        }
                    }
                };  
            case "POPPING_NONE":
                return {
                    ...state,
                    tmj: {
                        ...state.tmj,
                        popping: {
                            left: false,
                            right: false,
                            none: action.payload
                        }
                    }
                };    
                
            // Locking Fields
            case "LOCKING_LEFT":
                return {
                    ...state,
                    tmj: {
                        ...state.tmj,
                        locking: {
                            ...state.tmj.locking,
                            left: action.payload,
                            none: false
                        }
                    }
                };            
            case "LOCKING_RIGHT":
                return {
                    ...state,
                    tmj: {
                        ...state.tmj,
                        locking: {
                            ...state.tmj.locking,
                            right: action.payload,
                            none: false
                        }
                    }
                };  
            case "LOCKING_NONE":
                return {
                    ...state,
                    tmj: {
                        ...state.tmj,
                        locking: {
                            left: false,
                            right: false,
                            none: action.payload
                        }
                    }
                };  

            // Range of Motion Fields
            case "CAPTURE_DRAWING":
                return {
                    ...state,
                    tmj: {
                        ...state.tmj,
                        rangeOfMotion: action.payload,
                    }
                };            
            case "CLEAR_DRAWING":
                return {
                    ...state,
                    tmj: {
                        ...state.tmj,
                        rangeOfMotion: [],
                    }
                };

            // Facial Profile Fields
            case "FACIAL_PROFILE":
                return {
                    ...state,
                    facial: {
                        ...state.facial,
                        profile: action.payload,
                    }
                };
            case "FACIAL_HEREDITARY":
                return {
                    ...state,
                    facial: {
                        ...state.facial,
                        hereditary: action.payload,
                    }
                };

            // Facial Height Fields
            case "FACIAL_HEIGHT":
                return {
                    ...state,
                    facial: {
                        ...state.facial,
                        height: action.payload,
                    }
                };

            // Cranial Abnormalities Fields
            case "DENTAL_ARCHES":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        dentalArches: action.payload,
                    }
                };
            case "EAR_LEVEL":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        earLevel: action.payload,
                    }
                };
            case "EYE_LEVEL":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        eyeLevel: action.payload,
                    }
                };
            case "SHOULDER_LEVEL":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        shoulderLevel: action.payload,
                    }
                };
            case "FORWARD_POSTURE":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        forwardPosture: action.payload,
                    }
                };

            // Mandibular Plane Fields
            case "MANDIBULAR_PLANE":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        mandibularPlane: action.payload
                    }
                };    
                
            // Growth Direction Fields
            case "GROWTH_DIRECTION":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        growthDirection: action.payload
                    }
                };

            // Maxilla Position Fields 
            case "MAXILLA_POSITION":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        maxillaPosition: action.payload
                    }
                };

            // Concerns Fields
            case "PATIENT_CONCERNS":
                return {
                    ...state,
                    concerns: {
                        ...state.concerns,
                        patient: action.payload
                    }
                };            
            case "PARENT_CONCERNS":
                return {
                    ...state,
                    concerns: {
                        ...state.concerns,
                        parent: action.payload
                    }
                };            

            // Objectives Fields
            case "TREATMENT_OBJECTIVE":
                return {
                    ...state,
                    objective: {
                        ...state.objective,
                        details: action.payload
                    }
                };           
            case "TREATMENT_TYPE":
                return {
                    ...state,
                    objective: {
                        ...state.objective,
                        type: action.payload
                    }
                };

            // Upload Dental Records Fields
            case "UPLOAD_RECORD":
                return {
                    ...state,
                    records: [
                        ...state.records,
                        action.payload
                    ]
                };            
            case "REMOVE_RECORD":
                const updatedRecords = state.records.filter(item => item.id !== action.payload);

                return {
                    ...state,
                    records: [...updatedRecords]
                };
            
            // Review Fields
            case "CASE_CONFIRMATION":
                return {
                    ...state,
                    confirmation: action.payload
                };   

            default:
                return state;
        }
    }

    function addCase() {

        const newCaseId = uuidv4(); 
        const newCase = state;

        // Creates new Case with key (Identifier)
        firestore.collection("cases")
            .doc(newCaseId)
            .set(newCase)
            .then(() => {
                console.log("Success");
            })
            .catch(error => {
                console.log(error);
            });

        // Adds Foreign Key (Case) to Current User 
        /*
        firestore.collection("clients")
            .doc(currentUser)
            .update({  
                ...currentUser,   
                cases: [
                    ...currentUser.cases,
                    {
                        caseUID: newCaseId,
                        patient: state.patient,
                        date: new Date().getTime().toString(),
                    }
                ]
            })
            .then(() => {
                console.log("Success")
            })
            .catch((error) => {
                console.log(error)
            })
        */
    };

    return (
        <DataContext.Provider value={{ state, dispatch, addCase }}>
            {children}
        </DataContext.Provider>
    )
}

/*
    const initialState = { 
        caseType: "",
        patient: "",
        doctor: "",
        contactInfo: {
            email: currentUser.email,
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

*/