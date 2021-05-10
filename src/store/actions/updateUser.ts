import axios from '../../axios';
import { AppDispatch } from '../store';
import { IUser } from '../../shared/interfaces';

import * as actionTypes from './actionTypes';
import { toast } from 'react-toastify';

export const fetchUserDataStart = () => {
    return {
        type: actionTypes.FETCH_USER_DATA_START
    }
}

export const fetchUserDataSuccess = (name: string, email:string) => {
    return {
        type: actionTypes.FETCH_USER_DATA_SUCCESS,
        name,
        email
    }
}

export const fetchUserDataFail = (error: Error) => {
    return {
        type: actionTypes.FETCH_USER_DATA_FAIL,
        error
    }
}

export const fetchUserData: Function = () => {
    return (dispatch: AppDispatch) => {
        const token = localStorage.getItem('loginToken');
        const id = localStorage.getItem('userId');
        dispatch(fetchUserDataStart())
        axios.get(`/users/${id}`, { 
            headers: { Authorization: `Bearer ${token}`} 
            })
            .then(res => {
                console.log('resdata ', res.data)
                dispatch(fetchUserDataSuccess(res.data.name, res.data.email));
            })
            .catch(err => {
                if (!err.status) {
                    toast.error('Não foi possível recuperar os dados.');
                    dispatch(fetchUserDataFail(err));
                } else {
                    toast.error('Usuário inexistente.');
                    dispatch(fetchUserDataFail(err.message))
                }
            })
    }
}

export const updateRedirectSetFalse = () => {
    return {
        type: actionTypes.UPDATE_REDIRECT_SET_FALSE
    }
}

export const updateAccountStart = () => {
    return {
        type: actionTypes.UPDATE_ACCOUNT_START
    };
};

export const updateAccountSuccess = (user: IUser) => {
    return {
        type: actionTypes.UPDATE_ACCOUNT_SUCCESS,
        user
    };
};

export const updateAccountFail = (error: string) => {
    return {
        type: actionTypes.UPDATE_ACCOUNT_FAIL,
        error
    };
};

export const updateAccount: Function = (email: string, password: string, name: string) => {
    return (dispatch: AppDispatch) => {
        const token = localStorage.getItem('loginToken');
        const id = localStorage.getItem('userId');
        const updateAccountData = {
            name,
            email,
            password,
        };
        
        dispatch(updateAccountStart());
        axios.put(`/users/${id}`, updateAccountData, { 
            headers: { Authorization: `Bearer ${token}`} 
            })
            .then(res => {
                dispatch(updateAccountSuccess(updateAccountData));
            })
            .catch(err => {
                if (err) {
                    dispatch(updateAccountFail(err.message));
                } else {
                    toast.error('Não foi possível atualizar os dados.')
                }
            });
    };
};