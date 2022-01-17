import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Increment } from './actions';

function Testing() {
    const petCounter = useSelector(state => state.petCounter);
    const petFavourite = useSelector(state => state.petFavourite)
    const dispatch = useDispatch();
    // const handleIncrement = (e)=>{
    //     dispatch(Increment());
    // }
    return (
        <div>
            <h1>Testing redux</h1>
            <h4>{petCounter}</h4>
            <h4>{petFavourite}</h4>

            <button onClick={()=>dispatch(Increment())}>Increment</button>
        </div>
    )
}

export default Testing
