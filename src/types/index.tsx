export interface Character {
    id: number,
    name: string,
    species: string,
    type: string,
    gender: string,
    origin: Pointer,
    location: Pointer,
    image: string,
    episode: string[],
    url: string,
    created: string
}

// Location & Origin use the same format --- creating a new interface for this structure
// origin: {
//     name: string,
//     url: string
// },
// location: {
//     name: string,
//     url: string
// },

interface Pointer {
    name: string,
    url: string
}