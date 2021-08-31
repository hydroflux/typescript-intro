import React, { Component } from 'react';
import './App.css';
import { Character } from './types';

// Interfaces indicate that an object must always have certain elements in it
//  putting 'i' in front of an interface is common shorthand to indicate an interface
//  interfaces are like contracts for objects

interface IAppState {
  name: string
  characters: Character[]
}

export class App extends Component<{}, IAppState> {

  constructor( props: {} ) {
    super(props)
    this.state = {
      name: 'Jack',
      characters: []
    }
  }

  componentDidMount(){
    const characters_url = "https://rickandmortyapi.com/api/character"
    fetch( characters_url )
      .then( response => response.json() )
      .then( ({ results }) => this.setState({ characters: results as Character[] }))
  }

  render(){
    return(
      <div className="App">
        <h1>Welcome {this.state.name}</h1>
      </div>
    )
  }
}

export default App;
