import React, { useContext } from 'react';
import { MyContext } from './MyContext';

export default () => {
    const { count } = useContext(MyContext)

    return <div className='timer'>
        {count}
    </div>
}