import React from 'react'
import { ICharacter } from '../types'

interface ICharacterCardProps {
    character: ICharacter
}

const CharacterCard: React.FC<ICharacterCardProps> = ({ character }) => {
    return (
        <div>
            <h3>{ character.name }</h3>
        </div>
    )
}

export default CharacterCard