import React, { useState, useEffect } from 'react';
import { useData } from "../../contexts/DataProvider";
import "./Card.scss";

// Components
import Input from '../Input/Input';

const Card = (props) => {
    const { dispatch, state } = useData();
    const { id, name, callback, label, details, type, value, field } = props;
    const [selected, setSelected] = useState(value);

    useEffect(() => {
        setSelected(value)
    }, [state]);

    return (
        <div 
            className={`card card--${selected == true ? "selected" : "default"}`} 
            onClick={() => dispatch ({
                type: callback,
                payload: selected !== true ? true : false
            })}>
            <input 
                className="card__input" 
                type={type} 
                id={id} 
                name={name}
                checked={selected}
                value={value}
            />
            <div className="card__content">            
                <label 
                    className={`card__label card__label--${selected == true ? "selected" : "default"} `} 
                    for={name}>
                    {label}
                </label>
                <p 
                    className={`card__details card__details--${selected == true ? "selected" : "default"} `}>
                    {details}
                </p>
                {field === true
                    ?   <input 
                            className="card__field" 
                            type="text"
                            placeholder="ex: MVA"
                        />
                    :   <></>
                }
            </div>
        </div>
    );
};

export default Card;