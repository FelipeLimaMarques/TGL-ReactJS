import axios from '../../axios';
import { AppDispatch } from '../store';
import { ITypes } from '../../shared/interfaces';

import * as actionTypes from './actionTypes';

export const fetchGamesStart = () => {
    return {
        type: actionTypes.FETCH_GAMES_START
    };
};

export const fetchGamesSuccess = (data: ITypes) => {
    return {
        type: actionTypes.FETCH_GAMES_SUCCESS,
        data
    };
};

export const fetchGamesFail = (error: Error) => {
    return {
        type: actionTypes.FETCH_GAMES_FAIL,
        error
    };
};

export const fetchGames: Function = () => {
    return (dispatch: AppDispatch) => {
        dispatch(fetchGamesStart());
        axios.get('/games')
            .then(res => {
                dispatch(fetchGamesSuccess(res.data.types));
            })
            .catch(err => {
                dispatch(fetchGamesFail(err.response.data.error));
            })
    };
};