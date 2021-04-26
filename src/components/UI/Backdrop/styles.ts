import styled, { keyframes } from 'styled-components';

const OpacityOn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const OpacityOff = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`

export const Div = styled.div<{show: boolean}>`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    animation: ${props => props.show ? OpacityOn : OpacityOff} 0.3s ease-out;
`