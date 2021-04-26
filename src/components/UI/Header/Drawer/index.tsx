import React from 'react';
import {
    Container,
    NavWrapper,
    Div,
    LinkContainer,
    DrawerLink
} from './styles';
import Backdrop from '../../Backdrop';
import Logo from '../../Logo';

interface IProps {
    show: boolean,
    handler: React.MouseEventHandler<HTMLDivElement>
}

const Drawer: React.FC<IProps> = props => {
    return (
        <React.Fragment>
            <Backdrop clicked={props.handler} show={props.show}/>
            <Container show={props.show}>
                <Div>
                    <Logo />
                </Div>
                <NavWrapper>
                    <LinkContainer onClick={props.handler}>
                        <DrawerLink to="/home">Home</DrawerLink>
                    </LinkContainer>
                    <LinkContainer onClick={props.handler}>
                        <DrawerLink to="/newbet">New Bet</DrawerLink>
                    </LinkContainer>
                    <LinkContainer onClick={props.handler}>
                        <DrawerLink to="#">Account</DrawerLink>
                    </LinkContainer>
                    <LinkContainer onClick={props.handler}>
                        <DrawerLink to="/logout" exact>Log Out</DrawerLink>
                    </LinkContainer>
                </NavWrapper>
            </Container>
        </React.Fragment>
    )
}

export default Drawer;