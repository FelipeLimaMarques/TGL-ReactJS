import GameCard from './GameCard/index';

import {
    Wrapper
} from './styles';

interface IProps {
    saved: Array<any>
}

const GameCards: React.FC<IProps> = props => {
    const games = props.saved.map((game, index) => (
        <GameCard
            key={index}
            numbers={game.numbers}
            name={game.type}
            color={game.color}
            price={game.price}
        />
    ))
    return(
        <Wrapper>
            {games}
        </Wrapper>
    )
}

export default GameCards;