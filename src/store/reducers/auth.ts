import * as actionTypes from '../actions/actionTypes';
import { AnyAction } from 'redux';
import { updateObject } from '../../shared/utility';
import { IUser, ILogin } from '../../shared/interfaces';

interface IAuth {
    users: Array<IUser>,
    valid: boolean,
    currentUser: ILogin | null,
    loginRedirectPath: string,
    registerRedirectPath: string,
    resetRedirectPath: string,
}

const initialState: IAuth = {
    users: [],
    valid: true,
    currentUser: null,
    loginRedirectPath: "/home",
    registerRedirectPath: "/login",
    resetRedirectPath: "/login",
}

const loginStart = ( state: IAuth, action: AnyAction ) => {
    const users = [...state.users];

    return users.some(user => user.email === action.user.email && user.password === action.user.password)
        ? state
        : updateObject( state, { valid: false });
};

const loginSuccess = (state: IAuth, action: AnyAction) => {
    return !state.valid 
        ? loginFail(state, action)
        : updateObject( state, { 
            currentUser: action.user,
            error: null,
        } );
};

const loginFail = (state: IAuth, action: AnyAction) => {
    alert('E-mail ou Senha inválidos.');

    return updateObject( state, {
        valid: true,
    });
};

const logout = (state: IAuth, action: AnyAction) => {
    return updateObject(state, { currentUser: null });
};

const setLoginRedirectPath = (state: IAuth, action: AnyAction) => {
    return updateObject(state, { loginRedirectPath: action.path })
}

const registerStart = ( state: IAuth, action: AnyAction ) => {
    const users = [...state.users];
    let result: boolean = true;

    if (users.length > 0) {
        result = users.some(user => user.email === action.user.email || user.name === action.user.name)
    }

    return result
        ? state
        : updateObject( state, { valid: false });
};

const registerSuccess = (state: IAuth, action: AnyAction) => {
    const users = [...state.users];
    const newUsers = users.concat(action.user);
    state.valid && alert('Registration completed.');

    return !state.valid 
        ? registerFail(state, action)
        : updateObject( state, {
            users: newUsers,
        } );
};

const registerFail = (state: IAuth, action: AnyAction) => {
    alert('Registration failed.');

    return updateObject( state, {
        valid: true,
    });
};

const setRegisterRedirectPath = (state: IAuth, action: AnyAction) => {
    return updateObject(state, { registerRedirectPath: action.path })
}

const resetStart = ( state: IAuth, action: AnyAction ) => {
    const users = [...state.users];
    let result: boolean = true;

    if (users.length > 0) {
        result = users.some(user => user.email === action.email);
    }

    return result
        ? state
        : updateObject( state, { valid: false });
};

const resetSuccess = (state: IAuth, action: AnyAction) => {
    state.valid && alert('Password reset e-mail sent.');
    
    return !state.valid
        ? resetFail(state, action)
        : state
};

const resetFail = (state: IAuth, action: AnyAction) => {
    alert('E-mail not found.');

    return updateObject( state, {
        valid: true,
    });
};

const setResetRedirectPath = (state: IAuth, action: AnyAction) => {
    return updateObject(state, { resetRedirectPath: action.path })
}

const authReducer = ( state = initialState, action: AnyAction) => {
    switch ( action.type ) {
        case actionTypes.LOGIN_START: return loginStart(state, action);
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
        case actionTypes.LOGIN_FAIL: return loginFail(state, action);
        case actionTypes.LOGIN_LOGOUT: return logout(state, action);
        case actionTypes.SET_LOGIN_REDIRECT_PATH: return setLoginRedirectPath(state,action);
        case actionTypes.REGISTER_START: return registerStart(state, action);
        case actionTypes.REGISTER_SUCCESS: return registerSuccess(state, action);
        case actionTypes.REGISTER_FAIL: return registerFail(state, action);
        case actionTypes.SET_REGISTER_REDIRECT_PATH: return setRegisterRedirectPath(state,action);
        case actionTypes.RESET_START: return resetStart(state, action);
        case actionTypes.RESET_SUCCESS: return resetSuccess(state, action);
        case actionTypes.RESET_FAIL: return resetFail(state, action);
        case actionTypes.SET_RESET_REDIRECT_PATH: return setResetRedirectPath(state,action);
        default: return state;
    }

}

export default authReducer;