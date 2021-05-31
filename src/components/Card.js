import React from 'react';

const Card = ({ mood, artist, email, filepath }) => {
    // console.log(`${ imgfile }`);
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            {/* <img alt='Art 1' src={require(`${ imgfile }`).default} width="200" height="200"/> */}
            <img alt='Art for your mood' src={`${ filepath }`} width="200" height="200"/> 
            <div>
                <h2>{mood}</h2>
                <p>{artist}</p>
                {/* <h4>{artist}</h4> */}
                {/* <p>{email}</p> */}
            </div>
        </div>
    );
}

export default Card;