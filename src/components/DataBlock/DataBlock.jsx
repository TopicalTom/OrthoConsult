import React from 'react';
import "./DataBlock.scss";

const DataBlock = (props) => {
    const { data, title } = props;

    return (
        <article className="data__block">
            <p className="data__title">{title}</p>
            {data
                ?   <p>{data}</p>
                :   <p className="data__empty">Nothing provided</p>
            }
        </article>   
    );
};

export default DataBlock;