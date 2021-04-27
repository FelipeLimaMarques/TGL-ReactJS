import React from 'react';
import { useLocation } from 'react-router-dom';

import Logo from '../Logo';
import DrawerButton from './Drawer/DrawerButton';
import StyledLink from '../StyledLink/index';
import {
    HeaderDiv,
    TitleHomeWrapper,
    NavWrapper,
    MediaQueryLogo
} from './styles';

interface IProps {
    handler: React.MouseEventHandler<HTMLButtonElement>
}

const Header: React.FC<IProps> = props => {
    let location = useLocation();
    let showHome: JSX.Element | null = <StyledLink to="/home" noArrow fontSize="1.2em">Home</StyledLink>;
    location.pathname === "/home" && (showHome = null);

    return (
        <HeaderDiv>
            <DrawerButton handler={props.handler}/>
            <MediaQueryLogo>
                <Logo />
            </MediaQueryLogo>
            <TitleHomeWrapper>
                <Logo />
                {showHome}
            </TitleHomeWrapper>
            <NavWrapper>
                <StyledLink to="/account" noArrow fontSize="1.2em">Account</StyledLink>
                <StyledLink to="/logout" exact fontSize="1.2em" arrowSize="25px">Log Out</StyledLink>
            </NavWrapper>
        </HeaderDiv>
    );
};

export default Header;