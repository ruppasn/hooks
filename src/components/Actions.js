import React, { useEffect } from 'react';

export default ({handleReset, handleRemove, handleUpdate}) => {

    useEffect(() => {
        console.log('handle reset is created newly')
    }, [handleReset])
    
    return <>
        <button onClick={handleReset}> Reset</button>
        <button onClick={handleRemove}> Remove Sai</button>
        <button onClick={handleUpdate}> Update Ram's Pin</button>
    </>
}