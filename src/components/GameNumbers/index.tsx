import React from 'react';
import GameNumber from './GameNumber';

import {
    Wrapper
} from './styles';

interface IProps {
    range: number,
    maxLength: number,
    selected: Array<number>,
    clicked: Function,
    color: string
}

const GameNumbers: React.FC<IProps> = props => {
    const numbersArr: Array<number> = [];

    for (let i = 1; i <= props.range; i++) {
        numbersArr.push(i);
    }

    return (
        <Wrapper>
            {numbersArr.map((number, index) => {
                let isSelected = props.selected.includes(number);

                return <GameNumber
                    key={index}
                    color={props.color}
                    isSelected={isSelected}
                    clicked={() => props.clicked(number, props.maxLength)}
                    >{String(number).padStart(2, '0')}</GameNumber>
            }
            )}
        </Wrapper>
    )
}

export default GameNumbers;