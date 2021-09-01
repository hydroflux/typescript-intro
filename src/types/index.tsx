export interface ICharacter {
    id: number,
    name: string,
    species: string,
    type: string,
    gender: string,
    origin: IPointer,
    location: IPointer,
    image: string,
    episode: string[],
    url: string,
    created: string
}

interface IPointer {
    name: string,
    url: string
}

// Interfaces indicate that an object must always have certain elements in it
//  putting 'i' in front of an interface is common shorthand to indicate an interface
//  interfaces are like contracts for objects