import * as actionTypes from '../actions/actionTypes';
import { AnyAction } from 'redux';
import { updateObject } from '../../shared/utility';
import { ITypes } from '../../shared/interfaces';

interface IFetched extends ITypes {
    error: Error | null,
}

const initialState: IFetched = {
    types: [{
        type: 'Loading...',
        description: 'Loading...',
        range: 0,
        price: 0,
        'max-number': 0,
        color: 'transparent',
        'min-cart-value': 0  
    }],
    error: null,
}

const fetchGamesStart = ( state: IFetched, action: AnyAction ) => {
    return updateObject( state, {
        error: null,
        loading: true
    } );
};

const fetchGamesSuccess = (state: IFetched, action: AnyAction) => {
    return updateObject( state, { 
        types: action.payload,
     } );
};

const fetchGamesFail = (state: IFetched, action: AnyAction) => {
    return updateObject( state, {
        error: action.error,
    });
};

const fetchGamesReducer = ( state = initialState, action: AnyAction) => {
    switch ( action.type ) {
        case actionTypes.FETCH_GAMES_START: return fetchGamesStart(state, action);
        case actionTypes.FETCH_GAMES_SUCCESS: return fetchGamesSuccess(state, action);
        case actionTypes.FETCH_GAMES_FAIL: return fetchGamesFail(state, action);
        default: return state;
    }

}

export default fetchGamesReducer;