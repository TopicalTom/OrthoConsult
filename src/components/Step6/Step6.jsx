import React, {useState, useEffect} from 'react';
import { useData } from "../../contexts/DataProvider";
import "../CaseForm/CaseForm.scss";

// Components
import Input from '../Input/Input';

// Images
import dental from "../../assets/vectors/SpaceShortage.svg";

function Step6() {
    const { state } = useData();
    const { urCentral, ulCentral, urLateral, ulLateral, transpalatal } = state.space;

    return (

            <div className="case__container case__container--default">
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
                            callback="spaceURCentral"
                            value={urCentral}
                        />
                        <Input 
                            label="U/L Central"
                            name="ulCentral"
                            type="number"
                            criteria="mm"
                            callback="spaceULCentral"
                            value={ulCentral}
                        />
                    </div>
                    <div className="case__row">
                        <Input 
                            label="U/R Lateral"
                            name="urLateral"
                            type="number"
                            criteria="mm"
                            callback="spaceURLateral"
                            value={urLateral}
                        />
                        <Input 
                            label="U/L Lateral"
                            name="ulLateral"
                            type="number"
                            criteria="mm"
                            callback="spaceULLateral"
                            value={ulLateral}
                        />
                    </div>
                    <div className="case__row">
                        <Input 
                            label="Transpalatal Distance"
                            name="transpalatal"
                            type="number"
                            criteria="mm"
                            callback="spaceTranspalatal"
                            value={transpalatal}
                        />
                    </div>
                </div>
            </div>
    );
}
export default Step6;

/*
                        <Input 
                            label="Calculation"
                            name="spaceShortage"
                            type="number"
                            help="Helpful info"
                            criteria="mm"
                            callback="spaceShortage"
                            value={shortage}
                        />

*/