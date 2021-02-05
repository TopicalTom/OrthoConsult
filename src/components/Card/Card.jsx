import React from 'react';
import { Link } from "react-router-dom";
import "./Card.scss";

// Assets
import feedback from "../../assets/icons/message.svg";

const Card = (props) => {
    const { quickLink, type, icon, name, status, statusCount, className } = props;
    const tense = statusCount === 1 ? "" : "s";
    const empty = statusCount !== 0 ? statusCount : "No";

    return (
        <Link className={`${className} card`}
            to={quickLink}>
            <div className="card__section card__section--context">
                <div className={`card__icon card__icon--${name}`} >
                    <img src={icon}/>
                </div>
                <div className="card__details">
                    <h2>{empty} case{tense}</h2>
                    <p>{status}</p>
                </div>
            </div>
            <div className="card__section card__section--action">
                <span>View case{tense}</span>
            </div>
        </Link>
    );
};

export default Card;