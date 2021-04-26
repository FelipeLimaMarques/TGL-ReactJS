import React from 'react';
import { useAppDispatch } from '../../hooks';
import * as actions from '../../store/actions';
import { formatToBRL } from '../../shared/utility';
import { IBet } from '../../shared/interfaces';

import StyledButton from '../UI/StyledButton';
import deleteIcon from '../../assets/delete.png';
import {
    CartWrapper,
    GameCard,
    DeleteIcon,
    GameName,
    NamePriceWrapper,
    Line,
    Numbers,
    Price,
    StyledH2,
    ItemsWrapper,
    StyledSpan,
    DeleteButton,
} from './styles';

interface ICart {
    totalPrice: number,
    bets: Array<IBet>,
    handle: React.MouseEventHandler<HTMLElement>
}

const Cart: React.FC<ICart> = props => {
    const dispatch = useAppDispatch();
    const hasItems = props.bets.length > 0;
    const length = props.bets.length;

    let cartItems: JSX.Element | Array<JSX.Element> = <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <StyledSpan>Carrinho vazio.</StyledSpan>
    </div>;
    hasItems && (cartItems = props.bets.map((bet: IBet, index: number) => (
            <GameCard key={index}>
                <DeleteButton onClick={() => dispatch(actions.removeFromCart(index, bet.price))}><DeleteIcon src={deleteIcon}/></DeleteButton>
                <Line color={bet.color}/>
                <div style={{width: '100%'}}>
                    <Numbers>{bet.numbers.join(', ')}</Numbers>
                    <NamePriceWrapper>
                        <GameName color={bet.color}>{bet.type}</GameName>
                        <Price>{formatToBRL(bet.price)}</Price>
                    </NamePriceWrapper>
                </div>
            </GameCard>
        )));

    return (
        <React.Fragment>
            <CartWrapper hasItems={hasItems}>
                <StyledH2>CART</StyledH2>
                <ItemsWrapper length={length}>
                    {cartItems}
                </ItemsWrapper>
                <StyledH2>CART <StyledSpan>TOTAL: {formatToBRL(props.totalPrice)}</StyledSpan></StyledH2>
            </CartWrapper>
            <StyledButton
                color="#27C383"
                bgColor="#F4F4F4"
                border="#E2E2E2"
                dark
                clicked={(event) => props.handle(event)}
                >Save</StyledButton>
        </React.Fragment>
    )
}

export default Cart;