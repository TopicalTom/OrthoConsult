import React from 'react';
import "./ImageCarousel.scss";

// Images
import before from '../../assets/images/before.png';
import after from '../../assets/images/after.png';

function ImageCarousel() {

    return (
        <section className="carousel">
            <diagram className="carousel__preview">
                <span 
                    className="carousel__tag">
                    Before
                </span>
                <img 
                    className="carousel__image"
                    src={before}
                />
            </diagram>
            <diagram className="carousel__preview">
                <span 
                    className="carousel__tag">
                    After
                </span>
                <img 
                    className="carousel__image"
                    src={after}
                />
            </diagram>
        </section>
    );
};

export default ImageCarousel;