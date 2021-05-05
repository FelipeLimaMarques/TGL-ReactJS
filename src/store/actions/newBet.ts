import { IBet, IGame } from '../../shared/interfaces';
import * as actionTypes from './actionTypes';

export const addNumber = (number: number, maxLength: number, id: number) => {
    return {
        type: actionTypes.ADD_NUMBER,
        number,
        maxLength,
        id
    }
}

export const removeNumber = (number: number, id: number) => {
    return {
        type: actionTypes.REMOVE_NUMBER,
        number,
        id
    }
}

export const clearNumbers = (id: number) => {
    return {
        type: actionTypes.CLEAR_NUMBERS,
        id
    }
}

export const completeNumbers = (maxLength: number, range: number, id: number) => {
    return {
        type: actionTypes.COMPLETE_NUMBERS,
        maxLength,
        range,
        id
    }
}

export const addToCart = (bet: IBet, game: IGame) => {
    return {
        type: actionTypes.ADD_TO_CART,
        bet: {
            numbers: bet.numbers,
            game_id: game.id
        },
        price: game.price,
        maxNumber: game['max-number']
    }
}

export const removeFromCart = (index: number, price: number) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        index,
        price
    }
}

export const clearCart = () => {
    return {
        type: actionTypes.CLEAR_CART
    }
}