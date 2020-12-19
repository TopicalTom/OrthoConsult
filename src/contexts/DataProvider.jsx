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
            case "modelLeft":
                return {
                    ...state,
                    model: {
                        ...state.model,
                        left: action.payload,
                    }
                };  

            // Model Right Classification Fields
            case "modelRight":
                return {
                    ...state,
                    model: {
                        ...state.model,
                        right: action.payload
                    }
                };            

            // Malocclusion Calculation Fields
            case "modelOverjet":
                return {
                    ...state,
                    model: {
                        ...state.model,
                        overjet: action.payload
                    }
                };
            case "modelOverbite":
                return {
                    ...state,
                    model: {
                        ...state.model,
                        overbite: action.payload
                    }
                };

            // Space Shortage Fields
            case "spaceURCentral":
                return {
                    ...state,
                    space: {
                        ...state.space,
                        urCentral: action.payload
                    }
                };
            case "spaceULCentral":
                return {
                    ...state,
                    space: {
                        ...state.space,
                        ulCentral: action.payload
                    }
                };
            case "spaceURLateral":
                return {
                    ...state,
                    space: {
                        ...state.space,
                        urLateral: action.payload
                    }
                };
            case "spaceULLateral":
                return {
                    ...state,
                    space: {
                        ...state.space,
                        ulLateral: action.payload
                    }
                };
            case "spaceTranspalatal":
                return {
                    ...state,
                    space: {
                        ...state.space,
                        transpalatal: action.payload
                    }
                };

            // Features & Habits Fields
            case "mouthBreather":
                return {
                    ...state,
                    habits: {
                        ...state.habits,
                        none: false,
                        mouthBreather: action.payload,
                    }
                };
            case "snores":
                return {
                    ...state,
                    habits: {
                        ...state.habits,
                        none: false,
                        snores: action.payload,
                    }
                };
            case "tongueThrusts":
                return {
                    ...state,
                    habits: {
                        ...state.habits,
                        none: false,
                        tongueThrusts: action.payload,
                    }
                };
            case "thumbSucking":
                return {
                    ...state,
                    habits: {
                        ...state.habits,
                        none: false,
                        thumbSucking: action.payload,
                    }
                };
            case "habitsNone":
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
            case "nostrilsDeveloped":
                return {
                    ...state,
                    features: {
                        ...state.features,
                        none: false,
                        nostrilsDeveloped: action.payload,
                    }
                };
            case "eyeDarkness":
                return {
                    ...state,
                    features: {
                        ...state.features,
                        none: false,
                        eyeDarkness: action.payload,
                    }
                };
            case "weakLips":
                return {
                    ...state,
                    features: {
                        ...state.features,
                        none: false,
                        weakLips: action.payload,
                    }
                };
            case "poorSeal":
                return {
                    ...state,
                    features: {
                        ...state.features,
                        none: false,
                        poorSeal: action.payload,
                    }
                };             
            case "featuresNone":
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
            case "clickingLeft":
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
            case "clickingRight":
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
            case "clickingNone":
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
            case "poppingLeft":
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
            case "poppingRight":
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
            case "poppingNone":
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
            case "lockingLeft":
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
            case "lockingRight":
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
            case "lockingNone":
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
            case "captureDrawing":
                return {
                    ...state,
                    tmj: {
                        ...state.tmj,
                        rangeOfMotion: action.payload,
                    }
                };            
            case "clearDrawing":
                return {
                    ...state,
                    tmj: {
                        ...state.tmj,
                        rangeOfMotion: [],
                    }
                };

            // Facial Profile Fields
            case "facialProfile":
                return {
                    ...state,
                    facial: {
                        ...state.facial,
                        profile: action.payload,
                    }
                };
            case "facialHereditary":
                return {
                    ...state,
                    facial: {
                        ...state.facial,
                        hereditary: action.payload,
                    }
                };

            // Facial Height Fields
            case "facialHeight":
                return {
                    ...state,
                    facial: {
                        ...state.facial,
                        height: action.payload,
                    }
                };

            // Cranial Abnormalities Fields
            case "dentalArches":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        dentalArches: action.payload,
                    }
                };
            case "earLevel":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        earLevel: action.payload,
                    }
                };
            case "eyeLevel":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        eyeLevel: action.payload,
                    }
                };
            case "shoulderLevel":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        shoulderLevel: action.payload,
                    }
                };
            case "forwardPosture":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        forwardPosture: action.payload,
                    }
                };

            // Mandibular Plane Fields
            case "mandibularPlane":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        mandibularPlane: action.payload
                    }
                };    
                
            // Growth Direction Fields
            case "growthDirection":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        growthDirection: action.payload
                    }
                };

            // Maxilla Position Fields 
            case "maxillaPosition":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        maxillaPosition: action.payload
                    }
                };

            // Concerns Fields
            case "patientConcerns":
                return {
                    ...state,
                    concerns: {
                        ...state.concerns,
                        patient: action.payload
                    }
                };            
            case "parentConcerns":
                return {
                    ...state,
                    concerns: {
                        ...state.concerns,
                        parent: action.payload
                    }
                };            

            // Objectives Fields
            case "doctorObjective":
                return {
                    ...state,
                    objective: {
                        ...state.objective,
                        details: action.payload
                    }
                };           
            case "treatmentType":
                return {
                    ...state,
                    objective: {
                        ...state.objective,
                        type: action.payload
                    }
                };

            // Upload Dental Records Fields
            case "uploadRecord":
                return {
                    ...state,
                    records: [
                        ...state.records,
                        action.payload
                    ]
                };            
            case "removeRecord":
                const updatedRecords = state.records.filter(item => item.id !== action.payload);

                return {
                    ...state,
                    records: [...updatedRecords]
                };
            
            // Review Fields
            case "caseConfirmation":
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