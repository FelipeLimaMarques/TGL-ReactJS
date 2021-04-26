import styled from 'styled-components';

interface IProps {
    bgColor?: string
}

export const RoundButton = styled.button<IProps>`
    width: 63px;
    height: 65px;
    font-size: 1.2em;
    font-weight: bold;
    font-style: normal;
    background-color: ${props => props.bgColor ? props.bgColor : '#ADC0C4'};
    color: #FFF;
    outline: none;
    cursor: pointer;
    border: none;
    border-radius: 100%;
    margin-bottom: 20px;
    margin-right: 12px;
    transition: 0.2s;

    &:hover {
        filter: brightness(1.1);
    }
`