import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useEvaluation } from "../../contexts/EvaluationProvider";
import { useValidation } from "../../contexts/ValidationProvider";
import "./Selection.scss";

const Selection = (props) => {
    const { dataDispatch } = useEvaluation();
    const { validationDispatch } = useValidation();
    const { label, name, group, path, callback, list, data, orientation } = props;

    return (
        <div className="selection">
            <label className="selection__label" for={name}>{label}</label>
            <ul className={`selection__list selection__list--${orientation}`}>
                {list && list.map((item) => {
                    return (
                        <li 
                            className={`selection__item selection__item--${orientation}`} 
                            key={uuidv4()}
                            onClick={() => (
                                dataDispatch ({
                                    type: callback,
                                    payload: {
                                        name: name,
                                        group: group,
                                        path: path,
                                        value: item.value
                                    }
                                }), 
                                validationDispatch ({
                                    type: "CHECK_SELECTION",
                                    payload: {
                                        name: name,
                                        value: item.value
                                    }
                                })
                            )}>
                            <input 
                                className="selection__input"
                                type="radio"
                                checked={data === item.value ? true : false }
                                id={item.id}
                                value={item.value}
                            />
                            <div className="selection__container">
                                <label 
                                    className="selection__option" 
                                    forHTML={item.name}>
                                    {item.label}
                                    {item.link && <a className="selection__link">{item.link}</a>}
                                </label>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Selection;

/*
                                {item.field === true
                                    ?   <input 
                                            className={`selection__field selected__field--${selected !== item.value ? "disabled" : "active"}`}
                                            disabled={selected !== item.value ? true : false}
                                            placeholder={item.placeholder}
                                        />
                                    :   <></>
                                }
*/