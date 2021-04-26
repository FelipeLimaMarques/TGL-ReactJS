import Button from './styles';

interface IProps {
    color: string,
    clicked: React.MouseEventHandler<HTMLButtonElement>,
    text: string,
    current: boolean
}

const GameButton: React.FC<IProps> = props => {
    return (
        <Button color={props.color} current={props.current} onClick={props.clicked}>{props.text}</Button>
    );
}

export default GameButton;