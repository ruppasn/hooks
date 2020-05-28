import React, { useReducer, useState } from 'react';

const initialState = {
    text: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'RESET_TEXT':
            return {
                text: ''
            }

        default:
            return state;
    }
}

export default () => {

    // const [state, setState] = useState(initialState)
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = (e) => {
        console.log('in reset', state)
        dispatch({ type: 'UPDATE_TEXT', text: e.target.value });
    }


    const handleReset = () => {
        dispatch({ type: 'RESET_TEXT' });
    }

    return <>
        <textarea value={state.text} onChange={handleChange}></textarea>
        <br />
        {state.text}
        <button onClick={handleReset}>Reset</button>
    </>
}
