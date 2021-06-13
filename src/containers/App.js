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
                responseQuotes.splice(quotePos, 1);
            } else {
                newArtData.quote = "Error loading quote :x";
            }

            return newArtData;
        });

        this.setState({arts: updatedArts});
    }

    onSearchChange = (event) => { /* Use the arrow format here so 'this' refers to App */
        this.setState({ searchField: event.target.value });
    }
    
    componentDidMount() {
        /* see: https://www.geeksforgeeks.org/difference-between-fetch-and-axios-js-for-making-http-requests/ */
        
        /* http request using fetch */
        // fetch("https://type.fit/api/quotes")
        // .then(response => response.json())
        // .then((responseJson) => this.updateArtsQuotes(responseJson));

        /* http request using axios */
        axios.get('https://type.fit/api/quotes')
             .then((response) => response.data)
             .then((responseData) => this.updateArtsQuotes(responseData));
    }

    render() {
        const { arts, searchField } = this.state;

        const filteredArts = arts.filter(art => {
            return art.keywords.toLowerCase().includes(searchField.toLowerCase());
        });

        if (arts.length === 0) {
            return <h1>Loading...</h1>
        }
        else {
            return (
                <div className='tc' > 
                    <h1 className='f1'>MoodArt</h1>
                    <h3 className='f3'>Search for a mood. Pick a card. Get some inspiration.</h3>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardsList arts={filteredArts}/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;