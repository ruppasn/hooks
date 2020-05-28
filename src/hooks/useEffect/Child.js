import React, { useEffect, useState } from 'react';

const useWaitTime = (text) => {

    const [waitTime, setWaitTime] = useState(0);

    useEffect(() => {
        const ref = setInterval(() => {
            setWaitTime(time => time + 1);
        }, 1000)

        return () => {
            clearInterval(ref);
        }
    }, [])

    return waitTime;
}

export default ({ text }) => {
    const [count, setCount] = useState(0);
    const waitTime = useWaitTime(text)

    console.log('functional component called')
    useEffect(() => {
       console.log('no [], on mount and each update!')
    })

    useEffect(() => {
        console.log('empty [], I will be called only on mount and unmount.')

        //logic

        return () => {
            console.log('I am function retured from useEffect, []')
        }
    }, [])

    useEffect(() => {
        console.log('[text]. each time when text is changed', text)
        text && setCount(prevCount => prevCount + 1);

        return () => {
            console.log('I am function retured from useEffect, [text]', text)
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