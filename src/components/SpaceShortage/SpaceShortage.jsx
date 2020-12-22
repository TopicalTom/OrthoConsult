import React from 'react';
import "../Case/Case.scss";

// Contexts
import { useData } from "../../contexts/DataProvider";

// Components
import Input from '../Input/Input';

// Images
import dental from "../../assets/vectors/SpaceShortage.svg";

function SpaceShortage() {
    const { state } = useData();
    const { urCentral, ulCentral, urLateral, ulLateral, transpalatal } = state.dental.space;

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
                        label="U/R Central"
                        name="urCentral"
                        type="number"
                        criteria="mm"
                        callback="UR_CENTRAL"
                        value={urCentral}
                    />
                    <Input 
                        label="U/L Central"
                        name="ulCentral"
                        type="number"
                        criteria="mm"
                        callback="UL_CENTRAL"
                        value={ulCentral}
                    />
                </div>
                <div className="case__row">
                    <Input 
                        label="U/R Lateral"
                        name="urLateral"
                        type="number"
                        criteria="mm"
                        callback="UR_LATERAL"
                        value={urLateral}
                    />
                    <Input 
                        label="U/L Lateral"
                        name="ulLateral"
                        type="number"
                        criteria="mm"
                        callback="UL_LATERAL"
                        value={ulLateral}
                    />
                </div>
                <div className="case__row">
                    <Input 
                        label="Transpalatal Distance"
                        name="transpalatal"
                        type="number"
                        criteria="mm"
                        callback="TRANSPALATAL_DISTANCE"
                        value={transpalatal}
                    />
                </div>
            </div>
        </div>
    );
}
export default SpaceShortage;