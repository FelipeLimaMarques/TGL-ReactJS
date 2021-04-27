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
    price: number,
    date: Date
}

const GameCard: React.FC<IProps> = props => {
    return (
        <Container>
            <Line color={props.color} />
            <InfoWrapper>
                <Numbers>{props.numbers.join(', ')}</Numbers>
                <Span>
                    {props.date.getDate().toString().padStart(2, '0')}
                    /{props.date.getMonth().toString().padStart(2, '0')}
                    /{props.date.getFullYear().toString().padStart(2, '0')} - ({formatToBRL(props.price)})</Span>
                <GameName color={props.color}>{props.name}</GameName>
            </InfoWrapper>
        </Container>
    )
}

export default GameCard;