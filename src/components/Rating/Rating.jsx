import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useData } from "../../contexts/DataProvider";
import "./Rating.scss";

const Rating = (props) => {
    const { dispatch, state } = useData();
    const { name, label, callback, data, ratings} = props;
    const [ selected, setSelected ] = useState(data);

    useEffect(() => {
        setSelected(data)
    }, [state]);

    return (
        <div className="rating">
            <div className="rating__header">
                <label className="rating__label" for={name}>{label}</label>
            </div>
            <ul className="rating__list">
                {ratings && ratings.map((item) => 
                    <li className={`rating__selection rating__selection--${selected === item.option ? "selected" : "default"}`}
                        onClick={() => dispatch ({
                            type: callback,
                            payload: item.option
                        })}
                        key={uuidv4()}>
                        {item.option}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Rating;