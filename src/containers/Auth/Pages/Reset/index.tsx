import { useState, useEffect, ChangeEvent } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../../hooks';
import * as actions from '../../../../store/actions/index';
import Presentation from '../../../../components/UI/Presentation';
import StyledDiv from '../../../../components/UI/StyledDiv/styles';
import { IAnyProperty } from '../../../../shared/interfaces';
import { updateControls } from '../../../../shared/utility';

import Form from '../../../../components/Form/index';

const Reset: React.FC = () => {
    const dispatch = useAppDispatch();
    const isAuthenticated = useAppSelector(state => state.auth.currentUser !== null);
    const authRedirectPath = useAppSelector(state => state.auth.authRedirectPath);
    const history = useHistory();

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
        dispatch(actions.reset(controls.email.value));
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
                height="170px"
                title="Reset password"
                buttonText="Send Link"
                isLogin={false}
            />
        </StyledDiv>
    );
}

export default Reset;