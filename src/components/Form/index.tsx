import { ChangeEvent } from 'react';
import { FormElement } from '../../types';
import StyledLink from '../UI/StyledLink/index';
import StyledButton from '../UI/StyledButton/index';
import { IAnyProperty } from '../../shared/interfaces';

import {
    Container,
    FormWrapper,
    InputWrapper,
    ForgotLink,
    H3,
    Input
} from './styles';

interface IProps {
    controls: IAnyProperty,
    title: string,
    submitHandler?: React.FormEventHandler<HTMLFormElement>,
    inputChangedHandler: Function,
    height?: string,
    isLogin: boolean,
    buttonText: string,
}

const Form: React.FC<IProps> = props => {
    const formElementsArray: Array<FormElement> = [];
    for ( let key in props.controls ) {
        formElementsArray.push( {
            id: key,
            config: props.controls[key]
        } );
    }

    const mappedInputs: Array<any> = formElementsArray.map(formInput => {
        if (formInput.config.elementConfig.placeholder === 'Token') {
            return <Input
                key={formInput.id}
                type={formInput.config.elementConfig.type}
                placeholder={formInput.config.elementConfig.placeholder}
                value={formInput.config.value}
                isValid={formInput.config.valid}
                hidden
                onChange={( event: ChangeEvent<HTMLInputElement> ) => props.inputChangedHandler( event, formInput.id )}
            />
        } else {
           return <Input
                key={formInput.id}
                type={formInput.config.elementConfig.type}
                placeholder={formInput.config.elementConfig.placeholder}
                value={formInput.config.value}
                isValid={formInput.config.valid}
                onChange={( event: ChangeEvent<HTMLInputElement> ) => props.inputChangedHandler( event, formInput.id )}
            />
        }
    })

    return (
        <Container>
            <H3>{props.title}</H3>
            <FormWrapper onSubmit={props.submitHandler} height={props.height}>
                <InputWrapper>
                    {mappedInputs}
                </InputWrapper>
                {props.isLogin && <ForgotLink to="/reset">I forgot my password</ForgotLink>}
                <StyledButton>{props.buttonText}</StyledButton>
            </FormWrapper>
            {props.isLogin 
                ? <StyledLink to="/registration">Sign Up</StyledLink>
                : <StyledLink to="/" exact inverted>Back</StyledLink>}
        </Container>
    );
}

export default Form;