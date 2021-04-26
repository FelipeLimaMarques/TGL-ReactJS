import {
    BigButton,
    ArrowIcon
} from './styles';
import rightArrowGreen from '../../../assets/right-arrow-green.png';
import rightArrowDarkGreen from '../../../assets/right-arrow-dark-green.png';

interface IProps {
    dark?: boolean,
    color?: string,
    bgColor?: string,
    border?: string,
    clicked?: React.MouseEventHandler<HTMLButtonElement>
}

const StyledButton: React.FC<IProps> = props => {
    let arrow = <ArrowIcon src={rightArrowGreen} />;
    props.dark && (arrow = <ArrowIcon src={rightArrowDarkGreen} />);

    return (
        <BigButton onClick={props.clicked} color={props.color} bgColor={props.bgColor} border={props.border}>
            {props.children}
            {arrow}
        </BigButton>
    );
}

export default StyledButton;