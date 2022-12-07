import React from 'react';
import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { setError } from '../../redux/features/gameSlice';

const Board = (props: any) => {
    const {
        emitEvent,
    } = props;

    const game = useSelector((state: any) => state?.game);
    const dispatch = useDispatch();

    const yourName = game.yourName;
    const otherPlayer = Object.keys(game.game.players).filter(e => e !== yourName)[0];

    const youReady = game.game.players[yourName]?.ready;
    const otherReady = otherPlayer && game.game.players[otherPlayer]?.ready;

    const gameStarted = game.game.gameState === 'STARTED';
    const gameOver = game.game.gameState === 'OVER';
    const gameWinner = game.game.gameState === 'WINNER';

    const turn = game.game.turn;
    const yourSymbol = game.yourSymbol;

    const board = game.game.boardState;

    const handleBoardClick = (move: number, i: any) => {
        if(turn !== yourSymbol) {
            dispatch(setError('It\'s not your turn'));
            setTimeout(() => {
                dispatch(setError(null));
            }, 2000);
            return;
        }
        if(i === 1 || i === 0) {
            dispatch(setError('Cannot place your move here'));
            setTimeout(() => {
                dispatch(setError(null));
            }, 2000);
            return;
        }
        emitEvent('updateBoard', {roomName: game.game.name, turn: turn, position: move});
    }

    const readyPlayerHandler = () => {
        emitEvent('readyPlayer', {
            roomName: game.game.name,
            name: game.yourName,
        });
    }

    return (
        <div>
            {gameStarted && turn !== yourSymbol ? <p>Waiting for other player's move</p> : <p>Your turn.</p>}
            {
                gameStarted ? (
                    <div className='board_container'>
                        {board.map((i: any, index: number) => {
                            return (
                                <div className='board_tiles' onClick={() => handleBoardClick(index, i)}>
                                    {i === 0 ? 'X' : i === 1 ? 'O' : null}
                                </div>
                            )
                        })}
                    </div>
                ) :
                gameOver ? (<p>GAME OVER</p>)
                : gameWinner ? (<p>{Object.keys(game.game.players)[game.game.turn]} {" "} is winner.</p>)
                : (
                    <div className='ready_container'>
                        {!youReady ?
                            (
                                <button onClick={readyPlayerHandler} className='button'>Ready</button>
                            ) : (
                                <p className='ready_text'>Ready</p>
                            )
                        }

                        {!otherReady ?
                            (
                                <p className='ready_text'>Waiting for other player . . . .</p>
                            ) : (
                                <p className='ready_text'>Other player ready</p>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
}

export default Board;