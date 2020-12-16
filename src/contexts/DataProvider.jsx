import React, { useContext, useReducer, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from "./AuthProvider";
import { firestore } from "../firebase";

const DataContext = createContext({});

// Custom Data Management Hook
export function useData() {
    return useContext(DataContext)
}

// Handles Firebase Data Creation
export function DataProvider({ children }) {
    const { currentUser } = useAuth();
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
    const [state, dispatch] = useReducer(reducer, initialState);

    // Handles Case Evaluation Form Logic
    function reducer(state, action) {
        switch (action.type) {

            // Step 0 - Case Type
            case "caseType":
                return {
                    ...state,
                    caseType: action.payload
                };
            
            // Step 1 - Patient Information Fields
            case "patientName":
                return {
                    ...state,
                    patient: action.payload
                };
            case "patientBirthday":
                return {
                    ...state,
                    patientInfo: {
                        ...state.patientInfo,
                        dob: action.payload
                    }
                };
            case "patientHeight":
                return {
                    ...state,
                    patientInfo: {
                        ...state.patientInfo,
                        height: action.payload
                    }
                };
            case "patientGender":
                return {
                    ...state,
                    patientInfo: {
                        ...state.patientInfo,
                        gender: action.payload,
                    }
                };
            case "patientEthnicity":
                return {
                    ...state,
                    patientInfo: {
                        ...state.patientInfo,
                        ethnicity: action.payload,
                    }
                };
            
            // Step 2 - Patient Qualities Fields
            case "patientMotivation":
                return {
                    ...state,
                    patientInfo: {
                        ...state.patientInfo,
                        motivation: action.payload
                    }
                };            
            case "patientHygiene":
                return {
                    ...state,
                    patientInfo: {
                        ...state.patientInfo,
                        hygiene: action.payload
                    }
                };            
            case "patientFinances":
                return {
                    ...state,
                    patientInfo: {
                        ...state.patientInfo,
                        finances: action.payload
                    }
                };

            // Step 3 - Model Classification Fields
            case "modelLeft":
                return {
                    ...state,
                    model: {
                        ...state.model,
                        left: action.payload,
                    }
                };  

            // Step 4 - Model Right Classification Fields
            case "modelRight":
                return {
                    ...state,
                    model: {
                        ...state.model,
                        right: action.payload
                    }
                };            

            // Step 5 - Malocclusion Calculation Fields
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

            // Step 6 - Space Shortage Fields
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

            // Step 7 - Features & Habits Fields
            case "airwayMouthBreather":
                return {
                    ...state,
                    airway: {
                        ...state.airway,
                        none: false,
                        mouthBreather: action.payload,
                    }
                };
            case "airwaySnores":
                return {
                    ...state,
                    airway: {
                        ...state.airway,
                        none: false,
                        snores: action.payload,
                    }
                };
            case "airwayNostrilsDeveloped":
                return {
                    ...state,
                    airway: {
                        ...state.airway,
                        none: false,
                        nostrilsDeveloped: action.payload,
                    }
                };
            case "airwayEyeDarkness":
                return {
                    ...state,
                    airway: {
                        ...state.airway,
                        none: false,
                        eyeDarkness: action.payload,
                    }
                };
            case "airwayWeakLips":
                return {
                    ...state,
                    airway: {
                        ...state.airway,
                        none: false,
                        weakLips: action.payload,
                    }
                };
            case "airwayPoorSeal":
                return {
                    ...state,
                    airway: {
                        ...state.airway,
                        none: false,
                        poorSeal: action.payload,
                    }
                };
            case "airwayTongueThrusts":
                return {
                    ...state,
                    airway: {
                        ...state.airway,
                        none: false,
                        tongueThrusts: action.payload,
                    }
                };
            case "airwayThumbSucking":
                return {
                    ...state,
                    airway: {
                        ...state.airway,
                        none: false,
                        thumbSucking: action.payload,
                    }
                };
            case "airwayNone":
                return {
                    ...state,
                    airway: {
                        mouthBreather: false,
                        snores: false,
                        nostrilsDeveloped: false,
                        eyeDarkness: false,
                        weakLips: false,
                        poorSeal: false,
                        tongueThrusts: false,
                        thumbSucking: false,
                        none: action.payload
                    }
                };
    
            // Step 8 - Clicking Fields
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

            // Step 9 - Popping Fields
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
                
            // Step 10 - Locking Fields
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

            // Step 11 - Temporomandibular Deviation Fields

            // Step 12 - Facial Profile Fields
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

            // Step 13 - Facial Height Fields
            case "facialHeight":
                return {
                    ...state,
                    facial: {
                        ...state.facial,
                        height: action.payload,
                    }
                };

            // Step 14 - Cranial Abnormalities Fields
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
            case "headPosture":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        headPosture: action.payload,
                    }
                };

            // Step 15 - Mandibular Plane Fields
            case "mandibularPlane":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        mandibularPlane: action.payload
                    }
                };    
                
            // Step 16 - Growth Direction Fields
            case "growthDirection":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        growthDirection: action.payload
                    }
                };

            // Step 17 - Maxilla Position Fields 
            case "maxillaPosition":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        maxillaPosition: action.payload
                    }
                };

            // Step 18 - Concerns Fields
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

            // Step 19 - Objectives Fields
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

            // Step 20 - Upload Dental Records Fields
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
            
            // Step 21 - Review Fields
            case "caseConfirmation":
                return {
                    ...state,
                    confirmation: action.payload
                };   

            default:
                return state;
        }
    }

    function addCase(e) {
        e.preventDefault();

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
        <DataContext.Provider value={{ state, dispatch }}>
            <form 
                className="case__form"
                onSubmit={addCase}>
                {children}
            </form>
        </DataContext.Provider>
    )
}

    /*
    const initialState = { 
        caseType: "",
        patient: "",
        doctor: "",
        contactInfo: {
            email: "",
            phone: null,
            fax: null
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
            left: {
                classI: false,
                classII: false,
                classIII: false,
                fullTooth: false,
                halfTooth: false
            },
            right: {
                classI: false,
                classII: false,
                classIII: false,
                fullTooth: false,
                halfTooth: false
            },
            overjet: "",
            overbite: "",
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
                present: false,
                left: false,
                right: false
            },
            popping: {
                present: false,
                left: false,
                right: false
            },
            locking: {
                present: false,
                left: false,
                right: false
            },
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
        }
    }; 
    */