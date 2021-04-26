import styled from 'styled-components';

const Wrapper = styled.div`
    width: 50%;
    height: max-content;
    align-items: center;
    margin-right: auto;

    @media (max-width: 768px) {
        width: 100%;
        margin-top: 10px;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export default Wrapper;