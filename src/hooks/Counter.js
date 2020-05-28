
import React, {useState, useCallback, useEffect} from 'react'

const Counter = () => {
    
  const [counter, incrementCounter] = useState(0)
  
  const handleIncrement = () => incrementCounter(counter + 1)

  return (
    <div className='counter'>
      <div>{counter}</div>
      <hr />
      <button type="button" onClick={handleIncrement}>+</button>
    </div>
  ) 
}

export default Counter