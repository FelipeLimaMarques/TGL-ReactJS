import React from 'react';
import { useLocation } from 'react-router';

import {
    Container,
    NavWrapper,
    Div,
    LinkContainer,
    DrawerLink,
    ActiveLink
} from './styles';
import Backdrop from '../../Backdrop';
import Logo from '../../Logo';


interface IProps {
    show: boolean,
    handler: React.MouseEventHandler<HTMLDivElement>
}

const Drawer: React.FC<IProps> = props => {
    let location = useLocation();
    let homeLink: JSX.Element = <DrawerLink to="/home">Home</DrawerLink>;
    let newbetLink: JSX.Element = <DrawerLink to="/newbet">New Bet</DrawerLink>;
    let accountLink: JSX.Element = <DrawerLink to="/account">Account</DrawerLink>;

    switch (location.pathname) {
        case '/home': {
            homeLink = <ActiveLink to="/home">Home</ActiveLink>;
            break;
        }
        case '/newbet': {
            newbetLink = <ActiveLink to="/newbet">New Bet</ActiveLink>;
            break;
        }
        case '/account': {
            accountLink = <ActiveLink to="/account">Account</ActiveLink>;
            break;
        }
        default: {}
    }

    return (
        <React.Fragment>
            <Backdrop clicked={props.handler} show={props.show}/>
            <Container show={props.show}>
                <Div>
                    <Logo />
                </Div>
                <NavWrapper>
                    <LinkContainer onClick={props.handler}>
                        {homeLink}
                    </LinkContainer>
                    <LinkContainer onClick={props.handler}>
                        {newbetLink}
                    </LinkContainer>
                    <LinkContainer onClick={props.handler}>
                        {accountLink}
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