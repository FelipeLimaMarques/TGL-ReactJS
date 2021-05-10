import * as actionTypes from '../actions/actionTypes';
import { AnyAction } from 'redux';
import { updateObject } from '../../shared/utility';
import { ITypes, IGame } from '../../shared/interfaces';

interface IGames extends ITypes {
    current: IGame,
    error: Error | null,
}

const initialState: IGames = {
    types: [{
        id: 0,
        type: 'Loading...',
        description: 'Loading...',
        range: 0,
        price: 0,
        'max-number': 0,
        color: 'transparent',
        'min-cart-value': 0  
    }],
    current: {
        id: 0,
        type: 'Loading...',
        description: 'Loading...',
        range: 0,
        price: 0,
        'max-number': 0,
        color: 'transparent',
        'min-cart-value': 0
    },
    error: null,
}

const setCurrentGame = (state: IGames , action: AnyAction) => {
    return updateObject( state, {
        current: {
            id: action.data.id,
            type: action.data.type,
            description: action.data.description,
            range: action.data.range,
            price: action.data.price,
            'max-number': action.data['max-number'],
            color: action.data.color,
            'min-cart-value': action.data['min-cart-value']
        }
    } );
};

const clearCurrentGame = (state: IGames , action: AnyAction) => {
    return updateObject( state, {
        current: {
            id: 0,
            type: 'Loading...',
            description: 'Loading...',
            range: 0,
            price: 0,
            'max-number': 0,
            color: 'transparent',
            'min-cart-value': 0
        }
    })
}

const fetchGamesStart = ( state: IGames, action: AnyAction ) => {
    return updateObject( state, {
        error: null,
    } );
};

const fetchGamesSuccess = (state: IGames, action: AnyAction) => {
    return updateObject( state, { 
        types: action.data,
     } );
};

const fetchGamesFail = (state: IGames, action: AnyAction) => {
    return updateObject( state, {
        error: action.error,
    });
};

const gamesReducer = ( state = initialState, action: AnyAction) => {
    switch ( action.type ) {
        case actionTypes.SET_CURRENT_GAME: return setCurrentGame(state, action);
        case actionTypes.CLEAR_CURRENT_GAME: return clearCurrentGame(state, action);
        case actionTypes.FETCH_GAMES_START: return fetchGamesStart(state, action);
        case actionTypes.FETCH_GAMES_SUCCESS: return fetchGamesSuccess(state, action);
        case actionTypes.FETCH_GAMES_FAIL: return fetchGamesFail(state, action);
        default: return state;
    }

}

export default gamesReducer;