import styled from 'styled-components';

export const Button = styled.button`
    display: none;

    @media (max-width: 768px) {
        position: absolute;
        left: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 40px;
        height: 25px;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }

    @media (max-width: 420px) {
        min-width: 40px;
    }
`

export const Line = styled.div`
    width: 100%;
    height: 1px;
    border: 2px solid #707070;
    background-color: #707070;
    border-radius: 100px;
`