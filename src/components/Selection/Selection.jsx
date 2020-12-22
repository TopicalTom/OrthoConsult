import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useData } from "../../contexts/DataProvider";
import "./Selection.scss";

// Components
import Input from '../Input/Input';

const Selection = (props) => {
    const { dispatch, state } = useData();
    const { label, type, name, callback, list, data} = props;
    const [selected, setSelected] = useState(data);

    useEffect(() => {
        setSelected(data)
    }, [state]);

    return (
        <div className="selection">
            <label className="selection__label" for={name}>{label}</label>
            <ul className="selection__list">
                {list && list.map((item) => {
                    return (
                        <li 
                            className="selection__item" 
                            key={uuidv4()}
                            onClick={() => dispatch ({
                                type: callback,
                                payload: item.value
                            })}>
                            <input 
                                className="selection__input"
                                type={type}
                                checked={selected === item.value ? true : false }
                                name={name}
                                id={item.name}
                                value={item.value}
                            />
                            <div className="selection__container">
                                <label className="selection__option" forHTML={item.name}>{item.label}</label>
                                {item.field === true
                                    ?   <input 
                                            className={`selection__field selected__field--${selected !== item.value ? "disabled" : "active"}`}
                                            disabled={selected !== item.value ? true : false}
                                            placeholder={item.placeholder}
                                        />
                                    :   <></>
                                }
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Selection;