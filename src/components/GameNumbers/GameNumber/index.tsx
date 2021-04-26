import React from 'react';
import {
    RoundButton
} from './styles';

interface IProps {
    clicked: React.MouseEventHandler<HTMLButtonElement>,
    color: string,
    isSelected: boolean
}

const GameNumber: React.FC<IProps> = props => {
    let button = <RoundButton onClick={props.clicked}>{props.children}</RoundButton>;
    props.isSelected && (button = <RoundButton bgColor={props.color} onClick={props.clicked}>{props.children}</RoundButton>)

    return (
        <React.Fragment>
            {button}
        </React.Fragment>
    )
}

export default GameNumber;