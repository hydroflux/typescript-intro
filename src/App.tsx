import React, { useEffect, useState } from 'react';
import './App.css';
import CharacterCard from './components/CharacterCard';
import { charactersURL, parseHTTPResponse } from './helpers/utilities';
import { ICharacter } from './types';

// Interfaces indicate that an object must always have certain elements in it
//  putting 'i' in front of an interface is common shorthand to indicate an interface
//  interfaces are like contracts for objects

const App: React.FC<{}> = () => {

  const [ characters , setCharacters ] = useState<ICharacter[]>([])

  useEffect( () => {
    fetch( charactersURL )
      .then( parseHTTPResponse )
      .then( ({ results }) => setCharacters( results ) )
  }, [])

  const showCharacters = () => {
    return characters.map( character => {
      return <CharacterCard key={character.id} character={character} />
    })
  }

  return (
    <div className="App">
      <h1>Welcome</h1>
      { showCharacters() }
    </div>
  )
}

export default App;