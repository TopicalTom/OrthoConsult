import React, { useState, useEffect } from 'react';
import { useEvaluation } from "../../contexts/EvaluationProvider";
import { useValidation } from "../../contexts/ValidationProvider";
import "./Option.scss";

const OptionGroup = (props) => {
    const { dataDispatch, currentQuestion } = useEvaluation();
    const { validationDispatch } = useValidation();
    const { name, group, path, callback, label, details, value, check, initialPreview, selectedPreview } = props;
    const [ selected, setSelected ] = useState(value);
    const icon = selected ? selectedPreview : initialPreview

    const booleanCriteria = selected === true ? "selected" : "default";

    useEffect(() => {
        setSelected(value)
    }, [value, path, currentQuestion]);

    function handleInput() {
        
        dataDispatch ({
            type: callback,
            payload: {
                name: name,
                group: group,
                path: path,
                value: !value
            }
        })

        validationDispatch ({
            type: check,
            payload: {
                name: group,
                value: path
            }
        })
    }

    return (
        <div 
            className={`option option--${booleanCriteria}`} 
            onClick={() => handleInput()}>
            <div className="option__content">  
                <input 
                    className="option__input"
                    type="checkbox" 
                    id={name} 
                    name={name}
                    checked={selected === true}
                />
                <div className="option__context">
                    <label 
                        className={`option__label option__label--${booleanCriteria} `} 
                        htmlFor={name}>
                        {label}
                    </label>
                    <p 
                        className={`option__details option__details--${booleanCriteria} `}>
                        {details}
                    </p>
                </div>          
            </div>
            {initialPreview &&
                <img
                    className="option__preview"
                    src={icon}
                    alt={`${name} preview`}
                />
            }
        </div>
    );
};

export default OptionGroup;