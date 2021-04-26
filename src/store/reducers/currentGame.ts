import * as actionTypes from '../actions/actionTypes';
import { AnyAction } from 'redux';
import { updateObject } from '../../shared/utility';
import { IGame } from '../../shared/interfaces';

interface IG {
    game: IGame
}

const initialState: IG = {
    game: {
        type: 'Loading...',
        description: 'Loading...',
        range: 0,
        price: 0,
        'max-number': 0,
        color: 'transparent',
        'min-cart-value': 0
    }
}

const setCurrentGame = (state: IG , action: AnyAction) => {
    return updateObject( state, {
        game: {
            type: action.payload.type,
            description: action.payload.description,
            range: action.payload.range,
            price: action.payload.price,
            'max-number': action.payload['max-number'],
            color: action.payload.color,
            'min-cart-value': action.payload['min-cart-value']
        }
    } );
};

const clearCurrentGame = (state: IG , action: AnyAction) => {
    return updateObject( state, {
        game: {
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

const currentGameReducer = ( state = initialState, action: AnyAction) => {
    switch ( action.type ) {
        case actionTypes.SET_CURRENT_GAME: return setCurrentGame(state, action);
        case actionTypes.CLEAR_CURRENT_GAME: return clearCurrentGame(state, action);
        default: return state;
    }

}

export default currentGameReducer;