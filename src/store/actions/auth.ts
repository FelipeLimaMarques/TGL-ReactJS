import axios from '../../axios';
import { AppDispatch } from '../store';
import { IUser } from '../../shared/interfaces';

import * as actionTypes from './actionTypes';

export const authRedirectSetFalse = () => {
    return {
        type: actionTypes.AUTH_REDIRECT_SET_FALSE
    }
}

export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START,
    };
};

export const loginSuccess = (token: string) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token
    };
};

export const loginFail = (error: string) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        error
    };
};

export const logout = () => {
    localStorage.removeItem('loginToken');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.LOGIN_LOGOUT
    };
};

export const getUserId: Function = (email: string, token: string) => {
    return (dispatch: AppDispatch) => {
        axios.get('/users', { 
            headers: { Authorization: `Bearer ${token}`} 
            })
        .then(res => {
            const user = res.data.users.find((user: any) => user.email === email);
            localStorage.setItem('userId', user.id);
        })
        .catch(err => { console.log(err) })
    }
}

export const login: Function = (email: string, password: string) => {
    return (dispatch: AppDispatch) => {
        dispatch(loginStart());
        const loginData = {
            email,
            password,
        };

        if (loginData.email !== '' && loginData.password !== '') {
        axios.post('/sessions', loginData)
            .then(res => {
                localStorage.setItem('loginToken', res.data.token);
                dispatch(loginSuccess(res.data.token));
                dispatch(getUserId(loginData.email, res.data.token))
            })
            .catch(err => {
                dispatch(loginFail(err.message));
            })
        }
        else {
            dispatch(loginFail('Erro.'));
        }
    };
};

export const setLoginRedirectPath = (path: string) => {
    return {
        type: actionTypes.SET_LOGIN_REDIRECT_PATH,
        path
    };
};

export const registerStart = () => {
    return {
        type: actionTypes.REGISTER_START
    };
};

export const registerSuccess = () => {
    return {
        type: actionTypes.REGISTER_SUCCESS,
    };
};

export const registerFail = (error: string) => {
    return {
        type: actionTypes.REGISTER_FAIL,
        error
    };
};

export const register: Function = (email: string, password: string, name: string) => {
    return (dispatch: AppDispatch) => {
        const registerData = {
            email,
            password,
            name
        };

        if (registerData.email !== '' && registerData.password !== '' && registerData.name !== '') {
            dispatch(registerStart());
            axios.post('/users', registerData)
            .then(res => {
                console.log('[res] ', res)
                dispatch(registerSuccess());
            })
            .catch(err => {
                console.log('[err] ', err)
                dispatch(registerFail(err.message));
            })
            
        }
        else {
            dispatch(registerFail('Erro.'));
        } 
    };
};

export const setRegisterRedirectPath = (path: string) => {
    return {
        type: actionTypes.SET_REGISTER_REDIRECT_PATH,
        path
    };
};

export const resetStart = () => {
    return {
        type: actionTypes.RESET_START,
    };
};

export const resetSuccess = () => {
    return {
        type: actionTypes.RESET_SUCCESS,
    };
};

export const resetFail = (error: string) => {
    return {
        type: actionTypes.RESET_FAIL,
        error
    };
};

export const reset: Function = ( email: string ) => {
    return (dispatch: AppDispatch) => {
        const resetData = {
            email,
            redirect_url: 'http://localhost:3000/update_password'
        }
        
        if (email !== '') {
            dispatch(resetStart());
            axios.post('/passwords', resetData)
                .then(res => {
                    dispatch(resetSuccess());
                })
                .catch(err => {
                    dispatch(resetFail(err.message));
                })
        }
        else {
            dispatch(resetFail('Erro.'));
            
        }
    };
};

export const updatePasswordStart = () => {
    return {
        type: actionTypes.UPDATE_PASSWORD_START,
    };
};

export const updatePasswordSuccess = () => {
    return {
        type: actionTypes.UPDATE_PASSWORD_SUCCESS,
    };
};

export const updatePasswordFail = (error: string) => {
    return {
        type: actionTypes.UPDATE_PASSWORD_FAIL,
        error
    };
};

export const updatePassword: Function = ( token: string, password: string ) => {
    return (dispatch: AppDispatch) => {
        const resetData = {
            token,
            password
        }
        if (token !== '' && password !== '') {
            dispatch(updatePasswordStart());
            axios.put('/passwords', resetData)
                .then(res => {
                    dispatch(updatePasswordSuccess());
                })
                .catch(err => {
                    dispatch(updatePasswordFail(err.message));
                })
        }
        else {
            dispatch(updatePasswordFail('Erro.'));
            
        }
    };
};

export const setResetRedirectPath = (path: string) => {
    return {
        type: actionTypes.SET_RESET_REDIRECT_PATH,
        path
    };
};

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
        
        if (updateAccountData.email !== '' && updateAccountData.password !== '' && updateAccountData.name !== '') {
            dispatch(updateAccountStart());
            axios.put(`/users/${id}`, updateAccountData, { 
                headers: { Authorization: `Bearer ${token}`} 
                })
                .then(res => {
                    dispatch(updateAccountSuccess(updateAccountData));
                })
                .catch(err => {
                    dispatch(updateAccountFail(err.message));
                });
        }
        else {
            dispatch(updateAccountFail('Erro.'));
        } 
    };
};

export const checkAuthStateSuccess = (token: string) => {
    return {
        type: actionTypes.CHECK_AUTH_STATE_SUCCESS,
        token
    }
}

export const checkAuthState: Function = () => {
    return (dispatch: AppDispatch) => {
        const token = localStorage.getItem('loginToken');
        if (!token) {
            dispatch(logout());
        } else {
            dispatch(checkAuthStateSuccess(token));
        }
    };
};