import React from 'react';
import "../Case/Case.scss";

// Contexts
import { useData } from "../../contexts/DataProvider";

// Components
import Input from '../Input/Input';
import Selection from '../Selection/Selection';
import Dropdown from '../Dropdown/Dropdown';

function PatientInfo() {
    const { state } = useData();
    const { patient, patientInfo } = state;
    const { height, dob, gender, oversight } = patientInfo;
    const adult = [
        {
            name: "yes",
            label: "Yes",
            value: true
        },
        {
            name: "no",
            label: "No",
            value: false
        }
    ];
    const patientGender = [
        {
            name: "male",
            label: "Male",
            value: "Male"
        },
        {
            name: "female",
            label: "Female",
            value: "Female"
        }
    ];
    const patientEthnicity = [
        {
            name: "americanIndianOrAlaskaNative",
            label: "American Indian or Alaska Native"
        },
        {
            name: "asian",
            label: "Asian"
        },
        {
            name: "black",
            label: "Black or African American"
        },
        {
            name: "hawaiianNativeOrPacificIslander",
            label: "Native Hawaiian or Other Pacific Islander"
        },
        {
            name: "hispanicOrLatino",
            label: "Hispanic or Latino"
        },
        {
            name: "white",
            label: "White"
        },
        {
            name: "twoOrMore",
            label: "Two or More Races"
        },
        {
            name: "otherRace",
            label: "Other"
        },
    ];

    return (
        <div className="case__content case__content--default">
            <div className="case__column">
                <Input 
                    label="Full Name"
                    name="name"
                    type="text"
                    callback="PATIENT_NAME"
                    value={patient}
                />
                <div className="case__row">
                    <Input 
                        label="Height"
                        name="height"
                        type="number"
                        criteria="cm"
                        callback="PATIENT_HEIGHT"
                        value={height}
                    />
                    <Input 
                        label="Date of Birth"
                        name="dob"
                        type="date"
                        callback="PATIENT_BIRTHDAY"
                        value={dob}
                    />
                </div>
                <Dropdown 
                    label="Ethnicity"
                    name="ethnicity"
                    type="radio"
                    callback="PATIENT_ETHNICITY"
                    list={patientEthnicity}
                />
            </div>
            <div className="case__column">
                <Selection 
                    label="Gender"
                    name="gender"
                    type="radio"
                    callback="PATIENT_GENDER"
                    list={patientGender}
                    data={gender}
                />
                <Selection 
                    label="Is a parent or guardian overseeing treatment?"
                    name="oversight"
                    type="radio"
                    callback="PATIENT_OVERSIGHT"
                    list={adult}
                    data={oversight}
                />
            </div>
        </div>
    );
}
export default PatientInfo;

/*

                    <Dropdown 
                        label="Ethnicity"
                        name="ethnicity"
                        type="radio"
                        callback="patientEthnicity"
                        list={ethnicity}
                    />
                    <Selection 
                        label="Gender"
                        name="gender"
                        type="radio"
                        callback="patientGender"
                        list={gender}
                    />
                                        <Selection 
                        label="Ethnicity"
                        name="ethnicity"
                        type="radio"
                        callback="patientEthnicity"
                        list={ethnicity}
                    />
*/

