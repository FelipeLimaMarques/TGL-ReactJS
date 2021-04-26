import styled, { keyframes } from 'styled-components';

const FadeInX = keyframes`
    0% {
        transform: translateX(-5%);
        opacity: 0;
    }
    100% {
        transform: translateX(0%);
        opacity: 1;
    }
`

export const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    animation: ${FadeInX} 0.3s ease-out;

    @media (max-width: 768px) {
        padding: 0 10px;
        width: 100%;
    }
`

export const MediaQueryDiv = styled.div`
    display: block;

    @media (max-width: 768px) {
        display: none;
    }
`

export const Row = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 40px;
    padding: 10px 0;

    @media (max-width: 768px) {
        height: max-content;
        flex-direction: column;
    }
`

export const BoldH2 = styled.h2`
    font-weight: bold;
    margin-right: 45px;
    white-space: nowrap;

    @media (max-width: 768px) {
        margin: 0;
    }
`

export const P = styled.p`
    font-size: 1em;
    margin-right: 10px;

    @media (max-width: 768px) {
        margin: 0;
    }

    @media (max-width: 470px) {
        margin: 0;
    }
`