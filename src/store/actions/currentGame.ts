import { IGame } from '../../shared/interfaces';

import * as actionTypes from './actionTypes';

export const setCurrentGame = (data: IGame) => {
    return {
        type: actionTypes.SET_CURRENT_GAME,
        payload: data
    };
};

export const clearCurrentGame = () => {
    return {
        type: actionTypes.CLEAR_CURRENT_GAME
    }
}