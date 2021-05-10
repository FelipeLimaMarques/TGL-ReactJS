import * as actionTypes from '../actions/actionTypes';
import { AnyAction } from 'redux';
import { updateObject } from '../../shared/utility';
import { toast } from 'react-toastify';

interface IAuth {
    token: string | null,
    loginRedirectPath: string,
    registerRedirectPath: string,
    resetRedirectPath: string,
    error: string | null,
    loading: boolean,
    redirect: boolean
}

const initialState: IAuth = {
    token: null,
    loginRedirectPath: "/home",
    registerRedirectPath: "/login",
    resetRedirectPath: "/login",
    error: null,
    loading: false,
    redirect: false
}

const loginStart = ( state: IAuth, action: AnyAction ) => {
    return updateObject( state, {
        token: null,
        loading: true
    });
};

const loginSuccess = (state: IAuth, action: AnyAction) => {
    toast.success('Logado com sucesso.');

    return updateObject( state, {
        token: action.token,
        loading: false
    });
};

const checkAuthStateSuccess = (state: IAuth, action: AnyAction) => {
    return updateObject( state, {
        token: action.token,
        loading: false
    });
};

const loginFail = (state: IAuth, action: AnyAction) => {
    return updateObject( state, {
        valid: true,
        loading: false,
        error: action.error
    });
};

const logout = (state: IAuth, action: AnyAction) => {
    return updateObject(state, { token: null, loading: false });
};

const setLoginRedirectPath = (state: IAuth, action: AnyAction) => {
    return updateObject(state, { loginRedirectPath: action.path })
}

const registerStart = ( state: IAuth, action: AnyAction ) => {
    return updateObject( state, {
        error: null,
        loading: true
    });
};

const registerSuccess = (state: IAuth, action: AnyAction) => {
    toast.success('Registrado com sucesso.');

    return updateObject( state, {
        loading: false,
        redirect: true
    });
};

const registerFail = (state: IAuth, action: AnyAction) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const setRegisterRedirectPath = (state: IAuth, action: AnyAction) => {
    return updateObject(state, { registerRedirectPath: action.path })
}

const resetStart = ( state: IAuth, action: AnyAction ) => {
    return updateObject( state, {
        error: null,
        loading: true
    });
};

const resetSuccess = (state: IAuth, action: AnyAction) => {
    toast.success('E-mail enviado.');
    
    return updateObject( state, {
        loading: false,
        redirect: true
    });
};

const resetFail = (state: IAuth, action: AnyAction) => {
    

    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const authRedirectSetFalse = (state: IAuth, action: AnyAction) => {
    return updateObject( state, {
        redirect: false
    })
}

const setResetRedirectPath = (state: IAuth, action: AnyAction) => {
    return updateObject(state, { resetRedirectPath: action.path })
}

const updatePasswordStart = ( state: IAuth, action: AnyAction ) => {
    return updateObject( state, {
        error: null,
        loading: true
    });
};

const updatePasswordSuccess = (state: IAuth, action: AnyAction) => {
    toast.success('Senha alterada com sucesso.');
    
    return updateObject( state, {
        loading: false,
        redirect: true
    });
};

const updatePasswordFail = (state: IAuth, action: AnyAction) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const checkAuthState = (state: IAuth, action: AnyAction) => {
    return updateObject( state, {
        error: null,
        loading: true
    });
}

const authReducer = ( state = initialState, action: AnyAction) => {
    switch ( action.type ) {
        case actionTypes.AUTH_REDIRECT_SET_FALSE: return authRedirectSetFalse(state, action);
        case actionTypes.LOGIN_START: return loginStart(state, action);
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
        case actionTypes.LOGIN_FAIL: return loginFail(state, action);
        case actionTypes.LOGIN_LOGOUT: return logout(state, action);
        case actionTypes.SET_LOGIN_REDIRECT_PATH: return setLoginRedirectPath(state,action);
        case actionTypes.REGISTER_START: return registerStart(state, action);
        case actionTypes.REGISTER_SUCCESS: return registerSuccess(state, action);
        case actionTypes.REGISTER_FAIL: return registerFail(state, action);
        case actionTypes.SET_REGISTER_REDIRECT_PATH: return setRegisterRedirectPath(state,action);
        case actionTypes.UPDATE_PASSWORD_START: return updatePasswordStart(state, action);
        case actionTypes.UPDATE_PASSWORD_SUCCESS: return updatePasswordSuccess(state, action);
        case actionTypes.UPDATE_PASSWORD_FAIL: return updatePasswordFail(state, action);
        case actionTypes.RESET_START: return resetStart(state, action);
        case actionTypes.RESET_SUCCESS: return resetSuccess(state, action);
        case actionTypes.RESET_FAIL: return resetFail(state, action);
        case actionTypes.SET_RESET_REDIRECT_PATH: return setResetRedirectPath(state,action);
        case actionTypes.CHECK_AUTH_STATE: return checkAuthState(state, action);
        case actionTypes.CHECK_AUTH_STATE_SUCCESS: return checkAuthStateSuccess(state, action);
        default: return state;
    }

}

export default authReducer;