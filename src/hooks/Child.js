import React, { useEffect } from 'react';

function Child({ name, handleClick, testFunction2 }) {

    //each render
    console.log(' child, outside return')

    // // only mount
    // useEffect(() => {
    //     console.log('mount called once');
    // }, [])

    // only update
    useEffect(() => {
        console.log('handle click is changed, handleClick');
    }, [handleClick])

    useEffect(() => {
        console.log('handle click is changed: testFunction2');
    }, [testFunction2])

    return <>
        <br />
  In Child:
  <br/>

  <button onClick={handleClick}>handleClick</button>
  <br/>
  <br/>
  <button onClick={testFunction2}>testFunction2</button>
        {console.log('child inside return')}
    </>
}

export default Child;
