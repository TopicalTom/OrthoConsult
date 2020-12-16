import React from 'react';
import "./Categorize.scss";

// Image
import test from "../../assets/images/Person.jpg";

// Components
import Options from "../Options/Options";

const Categorize = (props) => {
    const { name, label, list } = props;

    return (
        <div className="categorize">
            <label className="categorize__label" for={name}>{label}</label>
            <ul className="categorize__list">
                {list && list.map((option) => {
                    return (
                        <Options 
                            id={option.id} 
                            callback={option.callback}
                            label={option.label}
                            data={option.data}
                        />
                    )
                })}
            </ul>
        </div>
    );
};

export default Categorize;

/*

import React, {useState} from 'react';
import { useData } from "../../contexts/DataProvider";
import "./Categorize.scss";

// Image
import test from "../../assets/images/Person.jpg";

const Categorize = (props) => {
    const { dispatch } = useData();
    const { name, callback, label, type, list } = props;
    const [selected, setSelected] = useState("");

    return (
        <div className="categorize">
            <img
                className="categorize__image" 
                src={test}
            />
            <label className="categorize__label" for={name}>{label}</label>
            <ul 
                className="categorize__list"
                onChange={(e) => dispatch ({
                    type: callback,
                    payload: e.target.value
                })}>
                {list && list.map((item) => {
                    return (
                        <li className={`categorize__item categorize__item--${selected === item.id ? "selected" : "default"}`} onClick={() => setSelected(item.id)}>
                            <input 
                                className="categorize__input"
                                type={type}
                                checked={selected === item.id ? true : false }
                                name={name}
                                id={item.id}
                                value={item.value}
                            />
                            <label className="categorize__option" for={item.id}>{item.label}</label>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Categorize;

*/