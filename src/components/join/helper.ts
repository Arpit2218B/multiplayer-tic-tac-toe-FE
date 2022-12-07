import { setError, startGame, updateGame, updateGameState } from "../../redux/features/gameSlice"

export const joinRoomHandler = (dispatch: any, room: any) => {
    if(room)
        dispatch(startGame({game: room, yourSymbol: Object.keys(room?.players).length - 1}));
}

export const updateRoomHandler = (dispatch: any, room: any) => {
    if(room)
        dispatch(updateGame({game: room}));
}