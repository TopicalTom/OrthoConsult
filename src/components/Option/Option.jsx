import React from 'react';
import { useEvaluation } from "../../contexts/EvaluationProvider";
import { useValidation } from "../../contexts/ValidationProvider";
import "./Option.scss";

const Option = (props) => {
    const { dataDispatch } = useEvaluation();
    const { validationDispatch } = useValidation();
    const { type, id, name, group, path, callback, label, details, value, data, check } = props;

    //const toggleValue = value !== true ? true : false;
    const matchCriteria = data === value ? "selected" : "default";
    const booleanCriteria = value === true ? "selected" : "default";
    const aCheck = data === value ? true : false;

    function handleInput() {
        
        dataDispatch ({
            type: callback,
            payload: {
                name: name,
                group: group,
                path: path,
                value: type === "radios" || type === "multi" ? value : !value
            }
        })

        validationDispatch ({
            type: check,
            payload: {
                name: type === "radios" || type === "multi" ? name : group,
                value: type === "radios" || type === "multi" ? value : path
            }
        })
    }

    return (
        <div 
            className={`option option--${type === "radios" || type === "multi" ? matchCriteria : booleanCriteria}`} 
            onClick={() => handleInput()}>
            <input 
                className={`option__input option__input--${type === "radios" || type === "multi" ? "hidden" : "visible"}`}
                type="checkbox" 
                id={id} 
                name={name}
                checked={type === "radios" || type === "multi" ? aCheck : value}
                value={type === "radios" || type === "multi" ? data : value}
            />
            <div className="option__content">            
                <label 
                    className={`option__label option__label--${type === "radios" || type === "multi" ? matchCriteria : booleanCriteria} `} 
                    htmlFor={name}>
                    {label}
                </label>
                <p 
                    className={`option__details option__details--${type === "radios" || type === "multi" ? matchCriteria : booleanCriteria} `}>
                    {details}
                </p>
            </div>
        </div>
    );
};

export default Option;