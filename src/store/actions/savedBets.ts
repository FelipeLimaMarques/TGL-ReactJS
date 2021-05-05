import * as actionTypes from './actionTypes';
import axios from '../../axios';
import { AppDispatch } from '../store';
import { IBet, IBetFormated } from '../../shared/interfaces';

export const savedBetsRedirectSetFalse = () => {
    return {
        type: actionTypes.LOGGEDIN_REDIRECT_SET_FALSE
    }
}

export const filterBets = (id: number) => {
    return {
        type: actionTypes.FILTER_BETS,
        id
    }
}

export const unfilterBets = () => {
    return {
        type: actionTypes.UNFILTER_BETS
    }
}

export const saveBetsStart = () => {
    return {
        type: actionTypes.SAVE_BETS_START,
    }
}

export const saveBetsSuccess = () => {
    return {
        type: actionTypes.SAVE_BETS_SUCCESS,
    }
}

export const saveBetsFail = (error: Error) => {
    return {
        type: actionTypes.SAVE_BETS_FAIL,
        error
    }
}

export const saveBet: Function = (bets: Array<IBet>) => {
    return (dispatch: AppDispatch) => {
        const token = localStorage.getItem('loginToken')
        const betsObj = {
            bets
        }
        dispatch(saveBetsStart());
        axios.post('/bets', betsObj, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                dispatch(saveBetsSuccess());
            })
            .catch(err => {
                dispatch(saveBetsFail(err.response.data.error));
            })
    }
}

export const fetchBetsStart = () => {
    return {
        type: actionTypes.FETCH_BETS_START
    }
}

export const fetchBetsSuccess = (bets: Array<IBetFormated>) => {
    return {
        type: actionTypes.FETCH_BETS_SUCCESS,
        bets
    }
}

export const fetchBetsFail = (error: Error) => {
    return {
        type: actionTypes.FETCH_BETS_FAIL,
        error
    }
}

export const fetchBets: Function = () => {
    return (dispatch: AppDispatch) => {
        const token = localStorage.getItem('loginToken')
        dispatch(fetchBetsStart());
        axios.get('/bets', {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => {
            dispatch(fetchBetsSuccess(res.data.bets));
        })
        .catch(err => {
            dispatch(fetchBetsFail(err.response.data.error));
        })
    }
}