import { useState, useEffect, ChangeEvent } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { updateObject, checkValidity } from '../../../../shared/utility';
import { useAppSelector, useAppDispatch } from '../../../../hooks';
import * as actions from '../../../../store/actions/index';
import Presentation from '../../../../components/UI/Presentation';
import StyledDiv from '../../../../components/UI/StyledDiv/styles';
import { IAnyProperty } from '../../../../shared/interfaces';

import Form from '../../../../components/Form/index';

const Register: React.FC = props => {
    const dispatch = useAppDispatch();
    const isAuthenticated = useAppSelector(state => state.auth.currentUser !== null);
    const authRedirectPath = useAppSelector(state => state.auth.authRedirectPath);
    const history = useHistory();

    const [controls, setControls] = useState<IAnyProperty>({
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Name'
            },
            value: '',
            validation: {
                required: true,
                isEmail: false
            },
            valid: false,
            touched: false
        },
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
            valid: false,
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
            valid: false,
            touched: false
        },
    })

    useEffect(() => {
        authRedirectPath !== '/login' && dispatch(actions.setRegisterRedirectPath( '/login' ));;
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
        dispatch(actions.register(controls.email.value, controls.password.value, controls.name.value));
        history.push('/login');
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
                title="Registration"
                buttonText="Register"
                isLogin={false}
            />
        </StyledDiv>
    );
}

export default Register;