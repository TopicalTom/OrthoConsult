import React, { useReducer } from 'react';
import { useEvaluation } from "../../contexts/EvaluationProvider";
import { useValidation } from "../../contexts/ValidationProvider";
import "./Option.scss";

const Option = (props) => {
    const { dataDispatch } = useEvaluation();
    const { validationDispatch } = useValidation();
    const { type, id, name, group, path, callback, label, details, value, data, check, preview } = props;
    //const [ selection, data ] = useReducer(selectionReducer, initialData);

    const matchCriteria = data === value ? "selected" : "default";
    const booleanCriteria = value === true ? "selected" : "default";
    const aCheck = data === value ? true : false;
    const typeCheck = type === "radios";

    /*
    function selectionReducer(selection, action) {
        switch (data) {

            case action.length === 0:
                return selection = "default"

            case action !== value:
                return selection = "unselected"
            
            case action === value:
                return selection = "selected"
            
        }
    }
    */

    function handleInput() {
        
        dataDispatch ({
            type: callback,
            payload: {
                name: name,
                group: group,
                path: path,
                value: typeCheck ? value : !value
            }
        })

        validationDispatch ({
            type: check,
            payload: {
                name: typeCheck ? name : group,
                value: typeCheck ? value : path
            }
        })
    }

    return (
        <div 
            className={`option option--${typeCheck ? matchCriteria : booleanCriteria}`} 
            onClick={() => handleInput()}>
            <input 
                className={`option__input option__input--${typeCheck ? "hidden" : "visible"}`}
                type="checkbox" 
                id={name} 
                name={name}
                checked={typeCheck ? aCheck : value}
                value={typeCheck ? data : value}
            />
            <div className="option__content">            
                <label 
                    className={`option__label option__label--${typeCheck ? matchCriteria : booleanCriteria} `} 
                    htmlFor={name}>
                    {label}
                </label>
                <p 
                    className={`option__details option__details--${typeCheck ? matchCriteria : booleanCriteria} `}>
                    {details}
                </p>
                {preview &&
                    <img
                        src={preview}
                        alt={`${name} preview`}
                    />
                }
            </div>
        </div>
    );
};

export default Option;