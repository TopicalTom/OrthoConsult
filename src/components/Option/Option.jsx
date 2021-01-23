import React, { useState, useEffect } from 'react';
import { useEvaluation } from "../../contexts/EvaluationProvider";
import { useValidation } from "../../contexts/ValidationProvider";
import "./Option.scss";

const Option = (props) => {
    const { dataDispatch } = useEvaluation();
    const { validationDispatch } = useValidation();
    const { name, group, path, callback, label, details, value, data, check, initialPreview, selectedPreview } = props;
    const [ selected, setSelected ] = useState(false);
    const icon = selected ? selectedPreview : initialPreview

    const matchCriteria = selected ? "selected" : "default";

    useEffect(() => {
        if (data === value) {
            setSelected(true)
        } else {
            setSelected(false)
        }
    }, [data, value]);

    function handleInput() {
        
        dataDispatch ({
            type: callback,
            payload: {
                name: name,
                group: group,
                path: path,
                value: value
            }
        })

        validationDispatch ({
            type: check,
            payload: {
                name: name,
                value: value
            }
        })
    }

    return (
        <div 
            className={`option option--${matchCriteria}`} 
            onClick={() => handleInput()}>
            <div className="option__content">  
                <input 
                    className="option__input option__input--hidden"
                    type="checkbox" 
                    id={name} 
                    name={name}
                    checked={selected === value}
                    //value={value}
                />
                <div className="option__context">
                    <label 
                        className={`option__label option__label--${matchCriteria} `} 
                        htmlFor={name}>
                        {label}
                    </label>
                    <p 
                        className={`option__details option__details--${matchCriteria} `}>
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

export default Option;

/*
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

*/