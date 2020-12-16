import React, {useState, useEffect} from 'react';
import { uid } from 'react-uid';
import { useData } from "../../contexts/DataProvider";
import "./Options.scss";

const Options = (props) => {
    const { dispatch, state } = useData();
    const { id, callback, data, label } = props;
    const [ selected, setSelected ] = useState(data);

    useEffect(() => {
        setSelected(data)
    }, [state]);

    return (
        <li 
            className={`options__item options__item--${selected == true ? "selected" : "default"}`} 
            onClick={() => dispatch ({
                type: callback,
                payload: selected !== true ? true : false
            })}>
            <input 
                className="options__input"
                type="checkbox"
                name={id}
                id={id}
                checked={selected == true ? true : false }
                value={selected}
            />
            <label className="options__option" for={id}>{label}</label>
        </li>
    );
};

export default Options;

/*
import React from 'react';
import { uid } from 'react-uid';
import { useData } from "../../contexts/DataProvider";
import "./Options.scss";

const Options = (props) => {
    const { dispatch, state } = useData();
    const { list } = props;

    return (
        <div className="options">
            <ul className="options__list">
                {list && list.map((item) => {
                    return (
                        <li className="options__item" key={uid}>
                            <input 
                                className="options__input"
                                type="checkbox"
                                name={item.id}
                                id={item.id}
                                onChange={(e) => dispatch ({
                                    type: item.callback,
                                    payload: e.target.value
                                })}
                                value={item.value}
                            />
                            <label className="options__option" for={item.id}>{item.label}</label>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Options;

*/
