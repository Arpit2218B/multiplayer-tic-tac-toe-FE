import React, { useEffect, useState } from 'react';
import JoinGame from './join';
import { useSelector, useDispatch } from 'react-redux';
import { joinRoomHandler, updateRoomHandler } from './helper';
import { setName } from '../../redux/features/gameSlice';

const JoinGameWrapper = (props: any) => {
    const {emitEvent, addListener} = props;
    const [name, updateName] = useState('');
    const [roomName, updateRoomName] = useState('');
    const [password, updatePassword] = useState('');
    const isJoinDisabled = name.length === 0 || roomName.length === 0 || password.length === 0;
    const gameState = useSelector((state: any) => state.game.gameState);
    const dispatch = useDispatch();

    useEffect(() => {
        addListener('roomJoined', (room: any) => joinRoomHandler(dispatch, room), true);
        addListener('roomUpdated', (room: any) => updateRoomHandler(dispatch, room), true);
    }, []);

    const joinHandler = () => {
        if(gameState === 'JOIN') {
            emitEvent('joinRoom', {
                name: name,
                roomName: roomName,
                password: password
            });
        } else if(gameState === 'CREATE') {
            emitEvent('createRoom', {
                name: name,
                roomName: roomName,
                password: password
            });
        }
        dispatch(setName(name));
    }

    return (
        <JoinGame
            name={name}
            roomName={roomName}
            password={password}
            updateName={updateName}
            updateRoomName={updateRoomName}
            updatePassword={updatePassword}
            isJoinDisabled={isJoinDisabled}
            joinHandler={joinHandler}
            type={gameState}
        />
    )
}

export default JoinGameWrapper;