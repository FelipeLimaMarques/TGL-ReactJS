import * as actionTypes from './actionTypes';
import { IBet } from '../../shared/interfaces';

export const saveBets = (bets: Array<IBet>) => {
    return {
        type: actionTypes.SAVE_BETS,
        bets: bets
    }
}

export const filterBets = (name: string) => {
    return {
        type: actionTypes.FILTER_BETS,
        name: name
    }
}

export const unfilterBets = () => {
    return {
        type: actionTypes.UNFILTER_BETS
    }
}