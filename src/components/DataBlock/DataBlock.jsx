import React, {useState} from 'react';
import "./DataBlock.scss";

const DataBlock = (props) => {
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
                <p className="data__title">{title}</p>
                <button 
                    className="data__button"
                    onClick={() => handleExpansion()}>
                    {expanded ? "Hide" : "Show"}
                </button>
            </header>
            {expanded &&
                <div className="data__block">
                    {data
                        ?   <p className="data__content">{data}</p>
                        :   <p className="data__empty">Nothing provided</p>
                    }
                </div>
            }
        </article>   
    );
};

export default DataBlock;