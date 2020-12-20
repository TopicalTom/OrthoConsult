import React from 'react';
import "../Case/Case.scss";

// Contexts
import { useData } from "../../contexts/DataProvider";

// Components
import Cards from '../Cards/Cards';

function FacialProfile() {
    const { state } = useData();
    const { profile } = state.facial;
    const options = [
        {
            id: "facialClassI",
            label: "Class I",
            details: "This is info about...",
            value: "Class I"
        },
        {
            id: "facialClassII",
            label: "Class II",
            details: "This is info about...",
            value: "Class II"
        },
        {
            id: "facialClassIII",
            label: "Class III",
            details: "This is info about...",
            value: "Class III"
        }
    ]

    return (
        <div className="case__content">
            <Cards
                name="facialProfile"
                callback="FACIAL_PROFILE"
                data={profile}
                options={options}
                type="triple"
            />
        </div>
    );
}
export default FacialProfile;