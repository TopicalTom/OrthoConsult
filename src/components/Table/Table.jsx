import React, { useState, useEffect } from 'react';
import "./Table.scss";

const Table = (props) => {
    const { cases } = props;

    return (
        <section className="table">
            <ul className="table__list table__list--labels">
                <li className="table__row table__row--labels">
                    <h3 className="table__column table__column--labels table__column--type">Type</h3>
                    <h3 className="table__column table__column--labels table__column--value">Value(s)</h3>
                    <h3 className="table__column table__column--labels table__column--category">Category</h3>
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