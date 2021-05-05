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
    numbers: string,
    name: string,
    price: number,
    date: string
}

const GameCard: React.FC<IProps> = props => {
    const newDate = new Date(props.date)
    return (
        <Container>
            <Line color={props.color} />
            <InfoWrapper>
                <Numbers>{props.numbers}</Numbers>
                <Span>
                    {newDate.getDate().toString().padStart(2, '0')}
                    /{newDate.getMonth().toString().padStart(2, '0')}
                    /{newDate.getFullYear().toString().padStart(2, '0')} - ({formatToBRL(props.price)})</Span>
                <GameName color={props.color}>{props.name}</GameName>
            </InfoWrapper>
        </Container>
    )
}

export default GameCard;