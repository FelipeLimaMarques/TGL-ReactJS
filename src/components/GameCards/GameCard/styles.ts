import styled from 'styled-components';

export const Container = styled.div`
    min-width: 450px;
    min-height: 100px;
    max-height: max-content;
    display: flex;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        min-width: 100%;
    }
`

export const InfoWrapper = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const Line = styled.div`
    min-height: 100px;
    width: 6px;
    margin-right: 15px;
    background-color: ${props => props.color};
    border: 1px solid ${props => props.color};
    border-radius: 100px;
`

export const Numbers = styled.span`
    width: 100%;
    font-weight: bold;
    font-size: 1.2em;
`

export const Span = styled.span`
    width: max-content;
    font-size: 1em;
    font-style: normal;
    color: #868686;

`

export const GameName = styled.h3`
    color: ${props => props.color};
    font-weight: bold;
`