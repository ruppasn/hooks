import React, { useState, useCallback, useMemo, useReducer } from 'react';
import Child from './Child';

//useCallback useMemo and useReducer
//useState, useEffect,  

const Parent = () => {
    var [name, setName] = useState(0);
    var [desc, setDesc] = useState(0);
    var [aois, setAois] = useState([{ id: 1, name: '1' }, { id: 2, name: '2' }]);

    // useReducer:
    //=============
    // const initData = [{ id: 1, name: '1' }, { id: 2, name: '2' }];
    // var [aois, dispatch] = useReducer((state, action) => {
    //     console.log(action.type)
    //     switch (action.type) {
    //         case 'deleteAoi':
    //             return state.filter(obj => obj.id !== action.id)
    //         default:
    //     }
    // }, initData);
    // dispatch({ type: 'deleteAoi', id: 1 })

    console.log(' parent, outside return', name);

    const handleClick = () => {
        setName(name + 1);
    }

    const testFunction = useCallback(() => {
        console.log('test function is called: name', name);
        setName(name + 1)
    }, [])



    const testFunction2 = useCallback(() => {
        console.log('test function is called: desc', desc);
        setDesc(desc + 1)
    }, [])

    console.log('before list')


    const list = useMemo(() => {
        return aois.map(obj => {
            console.log('executing the logic in useMemo');
            return obj.name;
        });
    }, [])

    const changeAois = () => {
        setAois([...aois, { id: 3, name: '3' }]); // aois, deleteAoi(id), updateAois(), addAois()
    }

    return <>
        {console.log('inside parent return')}
        In Parent
        {/* {name} */}
        <br />
        <button onClick={handleClick}>do something in parent</button>
        <button onClick={changeAois}>change aois</button>
        <br />
        <br />
        <br />
        {list.join(',')}
        <Child name={name} handleClick={testFunction} testFunction2={testFunction2} />

    </>
}

export default Parent;
