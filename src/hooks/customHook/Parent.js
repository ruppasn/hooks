import React, { useState } from 'react';
import Child from './Child';

export default () => {

    const [text, setText] = useState();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return <>
        <textarea onChange={handleChange}></textarea>
        <Child text={text}/>
    </>
}
