import React, { Component } from 'react';
import './App.css';

export class App extends Component<{}, {}> {

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
