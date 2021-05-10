import axios from '../../axios';
import { AppDispatch } from '../store';
import { ITypes, IGame } from '../../shared/interfaces';

import * as actionTypes from './actionTypes';
import { toast } from 'react-toastify';

export const setCurrentGame = (data: IGame) => {
    return {
        type: actionTypes.SET_CURRENT_GAME,
        data
    };
};

export const clearCurrentGame = () => {
    return {
        type: actionTypes.CLEAR_CURRENT_GAME
    }
}

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
                if (!err.status) {
                    toast.error('Não foi possível recuperar os jogos.')
                    dispatch(fetchGamesFail(err));
                } else {
                    dispatch(fetchGamesFail(err.response.data.error));
                }
            })
    };
};
