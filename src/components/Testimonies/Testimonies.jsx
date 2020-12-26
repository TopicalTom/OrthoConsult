import React from 'react'
import './Testimonies.scss'

// Assets
import test1 from '../../assets/images/test1.jpg';
import test2 from '../../assets/images/test2.jpg';
import test3 from '../../assets/images/test3.jpg';

const Testimonies = () => {
    const testimonies = [
        {
            name: "test1",
            src: test1
        },
        {
            name: "test2",
            src: test2
        },
        {
            name: "test3",
            src: test3
        }
    ]
    
    return (
        <>
            {testimonies.map((item) => {
                return (
                    <img className={`testimonies testimonies--${item.name}`} src={item.src}/>
                )
            })}
        </>
    )
};

export default Testimonies;