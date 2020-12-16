import React, {useState} from 'react';
import { uid } from 'react-uid';
import { useData } from "../../contexts/DataProvider";
import "./Dropdown.scss";

// Icons
import icon from "../../assets/icons/dropdown.svg";

const Dropdown = (props) => {
    const { dispatch, state } = useData();
    const { label, type, name, placeholder, callback, value, list} = props;
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selections, updateSelections] = useState({});

    function toggleDropdown() {
        {dropdownOpen !== true ? setDropdownOpen(true) : setDropdownOpen(false)}
    }

    return (
        <div className="dropdown">
            <label className="dropdown__label">{label}</label>
            <div className="dropdown__container" onClick={toggleDropdown}>
                <img 
                    className={`dropdown__icon dropdown__icon--${dropdownOpen ? "active" : "inactive"}`}
                    src={icon}
                />
                <input 
                    disabled
                    className={`dropdown__preview dropdown__preview--${dropdownOpen ? "active" : "inactive"}`}
                    placeholder="Select one"
                    onChange={updateSelections}
                    value={selections.length !== null ? "Select one" : ""}
                />
            </div>
            {dropdownOpen &&
                <ul className="dropdown__list">
                    {list && list.map((item) => {
                        return (
                            <li className="dropdown__item" key={uid}>
                                <input 
                                    className="dropdown__select"
                                    type={type}
                                    onChange={(e) => dispatch ({
                                        type: item.callback,
                                        payload: e.target.value
                                    })}
                                    value={item.value}
                                />
                                <label className="dropdown__selection">{item.label}</label>
                            </li>
                        )
                    })}
                </ul>
            }
        </div>
    );
};

export default Dropdown;

/*
    label=""
    type="check / radio"
    list={}
*/