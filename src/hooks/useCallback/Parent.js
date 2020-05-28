import React, { useState, useCallback } from 'react';
import Child from './Child';

export default () => {

    const [text, setText] = useState();

    const handleChange = useCallback((e) => {
        setText(e.target.value);
    },[])

    return <>
        <textarea onChange={handleChange}></textarea>
        <Child text={text} handleChange={handleChange}/>
    </>
}
