import React, { Component } from 'react'
import SearchBox from '../components/SearchBox'
import CardsList from '../components/CardsList'
import Scroll from '../components/Scroll'
import { arts } from '../components/arts'
import './App.css'
import axios from 'axios';

class App extends Component  {
    constructor() {
        super();
        this.state = {
            arts: arts,
            searchField: '',
        }
    }

    updateArtsQuotes = (responseQuotes) => {
        const currentArtData = this.state.arts;
        const updatedArts = currentArtData.map( (artData) =>  {
            let newArtData = { ...artData };
            const moods = newArtData.keywords.split(" ");
            let foundQuote = false;
            let quotePos = -1;

            for (let mood of moods) {
                for (let i = 0; i < responseQuotes.length; i++) {
                    const quote = responseQuotes[i];
                    if (quote.text.toLowerCase().includes(mood)) {
                        foundQuote = true;
                        newArtData.quote = '"' + quote.text + '"';
                        quotePos = i;
                        break;
                    }
                }
            }

            if (foundQuote) {
                const removedElt = responseQuotes.splice(quotePos, 1);
            } else {
                newArtData.quote = "Error loading quote :x";
            }

            return newArtData;
        });

        this.setState({arts: updatedArts});
    }

    onSearchChange = (event) => { // Use the arrow format here so 'this' refers to App
        this.setState({ searchField: event.target.value });
    }
    
    componentDidMount() {
        /* see: https://www.geeksforgeeks.org/difference-between-fetch-and-axios-js-for-making-http-requests/ */
        /* http request using fetch */
        // fetch("https://type.fit/api/quotes")
        // .then(response => response.json())
        // .then((responseJson) => this.updateArtsQuotes(responseJson));

        /* http request using axios */
        // const response = await axios.get('https://type.fit/api/quotes'); //await: the program waits here until axios.get() is completed
        // const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);

        axios.get('https://type.fit/api/quotes')
             .then((response) => response.data)
             .then((responseData) => this.updateArtsQuotes(responseData));
    }

    render() {
        const { arts, searchField } = this.state;
        const filteredArts = arts.filter(art => {
            return art.keywords.toLowerCase().includes(searchField.toLowerCase());
        });
        // console.log(filteredArts);
        if (arts.length === 0) {
            return <h1>Loading...</h1>
        }
        else {
            return (
                <div className='tc' > 
                    <h1 className='f1'>MoodArt</h1>
                    {/* <h3 className='f3'>Tell me your mood, and I'll give you some art.</h3> */}
                    <h3 className='f3'>Search for a mood. Pick a card. Get some inspiration.</h3>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardsList arts={filteredArts}/>
                        {/* <FlipCard onFlip={this.onFlip} isFlipped={flipped} /> */}
                    </Scroll>
                </div>
            );
        }
    }
}

/*
class App extends React.Component {
    render() {
      return (
        <div className="page-container">
  
          <BlogCard />
          <footer>
            Image credit: <a href="https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png">8pxl on Tumblr</a>
          </footer>
        </div>
      )
    }
  }

class BlogCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { flipped: false };
        this.flip = this.flip.bind(this);
    }

    flip = () => {
        this.setState({ flipped: !this.state.flipped });
    }

    render() {
        return (
        <div onMouseEnter={this.flip} onMouseLeave={this.flip} className={"card-container" + (this.state.flipped ? " flipped" : "")}>
            <Front />
            <Back />
        </div>

        )
    }
}

class Front extends React.Component {
    render() {
        return (
        <div className="front">
            <ImageArea />
            <MainArea />
        </div>
        )
    }
}

class Back extends React.Component {
    render() {
        return (
        <div className="back">
            <p>Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post.</p>
            <p>Bloggity bloggity bloggity blog. This would be the full text of the abbreviated blog post.</p>
        </div>
        )
    }
}

class ImageArea extends React.Component {
    render() {
        return (
        <div className="image-container">
            <img className="card-image" src="https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png"></img>
            <h1 className="title">An example blog post</h1>
        </div>
        )
    }
}

class MainArea extends React.Component {
    render() {
        return (
        <div className="main-area">
            <div className="blog-post">
            <p className="date">{new Date().toLocaleDateString()}</p>
            <p className="blog-content">
                Some sample text to demonstrate how these cards will work, including how they truncate long sentences.
                </p>
            <p className="read-more">Hover to read more...</p>

            </div>

        </div>
        )
    }
}
*/

export default App;