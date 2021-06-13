import React from 'react';
import './Card.scss'

const Card = (props) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img alt='Art for your mood' src={`${ props.art.filepath }`} />
                </div>
                <div className="flip-card-back">
                    <h1>{props.art.mood}</h1>
                    <p>{props.art.quote}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;