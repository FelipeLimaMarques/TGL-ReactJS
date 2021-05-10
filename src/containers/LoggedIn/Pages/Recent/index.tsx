import { useEffect } from 'react';
import Spinner from '../../../../components/UI/Spinner';
import * as actions from '../../../../store/actions';
import { useAppSelector, useAppDispatch } from '../../../../hooks';
import { IGame } from '../../../../shared/interfaces';

import Loading from '../../../../components/UI/Loading';
import GameCards from '../../../../components/GameCards';
import GameButtons from '../../../../components/GameButtons';
import StyledLink from '../../../../components/UI/StyledLink';
import StyledDiv from '../../../../components/UI/StyledDiv/styles';
import {
    Div,
    Row,
    BoldH2,
    P,
    MediaQueryDiv
} from './styles';

const Recent: React.FC = () => {
    const dispatch = useAppDispatch();
    const types = useAppSelector(state => state.games.types);
    const filtered = useAppSelector(state => state.bets.filtered);
    const currentGame = useAppSelector(state => state.games.current);
    const isFiltered = useAppSelector(state => state.bets.isFiltered);
    const isLoading = useAppSelector(state => state.bets.loading);
    const hasItems = filtered.length > 0;

    useEffect(() => {
        window.scrollTo(0,0);
        dispatch(actions.betsRedirectSetFalse());
        dispatch(actions.updateRedirectSetFalse());
        dispatch(actions.fetchBets());
        return () => {
            dispatch(actions.unfilterBets());
        };
    }, []);

    const handleFilter = (game: IGame) => {
        if (currentGame.type === game.type && isFiltered) {
            dispatch(actions.unfilterBets());
        }
        else {
            if (!isFiltered || currentGame.type !== game.type) {
                const newCurrent = types.find((current: IGame) => current.type === game.type);
                dispatch(actions.setCurrentGame(newCurrent));
                dispatch(actions.filterBets(newCurrent.id));
            }
        }
    }

    let buttons: JSX.Element = <Spinner withDiv={false} />;
    types && (buttons = <GameButtons types={types} current={currentGame} clicked={handleFilter} />);
    !isFiltered && (buttons = <GameButtons types={types} clicked={handleFilter} />);

    let cards: JSX.Element = <P>Nenhum jogo cadastrado.</P>;
    hasItems && (cards = <GameCards saved={filtered}/>);

    let loading: JSX.Element | null = null;
    isLoading && (loading = <Loading />);

    return(
        <StyledDiv>
            {loading}
            <Div>
                <Row>
                    <BoldH2>RECENT GAMES</BoldH2>
                    <P>Filters</P>
                    {buttons}
                    <MediaQueryDiv>
                        <StyledLink to="/newbet" hasColor fontSize="1.4em">New Bet</StyledLink>
                    </MediaQueryDiv>
                </Row>
                {cards}
            </Div>
        </StyledDiv>
    )
}

export default Recent;