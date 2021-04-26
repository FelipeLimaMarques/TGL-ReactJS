import { formatToBRL } from '../../../shared/utility';
import {
    Container,
    Line,
    InfoWrapper,
    GameName,
    Numbers,
    Span
} from './styles';

interface IProps {
    color: string,
    numbers: Array<number>,
    name: string,
    price: number
}

const GameCard: React.FC<IProps> = props => {
    return (
        <Container>
            <Line color={props.color} />
            <InfoWrapper>
                <Numbers>{props.numbers.join(', ')}</Numbers>
                <Span>30/11/2021 - ({formatToBRL(props.price)})</Span>
                <GameName color={props.color}>{props.name}</GameName>
            </InfoWrapper>
        </Container>
    )
}

export default GameCard;