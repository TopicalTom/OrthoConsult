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
                <label className="input__label" for={name}>{label}</label>
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