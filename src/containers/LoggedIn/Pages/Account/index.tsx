import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Form from '../../../../components/Form';
import { IAnyProperty } from '../../../../shared/interfaces';
import { updateControls } from '../../../../shared/utility';
import { useAppSelector, useAppDispatch } from '../../../../hooks';
import * as actions from '../../../../store/actions';

import StyledDiv from '../../../../components/UI/StyledDiv/styles';
import Loading from '../../../../components/UI/Loading';

import {
    Container,
} from './styles';

const Account: React.FC = () => {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(state => state.updateUser.loading);
    const shouldRedirect = useAppSelector(state => state.updateUser.redirect);
    const userData = useAppSelector(state => state.updateUser.userData);

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
            },
            valid: true,
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
        dispatch(actions.fetchUserData());
    }, []);

    useEffect(() => {
        setControls(prevState => {
            return {
                ...prevState,
                name: {
                    ...prevState.name,
                    value: userData.name
                },
                email: {
                    ...prevState.email,
                    value: userData.email
                }
            }
        })
    }, [userData])

    const inputChangedHandler = ( event: React.ChangeEvent<HTMLInputElement>, controlName: string ) => {
        const updatedControls = updateControls(event, controlName, controls);
        setControls(updatedControls);
    }

    const submitHandler: React.FormEventHandler<HTMLFormElement> = ( event ) => {
        event.preventDefault();
        dispatch(actions.updateAccount(controls.email.value, controls.password.value, controls.name.value));
    }

    let redirect: JSX.Element | null = null;
    shouldRedirect && (redirect = <Redirect to="/home" />)

    let loading: JSX.Element | null = null;
    isLoading && (loading = <Loading />);
    
    return(
        <StyledDiv>
            {redirect}
            {loading}
            <Container>
                <Form 
                    submitHandler={submitHandler}
                    inputChangedHandler={inputChangedHandler}
                    controls={controls}
                    title="Update Account"
                    buttonText="Update"
                    isLogin={false}
                />
            </Container>
        </StyledDiv>
    )
}

export default Account;