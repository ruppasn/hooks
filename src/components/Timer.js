import React, { useEffect, useState } from 'react';

const useWaitTime = (startStatus) => {

    const [waitTime, setWaitTime] = useState(0);

    useEffect(() => {
        const ref = setInterval(() => {
            setWaitTime(time => time + 1);
        }, 1000)

        return () => {
            clearInterval(ref);
        }
    }, [startStatus])

    return waitTime;
}

export default ({ startStatus, OnStop }) => {
    const waitTime = useWaitTime(startStatus);

    return <div className='timer'>
     {waitTime}

    </div>
}