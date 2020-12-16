import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "./TextArea.scss";

// Components
import Help from "../Help/Help";

const TextArea = (props) => {
    const { dispatch } = useData();
    const { label, type, name, placeholder, callback, value, help, criteria} = props;

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

export default TextArea;