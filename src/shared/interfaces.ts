export interface IGame {
    id: number,
    type: string,
    description: string,
    range: number,
    price: number,
    'max-number': number,
    color: string,
    'min-cart-value': number  
}

export interface ITypes {
    types: [
        IGame
    ] | null
}

export interface IUser {
    email: string
    password: string,
    name?: string,
}

export interface IBet {
    numbers: Array<number>,
    game_id: number
}

export interface IBetFormated {
    numbers: string,
    game_id: number,
    price: number,
    game: {
        type: string,
        color: string
    },
    created_at: string
}

export interface IRules {
    isValid: boolean,
    required: boolean,
    minLength: number,
    maxLength: number,
    isEmail: string,
}

export interface IAnyProperty {
    [key: string]: any
}