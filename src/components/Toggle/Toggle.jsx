import React from 'react';
import { useEvaluation } from "../../contexts/EvaluationProvider";
//import { useValidation } from "../../contexts/ValidationProvider";
import './Toggle.scss'

const Toggle = (props) => {
    const { dataDispatch } = useEvaluation();
    //const { validationDispatch } = useValidation();
    const { link, id, label, name, callback, value } = props;

    function handleToggle() {
        
        dataDispatch ({
            type: callback,
            payload: {
                name: name,
                value: value !== true ? true : false
            }
        })

        /*
        validationDispatch ({
            type: "CHECK_TOGGLE",
            payload: {
                name: name,
                value: value !== true ? true : false
            }
        })
        */
    }

    return (
        <div className="toggle">
            <input 
                className="toggle__input"
                type="checkbox"
                onClick={() => handleToggle()}
                name={name}
                id={id}
                checked={value}
                value={value}
            />
            <label 
                className="toggle__option" 
                forHTML={name}>
                {label}
                {link && <a className="toggle__link">{link}</a>}
            </label>
        </div>
    )
};

export default Toggle;