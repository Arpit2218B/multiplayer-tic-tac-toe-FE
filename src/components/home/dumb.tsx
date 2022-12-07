import React from 'react';
import './style.css';

const Home = (props: any) => {
    const { clickHandler } = props;

    return (
        <div className='home_container'>
            <h1 className='home_heading'>Multiplayer</h1>
            <h1 className='home_heading'>Tic</h1>
            <h1 className='home_heading'>Tac</h1>
            <h1 className='home_heading'>Toe</h1>
            <div className='home_buttonContainer'>
                <button className='button ghost' onClick={() => clickHandler('JOIN')}>Join Game</button>
                <button className='button' onClick={() => clickHandler('CREATE')}>Create Game</button>
            </div>
        </div>
    )
}

export default Home;