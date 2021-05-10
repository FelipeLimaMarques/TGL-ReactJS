import React from 'react';
import {
    Div
} from './styles';

interface IProps {
    clicked?: React.MouseEventHandler<HTMLDivElement>,
    show?: boolean
}

const Backdrop: React.FC<IProps> = props => {
    return (
        props.show ? <Div onClick={props.clicked} show={props.show} /> : null
    )
}

export default Backdrop;