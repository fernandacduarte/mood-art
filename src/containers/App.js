import React, { Component } from 'react'
import SearchBox from '../components/SearchBox'
import CardsList from '../components/CardsList'
import Scroll from '../components/Scroll'
import { arts } from '../components/arts'
import './App.css'

class App extends Component  {
    constructor() {
        super();
        this.state = {
            arts: arts,
            searchField: '',
        }
    }

    // Caso quisessemos pegar informações guardadas em um servidor via API
    // componentDidMount() {
    //     fetch('url api')
    //     .then(response => response.json())
    //     .then(users => this.setState({arts: users}))
    // }

    onSearchChange = (event) => { // Use the arrow format here so 'this' refers to App
        this.setState({ searchField: event.target.value });
    }

    render() {
        const { arts, searchField } = this.state;
        const filteredArts = arts.filter(art => {
            return art.mood.toLowerCase().includes(searchField.toLowerCase());
        });
        // console.log(filteredArts);
        if (arts.length === 0) {
            return <h1>Loading...</h1>
        }
        else {
            return (
                <div className='tc'> 
                    <h1 className='f1'>MoodArt</h1>
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