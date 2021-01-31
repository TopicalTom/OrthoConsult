import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDashboard } from '../../contexts/DashboardProvider';
import "./CaseFilter.scss";

// Utilities
import setParams from '../../utils/setParams';

// Assets
import filterIcon from "../../assets/icons/filter.svg";

const CaseFilter = (props) => {
    const { className } = props;
    const history = useHistory();
    const { filter, addFilter, currentCase } = useDashboard();
    const [ isOpen, setOpen ] = useState();

    const options = [
        {
            filter: "Awaiting payment",
        },
        {
            filter: "In review",
        },
        {
            filter: "Reviewed",
        },
        {
            filter: "None",
        },
    ]

    // Toggles Filter Menu
    const handleToggle = () => {
        if (!isOpen) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }

    // Adds Filter parameters to URL
    const handleFilter = (selection) => {
        addFilter(selection);
        const updatedParams = setParams({filter: encodeURI(selection), case: `${currentCase}`});
        history.push(decodeURI(`?${updatedParams}`));
    }

    return (
        <div className={`${className} filter`}>
            <button 
                className="filter__button"
                onClick={() => handleToggle()}>
                <img 
                    className="filter__icon" 
                    src={filterIcon}
                />
            </button>
            {isOpen &&
                <div className="filter__dropdown" onMouseLeave={() => handleToggle()}>
                    <h4 className="filter__label">Filter by:</h4>
                    <ul className="filter__list">
                        {options.map(item => {
                            return (
                                <li className={`
                                        filter__option 
                                        filter__option--${filter == item.filter ? "active": "inactive"}`}
                                    onClick={() => handleFilter(item.filter)}>
                                    {item.filter}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            }
        </div>
    );
};

export default CaseFilter;