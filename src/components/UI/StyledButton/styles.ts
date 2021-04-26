import styled from 'styled-components';

interface IProps {
    color?: string,
    bgColor?: string,
    border?: string
}

export const BigButton = styled.button<IProps>`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    margin-top: -1px;
    ${props => props.border && 'margin-bottom: 40px;'};
    font-size: 2em;
    font-style: italic;
    font-weight: bold;
    color: ${props => props.color ? props.color : '#B5C401'};
    background-color: ${props => props.bgColor ? props.bgColor : 'transparent'};
    border: ${props => props.border ? `1px solid ${props.border}` : 'none'};
    ${props => props.border && 'border-radius: 0px 0px 10px 10px'};
    outline: none;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
        font-size: 2.1em;
    }
`;

export const ArrowIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-top: 2px;
    margin-left: 10px;
`;