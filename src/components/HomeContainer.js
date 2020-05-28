import React, { useState, useContext, useEffect } from 'react';
import { MyContext } from './MyContext';
import ListContainer from './ListContainer';


export default () => {
    const [text, setText] = useState('')
    
    const { setCount } = useContext(MyContext)
    const [changeCount, setChangeCount] = useState(0);

    const handletextChange = (e) => {
        setText(e.target.value)
    }

    const handleNotifications = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        text && setChangeCount(prevCount => prevCount + 1);
    }, [text])

    return <>
        <textarea classtext='textarea' value={text} onChange={handletextChange}></textarea>
        <br />
        {text}

        <br />
        Text changed {changeCount} times!!
        <br />
        <hr />
        <button onClick={handleNotifications}> Generate Notification</button>

        <ListContainer />


    </>
}