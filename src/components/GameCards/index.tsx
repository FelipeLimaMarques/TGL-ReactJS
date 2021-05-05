import GameCard from './GameCard/index';
import { IBetFormated } from '../../shared/interfaces';

import {
    Wrapper
} from './styles';

interface IProps {
    saved: Array<IBetFormated>
}

const GameCards: React.FC<IProps> = props => {
    const games = props.saved.map((bet, index) => (
        <GameCard
            key={index}
            numbers={bet.numbers}
            name={bet.game.type}
            color={bet.game.color}
            price={bet.price}
            date={bet.created_at}
        />
    ))
    return(
        <Wrapper>
            {games}
        </Wrapper>
    )
}

export default GameCards;