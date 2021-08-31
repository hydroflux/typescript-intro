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