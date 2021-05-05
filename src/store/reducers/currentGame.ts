import * as actionTypes from '../actions/actionTypes';
import { AnyAction } from 'redux';
import { updateObject } from '../../shared/utility';
import { IGame } from '../../shared/interfaces';

interface IG {
    game: IGame
}

const initialState: IG = {
    game: {
        id: 0,
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

const clearCurrentGame = (state: IG , action: AnyAction) => {
    return updateObject( state, {
        game: {
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

const currentGameReducer = ( state = initialState, action: AnyAction) => {
    switch ( action.type ) {
        case actionTypes.SET_CURRENT_GAME: return setCurrentGame(state, action);
        case actionTypes.CLEAR_CURRENT_GAME: return clearCurrentGame(state, action);
        default: return state;
    }

}

export default currentGameReducer;