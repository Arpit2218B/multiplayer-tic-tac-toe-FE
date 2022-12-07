import React, { useRef } from 'react';
import './styles.css';
import { useSelector } from 'react-redux';

const Chat = (props: any) => {
    const game = useSelector((state: any) => state?.game?.game);
    const inputRef = useRef<any>();

    const sendMessageHandler = () => {
        if(inputRef.current.value?.length > 0)
            props.emitEvent('sendMessage', {roomName: game.name, message: inputRef.current.value});
        inputRef.current.value = '';
    }

    return (
        <div className='chat_container'>
            <div className='chat_messages'>
                {game.messages?.map((m: any) => (
                    <span className='message'>{m}</span>
                ))}
            </div>
            <div className='chat_form'>
                <input ref={inputRef} />
                <button onClick={sendMessageHandler}>Send</button>
            </div>
        </div>
    );
}

export default Chat;