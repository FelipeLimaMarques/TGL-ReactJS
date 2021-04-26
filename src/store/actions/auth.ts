import { AppDispatch } from '../store';
import { IUser, ILogin } from '../../shared/interfaces';

import * as actionTypes from './actionTypes';

export const loginStart = (user: ILogin) => {
    return {
        type: actionTypes.LOGIN_START,
        user: user
    };
};

export const loginSuccess = (user: ILogin) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        user: user
    };
};

export const loginFail = () => {
    return {
        type: actionTypes.LOGIN_FAIL,
    };
};

export const logout = () => {
    return {
        type: actionTypes.LOGIN_LOGOUT
    };
};

export const login: Function = (email: string, password: string) => {
    return (dispatch: AppDispatch) => {
        const loginData = {
            email: email,
            password: password,
        };

        if (loginData.email !== '' && loginData.password !== '') {
        dispatch(loginStart(loginData));
        dispatch(loginSuccess(loginData));
        }
        else {
            dispatch(loginFail());
        }
    };
};

export const setLoginRedirectPath = (path: string) => {
    return {
        type: actionTypes.SET_LOGIN_REDIRECT_PATH,
        path: path
    };
};

export const registerStart = (user: IUser) => {
    return {
        type: actionTypes.REGISTER_START
    };
};

export const registerSuccess = (user: IUser) => {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        user: user
    };
};

export const registerFail = () => {
    return {
        type: actionTypes.REGISTER_FAIL,
    };
};

export const register: Function = (email: string, password: string, name: string) => {
    return (dispatch: AppDispatch) => {
        const registerData = {
            email: email,
            password: password,
            name: name
        };

        if (registerData.email !== '' && registerData.password !== '' && registerData.name !== '') {
            dispatch(registerStart(registerData));
            dispatch(registerSuccess(registerData));
        }
        else {
            dispatch(registerFail());
        } 
    };
};

export const setRegisterRedirectPath = (path: string) => {
    return {
        type: actionTypes.SET_REGISTER_REDIRECT_PATH,
        path: path
    };
};

export const resetStart = (email: string) => {
    return {
        type: actionTypes.RESET_START,
        email: email
    };
};

export const resetSuccess = (email: string) => {
    return {
        type: actionTypes.RESET_SUCCESS,
        email: email
    };
};

export const resetFail = () => {
    return {
        type: actionTypes.RESET_FAIL,
    };
};

export const reset: Function = ( email: string ) => {
    return (dispatch: AppDispatch) => {
        if (email !== '') {
            dispatch(resetStart(email));
            dispatch(resetSuccess(email));
        }
        else {
            dispatch(resetFail());
            
        }
    };
};

export const setResetRedirectPath = (path: string) => {
    return {
        type: actionTypes.SET_RESET_REDIRECT_PATH,
        path: path
    };
};