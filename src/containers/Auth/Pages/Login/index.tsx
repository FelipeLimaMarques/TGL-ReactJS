import { useState, useEffect, ChangeEvent } from 'react';
import { updateObject, checkValidity } from '../../../../shared/utility';
import { useAppSelector, useAppDispatch } from '../../../../hooks';
import { Redirect } from 'react-router-dom';
import * as actions from '../../../../store/actions/index';
import { IAnyProperty } from '../../../../shared/interfaces';

import Presentation from '../../../../components/UI/Presentation';
import StyledDiv from '../../../../components/UI/StyledDiv/styles';
import Form from '../../../../components/Form/index';

const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    //const loading = useAppSelector(state => state.login.loading);
    const isAuthenticated = useAppSelector(state => state.auth.currentUser !== null);
    const current = useAppSelector(state => state.auth.currentUser);
    const authRedirectPath = useAppSelector(state => state.auth.loginRedirectPath);

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
        authRedirectPath !== '/home' && dispatch(actions.setLoginRedirectPath( '/home' ));
    }, [])

    const inputChangedHandler = ( event: ChangeEvent<HTMLInputElement>, controlName: string ) => {
        const updatedControls = updateObject( controls, {
            [controlName]: updateObject( controls[controlName], {
                value: event.target.value,
                valid: checkValidity( event.target.value, controls[controlName].validation ),
                touched: true
            } )
        } );
        setControls(updatedControls);
    }

    const submitHandler: React.FormEventHandler<HTMLFormElement> = ( event ) => {
        event.preventDefault();
        dispatch(actions.login(controls.email.value, controls.password.value));
    }

    let authRedirect: JSX.Element | null = null;
    isAuthenticated && (authRedirect = <Redirect to={authRedirectPath} />);

    return (
        <StyledDiv>
            {authRedirect}
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