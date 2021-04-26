import StyledDiv from '../StyledDiv/styles';
import AnimatedSpinner from './styles';

const Spinner: React.FC = () => {
    return (
        <StyledDiv>
            <AnimatedSpinner>Loading...</AnimatedSpinner>
        </StyledDiv>
    )
}

export default Spinner;