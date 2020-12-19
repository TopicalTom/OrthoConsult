import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useModal } from "../../contexts/ModalProvider";
import { DataProvider } from "../../contexts/DataProvider";
import { StepProvider } from '../../contexts/StepProvider';
import "./Case.scss";

// Icons
import cancel from "../../assets/icons/cancel.svg";

// Components
import Form from '../CaseForm/CaseForm';
import Records from '../CaseRecords/CaseRecords';

function Case() {
    const { caseIsOpen, toggleCase } = useModal();

    return (
        <Modal
            isOpen={caseIsOpen}
            onRequestClose={toggleCase}
            className="case"
            overlayClassName="overlay">
            <div 
                className="case__close"
                onClick={toggleCase}>
                <img 
                    className="case__cancel"
                    src={cancel}
                />
                <p 
                    className="case__escape">
                    Esc
                </p>
            </div>
            <DataProvider>
                <StepProvider>
                    <Form />
                    <Records />
                </StepProvider>
            </DataProvider>
        </Modal>
    );
}
export default Case;


/*
import React, { useState, useReducer } from 'react';
//import { StepContext, DataContext } from '../../hooks/useContext';
import { CaseProvider} from `../../contexts/CaseProvider`;
import { firestore } from "../../firebase";

// Components
import Step0 from '../Step0/Step0';
import Step1 from '../Step1/Step1';
import Step2 from '../Step2/Step2';
import Step3 from '../Step3/Step3';
import Step4 from '../Step4/Step4';
import Step5 from '../Step5/Step5';
import Step6 from '../Step6/Step6';
import Step7 from '../Step7/Step7';
import Step8 from '../Step8/Step8';
import Step9 from '../Step9/Step9';
import Step10 from '../Step10/Step10';
import Actions from '../FormActions/FormActions';

function Form() {
    const [currentStep, setCurrentStep] = useState(0);

    // Case Database Template
    const initialState = { 
        caseType: "",
        patient: "",
        doctor: "",
        contactInfo: {
            email: "",
            telephone: null,
            fax: null
        },
        patientInfo: {
            age: null,
            dob: "",
            height: "",
            gender: "",
            ethnicity: "",
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
            measurements: {
                urCentral: null,
                ulCentral: null,
                urLateral: null,
                ulLateral: null,
                transpalatal: null,
            },
            shortage: null
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

        },
        facial: {
            profile: "",
            hereditary: false,
            height: "",
        },
        cranial: {
            arches: {
                asymmetry: false,
                details: ""
            },
            ear: {
                asymmetry: false,
                details: ""
            },
            eye: {
                asymmetry: false,
                details: ""
            },
            shoulder: {
                asymmetry: false,
                details: ""
            },
            forwardPosture: false,
            mandibularPlane: "",
            growthDirection: "",
            maxillaPosition: ""
        },
        concerns: {
            patient: "",
            parent: "",
            motivation: "",
            hygiene: "",
            finances: "",
        },
        objective: {
            type: "",
            details: ""
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    // Takes Case Template and populates new case data
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
            case "patientAge":
                return {
                    ...state,
                    patientInfo: {
                        ...state.patientInfo,
                        age: action.payload
                    }
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

            // Step 2 - Model Classification Fields
            case "modelLeftCaseI":
                return {
                    ...state,
                    model: {
                        ...state.model,
                        left: {
                            ...state.model.left,
                            caseI: action.payload
                        }
                    }
                };
            case "modelLeftCaseII":
                return {
                    ...state,
                    model: {
                        ...state.model,
                        left: {
                            ...state.model.left,
                            caseII: action.payload
                        }
                    }
                };
            case "modelLeftCaseIII":
                return {
                    ...state,
                    model: {
                        ...state.model,
                        left: {
                            ...state.model.left,
                            caseIII: action.payload
                        }
                    }
                };
            case "modelLeftHalfTooth":
                return {
                    ...state,
                    model: {
                        ...state.model,
                        left: {
                            ...state.model.left,
                            halfTooth: action.payload
                        }
                    }
                };
            case "modelLeftFullTooth":
                return {
                    ...state,
                    model: {
                        ...state.model,
                        left: {
                            ...state.model.left,
                            fullTooth: action.payload
                        }
                    }
                };
            case "modelRightCaseI":
                return {
                    ...state,
                    model: {
                        ...state.model,
                        right: {
                            ...state.model.right,
                            caseI: action.payload
                        }
                    }
                };
            case "modelRightCaseII":
                return {
                    ...state,
                    model: {
                        ...state.model,
                        right: {
                            ...state.model.right,
                            caseII: action.payload
                        }
                    }
                };
            case "modelRightCaseIII":
                return {
                    ...state,
                    model: {
                        ...state.model,
                        right: {
                            ...state.model.right,
                            caseIII: action.payload
                        }
                    }
                };
            case "modelRightHalfTooth":
                return {
                    ...state,
                    model: {
                        ...state.model,
                        right: {
                            ...state.model.right,
                            halfTooth: action.payload
                        }
                    }
                };
            case "modelRightFullTooth":
                return {
                    ...state,
                    model: {
                        ...state.model,
                        right: {
                            ...state.model.right,
                            halfTooth: action.payload
                        }
                    }
                };
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

            // Step 3 - Space Shortage Fields
            case "spaceURCentral":
                return {
                    ...state,
                    space: {
                        ...state.space,
                        measurements: {
                            ...state.space.measurements,
                            urCentral: action.payload
                        }
                    }
                };
            case "spaceULCentral":
                return {
                    ...state,
                    space: {
                        ...state.space,
                        measurements: {
                            ...state.space.measurements,
                            ulCentral: action.payload
                        }
                    }
                };
            case "spaceURLateral":
                return {
                    ...state,
                    space: {
                        ...state.space,
                        measurements: {
                            ...state.space.measurements,
                            urLateral: action.payload
                        }
                    }
                };
            case "spaceULLateral":
                return {
                    ...state,
                    space: {
                        ...state.space,
                        measurements: {
                            ...state.space.measurements,
                            ulLateral: action.payload
                        }
                    }
                };
            case "spaceTranspalatal":
                return {
                    ...state,
                    space: {
                        ...state.space,
                        measurements: {
                            ...state.space.measurements,
                            transpalatal: action.payload
                        }
                    }
                };
            case "spaceShortage":
                return {
                    ...state,
                    space: {
                        ...state.space,
                        shortage: action.payload,
                    }
                };

            // Step 4 - Airway Examination Fields
            case "airwayMouthBreather":
                return {
                    ...state,
                    airway: {
                        ...state.airway,
                        mouthBreather: action.payload,
                    }
                };
            case "airwaySnores":
                return {
                    ...state,
                    airway: {
                        ...state.airway,
                        snores: action.payload,
                    }
                };
            case "airwayNostrilsDeveloped":
                return {
                    ...state,
                    airway: {
                        ...state.airway,
                        nostrilsDeveloped: action.payload,
                    }
                };
            case "airwayEyeDarkness":
                return {
                    ...state,
                    airway: {
                        ...state.airway,
                        eyeDarkness: action.payload,
                    }
                };
            case "airwayWeakLips":
                return {
                    ...state,
                    airway: {
                        ...state.airway,
                        weakLips: action.payload,
                    }
                };
            case "airwayPoorSeal":
                return {
                    ...state,
                    airway: {
                        ...state.airway,
                        poorSeal: action.payload,
                    }
                };
            case "airwayTongueThrust":
                return {
                    ...state,
                    airway: {
                        ...state.airway,
                        tongueThrust: action.payload,
                    }
                };
            case "airwayThumbSuck":
                return {
                    ...state,
                    airway: {
                        ...state.airway,
                        thumbSuck: action.payload,
                    }
                };
    
            // Step 5 - Temporomandibular Joint Fields

            // Step 6 - Temporomandibular Joint Fields

            // Step 7 - Facial Profile Fields
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

            // Step 8 - Facial Height Fields
            case "facialHeight":
                return {
                    ...state,
                    facial: {
                        ...state.facial,
                        height: action.payload,
                    }
                };

            // Step 9 - Dental Arch Discrepancies Fields
            case "dentalArchesSelection":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        arches: {
                            ...state.cranial.arches,
                            asymmetry: action.payload,
                        }
                    }
                };
            case "dentalArchesDetails":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        arches: {
                            ...state.cranial.arches,
                            details: action.payload,
                        }
                    }
                };

            // Step 10 - Skeletal Discrepancies Fields
            case "earLevelSelection":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        ear: {
                            ...state.cranial.ear,
                            asymmetry: action.payload,
                        }
                    }
                };
            case "earLevelDetails":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        ear: {
                            ...state.cranial.ear,
                            details: action.payload,
                        }
                    }
                };
            case "eyeLevelSelection":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        eye: {
                            ...state.cranial.eye,
                            asymmetry: action.payload,
                        }
                    }
                };
            case "eyeLevelDetails":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        eye: {
                            ...state.cranial.eye,
                            details: action.payload,
                        }
                    }
                };
            case "shoulderLevelSelection":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        shoulder: {
                            ...state.cranial.shoulder,
                            asymmetry: action.payload,
                        }
                    }
                };
            case "shoulderLevelDetails":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        shoulder: {
                            ...state.cranial.shoulder,
                            details: action.payload,
                        }
                    }
                };
            case "forwardHeadPosture":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        forwardPosture: action.payload
                    }
                };

            // Step 11 - Cepholmetric Fields
            case "mandibularPlaneAngle":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        mandibularPlane: action.payload
                    }
                };            
            case "growthDirection":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        growthDirection: action.payload
                    }
                };
            case "maxillaPosition":
                return {
                    ...state,
                    cranial: {
                        ...state.cranial,
                        maxillaPosition: action.payload
                    }
                };

            // Step 12 - Concerns Fields
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
            case "patientMotivation":
                return {
                    ...state,
                    concerns: {
                        ...state.concerns,
                        motivation: action.payload
                    }
                };            
            case "patientHygiene":
                return {
                    ...state,
                    concerns: {
                        ...state.concerns,
                        hygiene: action.payload
                    }
                };            
            case "patientFinances":
                return {
                    ...state,
                    concerns: {
                        ...state.concerns,
                        finances: action.payload
                    }
                };

            // Step 13 - Objectives Fields
            case "treatmentType":
                return {
                    ...state,
                    objective: {
                        ...state.objective,
                        type: action.payload
                    }
                };
            case "doctorObjective":
                return {
                    ...state,
                    objective: {
                        ...state.objective,
                        details: action.payload
                    }
                };

            // Step 14 - Upload Dental Records Fields

            default:
                return state;
        }
    }

    function addCase(e) {
        e.preventDefault();

        let newCase = state;

        firestore.collection("cases")
            .doc(new Date().getTime().toString())
            .set(newCase)
            .then(() => {
                console.log("Success");
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            <form 
                className="form"
                onSubmit={addCase}>
                <StepContext.Provider value={{ currentStep, setCurrentStep }}>
                    <Step0 />
                    <Step1 />
                    <Step2 />
                    <Step3 />
                    <Step4 />
                    <Step5 />
                    <Step6 />
                    <Step7 />
                    <Step8 />
                    <Step9 />
                    <Step10 />
                    <Actions />
                </StepContext.Provider>
            </form>
        </DataContext.Provider>
    );
}
export default Form;
*/

