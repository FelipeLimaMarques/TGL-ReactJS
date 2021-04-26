import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 2.8em;
`;

export const Line = styled.div`
    width: 90px;
    height: 1px;
    background-color: #B5C401;
    border: 3px solid #B5C401;
    border-radius: 100px;
    position: absolute;
    top: 72px;
`;

export const TitleLineWrapper = styled.div`
    width: max-content;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 100px;
    margin-right: 40px;

    @media (max-width: 768px) {
        margin: 0;
    }
`;