import { AnyAction } from 'redux';
import { IBetFormated } from '../../shared/interfaces';
import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';
import { toast } from 'react-toastify';

interface ISaved {
    saved: Array<IBetFormated>,
    filtered: Array<IBetFormated>,
    isFiltered: boolean,
    error: Error | null,
    loading: boolean,
    redirect: boolean
}

const initialState: ISaved = {
    saved: [],
    filtered: [],
    isFiltered: false,
    error: null,
    loading: false,
    redirect: false
}

const savedBetsRedirectSetFalse = (state: ISaved , action: AnyAction) => {
    return updateObject( state, {
        redirect: false
    })
}

const filterBets = (state: ISaved , action: AnyAction) => {
    const saved = [...state.saved];
    const newState = saved.filter(game => {
        return game.game_id === action.id
    });

    return updateObject( state, {
        filtered: newState,
        isFiltered: true
    });
}

const unfilterBets = (state: ISaved , action: AnyAction) => {
    const saved = [...state.saved];

    return updateObject( state, {
        filtered: saved,
        isFiltered: false
    })
}

const saveBetsStart = (state: ISaved , action: AnyAction) => {
    return updateObject( state, {
        error: null,
        loading: true
    });
}

const saveBetsSuccess = (state: ISaved , action: AnyAction) => {
    toast.success('Comprado com sucesso.');

    return updateObject( state, {
        loading: false,
        redirect: true
    });
}

const saveBetsFail = (state: ISaved , action: AnyAction) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
}

const fetchBetsStart = (state: ISaved , action: AnyAction) => {
    return updateObject( state, {
        saved: [],
        filtered: [],
        error: null,
        loading: true
    });
}

const fetchBetsSuccess = (state: ISaved , action: AnyAction) => {
    return updateObject( state, {
        saved: action.bets,
        filtered: action.bets,
        loading: false
    });
}

const fetchBetsFail = (state: ISaved , action: AnyAction) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
}

const savedBetsReducer = (state = initialState, action: AnyAction) => {
    switch ( action.type ) {
        case actionTypes.LOGGEDIN_REDIRECT_SET_FALSE: return savedBetsRedirectSetFalse(state, action);
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

export default savedBetsReducer;