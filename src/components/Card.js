import React from 'react';
import styled from 'styled-components'
import './Card.scss'

const Card = (props) => {
    // const imgH = `${props.art.height/2}px`;
    // const imgW = `${props.art.width/2}px`;
    // const containerH = `${props.art.height/2 + 25}px`;
    // const containerW = `${props.art.width/2 + 25}px`;
    return (
        // <div className="card tc bg-light-green dib br3 pa3 ma2 shadow-5">
        //     <div className="front">
        //         {/* <img alt='Art 1' src={require(`${ imgfile }`).default} width="200" height="200"/> */}
        //         <img alt='Art for your mood' src={`${ props.art.filepath }`} style={{width:imgW, height:imgH}}/> 
        //         <div>
        //             <h2>{props.art.mood}</h2>
        //             {/* <p>{artist}</p> */}
        //             {/* <h4>{artist}</h4> */}
        //             {/* <p>{email}</p> */}
        //         </div>
        //     </div>
        //     {/* <div className="back">
        //         <p>Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post.</p>
        //         <p>Bloggity bloggity bloggity blog. This would be the full text of the abbreviated blog post.</p>
        //     </div> */}
        // </div>


        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    {/* <img alt='Art for your mood' src={`${ props.art.filepath }`} style={{width:imgW, height:imgH}} /> */}
                    <img alt='Art for your mood' src={`${ props.art.filepath }`} />
                </div>
                <div className="flip-card-back">
                    <h1>{props.art.mood}</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                </div>
            </div>
        </div>



    );
}

export default Card;