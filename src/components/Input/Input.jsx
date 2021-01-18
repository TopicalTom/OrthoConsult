import React from 'react';
import { useEvaluation } from "../../contexts/EvaluationProvider";
import { useValidation } from "../../contexts/ValidationProvider";
import "./Input.scss";

// Components
import Help from "../Help/Help";

const Input = (props) => {
    const { dataDispatch } = useEvaluation();
    const { validationDispatch } = useValidation();
    const { label, type, name, group, path, placeholder, callback, value, help, criteria, check } = props;

    function handleInput(e) {
        
        // Send Data for storage
        dataDispatch ({
            type: callback,
            payload: {
                name: name,
                group: group,
                path: path,
                value: e.target.value,
            }
        })
        
        // Checks Data for validation
        validationDispatch ({
            type: check,
            payload: {
                name: name,
                value: e.target.value,
            }
        })
    }
    
    return (
        <div className="input">
            <div className="input__header">
                <label className="input__label" htmlFor={name}>{label}</label>
                {help
                    ?   <Help className="input__help" details={help} />
                    :   <></>
                }
            </div>
            <div className="input__container">
                {criteria
                    ?   <p 
                            className="input__criteria">
                            {criteria}
                        </p>
                    :   <></>
                }
                <input
                    className="input__field"
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={(e) => handleInput(e)}
                    value={value}
                />
            </div>
        </div>
    );
};

export default Input;

/*

import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "./Input.scss";

// Components
import Help from "../Help/Help";

const Input = (props) => {
    const { dispatch } = useData();
    const { label, type, name, placeholder, callback, value, help, criteria} = props;

    return (
        <div className="input">
            <div className="input__header">
                <label className="input__label" forHTML={name}>{label}</label>
                {help
                    ?   <Help className="input__help" details={help} />
                    :   <></>
                }
            </div>
            <div className="input__container">
                {criteria
                    ?   <p 
                            className="input__criteria">
                            {criteria}
                        </p>
                    :   <></>
                }
                <input
                    className="input__field"
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={(e) => dispatch ({
                        type: callback,
                        payload: e.target.value
                    })}
                    value={value}
                />
            </div>
        </div>
    );
};

export default Input;

*/