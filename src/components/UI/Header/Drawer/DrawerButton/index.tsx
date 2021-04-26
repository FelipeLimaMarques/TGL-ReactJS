import {
    Button,
    Line
} from './styles';

interface IProps {
    handler: React.MouseEventHandler<HTMLButtonElement>
}

const DrawerButton: React.FC<IProps> = props => {
    return (
        <Button onClick={props.handler}>
            <Line />
            <Line />
            <Line />
        </Button>
    )
}

export default DrawerButton;