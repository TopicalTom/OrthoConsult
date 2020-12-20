import React from 'react';
import "../Case/Case.scss";

// Contexts
import { useData } from "../../contexts/DataProvider";

// Components
import Input from '../Input/Input';

// Images
import dental from "../../assets/vectors/SpaceShortage.svg";

function Malocclusion() {
    const { state } = useData();
    const { overbite, overjet } = state.model;

    return (
        <div className="case__content case__content--default">
            <div className="case__column">
                <img 
                    className="case__diagram"
                    alt="Space Shortage Diagram"
                    src={dental}
                />
            </div>
            <div className="case__column">
                <div className="case__row">
                    <Input 
                        label="Overjet"
                        name="overjet"
                        type="number"
                        criteria="mm"
                        callback="MODEL_OVERJET"
                        value={overjet}
                    />
                    <Input 
                        label="Overbite"
                        name="overbite"
                        type="number"
                        criteria="%"
                        callback="MODEL_OVERBITE"
                        value={overbite}
                    />
                </div>
            </div>
        </div>
    );
}
export default Malocclusion;