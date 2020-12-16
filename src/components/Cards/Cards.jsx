import React, {useState, useEffect} from 'react';
import { useData } from "../../contexts/DataProvider";
import "./Cards.scss";

const Cards = (props) => {
    const { dispatch, state } = useData();
    const { name, callback, options, data} = props;
    const [selected, setSelected] = useState(data);

    useEffect(() => {
        setSelected(data)
    }, [state]);

    return (
        <ul className={`cards cards--${options.length <= 3 ? "default" : "alt"}`}>
            {options && options.map((item) => {
                return (
                    <li 
                        className={`cards__card cards__card--${selected === item.label ? "selected" : "default"}`} 
                        onClick={() => dispatch ({
                            type: callback,
                            payload: item.label
                        })}>
                        <input 
                            className="cards__input" 
                            type="radio"
                            checked={selected === item.label ? true : false }
                            id={item.id} 
                            name={name}
                            value={item.data}
                        />
                        <div className="cards__content">            
                            <label 
                                className={`cards__label cards__label--${selected === item.label ? "selected" : "default"} `} 
                                for={item.id}>
                                {item.label}
                            </label>
                        </div>
                    </li>
                )
            })}
        </ul>
    );
};

export default Cards;

/*
import React, {useState} from 'react';
import { useData } from "../../contexts/DataProvider";
import "./Cards.scss";

const Cards = (props) => {
    const { dispatch, state } = useData();
    const { name, callback, options} = props;
    const [selected, setSelected] = useState("");

    return (
        <ul 
            className={`cards cards--${options.length <= 2 ? "default" : "alt"}`}
            onChange={(e) => dispatch ({
                type: callback,
                payload: e.target.value
            })}>
            {options && options.map((item) => {
                return (
                    <li className={`cards__card cards__card--${selected === item.id ? "selected" : "default"}`} onClick={() => setSelected(item.id)}>
                        <input 
                            className="cards__input" 
                            type="radio"
                            checked={selected === item.id ? true : false }
                            id={item.id} 
                            name={name}
                            value={item.value}
                        />
                        <div className="cards__content">            
                            <label 
                                className={`cards__label cards__label--${selected === item.id ? "selected" : "default"} `} 
                                for={item.id}>
                                {item.label}
                            </label>
                        </div>
                    </li>
                )
            })}
        </ul>
    );
};

export default Cards;
*/