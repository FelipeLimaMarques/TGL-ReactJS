import { useState, useEffect, ChangeEvent } from 'react';
import { Redirect } from 'react-router-dom';
import { useAppSelector, useAppDispatch, useQuery } from '../../../../hooks';
import * as actions from '../../../../store/actions/index';
import Presentation from '../../../../components/UI/Presentation';
import StyledDiv from '../../../../components/UI/StyledDiv/styles';
import { IAnyProperty } from '../../../../shared/interfaces';
import { updateControls } from '../../../../shared/utility';

import Form from '../../../../components/Form/index';
import Loading from '../../../../components/UI/Loading';

const PassUpdate: React.FC = () => {
    const dispatch = useAppDispatch();
    const isAuthenticated = useAppSelector(state => state.auth.token !== null);
    const authRedirectPath = useAppSelector(state => state.auth.authRedirectPath);
    const isLoading = useAppSelector(state => state.auth.loading);
    const shouldRedirect = useAppSelector(state => state.auth.redirect);
    const query = useQuery();
    const token = query.get('token');

    const [controls, setControls] = useState<IAnyProperty>({
        token: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Token'
            },
            value: token,
            validation: {
                required: true,
            },
            valid: true,
            touched: false,
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6
            },
            valid: true,
            touched: false
        },
    })

    useEffect(() => {
        window.scrollTo(0,0);
        authRedirectPath !== '/login' && dispatch(actions.setResetRedirectPath( '/login' ));
    }, []);

    const inputChangedHandler = ( event: ChangeEvent<HTMLInputElement>, controlName: string ) => {
        const updatedControls = updateControls(event, controlName, controls);
        setControls(updatedControls);
    }

    const submitHandler: React.FormEventHandler<HTMLFormElement> = ( event ) => {
        event.preventDefault();
        dispatch(actions.updatePassword(controls.token.value, controls.password.value));
    }

    let authRedirect: JSX.Element | null = null;
    isAuthenticated && (authRedirect = <Redirect to={authRedirectPath} />);
    shouldRedirect && (authRedirect = <Redirect to="/login" />);

    let loading: JSX.Element | null = null;
    isLoading && (loading = <Loading />);
    
    return (
        <StyledDiv>
            {authRedirect}
            {loading}
            <Presentation />
            <Form 
                submitHandler={submitHandler}
                inputChangedHandler={inputChangedHandler}
                controls={controls}
                height="170px"
                title="Reset password"
                buttonText="Update"
                isLogin={false}
            />
        </StyledDiv>
    );
}

export default PassUpdate;