/*

    function addCase(e) {
        e.preventDefault();

        let newCase = data

        newCase = {
            case: new Date().getTime(),
            patient: "",
            patientInfo: {
                age: 0,
                dob: "",
                sex: "",
                height: "",
                race: "",
            },
        };

        setData(newCase)

        db.collection("cases")
            .doc(newCase.case.toString())
            .set(newCase)
            .then(() => {
                console.log("Success");
            })
            .catch(error => {
                console.log(error);
            });
    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function updateNameInput(e) {
        setName(e.target.value);
    }

    function updateEmailInput(e) {
        setEmail(e.target.value);
    }
    
    function addCase(e) {
        e.preventDefault();

        const data = {
            name: name,
            email: email,
            uid: new Date().getTime()
        };

        db.collection("cases")
            .doc(data.uid.toString())
            .set(data)
            .then(() => {
                console.log("Success");
            })
            .catch(error => {
                console.log(error);
            });

        setName("");
        setEmail("");
    };

            <input
                type="text"
                name="name"
                placeholder="Full name"
                onChange={updateNameInput}
                value={name}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={updateEmailInput}
                value={email}
            />
            <input type="radio" id="new" name="new" value="new"/>
            <label for="new">New Case</label>
            <input type="radio" id="ongoing" name="ongoing" value="ongoing"/>
            <label for="ongoing">On Going Case</label>
            <button type="submit">Submit</button>

*/