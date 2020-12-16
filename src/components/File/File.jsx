import React, { useState, useEffect } from 'react';
import { useData } from "../../contexts/DataProvider";
import './File.scss';

const File = (props) => {
    const { src, id, progress } = props;
    const { dispatch } = useData();

    return (
        <article className="file">
            <img 
                className="file__preview" 
                src={src}
            />
            <div className="file__details">
                <div className="file__content">
                    <div className="file__context">
                        <p 
                            className="file__name">
                            File Name
                        </p>
                        <h5 
                            className="file__status">
                            {progress !== 100 ? "Uploading" : "Completed"}
                        </h5>
                    </div>
                    <button
                        className="file__remove"
                        onClick={() => dispatch ({
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