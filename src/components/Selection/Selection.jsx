import React from 'react';
import { uid } from 'react-uid';
import { useData } from "../../contexts/DataProvider";
import "./Selection.scss";

const Selection = (props) => {
    const { dispatch, state } = useData();
    const { label, type, name, callback, list} = props;

    return (
        <div className="selection">
            <label className="selection__label" for={name}>{label}</label>
            <ul 
                className="selection__list"
                onChange={(e) => dispatch ({
                    type: callback,
                    payload: e.target.value
                })}>
                {list && list.map((item) => {
                    return (
                        <li className="selection__item" key={uid}>
                            <input 
                                className="selection__input"
                                type={type}
                                name={name}
                                id={item.name}
                                value={item.name}
                            />
                            <label className="selection__option" for={item.name}>{item.label}</label>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Selection;