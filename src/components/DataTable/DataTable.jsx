import React, { useState } from 'react';
import "./DataTable.scss";

const DataTable = (props) => {
    const { data, title } = props;
    const [ expanded, setExpanded ] = useState(true);

    const handleExpansion = () => {
        if (!expanded) {
            setExpanded(true); 
        } else {
            setExpanded(false);
        }
    }

    return (
        <article className="data">
            <header className="data__header">
                <h3 className="data__title">{title}</h3>
                <button 
                    className="data__button"
                    onClick={() => handleExpansion()}>
                    {expanded ? "Hide" : "Show"}
                </button>
            </header>
            {expanded &&
                <div className="data__table">
                    <ul className="data__section data__section--labels">
                        <li className="data__row data__row--labels">
                            <h4 className="data__column data__column--labels data__column--type">DATA</h4>
                            <h4 className="data__column data__column--labels data__column--value">DETAILS</h4>
                        </li>
                    </ul>
                    <ul className="data__section data__section--data">
                        {Object.entries(data).map(([key, value]) => {
                            return (
                                <li className="data__row data__row--data">
                                    <p 
                                        className="data__column data__column--data data__column--type">
                                        {key.match(/([A-Z]?[^A-Z]*)/g).slice(0,-1).join(" ")}
                                    </p>
                                    <p 
                                        className="data__column data__column--data data__column--value">
                                        {value}
                                    </p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            }
        </article>
    );
};

export default DataTable;

/*
import React, { useState, useEffect } from 'react';
import "./DataTable.scss";

const Table = (props) => {
    const { data, title } = props;

    return (
        <section className="table">
            <p className="table__title">{title}</p>
            <ul className="table__list table__list--labels">
                <li className="table__row table__row--labels">
                    <h4 className="table__column table__column--labels table__column--type">DATA</h4>
                    <h4 className="table__column table__column--labels table__column--value">DETAILS</h4>
                </li>
            </ul>
            <ul className="table__list table__list--data">
                {Object.entries(data).map(([key, value]) => {
                    return (
                        <li className="table__row table__row--data">
                            <p className="table__column table__column--data table__column--type">{key}</p>
                            <p className="table__column table__column--data table__column--value">{value}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
};

export default Table;

*/

/*
import React, { useState, useEffect } from 'react';
import "./Table.scss";

const Table = (props) => {
    const { cases } = props;

    return (
        <section className="table">
            <ul className="table__list table__list--labels">
                <li className="table__row table__row--labels">
                    <h4 className="table__column table__column--labels table__column--type">Type</h4>
                    <h4 className="table__column table__column--labels table__column--value">Value(s)</h4>
                    <h4 className="table__column table__column--labels table__column--category">Category</h4>
                </li>
            </ul>
            <ul className="table__list table__list--data">
                {cases && cases.map(data => {
                    return (
                        <li className="table__row table__row--data">
                            <p className="table__column table__column--data table__column--type">{data.type}</p>
                            <p className="table__column table__column--data table__column--value">{data.value}</p>
                            <p className="table__column table__column--data table__column--category">{data.category}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
};

export default Table;

*/