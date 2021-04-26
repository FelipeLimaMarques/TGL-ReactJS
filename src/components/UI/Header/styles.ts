import styled from 'styled-components';

export const MediaQueryLogo = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
`

export const HeaderDiv = styled.header`
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

    @media (max-width: 768px) {
        justify-content: center;
        position: fixed;
        z-index: 90;
    }
`;

export const TitleHomeWrapper = styled.div`
    width: max-content;
    height: 100%;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const NavWrapper = styled.div`
    width: 230px;
    height: 100%;
    margin-right: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        display: none;
    }
`;