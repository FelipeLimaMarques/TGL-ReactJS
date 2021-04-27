import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div<{show: boolean}>`
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 50%;
    background-color: #F7F7F7;
    z-index: 100;    
    transition: transform 0.3s ease-out;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(-100%)'};
`

export const Div = styled.header`
    width: 100%;
    height: 76px;
    background-color: #F7F7F7;
    padding: 0 40px;
    padding-top: 15px;
    margin: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #EBEBEB;
`;

export const NavWrapper = styled.div`
    height: max-content;
    display: flex;
    flex-direction: column;
`

export const LinkContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: flex-start;
    border-bottom: 2px solid #EBEBEB;
    transition: 0.3s ease-out;

    &:hover {
        background-color: #D1D1D1;
        border-color: #D1D1D1;
        filter: brightness(0.95);
    }
`

export const DrawerLink = styled(NavLink)`
    width: 100%;
    height: 100%;
    padding-top: 20px;
    padding-left: 20px;
    text-decoration: none;
    font-size: 1.4em;
    font-weight: bold;
`

export const ActiveLink = styled(DrawerLink)`
    background-color: #D1D1D1;
    border-color: #D1D1D1;
    filter: brightness(0.95);
`