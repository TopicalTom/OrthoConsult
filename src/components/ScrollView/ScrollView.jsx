import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useEvaluation } from "../../contexts/EvaluationProvider";
import "./ScrollView.scss";

const Review = () => {
    const { dataState } = useEvaluation();

    return (
        <div className="review">
            <h3 className="review__title">
                Terms of Service
            </h3>
            <p className="review__paragraph">
                In response to your request, the above is a hypothetical evaluation put to you solely for consideration by you as a health professional and not intended to be relied upon. 
                <br/> <span className="review__break" />
                The above remarks are suggested theoretical therapy options derived from the limited records provided by you and from no other source and do not constitute a diagnosis, recommended treatment or assessment for this or any other patient.
                <br/> <span className="review__break" />
                You have physically examined your patient and you are the certified and licensed dental practitioner and are solely responsible for the treatment and care of your patient.  
                <br/> <span className="review__break" /> 
                This hypothetical evaluation is merely an educational exercise to assist you in your overall practice development.  This evaluation is available only to customers of OrthoConsult Ltd. currently under the direct supervision of Dr. James Gordon Doner, DDS Registration #6577 maintaining compliance with the CDTO & RHPA, 1991 related to Laboratory Supervision Standards.
            </p>
            <br/> <span className="review__break" />
            <h3 className="review__title">
                Privacy Policy
            </h3>
            <p className="review__paragraph">
                As required by the Personal Information Protection Electronic Documents Act (PIPEDA), this notice describes how information about you may be used and disclosed, and only to the extent necessary for the services we provide. We are committed to treating and using information about you responsibly.
            </p>
            <br/> <span className="review__break" />
            <p className="review__subtitle">
                How we protect patient's personal information
            </p>
            <ul className="review__list">
                <li className="review__point">
                    Separate keys used to open office where only the patient name, age and any digital records are stored on disk; locked in fire-proof vault in office (these records must be stored indefinitely as it is a requirement of the Registered Dental Technologist Association.
                </li>
                <li className="review__point">
                    A code is required in order to open the computer program. 
                </li>
                <li className="review__point">
                    A unique individual alarm code is required to enter and exit the office building and laboratory. The security service records time, date and individual access.
                </li>
                <li className="review__point">
                    We restrict access to patient’s personal information to employees that need to know that information in order to aid in appliance fabrication and treatment planning. 
                </li>
                <li className="review__point">
                    All physical records are returned to the patient’s dentist. 
                </li>
            </ul>
            <br/> <span className="review__break" />
            <p className="review__subtitle">
                What we require and how we use your information
            </p>
            <ul className="review__list">
                <li className="review__point">
                    We need to know where the teeth are relative to the soft tissue compared skeletally, especially in a growing patient. 
                </li>
                <li className="review__point">
                    We require this information in order to help as an aid in determining the exact treatment required for the patient.
                </li>
            </ul>
            <br/> <span className="review__break" />
            <p className="review__subtitle">
                Your rights
            </p>
            <p className="review__paragraph">
                You have the right to obtain a paper copy of this notice from our laboratory. If you believe your privacy rights have been violated, you have the right to report the violation to our Privacy Officer who will promptly investigate the matter. Please contact our office directly or fax/e-mail your message. 
                <br/> <span className="review__break" />
                Alternatively, if you remain dissatisfied you also have the right to contact the College of Dental Technologists of Ontario:
            </p>
            <br/> <span className="review__break" />
            <ul className="review__list">
                <li className="review__point">
                    Telephone: (416) 438-5003
                </li>
                <li className="review__point">
                    Fax: (416) 438-5004
                </li>
                <li className="review__point">
                    Email: info@cdto.ca
                </li>
            </ul>
        </div>
    );
};

export default Review;

/*
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useData } from "../../contexts/DataProvider";
import "./ScrollView.scss";

const Review = () => {
    const { state } = useData();

    return (
        <div className="review">
            <h3 className="review__title">
                Terms of Service
            </h3>
            <p className="review__paragraph">
                In response to your request, the above is a hypothetical evaluation put to you solely for consideration by you as a health professional and not intended to be relied upon. 
                <br/> <span className="review__break" />
                The above remarks are suggested theoretical therapy options derived from the limited records provided by you and from no other source and do not constitute a diagnosis, recommended treatment or assessment for this or any other patient.
                <br/> <span className="review__break" />
                You have physically examined your patient and you are the certified and licensed dental practitioner and are solely responsible for the treatment and care of your patient.  
                <br/> <span className="review__break" /> 
                This hypothetical evaluation is merely an educational exercise to assist you in your overall practice development.  This evaluation is available only to customers of OrthoConsult Ltd. currently under the direct supervision of Dr. James Gordon Doner, DDS Registration #6577 maintaining compliance with the CDTO & RHPA, 1991 related to Laboratory Supervision Standards.
            </p>
            <br/> <span className="review__break" />
            <h3 className="review__title">
                Privacy Policy
            </h3>
            <p className="review__paragraph">
                As required by the Personal Information Protection Electronic Documents Act (PIPEDA), this notice describes how information about you may be used and disclosed, and only to the extent necessary for the services we provide. We are committed to treating and using information about you responsibly.
            </p>
            <br/> <span className="review__break" />
            <p className="review__subtitle">
                How we protect patient's personal information
            </p>
            <ul className="review__list">
                <li className="review__point">
                    Separate keys used to open office where only the patient name, age and any digital records are stored on disk; locked in fire-proof vault in office (these records must be stored indefinitely as it is a requirement of the Registered Dental Technologist Association.
                </li>
                <li className="review__point">
                    A code is required in order to open the computer program. 
                </li>
                <li className="review__point">
                    A unique individual alarm code is required to enter and exit the office building and laboratory. The security service records time, date and individual access.
                </li>
                <li className="review__point">
                    We restrict access to patient’s personal information to employees that need to know that information in order to aid in appliance fabrication and treatment planning. 
                </li>
                <li className="review__point">
                    All physical records are returned to the patient’s dentist. 
                </li>
            </ul>
            <br/> <span className="review__break" />
            <p className="review__subtitle">
                What we require and how we use your information
            </p>
            <ul className="review__list">
                <li className="review__point">
                    We need to know where the teeth are relative to the soft tissue compared skeletally, especially in a growing patient. 
                </li>
                <li className="review__point">
                    We require this information in order to help as an aid in determining the exact treatment required for the patient.
                </li>
            </ul>
            <br/> <span className="review__break" />
            <p className="review__subtitle">
                Your rights
            </p>
            <p className="review__paragraph">
                You have the right to obtain a paper copy of this notice from our laboratory. If you believe your privacy rights have been violated, you have the right to report the violation to our Privacy Officer who will promptly investigate the matter. Please contact our office directly or fax/e-mail your message. 
                <br/> <span className="review__break" />
                Alternatively, if you remain dissatisfied you also have the right to contact the College of Dental Technologists of Ontario:
            </p>
            <br/> <span className="review__break" />
            <ul className="review__list">
                <li className="review__point">
                    Telephone: (416) 438-5003
                </li>
                <li className="review__point">
                    Fax: (416) 438-5004
                </li>
                <li className="review__point">
                    Email: info@cdto.ca
                </li>
            </ul>
        </div>
    );
};

export default Review;

*/

/*
            <section className="review__section">
                <h3 className="review__title">Case Info</h3>
                <p>Type: {caseType}</p>
            </section>
            <section className="review__section">
                <h3 className="review__title">Patient Info</h3>
                <p>Name: {patient}</p>
                <p>Height: {patientInfo.height}cm</p>
                <p>Date of Birth: {patientInfo.dob}</p>
                <p>Gender: {patientInfo.gender}</p>
                <p>Ethnicity: {patientInfo.ethnicity}</p>
                <p>Motivation: {patientInfo.motivation}</p>
                <p>Hygiene: {patientInfo.hygiene}</p>
                <p>Finances: {patientInfo.finances}</p>
            </section>
            <section className="review__section">
                <h3 className="review__title">Patient Habits</h3>
                <p>{habits.filter(item => item !== false)}</p>
            </section>
            <section className="review__section">
                <h3 className="review__title">Model Classification</h3>
                <p>Left: {model.left}</p>
                <p>Right: {model.right}</p>
                <p>Overjet: {model.overjet}mm</p>
                <p>Overbite: {model.overbite}%</p>
            </section>
            <section className="review__section">
                <h3 className="review__title">Space Shortage Measurements</h3>
                <p>UR Central: {space.urCentral}mm</p>
                <p>UL Central: {space.ulCentral}mm</p>
                <p>UR Lateral: {space.urLateral}mm</p>
                <p>UL Lateral: {space.ulLateral}mm</p>
                <p>Transpalatal: {space.transpalatal}mm</p>
            </section>
            <section className="review__section">
                <h3 className="review__title">Joint Classification</h3>
                <p>Clicking: {clicking.filter(item => item !== false)}</p>
                <p>Popping: {popping.filter(item => item !== false)}</p>
                <p>Locking: {locking.filter(item => item !== false)}</p>
            </section>
            <section className="review__section">
                <h3 className="review__title">Face Classification</h3>
                <p>Profile: {facial.profile}</p>
                <p>Hereditary: {facial.hereditary}</p>
                <p>Height: {facial.height}</p>
                <p>Features: {facial.features.filter(item => item !== false)}</p>
            </section>
            <section className="review__section">
                <h3 className="review__title">Cranial Classification</h3>

            </section>
            <section className="review__section">
                <h3 className="review__title">Concerns</h3>

            </section>
            <section className="review__section">
                <h3 className="review__title">Objectives</h3>

            </section>
*/