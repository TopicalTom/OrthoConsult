import React, { useState, useEffect } from 'react';
import { useEvaluation } from '../../contexts/EvaluationProvider';
import './File.scss';

const File = (props) => {
    const { preview, id, name } = props;
    const { recordDispatch } = useEvaluation();

    return (
        <article className="file">
            <img 
                className="file__preview" 
                src={preview}
            />
            <div className="file__details">
                <div className="file__content">
                    <div className="file__context">
                        <p 
                            className="file__name">
                            {name}
                        </p>
                        <h5 
                            className="file__size">
                        </h5>
                    </div>
                    <button
                        className="file__remove"
                        onClick={() => recordDispatch ({
                            type: "removeRecord",
                            payload: id
                        })}
                        >
                            X
                    </button>
                </div>
            </div>
        </article>
    );
}

export default File;