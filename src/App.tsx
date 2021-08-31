import React, { Component } from 'react';
import './App.css';

// Interfaces indicate that an object must always have certain elements in it
//  putting 'i' in front of an interface is common shorthand to indicate an interface
//  interfaces are like contracts for objects

interface IAppState {
  name: string
  characters: {}[]
}

export class App extends Component<{}, IAppState> {

  constructor( props: {} ) {
    super(props)
    this.state = {
      name: 'Jack',
      characters: []
    }
  }

  render(){
    return(
      <div className="App">
      </div>
    )
  }
}

export default App;
