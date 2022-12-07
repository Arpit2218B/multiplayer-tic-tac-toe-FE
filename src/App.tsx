import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeWrapper from './components/home';
import JoinGameWrapper from './components/join';
import GameWrapper from './components/game';
import useSocket from './hooks/useSocket';
import { useSelector, useDispatch } from 'react-redux';
import store from './redux/store';
import ErrorWrapper from './components/Error';
import { setError } from './redux/features/gameSlice';

function App() {
  const [socket, emitEvent, addEventListener] = useSocket();
  const { gameState, error } = useSelector((state: any) => state.game);
  const dispatch = useDispatch();

  useEffect(() => {
    addEventListener('error', (error: any) => {
      dispatch(setError(error));
        setTimeout(() => {
            dispatch(setError(null));
        }, 2000);
    }, true);
  }, [socket]);
  
  return (
    <div className="App">
      {error ? <ErrorWrapper error={error} /> : null}
      {
        gameState === 'HOME' ?
        <HomeWrapper emitEvent={emitEvent} addListener={addEventListener} />
        : gameState === 'CREATE' || gameState === 'JOIN' ?
        <JoinGameWrapper emitEvent={emitEvent} addListener={addEventListener} />
        : <GameWrapper emitEvent={emitEvent} addListener={addEventListener} />
      }
    </div>
  );
}

export default App;
