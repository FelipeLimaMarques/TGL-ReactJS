import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface IBoldLink {
    fontSize?: string,
    hasColor?: boolean,
    exact?: boolean
}

interface IArrowIcon {
    arrowSize?: string,
    inverted?: boolean,
}

export const BoldLink = styled(Link)<IBoldLink>`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: ${props => props.fontSize ? props.fontSize : '2em'};
    font-style: italic;
    font-weight: bold;
    color: ${props => props.hasColor ? '#B5C401' : '#707070'};
    background-color: transparent;
    border: none;
    outline: none;
    transition: 0.4s;
    white-space: nowrap;

    &:hover {
        ${props => props.hasColor ? 'filter: brightness(1.1);' :  'filter: brightness(1.4);'};
    }
`;

export const ArrowIcon = styled.img<IArrowIcon>`
    width: ${props => props.arrowSize ? props.arrowSize : '30px'};
    height: ${props => props.arrowSize ? props.arrowSize : '30px'};
    margin-top: 2px;
    ${props => props.inverted ? 'margin-right: 10px' : 'margin-left: 10px'}
`