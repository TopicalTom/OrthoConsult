import React, { useState, useEffect } from 'react';
import "./ImageCarousel.scss";

// Templates
import resultsImages from '../../templates/results';

function ImageCarousel() {
    const [ index, setIndex ] = useState(0);
    const [ autoPlay, setAutoPlay ] = useState(true);
    const [ preview, setPreview ] = useState(resultsImages[index]);
    
    // Transitions to Next Image
    const next = () => {
        const newIndex = index + 1;

        if (index < 3) {
            setIndex(newIndex);
        } else {
            setIndex(0);
        }
        setPreview(resultsImages[index]);
    }

    // Stops on Current Image
    const pause = () => {
        setAutoPlay(!autoPlay);
    }

    // Loops images if autoPlay = true
    useEffect(() => {
        if (autoPlay) {
            setTimeout(() => next(), 4000);
        }
    }, [index, autoPlay]);

    return (
        <section className="carousel">
            <diagram className="carousel__preview">
                <span 
                    className="carousel__tag">
                    Before
                </span>
                <img 
                    className="carousel__image carousel__image--bottom"
                    src={preview.before}
                    alt={`Teeth before ${preview.duration} months of active Tx`}
                />
            </diagram>
            <diagram className="carousel__preview">
                <span 
                    className="carousel__tag">
                    After
                </span>
                <img 
                    className="carousel__image carousel__image--bottom"
                    src={preview.after}
                    alt={`Teeth after ${preview.duration} months of active Tx`}
                />
            </diagram>
            <div className="carousel__content">
                <span 
                    className="carousel__caption">
                    {preview.duration} months of active Tx (pictured)
                </span>
                <button
                    className="carousel__button"
                    type="button"
                    onClick={() => pause()}>
                    {autoPlay ? "Pause" : "Play"}
                </button>
            </div>
        </section>
    );
};

export default ImageCarousel;