import { AnyAction } from 'redux';
import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';
import { toast } from 'react-toastify';

interface IUpdate {
    userData: {
        name: string,
        email: string,
    },
    error: Error | null,
    loading: boolean,
    redirect: boolean
}

const initialState: IUpdate = {
    userData: {
        name: '',
        email: '',
    },
    error: null,
    loading: false,
    redirect: false
}

const fetchUserDataStart = (state: IUpdate , action: AnyAction) => {
    return updateObject( state, {
        loading: true,
        error: null
    })
}

const fetchUserDataSuccess = (state: IUpdate , action: AnyAction) => {
    return updateObject( state, {
        userData: {
            name: action.name,
            email: action.email,
        },
        loading: false,
    })
}

const fetchUserDataFail = (state: IUpdate , action: AnyAction) => {
    return updateObject( state, {
        loading: false,
        error: action.error
    })
}

const updateRedirectSetFalse = (state: IUpdate , action: AnyAction) => {
    return updateObject( state, {
        redirect: false
    })
}

const updateAccountStart = ( state: IUpdate, action: AnyAction ) => {
    return updateObject( state, {
        error: null,
        loading: true
    });
};

const updateAccountSuccess = (state: IUpdate, action: AnyAction) => {
    toast.success('Dados atualizados.');

    return updateObject( state, {
        loading: false,
        redirect: true
    });
};

const updateAccountFail = (state: IUpdate, action: AnyAction) => {
    toast.error('Falha ao atualizar os dados.');

    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const updateUserReducer = ( state = initialState, action: AnyAction) => {
    switch ( action.type ) {
        case actionTypes.FETCH_USER_DATA_START: return fetchUserDataStart(state, action);
        case actionTypes.FETCH_USER_DATA_SUCCESS: return fetchUserDataSuccess(state, action);
        case actionTypes.FETCH_USER_DATA_FAIL: return fetchUserDataFail(state, action);
        case actionTypes.UPDATE_ACCOUNT_START: return updateAccountStart(state, action);
        case actionTypes.UPDATE_ACCOUNT_SUCCESS: return updateAccountSuccess(state, action);
        case actionTypes.UPDATE_ACCOUNT_FAIL: return updateAccountFail(state, action);
        case actionTypes.UPDATE_REDIRECT_SET_FALSE: return updateRedirectSetFalse(state, action);
        default: return state;
    }
}

export default updateUserReducer;