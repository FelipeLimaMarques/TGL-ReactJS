import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 450px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        margin: 10px 0;
        background: transparent; 
    }

    &::-webkit-scrollbar-thumb {
        background: #D7D7D7;
        border-radius: 100px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
`