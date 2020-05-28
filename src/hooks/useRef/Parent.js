import React, { useState, useRef, useEffect } from 'react';

export default () => {

    const [text, setText] = useState();
    
    const ref = useRef();
    const inputEl = useRef(null);

    useEffect(() => {
        ref.current = text;
    }, [text]);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const onButtonClick = () => {
        console.log('element', inputEl.current)
        inputEl.current.focus();
        inputEl.current = 'Pramati'
        console.log('element', inputEl.current)

    };

    return <>
        <textarea ref={inputEl} onChange={handleChange}></textarea>
        <br />
        {text}
        <br />
        <button onClick={onButtonClick}>Focus the input</button>

    </>
}
