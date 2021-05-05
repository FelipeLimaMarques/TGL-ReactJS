import React, { useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../../hooks';
import * as actions from '../../../../store/actions';
import { IGame } from '../../../../shared/interfaces';
import { toast } from 'react-toastify';

import cart from '../../../../assets/cart.png';
import GameButtons from '../../../../components/GameButtons';
import GameNumbers from '../../../../components/GameNumbers';
import Cart from '../../../../components/Cart';
import StyledDiv from '../../../../components/UI/StyledDiv/styles';
import Loading from '../../../../components/UI/Loading';

import {
    Container,
    CartWrapper,
    InfoWrapper,
    GamesWrapper,
    BoldSpan,
    NormalH2,
    AddToCartButton,
    ButtonBorder,
    ButtonsRow,
    ButtonsWrapper,
    Icon
} from './styles';

const Newbet: React.FC = () => {
    const dispatch = useAppDispatch();
    const game = useAppSelector(state => state.currentGame.game);
    const types = useAppSelector(state => state.fetchGames.types);
    const selected = useAppSelector(state => state.newBet.bet);
    const bets = useAppSelector(state => state.newBet.bets);
    const totalPrice = useAppSelector(state => state.newBet.totalPrice);
    const isLoading = useAppSelector(state => state.savedBets.loading);
    const shouldRedirect = useAppSelector(state => state.savedBets.redirect);

    useEffect(() => {
        window.scrollTo(0,0);
        dispatch(actions.fetchGames());
        return () => {
            dispatch(actions.clearCart());
        };
    }, []);

    useEffect(() => {
        const type = types[0];
        dispatch(actions.setCurrentGame(type));
        return () => {
            dispatch(actions.clearCurrentGame());
        };
    }, [types, dispatch]);

    const setCurrent = (game: IGame) => {
        const newCurrent = types.find((current: IGame) => current.type === game.type);
        dispatch(actions.clearNumbers(game.id));
        dispatch(actions.setCurrentGame(newCurrent));
    }

    const handleSelectedNumber = (number: number, maxLength: number, id: number) => {
        dispatch(actions.addNumber(number, maxLength, id));
    }

    const handleBuy: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        
        if (totalPrice >= 30) {
            dispatch(actions.saveBet(bets));
        }
        else {
            toast.warn('Valor mínimo de compra: R$30,00.');
        }
    }

    let redirect: JSX.Element | null = null;
    shouldRedirect && (redirect = <Redirect to="/home" />);

    let loading: JSX.Element | null = null;
    isLoading && (loading = <Loading />);
    
    return(
        <StyledDiv>
            {redirect}
            {loading}
            <Container>
                <InfoWrapper>
                    <NormalH2><BoldSpan>NEW BET</BoldSpan> FOR {game.type.toUpperCase()}</NormalH2>
                    <BoldSpan>Choose a game</BoldSpan>
                    <GamesWrapper>
                        <GameButtons types={types} clicked={setCurrent} current={game}/>
                    </GamesWrapper>
                    <BoldSpan>Fill your bet</BoldSpan>
                    <p style={{color: '#707070'}}>{game.description}</p>
                    <GameNumbers range={game.range} maxLength={game['max-number']} id={game.id} selected={selected.numbers} color={game.color} clicked={handleSelectedNumber}/>
                    <ButtonsRow>
                        <ButtonsWrapper>
                            <ButtonBorder onClick={() => dispatch(actions.completeNumbers(game['max-number'], game.range, game.id))}>Complete game</ButtonBorder>
                            <ButtonBorder onClick={() => dispatch(actions.clearNumbers(game.id))}>Clear game</ButtonBorder>
                        </ButtonsWrapper>
                        <AddToCartButton onClick={() => dispatch(actions.addToCart(selected, game))}><Icon src={cart}/>Add to cart</AddToCartButton>
                    </ButtonsRow>
                </InfoWrapper>
                <CartWrapper>
                    <Cart
                        totalPrice={totalPrice}
                        bets={bets}
                        types={types}
                        handle={handleBuy}
                        />
                </CartWrapper>
            </Container>
        </StyledDiv>
    )
}

export default Newbet;