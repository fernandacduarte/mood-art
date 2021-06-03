import React from 'react'
// import Front from './Front'
// import Back from './Back'
import './FlipCard.scss'

const FlipCard = (props) => {
    //debug
    // console.log(props.isFlipped);
    
    // const cardClass = "card-container fl w-100 w-third-ns pa2" + (props.isFlipped ? " flipped" : "");
    const cardClass = "card fl " + (props.isFlipped ? " flipped" : "");
    return(
        // <div className="card-container mw9 center ph3-ns">
        // <div className="card-container center fl w-28 pa3">
        // <div className="card-container mw9 center ph3-ns">
        <div className="card-container">
            {/* <div className="cf ph2-ns"> */}
                <div onMouseEnter={props.onFlip} onMouseLeave={props.onFlip} className={cardClass}>
                    <Front mood={props.mood}/>
                    <Back />
                </div>
            {/* </div> */}
        </div>
    );
}

const Front = (props) => {
    return (
        <div className="front">
            <ImageArea mood={props.mood}/>
            <MainArea />
        </div>
    )
}

const Back = () => {
    return (
        <div className="back">
            <p>Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post.</p>
            <p>Bloggity bloggity bloggity blog. This would be the full text of the abbreviated blog post.</p>
        </div>
    )
}

const ImageArea = (props) => {
    return (
        <div className="main-area">
            <div className="image-container">
                <img className="image-container card-image" src="https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png"></img>
                {/* <h1 className="title">Happy</h1> */}
            </div>
            {/* <h1 className="blog-content"> */}
            <h1>
                {props.mood}
            </h1>
        </div>
    )
}

const MainArea = () => {
    return (
        <div className="main-area">
            <div className="blog-post">
            {/* <p className="date">{new Date().toLocaleDateString()}</p> */}
            
            {/* <p className="read-more">Hover to read more...</p> */}

            </div>

        </div>
    )
}

export default FlipCard;