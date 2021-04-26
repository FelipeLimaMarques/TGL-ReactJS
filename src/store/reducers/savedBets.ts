import { AnyAction } from 'redux';
import { IBet } from '../../shared/interfaces';
import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

interface ISaved {
    saved: Array<IBet>,
    filtered: Array<IBet>,
    isFiltered: boolean
}

const initialState: ISaved = {
    saved: [],
    filtered: [],
    isFiltered: false
}

const saveBets = (state: ISaved , action: AnyAction) => {
    const prevState = [...state.saved];
    const newState = prevState.concat(action.bets);
    alert('Comprado com sucesso.');

    return updateObject( state, {
        saved: newState
    })
}

const filterBets = (state: ISaved , action: AnyAction) => {
    const prevState = [...state.saved];
    const newState = prevState.filter(game => {
        return game.type === action.name
    });

    return updateObject( state, {
        filtered: newState,
        isFiltered: true
    });
}

const unfilterBets = (state: ISaved , action: AnyAction) => {
    return updateObject( state, {
        filtered: state.saved,
        isFiltered: false
    })
}

const savedBetsReducer = (state = initialState, action: AnyAction) => {
    switch ( action.type ) {
        case actionTypes.SAVE_BETS: return saveBets(state, action);
        case actionTypes.FILTER_BETS: return filterBets(state, action);
        case actionTypes.UNFILTER_BETS: return unfilterBets(state, action);
        default: return state;
    }
}

export default savedBetsReducer;