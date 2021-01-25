import React, {useState, useEffect} from 'react';
import './VideoCarousel.scss';

import platformVideos from '../../templates/platform';

const VideoCarousel = () => {
    const [ index, setIndex ] = useState(0);
    const [ autoPlay, setAutoPlay ] = useState(true);
    const [ preview, setPreview ] = useState(platformVideos[index]);
    
    // Transitions to Next Image
    const next = () => {
        const newIndex = index + 1;

        if (index < 3) {
            setIndex(newIndex);
        } else {
            setIndex(0);
        }
        setPreview(platformVideos[index]);
    }

    // Stops on Current Image
    const pause = () => {
        setAutoPlay(!autoPlay);
    }

    // Loops images if autoPlay = true
    useEffect(() => {
        if (autoPlay) {
            setTimeout(() => next(), 12000);
        }
    }, [index, autoPlay]);

    return (
        <section className="video">
            <img 
                className="video__preview" 
                src={preview.video}
            />
            <span 
                className="video__context">
                {preview.screen} (pictured)
            </span>
            <div className="video__details">
                <p 
                    className="video__title">
                    {preview.category}
                </p>
                <p 
                    className="video__description">
                    {preview.details}
                </p>
                <button 
                    className="video__switch"
                    onClick={() => next()}>
                    Next
                </button>
            </div>
        </section>
    )
};

export default VideoCarousel;

/*
import React, {useState, useEffect} from 'react';
import './VideoCarousel.scss';

// Assets 
import send from '../../assets/images/marketingevaluation.png';
import cases from '../../assets/images/marketingcases.png';
import study from '../../assets/images/marketingstudy.png';
import resources from '../../assets/images/marketingresources.png';

const VideoCarousel = () => {
    const options = [
        {
            category: "Submit cases",
            details: "Using our custom evaluation form, provide patient details and records.",
            preview: send
        },
        {
            category: "Pay securely",
            details: "Payments are handled by Stripe, a leading provider in secure online payments.",
            preview: cases
        },
        {
            category: "Review records",
            details: "This is information about this accolade and why people should care.",
            preview: study
        },
        {
            category: "Get feedback",
            details: "This is information about this accolade and why people should care.",
            preview: resources
        }
    ]

    const [currentPreview, setCurrentPreview] = useState(options[0].preview);

    return (
        <section className="video">
            <div className="video__options">
                {options.map((item) => {
                    return (
                        <div className="video__block">
                            <p 
                                className="video__category">
                                {item.category}
                            </p>
                            <p 
                                className="video__details">
                                {item.details}
                            </p>
                            <button 
                                className="video__toggle"
                                onClick={() => setCurrentPreview(item.preview)}>
                                Preview
                            </button>
                        </div>
                    )
                })}
            </div>
            <img 
                className="video__preview" 
                src={currentPreview}
            />
        </section>
    )
};

export default VideoCarousel;

*/