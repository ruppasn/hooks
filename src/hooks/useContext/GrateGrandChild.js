import React, { useContext } from 'react';
import { MyContext } from './MyContext';

export default ({ text }) => {

    const {text:text2, setText} = useContext(MyContext)

    return <div>
        Inside GrateGrandChild:
        <br />
        {text}
        <br />
        value from context: {text2}
        <br />
        <button onClick={() => {setText('')}}>Reset</button>
    </div>
}