/*
import React, {useState, useEffect} from 'react';
import { useCaseData, useCaseStep } from "../../contexts/CaseProvider";
import "../CaseForm/CaseForm.scss";

// Components
import Input from '../Input/Input';
import Dropdown from '../Dropdown/Dropdown';

function Step1() {
    const { dispatch, state } = useCaseData();
    const { currentStep } = useCaseStep();
    const [ display, setDisplay ] = useState("current");

    useEffect(() => {
        (currentStep === 1
            ?   setDisplay("current")
            :   setDisplay("hidden")
        )
    }, [currentStep]);

    return (
        <div className={`case__step case__step--${display}`}>
            <h1 className="case__header">About the Patient</h1>
            <p className="case__details">This information is required to generate a computerized cephalometirc analysis and understand the needs of the patient:</p>
            <div className="case__content case__content--horizontal">
                <div className="case__section">
                    <Input 
                        label="Full Name"
                        name="name"
                        type="text"
                        placeholder=""
                        callback="patientName"
                        path={state.patientInfo.name}
                    />
                    <div className="case__divider">
                        <div className="case__subsection">
                            <label className="case__label case__label--header" for="age">Age</label>
                            <input
                                className="case__input case__input--text"
                                type="number"
                                name="age"
                                placeholder=""
                                onChange={(e) => dispatch ({
                                    type: "patientAge",
                                    payload: e.target.value
                                })}
                                value={state.patientInfo.age}
                            />
                        </div>
                        <div className="case__subsection">
                            <label className="case__label case__label--header" for="dob">Date of Birth</label>
                            <input
                                className="case__input case__input--text"
                                type="number"
                                name="dob"
                                placeholder="mm / dd / yy"
                                onChange={(e) => dispatch ({
                                    type: "patientBirthday",
                                    payload: e.target.value
                                })}
                                value={state.patientInfo.dob}
                            />
                        </div>
                    </div>
                    <label className="case__label case__label--header" for="height">Height</label>
                    <input
                        className="case__input case__input--text"
                        type="number"
                        name="height"
                        placeholder=""
                        onChange={(e) => dispatch ({
                            type: "patientHeight",
                            payload: e.target.value
                        })}
                        value={state.patientInfo.height}
                    />
                </div>
                <div className="case__section">
                    <Dropdown />
                    <label className="case__label case__label--header" for="gender">Gender</label>
                    <ul 
                        className="case__selections"                             
                        onChange={(e) => dispatch ({
                            type: "patientGender",
                            payload: e.target.value
                        })}>
                        <li className="case__option">
                            <input 
                                className="case__field case__field--radio"
                                type="radio" 
                                id="male" 
                                name="gender"
                                value="male"
                            />
                            <label for="male">Male</label>
                        </li>
                        <li className="case__option">
                            <input 
                                className="case__field case__field--radio"
                                type="radio" 
                                id="female" 
                                name="gender"
                                value="female"
                            />
                            <label for="female">Female</label>
                        </li>
                        <li className="case__option">
                            <input 
                                className="case__field case__field--radio"
                                type="radio"
                                id="other" 
                                name="gender"
                                value="other"
                            />
                            <label for="other">Other</label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Step1;import React, {useState, useEffect} from 'react';
import { useCaseData, useCaseStep } from "../../contexts/CaseProvider";
import "../CaseForm/CaseForm.scss";

// Components
import Input from '../Input/Input';
import Dropdown from '../Dropdown/Dropdown';

function Step1() {
    const { dispatch, state } = useCaseData();
    const { currentStep } = useCaseStep();
    const [ display, setDisplay ] = useState("current");

    useEffect(() => {
        (currentStep === 1
            ?   setDisplay("current")
            :   setDisplay("hidden")
        )
    }, [currentStep]);

    return (
        <div className={`case__step case__step--${display}`}>
            <h1 className="case__header">About the Patient</h1>
            <p className="case__details">This information is required to generate a computerized cephalometirc analysis and understand the needs of the patient:</p>
            <div className="case__content case__content--horizontal">
                <div className="case__section">
                    <Input 
                        label="Full Name"
                        name="name"
                        type="text"
                        placeholder=""
                        callback="patientName"
                        path={state.patientInfo.name}
                    />
                    <div className="case__divider">
                        <div className="case__subsection">
                            <label className="case__label case__label--header" for="age">Age</label>
                            <input
                                className="case__input case__input--text"
                                type="number"
                                name="age"
                                placeholder=""
                                onChange={(e) => dispatch ({
                                    type: "patientAge",
                                    payload: e.target.value
                                })}
                                value={state.patientInfo.age}
                            />
                        </div>
                        <div className="case__subsection">
                            <label className="case__label case__label--header" for="dob">Date of Birth</label>
                            <input
                                className="case__input case__input--text"
                                type="number"
                                name="dob"
                                placeholder="mm / dd / yy"
                                onChange={(e) => dispatch ({
                                    type: "patientBirthday",
                                    payload: e.target.value
                                })}
                                value={state.patientInfo.dob}
                            />
                        </div>
                    </div>
                    <label className="case__label case__label--header" for="height">Height</label>
                    <input
                        className="case__input case__input--text"
                        type="number"
                        name="height"
                        placeholder=""
                        onChange={(e) => dispatch ({
                            type: "patientHeight",
                            payload: e.target.value
                        })}
                        value={state.patientInfo.height}
                    />
                </div>
                <div className="case__section">
                    <Dropdown />
                    <label className="case__label case__label--header" for="gender">Gender</label>
                    <ul 
                        className="case__selections"                             
                        onChange={(e) => dispatch ({
                            type: "patientGender",
                            payload: e.target.value
                        })}>
                        <li className="case__option">
                            <input 
                                className="case__field case__field--radio"
                                type="radio" 
                                id="male" 
                                name="gender"
                                value="male"
                            />
                            <label for="male">Male</label>
                        </li>
                        <li className="case__option">
                            <input 
                                className="case__field case__field--radio"
                                type="radio" 
                                id="female" 
                                name="gender"
                                value="female"
                            />
                            <label for="female">Female</label>
                        </li>
                        <li className="case__option">
                            <input 
                                className="case__field case__field--radio"
                                type="radio"
                                id="other" 
                                name="gender"
                                value="other"
                            />
                            <label for="other">Other</label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Step1;


*/


/*
                    <label className="case__label case__label--header" for="name">Full Name</label>
                    <input
                        className="case__input case__input--text"
                        type="text"
                        name="name"
                        placeholder=""
                        onChange={(e) => dispatch ({
                            type: "patientName",
                            payload: e.target.value
                        })}
                        value={state.patient}
                    />

*/

/*

                    <label className="case__label case__label--header" for="ethnicity">Ethnicity</label>
                    <select 
                        className="case__input case__input--text"
                        name="ethnicity" 
                        id="ethnicity"
                        onChange={(e) => dispatch ({
                            type: "patientEthnicity",
                            payload: e.target.value
                        })}>
                        <option 
                            value="American Indian or Alaska Native">
                            American Indian or Alaska Native
                        </option>
                        <option 
                            value="Asian">
                            Asian
                        </option>
                        <option 
                            value="Black or African Amerrican">
                            Black or African American
                        </option>
                        <option 
                            value="Native Hawaiian or Other Pacific Islander">
                            Native Hawaiian or Other Pacific Islander
                        </option>
                        <option 
                            value="White">
                            White
                        </option>
                        <option 
                            value="Two or More Races">
                            Two or More Races
                        </option>
                        <option 
                            value="Other">
                            Other
                        </option>
                    </select>

*/