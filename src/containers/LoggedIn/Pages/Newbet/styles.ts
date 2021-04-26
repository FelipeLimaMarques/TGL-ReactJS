import styled, { keyframes } from 'styled-components';

const FadeInLeft = keyframes`
    0% {
        transform: translateX(-5%);
        opacity: 0;
    }
    100% {
        transform: translateX(0%);
        opacity: 1;
    }
`

const FadeInRight = keyframes`
    0% {
        transform: translateX(5%);
        opacity: 0;
    }
    100% {
        transform: translateX(0%);
        opacity: 1;
    }
`

export const Container = styled.div`
    width: max-content;
    height: 100%;
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        padding: 0 30px;
    }
`
export const CartWrapper = styled.div`
    width: auto;
    height: 100%;
    animation: ${FadeInRight} 0.3s ease-out;
`

export const GamesWrapper = styled.div`
    margin: 20px 0;
    width: 100%;
    height: max-content;
`

export const InfoWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin-right: 40px;
    animation: ${FadeInLeft} 0.3s ease-out;
`

export const ButtonsRow = styled.div`
    width: 100%;
    margin-top: 25px;
    margin-bottom: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        margin: 0;
        flex-direction: column;
    }
`

export const ButtonsWrapper = styled.div`
    width: max-content;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
        justify-content: space-between;
        margin-bottom: 20px;
    }
`

const Button = styled.button`
    border: 1px solid #27C383;
    font-style: normal;
    font-weight: 550;
    margin-right: 25px;
    padding: 16px 22px;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
        background-color: #EEE;
    }

    @media (max-width: 768px) {
        margin-right: 0;
    }
`

export const ButtonBorder = styled(Button)`
    color: #27C383;
    background-color: transparent;
`

export const AddToCartButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 25px;
    padding-right: 40px;
    color: #FFF;
    background-color: #27C383;
    font-weight: bold;

    &:hover {
        background-color: #30d393;
    }
`

export const Icon = styled.img`
    width: 25px;
    height: 22px;
    margin-right: 28px;
`

export const BoldSpan = styled.span`
    font-weight: bold;
`

export const NormalH2 = styled.h2`
    font-weight: normal;
    margin-bottom: 33px;
`