import React from 'react';
import Board from './board';
import Chat from './chat';

const Game = (props: any) => {
    return (
        <div className='game_container'>
            <Board emitEvent={props.emitEvent} addListener={props.addListener} />
            <Chat emitEvent={props.emitEvent} addListener={props.addListener}/>
        </div>
    )
}

export default Game;