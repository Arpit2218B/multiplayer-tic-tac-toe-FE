import React from 'react';
import Game from './game';

const GameWrapper = (props: any) => {
    return (
        <Game emitEvent={props.emitEvent} addListener={props.addListener}/>
    )
}

export default GameWrapper;