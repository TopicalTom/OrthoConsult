import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useData } from "../../contexts/DataProvider";
import "./ScrollView.scss";

const Review = () => {
    const { state } = useData();
    const { caseType, patient, patientInfo, habits, dental, joint, facial } = state;
    const { model, space } = dental;
    const { clicking, popping, locking, maxOpening, rangeOfMotion, issues } = joint;

    return (
        <div className="review">
        </div>
    );
};

export default Review;

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