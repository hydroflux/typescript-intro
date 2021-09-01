import React, { useEffect, useState } from 'react';
import './App.css';
import CharacterCard from './components/CharacterCard';
import { charactersURL, parseHTTPResponse } from './helpers/utilities';
import { ICharacter } from './types';

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