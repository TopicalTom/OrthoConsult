import React from 'react';
import "./DataList.scss";

const DataList = (props) => {
    const { data } = props;

    return (
        <ul className="data__list">
            {Object.entries(data).map(([key, value]) => {
                if(key !== "height") {
                    return (
                        <li>
                            <p>
                                {key}
                            </p>
                            <p>
                                {value}
                            </p>
                        </li>
                )
                } else {
                    return (
                        <li>
                            <p>
                                {key}
                            </p>
                            <p>
                                {value} cm
                            </p>
                        </li>
                 )
                }
            })}
        </ul>
    );
};

export default DataList;