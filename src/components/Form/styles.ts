import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

interface IProps {
    height?: string
}

const FadeInRight = keyframes`
    0% {
        transform: translateX(40%);
        opacity: 0;
    }
    100% {
        transform: translateX(0%);
        opacity: 1;
        position: relative;
    }
`

const FadeInBottom = keyframes`
    0% {
        transform: translateY(10%);
        opacity: 0;
    }
    100% {
        transform: translateY(0%);
        opacity: 1;
        position: relative;
    }
`

export const Container = styled.section`
    width: 50%;
    height: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${FadeInRight} 0.6s ease-out;
    transition-timing-function: ease;

    @media (max-width: 1300px) {
        margin-right: 0;
    }

    @media (max-width: 1025px) and (max-height: 1367px) {
        width: 100%;
        margin-top: 200px;
    }

    @media (max-width: 1025px) and (max-height: 1025px){
        margin-top: 50px;
    }

    @media (max-width: 768px) and (max-height: 1023px) {
        animation: ${FadeInBottom} 0.6s ease-out;
        margin-top: 10px;
        width: 80%;
    }

    @media (max-width: 420px) {
        width: 100%;
    }
`;

export const FormWrapper = styled.form<IProps>`
    overflow: auto;
    width: 350px;
    height: ${props => props.height ? props.height : '300px'};
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border: 1px solid #DDDDDD;
    border-radius: 14px;
    box-shadow: 0px 3px 25px #00000014;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        margin: 10px 0;
        background: transparent; 
    }

    &::-webkit-scrollbar-thumb {
        background: #D7D7D7;
        border-radius: 100px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    @media (max-width: 1025px) and (max-height: 1367px) {
        width: 80%;
    }

    @media (max-width: 1000px) {
        width: 80%;
    }

    @media (max-width: 480px) {
        width: 95%
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 64px;
    border: none;
    border-bottom: 2px solid #EBEBEB;
    outline: none;
    margin: 0;
    font-size: 1.3em;
    font-weight: bold;
    padding: 0 30px;
    transition: 0.4s;
    
    &::placeholder {
        font-size: 0.8em;
        color: #9D9D9D;
    }

    &:focus {
        color: #7ddcff;
        border-color: #7ddcff;
        
        &::placeholder {
        font-size: 0.8em;
        color: #7ddcff;
    }
    }
`;

export const InputWrapper = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
`;

export const ForgotLink = styled(Link)`
    text-decoration: none;
    font-size: 1em;
    font-style: italic;
    color: #C1C1C1;
    align-self: flex-end;
    margin-right: 20px;
`;

export const H3 = styled.h3`
    font-size: 2em;
    font-style: italic;
    font-weight: bold;
    color: #707070;
`;