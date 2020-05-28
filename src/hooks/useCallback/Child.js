import React, { useEffect, useState, useCallback } from 'react';


export default ({ text = '', handleChange }) => {
    const [count, setCount] = useState(0);

    console.log('child called')
    useEffect(() => {
        console.log('handleChange created newly')
    }, [handleChange])


    // const test1 = () => {
    //     console.log('test1')
    // }

    useEffect(() => {
        text && setCount(count => count + 1);
    }, [text])

    // const test2 = useCallback(() => {
    //     console.log('test2 called', count, text)
    // }, [text])

    // useEffect(() => {
    //     console.log('test2 is created')
    //     test1()
    //     test2()
    // }, [test2])

    return <div>

        <br />
        {text}

        <br />
        Text changed {count} times!!
    </div>
}