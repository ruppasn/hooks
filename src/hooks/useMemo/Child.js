import React, { useEffect, useState, useMemo } from 'react';


export default ({ text = '' }) => {
    const [count, setCount] = useState(0);

    
    
    useEffect(() => {
        text && setCount(count => count + 1);
    }, [text])

    return <div>

        <br />
        {text}

        <br />
        Text changed {count} times!!

    </div>
}