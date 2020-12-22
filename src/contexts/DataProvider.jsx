import React, { useContext, useReducer, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from "./AuthProvider";
import { firestore } from "../firebase";

// Database Template
import database from "../templates/database";

// Custom Data Management Hook
const DataContext = createContext({});

export function useData() {
    return useContext(DataContext)
}

// Handles Firebase Data Creation
export function DataProvider({ children }) {
    const { currentUser } = useAuth();
    const initialState = database; 
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

            // Model Classification Fields
            case "MODEL_LEFT":
                return {
                    ...state,
                    dental: {
                        ...state.dental,
                        model: {
                            ...state.dental.model,
                            left: action.payload,
                        }
                    }
                };  
            case "MODEL_RIGHT":
                return {
                    ...state,
                    dental: {
                        ...state.dental,
                        model: {
                            ...state.dental.model,
                            right: action.payload,
                        }
                    }
                };           

            // Dental Measurements Fields
            case "MODEL_OVERJET":
                return {
                    ...state,
                    dental: {
                        ...state.dental,
                        model: {
                            ...state.dental.model,
                            overjet: action.payload
                        }
                    }
                };
            case "MODEL_OVERBITE":
                return {
                    ...state,
                    dental: {
                        ...state.dental,
                        model: {
                            ...state.dental.model,
                            overbite: action.payload
                        }
                    }
                };         
            case "MAXIMUM_OPENING":
                return {
                    ...state,
                    joint: {
                        ...state.joint,
                        maxOpening: action.payload
                    }
                };
            
            // Space Shortage Fields
            case "UR_CENTRAL":
                return {
                    ...state,
                    dental: {
                        ...state.dental,
                        space: {
                            ...state.dental.space,
                            urCentral: action.payload
                        }
                    }
                };
            case "UL_CENTRAL":
                return {
                    ...state,
                    dental: {
                        ...state.dental,
                        space: {
                            ...state.dental.space,
                            ulCentral: action.payload
                        }
                    }
                };
            case "UR_LATERAL":
                return {
                    ...state,
                    dental: {
                        ...state.dental,
                        space: {
                            ...state.dental.space,
                            urLateral: action.payload
                        }
                    }
                };
            case "UL_LATERAL":
                return {
                    ...state,
                    dental: {
                        ...state.dental,
                        space: {
                            ...state.dental.space,
                            ulLateral: action.payload
                        }
                    }
                };
            case "TRANSPALATAL_DISTANCE":
                return {
                    ...state,
                    dental: {
                        ...state.dental,
                        space: {
                            ...state.dental.space,
                            transpalatal: action.payload
                        }
                    }
                };

            // Patient Habits Fields
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

            // Facial Features Fields
            case "NOSTRILS_DEVELOPED":
                return {
                    ...state,
                    facial: {
                        ...state.facial,
                        features: {
                            ...state.facial.features,
                            none: false,
                            nostrilsDeveloped: action.payload,
                        }
                    }
                };
            case "EYE_DARKNESS":
                return {
                    ...state,
                    facial: {
                        ...state.facial,
                        features: {
                            ...state.facial.features,
                            none: false,
                            eyeDarkness: action.payload,
                        }
                    }
                };
            case "WEAK_LIPS":
                return {
                    ...state,
                    facial: {
                        ...state.facial,
                        features: {
                            ...state.facial.features,
                            none: false,
                            weakLips: action.payload,
                        }
                    }
                };
            case "POOR_SEAL":
                return {
                    ...state,
                    facial: {
                        ...state.facial,
                        features: {
                            ...state.facial.features,
                            none: false,
                            poorSeal: action.payload,
                        }
                    }
                };             
            case "FEATURES_NONE":
                return {
                    ...state,
                    facial: {
                        ...state.facial,
                        features: {
                            nostrilsDeveloped: false,
                            eyeDarkness: false,
                            weakLips: false,
                            poorSeal: false,
                            none: action.payload
                        }
                    }
                };

    
            // Clicking Fields
            case "CLICKING_LEFT":
                return {
                    ...state,
                    joint: {
                        ...state.joint,
                        clicking: {
                            ...state.joint.clicking,
                            left: action.payload,
                            none: false
                        }
                    }
                };            
            case "CLICKING_RIGHT":
                return {
                    ...state,
                    joint: {
                        ...state.joint,
                        clicking: {
                            ...state.joint.clicking,
                            right: action.payload,
                            none: false
                        }
                    }
                };  
            case "CLICKING_NONE":
                return {
                    ...state,
                    joint: {
                        ...state.joint,
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
                    joint: {
                        ...state.joint,
                        popping: {
                            ...state.joint.popping,
                            left: action.payload,
                            none: false
                        }
                    }
                };            
            case "POPPING_RIGHT":
                return {
                    ...state,
                    joint: {
                        ...state.joint,
                        popping: {
                            ...state.joint.popping,
                            right: action.payload,
                            none: false
                        }
                    }
                };  
            case "POPPING_NONE":
                return {
                    ...state,
                    joint: {
                        ...state.joint,
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
                    joint: {
                        ...state.joint,
                        locking: {
                            ...state.joint.locking,
                            left: action.payload,
                            none: false
                        }
                    }
                };            
            case "LOCKING_RIGHT":
                return {
                    ...state,
                    joint: {
                        ...state.joint,
                        locking: {
                            ...state.joint.locking,
                            right: action.payload,
                            none: false
                        }
                    }
                };  
            case "LOCKING_NONE":
                return {
                    ...state,
                    joint: {
                        ...state.joint,
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
                    joint: {
                        ...state.joint,
                        rangeOfMotion: action.payload,
                    }
                };            
            case "CLEAR_DRAWING":
                return {
                    ...state,
                    joint: {
                        ...state.joint,
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

            // Dental Arches Fields
            case "DENTAL_ARCHES_LEFT":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        dentalArches: {
                            ...state.cranial.dentalArches,
                            left: action.payload,
                        }
                    }
                };            
            case "DENTAL_ARCHES_RIGHT":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        dentalArches: {
                            ...state.cranial.dentalArches,
                            right: action.payload,
                        }
                    }
                };
            
            // Ear Level Fields
            case "EAR_LEVEL_LEFT":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        earLevel: {
                            ...state.cranial.earLevel,
                            left: action.payload,
                        }
                    }
                };            
            case "EAR_LEVEL_RIGHT":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        earLevel: {
                            ...state.cranial.earLevel,
                            right: action.payload,
                        }
                    }
                };
            
            // Eye Level Fields
            case "EYE_LEVEL_LEFT":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        eyeLevel: {
                            ...state.cranial.eyeLevel,
                            left: action.payload,
                        }
                    }
                };            
            case "EYE_LEVEL_RIGHT":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        eyeLevel: {
                            ...state.cranial.eyeLevel,
                            right: action.payload,
                        }
                    }
                };
            
            // Should Level Fields
            case "SHOULDER_LEVEL_LEFT":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        shoulderLevel: {
                            ...state.cranial.shoulderLevel,
                            left: action.payload,
                        }
                    }
                };            
            case "SHOULDER_LEVEL_RIGHT":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        shoulderLevel: {
                            ...state.cranial.shoulderLevel,
                            right: action.payload,
                        }
                    }
                };
            
            // Head Posture Fields
            case "HEAD_POSTURE":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        headPosture: action.payload
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