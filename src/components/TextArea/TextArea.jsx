import React from 'react';
import { useEvaluation } from "../../contexts/EvaluationProvider";
import { useValidation } from "../../contexts/ValidationProvider";
import "./TextArea.scss";

// Components
import Help from "../Help/Help";

const TextArea = (props) => {
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
        <div className="textarea">
            <div className="textarea__header">
                <label className="textarea__label" for={name}>{label}</label>
                {help
                    ?   <Help details={help} />
                    :   <></>
                }
            </div>
            <div className="textarea__container">
                {criteria
                    ?   <p 
                            className="textarea__criteria">
                            {criteria}
                        </p>
                    :   <></>
                }
                <textarea
                    className="textarea__field"
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

export default TextArea;