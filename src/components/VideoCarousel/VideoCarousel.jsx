import React, {useState, useEffect} from 'react';
import './VideoCarousel.scss';

// Assets 
import dashboard from '../../assets/images/dashboard.png';
import dashboard2 from '../../assets/images/dashboard2.png';

const VideoCarousel = () => {
    const options = [
        {
            category: "Send cases",
            details: "This is information about this accolade and why people should care.",
            preview: dashboard
        },
        {
            category: "View cases",
            details: "This is information about this accolade and why people should care.",
            preview: dashboard2
        },
        {
            category: "Retrieve records",
            details: "This is information about this accolade and why people should care.",
            preview: dashboard
        },
        {
            category: "Learn",
            details: "This is information about this accolade and why people should care.",
            preview: dashboard2
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