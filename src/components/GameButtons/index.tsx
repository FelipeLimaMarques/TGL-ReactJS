import React from 'react';
import { IGame } from '../../shared/interfaces';
import GameButton from './GameButton/index';

import Wrapper from './styles';

interface IProps {
    types: any,
    clicked: Function,
    current?: IGame
}

const GameButtons: React.FC<IProps> = props => {
    let buttons: JSX.Element = <p>Loading...</p>;
    if (props.types) buttons = props.types.map((game: IGame, index: number) => {
        if (props.current?.type === game.type) return (
            <GameButton
                key={index}
                clicked={() => props.clicked(game)}
                text={game.type}
                current={true}
                color={game.color}
            />
        );
        return (
            <GameButton
                key={index}
                clicked={() => props.clicked(game)}
                text={game.type}
                current={false}
                color={game.color}
            />
    )});

    return (
        <Wrapper>
            {buttons}
        </Wrapper>
    );
}

export default GameButtons;