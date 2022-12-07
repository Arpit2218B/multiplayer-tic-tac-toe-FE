import React from 'react';
import './style.css';

interface Props {
    updateRoomName: any;
    updatePassword: any;
    updateName: any;
    isJoinDisabled: boolean;
    roomName: string;
    password: string;
    name: string;
    joinHandler: any;
    type: string;
}

const JoinGame = (props: Props) => {
    const {
        name,
        roomName,
        password,
        updateName,
        updateRoomName,
        updatePassword,
        isJoinDisabled,
        joinHandler,
        type,
    } = props;

    return (
        <div className='join_container'>
            <h1 className='join_heading'>{`${type} GAME`}</h1>
            <div className='join_form'>
                <input value={roomName} onChange={(e) => updateRoomName(e.target.value)} className='input' type="text" placeholder='Enter room name' />
                <input value={password} onChange={(e) => updatePassword(e.target.value)} className='input' type="password" placeholder='Enter room password' />
                <input value={name} onChange={(e) => updateName(e.target.value)} className='input' type="text" placeholder='Enter you name' />
                <button onClick={joinHandler} disabled={isJoinDisabled} className={isJoinDisabled ? 'button disabled' : 'button'}>{`${type}`}</button>
            </div>
        </div>
    )
}

export default JoinGame;