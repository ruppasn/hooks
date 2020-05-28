import React, { useState, useCallback, useEffect, useMemo } from 'react';
import Child from './Child';

export default () => {

    const [text, setText] = useState();


    const [users, setUsers] = useState([]);


    //once on mount
    useEffect(() => {
        //axios.get() fetch user data
        const users = [{ id: 1, type: 'ceo' }, { id: 2, type: 'emp2' }, { id: 3, type: 'emp3' }]
        setUsers(users);
    }, [text])

    const ceoMemorized = useMemo(() => {
        console.log('useMemo called', users)
        return users.find(user => user.type === 'ceo')
    }, [users])

    console.log(users, ceoMemorized)
    
    const handleChange = useCallback((e) => {
        setText(e.target.value);
    }, [])


    return <>
        <textarea onChange={handleChange}></textarea>
        <Child text={text} handleChange={handleChange} />

        <br/>
        CEO Details: id: {`${ceoMemorized && ceoMemorized.id}`} <br/>

    </>
}
