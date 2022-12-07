import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    error: null,
    game: null,
    gameState: 'HOME',
    yourName: '',
    yourSymbol: null,
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        'updateGame': (state, action) => {
            state.game = action.payload.game;
        },
        'startGame': (state, action) => {
            state.game = action.payload.game;
            state.yourSymbol = action.payload.yourSymbol;
            state.gameState = 'IN_GAME';
        },
        'updateGameState': (state, action) => {
            state.gameState = action.payload;
        },
        'setError': (state, action) => {
            state.error = action.payload
        },
        'setName': (state, action) => {
            state.yourName = action.payload
        }
    }
});

export const { 
    updateGame, 
    startGame, 
    updateGameState, 
    setError,
    setName,
} = gameSlice.actions;

export default gameSlice.reducer;