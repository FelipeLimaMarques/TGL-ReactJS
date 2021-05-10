import { AnyAction } from 'redux';
import { IBet, IBetFormated } from '../../shared/interfaces';
import { updateObject, randComplete } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';
import { toast } from 'react-toastify';

interface IBets {
    saved: Array<IBetFormated>,
    filtered: Array<IBetFormated>,
    isFiltered: boolean,
    bets: Array<{
        numbers: string,
        game_id: number
    }>,
    bet: IBet,
    totalPrice: number,
    error: Error | null,
    loading: boolean,
    redirect: boolean
}

const initialState: IBets = {
    saved: [],
    filtered: [],
    isFiltered: false,
    bets: [],
    bet: {
        numbers: [],
        game_id: 0,
    },
    totalPrice: 0,
    error: null,
    loading: false,
    redirect: false
}

const betsRedirectSetFalse = (state: IBets , action: AnyAction) => {
    return updateObject( state, {
        redirect: false
    })
}

const addNumber = (state: IBets, action: AnyAction) => {
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

const removeNumber = (state: IBets, action: AnyAction) => {
    let aux: Array<number> = [...state.bet.numbers];
    aux = aux.filter((current) => current !== action.number);

    return updateObject( state, {
        bet: {
            numbers: aux,
            game_id: action.id
        }
    })
}

const clearNumbers = (state: IBets, action: AnyAction) => {
    return updateObject( state, {
        bet: {
            numbers: [],
            game_id: action.id
        }
    })
}

const completeNumbers = (state: IBets, action: AnyAction) => {
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

const addToCart = (state: IBets, action: AnyAction) => {
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

const removeFromCart = (state: IBets, action: AnyAction) => {
    const bets = [...state.bets];
    bets.splice(action.index, 1);

    return updateObject( state, {
        bets: bets,
        totalPrice: state.totalPrice - action.price
    })
}

const clearCart = (state: IBets, action: AnyAction) => {
    return updateObject( state, {
        bets: [],
        totalPrice: 0
    })
}

const filterBets = (state: IBets , action: AnyAction) => {
    const saved = [...state.saved];
    const newState = saved.filter(game => {
        return game.game_id === action.id
    });

    return updateObject( state, {
        filtered: newState,
        isFiltered: true
    });
}

const unfilterBets = (state: IBets , action: AnyAction) => {
    const saved = [...state.saved];

    return updateObject( state, {
        filtered: saved,
        isFiltered: false
    })
}

const saveBetsStart = (state: IBets , action: AnyAction) => {
    return updateObject( state, {
        error: null,
        loading: true
    });
}

const saveBetsSuccess = (state: IBets , action: AnyAction) => {
    toast.success('Comprado com sucesso.');

    return updateObject( state, {
        loading: false,
        redirect: true
    });
}

const saveBetsFail = (state: IBets , action: AnyAction) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
}

const fetchBetsStart = (state: IBets , action: AnyAction) => {
    return updateObject( state, {
        saved: [],
        filtered: [],
        error: null,
        loading: true
    });
}

const fetchBetsSuccess = (state: IBets , action: AnyAction) => {
    return updateObject( state, {
        saved: action.bets,
        filtered: action.bets,
        loading: false
    });
}

const fetchBetsFail = (state: IBets , action: AnyAction) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
}

const betsReducer = (state = initialState, action: AnyAction) => {
    switch ( action.type ) {
        case actionTypes.BETS_REDIRECT_SET_FALSE: return betsRedirectSetFalse(state, action);
        case actionTypes.ADD_NUMBER: return addNumber(state, action);
        case actionTypes.REMOVE_NUMBER: return removeNumber(state, action);
        case actionTypes.CLEAR_NUMBERS: return clearNumbers(state, action);
        case actionTypes.COMPLETE_NUMBERS: return completeNumbers(state, action);
        case actionTypes.ADD_TO_CART: return addToCart(state, action);
        case actionTypes.REMOVE_FROM_CART: return removeFromCart(state, action);
        case actionTypes.CLEAR_CART: return clearCart(state, action);
        case actionTypes.FILTER_BETS: return filterBets(state, action);
        case actionTypes.UNFILTER_BETS: return unfilterBets(state, action);
        case actionTypes.SAVE_BETS_START: return saveBetsStart(state, action);
        case actionTypes.SAVE_BETS_SUCCESS: return saveBetsSuccess(state, action);
        case actionTypes.SAVE_BETS_FAIL: return saveBetsFail(state, action);
        case actionTypes.FETCH_BETS_START: return fetchBetsStart(state, action);
        case actionTypes.FETCH_BETS_SUCCESS: return fetchBetsSuccess(state, action);
        case actionTypes.FETCH_BETS_FAIL: return fetchBetsFail(state, action);
        default: return state;
    }
}

export default betsReducer;