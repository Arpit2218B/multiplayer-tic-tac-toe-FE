import React from 'react';
import Home from './dumb';
import { useDispatch } from 'react-redux';
import { updateGameState } from '../../redux/features/gameSlice';

const HomeWrapper = (props: any) => {
    const dispatch = useDispatch();

    const handleClick = (type: string) => {
        dispatch(updateGameState(type))
    }

    return (
        <Home clickHandler={handleClick} />
    )
}

export default HomeWrapper;