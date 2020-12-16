import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useData } from "../../contexts/DataProvider";
import "./Review.scss";

const Review = () => {
    const { state } = useData();

    return (
        <div className="review">
            <section className="review__section">
                <h3 className="review__title">Case Info</h3>
                <p>Type: {state.caseType}</p>
            </section>
            <section className="review__section">
                <h3 className="review__title">Patient Info</h3>
                <p>Name: {state.patient}</p>
                <p>Height: {state.patientInfo.height}cm</p>
                <p>Date of Birth: {state.patientInfo.dob}</p>
                <p>Gender: {state.patientInfo.gender}</p>
                <p>Ethnicity: {state.patientInfo.ethnicity}</p>
                <p>Motivation: {state.patientInfo.motivation}</p>
                <p>Hygiene: {state.patientInfo.hygiene}</p>
                <p>Finances: {state.patientInfo.finances}</p>
            </section>
            <section className="review__section">
                <h3 className="review__title">Model Classification</h3>
                <p>Left: {state.model.left}</p>
                <p>Right: {state.model.right}</p>
                <p>Overjet: {state.model.overjet}mm</p>
                <p>Overbite: {state.model.overbite}%</p>
            </section>
            <section className="review__section">
                <h3 className="review__title">Space Shortage</h3>
                <p>UR Central: {state.space.urCentral}mm</p>
                <p>UL Central: {state.space.ulCentral}</p>
                <p>UR Lateral: {state.space.urLateral}</p>
                <p>UL Lateral: {state.space.ulLateral}</p>
                <p>Transpalatal: {state.space.transpalatal}</p>
            </section>
            <section className="review__section">
                <h3 className="review__title">Features & Habits</h3>
                <p>Mouth Breather: {state.airway.mouthBreather}</p>
                <p>Snores: {state.airway.snores}</p>
            </section>
            <section className="review__section">
                <h3 className="review__title">TMJ</h3>
                <p>Clicking: {state.tmj.clicking.left}</p>
                <p>Popping: {state.tmj.popping.left}</p>
                <p>Locking: {state.tmj.locking.left}</p>
            </section>
            <section className="review__section">
                <h3 className="review__title">Facial Features</h3>
                <p>Profile: {state.facial.profile}</p>
                <p>Hereditary: {state.facial.hereditary}</p>
                <p>Height: {state.facial.height}</p>
            </section>
            <section className="review__section">
                <h3 className="review__title">Cranial Features</h3>

            </section>
            <section className="review__section">
                <h3 className="review__title">Concerns</h3>

            </section>
            <section className="review__section">
                <h3 className="review__title">Treatment Objectives</h3>

            </section>
            <section className="review__section">
                <h3 className="review__title">Records</h3>

            </section>
        </div>
    );
};

export default Review;