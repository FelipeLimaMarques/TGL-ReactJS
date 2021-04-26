import { IBet, IGame } from '../../shared/interfaces';

import * as actionTypes from './actionTypes';

export const addNumber = (number: number, maxLength: number) => {
    return {
        type: actionTypes.ADD_NUMBER,
        number: number,
        maxLength: maxLength
    }
}

export const removeNumber = (number: number) => {
    return {
        type: actionTypes.REMOVE_NUMBER,
        number: number
    }
}

export const clearNumbers = () => {
    return {
        type: actionTypes.CLEAR_NUMBERS
    }
}

export const completeNumbers = (maxLength: number, range: number) => {
    return {
        type: actionTypes.COMPLETE_NUMBERS,
        maxLength: maxLength,
        range: range
    }
}

export const addToCart = (bet: IBet, game: IGame) => {
    return {
        type: actionTypes.ADD_TO_CART,
        bet: {
            numbers: bet.numbers,
            price: game.price,
            type: game.type,
            color: game.color
        },
        maxNumber: game['max-number']
    }
}

export const removeFromCart = (index: number, price: number) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        index: index,
        price: price
    }
}

export const clearCart = () => {
    return {
        type: actionTypes.CLEAR_CART
    }
}