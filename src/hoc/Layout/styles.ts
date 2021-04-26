import styled from 'styled-components';

const Main = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0 40px;
    background-color: #F7F7F7;

    @media (max-width: 1000px) {
        padding: 0 20px;

    }

    @media (max-width: 768px) {
        padding: 0;
    }
`;

export default Main;