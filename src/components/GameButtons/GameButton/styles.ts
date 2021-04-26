import styled from 'styled-components';

const Button = styled.button`
    width: max-content;
    padding: 5px 20px;
    margin-right: 20px;
    margin-bottom: 10px;
    background-color: ${props => props.current ? props.color : '#FFF'};
    border: 2px solid ${props => props.color};
    border-radius: 100px;
    font-weight: bold;
    color: ${(props: {current: boolean, color: string}) => props.current ? '#FFF' : props.color};
    cursor: pointer;
    outline: none;
    transition: 0.1s;
    white-space: nowrap;

    @media (min-width: 769px) {
        &:hover {
            background-color: ${props => props.color};
            color: #FFF;
        }
    }
`
export default Button;