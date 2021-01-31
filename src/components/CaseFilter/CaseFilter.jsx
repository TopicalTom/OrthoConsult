import React, { useState } from 'react';
import { useDashboard } from '../../contexts/DashboardProvider';
import "./CaseFilter.scss";

// Assets
import filterIcon from "../../assets/icons/filter.svg";

const CaseFilter = (props) => {
    const { className } = props;
    const { filter, addFilter } = useDashboard();
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
            filter: "None (default)",
        },
    ]

    const handleToggle = () => {
        if (!isOpen) {
            setOpen(true)
        } else {
            setOpen(false)
        }
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

                            console.log(filter)
                            console.log(item.filter)
                            return (
                                <li className={`
                                        filter__option 
                                        filter__option--${filter == item.filter ? "active": "inactive"}`}
                                    onClick={() => addFilter(item.filter)}>
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