import * as actionTypes from '../actions/actionTypes';
import { AnyAction } from 'redux';
import { updateObject, randComplete } from '../../shared/utility';
import { IBet } from '../../shared/interfaces';
import { toast } from 'react-toastify';

interface INewBet {
    bets: Array<{
        numbers: string,
        game_id: number
    }>,
    bet: IBet,
    totalPrice: number,
}

const initialState: INewBet = {
    bets: [],
    bet: {
        numbers: [],
        game_id: 0,
    },
    totalPrice: 0,
}

const addNumber = (state: INewBet, action: AnyAction) => {
    if (state.bet.numbers.includes(action.number)) {
        return removeNumber(state, action);
    };

    if (state.bet.numbers.length >= action.maxLength) {
        toast.warn(`Você não pode selecionar mais do que ${action.maxLength} números.`);

        return state;
    }
    else {
        let aux: Array<number> = [...state.bet.numbers];
        aux = aux.concat(action.number);
        aux = aux.sort((a, b) => a - b);

        return updateObject( state, {
            bet: {
                numbers: aux,
                game_id: action.id
            }
        })
    }
}

const removeNumber = (state: INewBet, action: AnyAction) => {
    let aux: Array<number> = [...state.bet.numbers];
    aux = aux.filter((current) => current !== action.number);

    return updateObject( state, {
        bet: {
            numbers: aux,
            game_id: action.id
        }
    })
}

const clearNumbers = (state: INewBet, action: AnyAction) => {
    return updateObject( state, {
        bet: {
            numbers: [],
            game_id: action.id
        }
    })
}

const completeNumbers = (state: INewBet, action: AnyAction) => {
    if (state.bet.numbers.length >= action.maxLength) {
        toast.warn(`Você não pode selecionar mais do que ${action.maxLength} números.`);

        return state;
    }
    else {
        let aux: Array<number> = [...state.bet.numbers];
        const oldLength: number = aux.length;
        aux = randComplete(aux, action.maxLength, oldLength, action.range);
        
        return updateObject( state, {
            bet: {
                numbers: aux,
                game_id: action.id
            }
        })
    }
}

const addToCart = (state: INewBet, action: AnyAction) => {
    if (state.bet.numbers.length === action.maxNumber) {
        const bets = [...state.bets];
        const stringfied = { ...action.bet, numbers: action.bet.numbers.join(', ')}
        const newBets = bets.concat(stringfied);
    
        return updateObject( state, {
            bets: newBets,
            totalPrice: state.totalPrice + action.price,
            bet: {
                numbers: [],
                game_id: 0,
            }
        })
    }
    else {
        toast.warn(`Selecione ${action.maxNumber} números!`);
        
        return state;
    }
    
}

const removeFromCart = (state: INewBet, action: AnyAction) => {
    const bets = [...state.bets];
    bets.splice(action.index, 1);

    return updateObject( state, {
        bets: bets,
        totalPrice: state.totalPrice - action.price
    })
}

const clearCart = (state: INewBet, action: AnyAction) => {
    return updateObject( state, {
        bets: [],
        totalPrice: 0
    })
}

const newBetReducer = (state = initialState, action: AnyAction) => {
    switch ( action.type ) {
        case actionTypes.ADD_NUMBER: return addNumber(state, action);
        case actionTypes.REMOVE_NUMBER: return removeNumber(state, action);
        case actionTypes.CLEAR_NUMBERS: return clearNumbers(state, action);
        case actionTypes.COMPLETE_NUMBERS: return completeNumbers(state, action);
        case actionTypes.ADD_TO_CART: return addToCart(state, action);
        case actionTypes.REMOVE_FROM_CART: return removeFromCart(state, action);
        case actionTypes.CLEAR_CART: return clearCart(state, action);
        default: return state;
    }

}

export default newBetReducer;