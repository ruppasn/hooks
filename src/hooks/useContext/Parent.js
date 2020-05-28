import React, { useState } from 'react';
import Child from './Child';
import { MyContext } from './MyContext';

export default () => {

    const [text, setText] = useState();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return <>
        <MyContext.Provider value={{text, setText}}>
            <textarea value={text} onChange={handleChange}></textarea>
            <Child text={text} />
        </MyContext.Provider>
    </>
}
