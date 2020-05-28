import React, { useEffect, useState } from 'react';

export default ({ text }) => {
    const [count, setCount] = useState(0);
    const [waitTime, setWaitTime] = useState(0);

    useEffect(() => {
       console.log('no [], on mount and each update!')
    })

    useEffect(() => {
        console.log('empty [], I will be called only on mount and unmount.')
    }, [])

    useEffect(() => {
        text && setCount(prevCount => prevCount + 1);
    }, [text])

    useEffect(() => {
        const ref = setInterval(() => {
            setWaitTime(time => time + 1);
        }, 1000)

        return () => {
            clearInterval(ref);
        }
    }, [text])

    return <div>

        <br />
        {text}

        <br />
        Text changed {count} times!!
        <br />
        Total wait time in sec: {waitTime}

    </div>
}