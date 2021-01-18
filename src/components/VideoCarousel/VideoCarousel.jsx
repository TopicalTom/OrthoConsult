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
            details: "This is information about this accolade and why people should care.",
            preview: send
        },
        {
            category: "Review records",
            details: "This is information about this accolade and why people should care.",
            preview: cases
        },
        {
            category: "Get feedback",
            details: "This is information about this accolade and why people should care.",
            preview: study
        },
        {
            category: "And more...",
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