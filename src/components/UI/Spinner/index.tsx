import React from 'react';
import StyledDiv from '../StyledDiv/styles';
import AnimatedSpinner from './styles';

interface IProps {
    withDiv: boolean
}

const Spinner: React.FC<IProps> = props => {
    return props.withDiv
        ? (
            <StyledDiv>
                <AnimatedSpinner>Loading...</AnimatedSpinner>
            </StyledDiv>
          )
        : (
            <React.Fragment>
                <AnimatedSpinner>Loading...</AnimatedSpinner>
            </React.Fragment>
          )
     
}

export default Spinner;