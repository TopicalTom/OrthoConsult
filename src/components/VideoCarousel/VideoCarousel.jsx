import React, {useState, useEffect} from 'react';
import './VideoCarousel.scss';

import platform from '../../templates/platform';

const VideoCarousel = () => {
    const [ index, setIndex ] = useState(0);
    const [ autoPlay, setAutoPlay ] = useState(true);
    const [ preview, setPreview ] = useState(platform[index].preview);
    
    // Transitions to Next Image
    const next = () => {
        const newIndex = index + 1;

        if (index < 2) {
            setIndex(newIndex);
        } else {
            setIndex(0);
        }
        setPreview(platform[index].preview);
    }

    // Stops on Current Image
    const pause = () => {
        setAutoPlay(!autoPlay);
    }

    // Loops images if autoPlay = true
    useEffect(() => {
        const changePreview = () => {
            if (autoPlay) {
                setTimeout(() => next(), 12000);
            }
        }
        
        return changePreview();
    }, [index, autoPlay]);

    //const [currentPreview, setCurrentPreview] = useState(options[0].preview);

    return (
        <section className="video">
            <div className="video__options">
                {platform.map((item, index) => {
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
                                onClick={() => setPreview(platform[index].preview)}>
                                Preview
                            </button>
                        </div>
                    )
                })}
            </div>
            <img 
                className="video__preview" 
                src={preview}
            />
            <p 
                className="video__caption">
                {platform[index].screen} (pictured)
            </p>
        </section>
    )
};

export default VideoCarousel;

/*
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

*/