import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useData } from "../../contexts/DataProvider";
import { useValidation } from "../../contexts/ValidationProvider";
import "./Cards.scss";

const Cards = (props) => {
    const { dispatch } = useData();
    const { type, name, group, path, callback, options, data, category} = props;

    return (
        <>
        {category 
            ?   <label className="cards__category">{category}</label>
            :   <></>
        }
        <ul className={`cards cards--${type}`}>
            {options && options.map((item) => {
                return (
                    <li 
                        className={`cards__card cards__card--${data === item.value ? "selected" : "default"}`} 
                        onClick={() => dispatch ({
                            type: callback,
                            payload: {
                                name: name,
                                group: group,
                                path: path,
                                value: item.value
                            }
                        })}
                        key={uuidv4()}>
                        <input 
                            className="cards__input" 
                            type="radio"
                            checked={data === item.value ? true : false }
                            id={item.id} 
                            name={name}
                            value={data}
                        />
                        <div className="cards__content">            
                            <label 
                                className={`cards__label cards__label--${data === item.value ? "selected" : "default"} `} 
                                for={item.id}>
                                {item.label}
                            </label>
                        </div>
                    </li>
                )
            })}
        </ul>
        </>
    );
};

export default Cards;

/*
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useData } from "../../contexts/DataProvider";
import { useValidation } from "../../contexts/ValidationProvider";
import "./Cards.scss";

const Cards = (props) => {
    const { dispatch } = useData();
    const { type, name, group, path, callback, options, data, category} = props;
    //const [ selected, setSelected ] = useState(data);

    useEffect(() => {
        setSelected(data)
    }, [state]);

   return (
    <>
    {category 
        ?   <label className="cards__category">{category}</label>
        :   <></>
    }
    <ul className={`cards cards--${type}`}>
        {options && options.map((item) => {
            return (
                <li 
                    className={`cards__card cards__card--${data === item.value ? "selected" : "default"}`} 
                    onClick={() => dispatch ({
                        type: callback,
                        payload: {
                            name: name,
                            group: group,
                            path: path,
                            value: item.value
                        }
                    })}
                    key={uuidv4()}>
                    <input 
                        className="cards__input" 
                        type="radio"
                        checked={data === item.value ? true : false }
                        id={item.id} 
                        name={name}
                        value={data}
                    />
                    <div className="cards__content">            
                        <label 
                            className={`cards__label cards__label--${data === item.value ? "selected" : "default"} `} 
                            for={item.id}>
                            {item.label}
                        </label>
                    </div>
                </li>
            )
        })}
    </ul>
    </>
);
};

export default Cards;

*/