import { useState, useEffect, ChangeEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../hooks';
import { Redirect } from 'react-router-dom';
import * as actions from '../../../../store/actions/index';
import { IAnyProperty } from '../../../../shared/interfaces';
import { updateControls } from '../../../../shared/utility';

import Presentation from '../../../../components/UI/Presentation';
import StyledDiv from '../../../../components/UI/StyledDiv/styles';
import Form from '../../../../components/Form/index';
import Loading from '../../../../components/UI/Loading';

const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const isAuthenticated = useAppSelector(state => state.auth.token !== null);
    const authRedirectPath = useAppSelector(state => state.auth.loginRedirectPath);
    const isLoading = useAppSelector(state => state.auth.loading);

    const [controls, setControls] = useState<IAnyProperty>({
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Email'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: true,
            touched: false
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
    });

    useEffect(() => {
        window.scrollTo(0,0);
        dispatch(actions.authRedirectSetFalse());
        authRedirectPath !== '/home' && dispatch(actions.setLoginRedirectPath( '/home' ));
    }, [])

    const inputChangedHandler = ( event: ChangeEvent<HTMLInputElement>, controlName: string ) => {
        const updatedControls = updateControls(event, controlName, controls);
        setControls(updatedControls);
    }

    const submitHandler: React.FormEventHandler<HTMLFormElement> = ( event ) => {
        event.preventDefault();
        dispatch(actions.login(controls.email.value, controls.password.value));
    }

    let authRedirect: JSX.Element | null = null;
    isAuthenticated && (authRedirect = <Redirect to={authRedirectPath} />);

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
                title="Authentication"
                buttonText="Login"
                isLogin
            />
        </StyledDiv>
    );
}

export default Login;