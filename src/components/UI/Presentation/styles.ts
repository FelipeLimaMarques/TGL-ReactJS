import styled from 'styled-components';

export const Aside = styled.aside`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    align-items: center;

    @media (max-width: 1300px) {
        margin-left: 0;
    }

    @media (max-width: 768px) {
        margin-bottom: 50px;
    }
`;

export const H2 = styled.h2`
    font-size: 4em;
    font-style: italic;
    font-weight: bold;
    color: #707070;

    @media (max-width: 768px) {
        font-size: 2.5em;
    }
`;

export const H1 = styled.h1`
    font-size: 5em;
    font-style: italic;
    font-weight: bold;
    color: #707070;

    @media (max-width: 768px) {
        font-size: 3em;
    }
`;

export const P = styled.p`
    font-size: 1.5em;
    background-color: #B5C401;
    color: #FFFFFF;
    padding: 7px 60px;
    margin: 20px 0 5px 0;
    border-radius: 100px;
    color: #707070;

    @media (max-width: 768px) {
        font-size: 1em;
        padding: 7px 40px;
        margin: 15px 0 5px 0;
    }
`