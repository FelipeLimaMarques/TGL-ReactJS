import styled from 'styled-components';

export const StyledH2 = styled.h2`
    margin-top: 32px;
    margin-left: 16px;
    color: #707070;
`

export const StyledSpan = styled.span`
    font-weight: normal;
    font-style: normal;
    color: #707070;
`

export const GameCard = styled.div`
    width: 100%;
    padding: 0 16px;
    margin-top: 32px;
    min-height: 70px;
    max-height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DeleteButton = styled.button`
    width: 24px;
    height: 24px;
    margin-right: 8px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
`

export const DeleteIcon = styled.img`
    width: 100%;
    height: 100%;
`

export const Line = styled.div`
    height: 100%;
    width: 6px;
    margin-right: 15px;
    background-color: ${props => props.color};
    border-left: 1px solid ${props => props.color};
    border-radius: 10px 0 0 10px;
`

export const Numbers = styled.p`
    width: 220px;
    min-height: 20px;
    margin-top: 8px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    color: #707070;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const GameName = styled.span`
    font-weight: bold;
    color: ${props => props.color};
    margin-right: 14px;
`

export const NamePriceWrapper = styled.div`
    width: 100%;
    margin-top: 8px;
    margin-bottom: 8px;
    display: flex;
`

export const Price = styled.span`
    color: #868686;
`

export const ItemsWrapper = styled.div<{length: number}>`
    width: 320px;
    max-height: 340px;
    height: ${props=> props.length > 0 ? (props.length * 120) + 'px' : '100px'};
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    @media (max-width: 768px) {
        width: 100%;
    }

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

export const CartWrapper = styled.div<{hasItems: boolean}>`
    width: 320px;
    ${props => props.hasItems ? 'max-height: 560px': 'height: 200px'};
    margin-top: 20px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: left;
    background-color: white;
    border: 1px solid #DDDDDD;
    border-radius: 14px 14px 0px 0px;
    box-shadow: 0px 3px 25px #00000014;

    @media (max-width: 1025px) and (max-height: 1367px) {
        width: 100%;
    }
`;