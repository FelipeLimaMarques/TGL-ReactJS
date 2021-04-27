import styled from 'styled-components';

export const Container = styled.div`
    width: max-content;
    height: 100%;
    padding: auto;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        padding: 0 30px;
    }
`