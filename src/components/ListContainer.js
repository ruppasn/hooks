import React, { useReducer, useMemo, useCallback } from 'react';
import ManagerDetails from './Actions';
import Actions from './Actions';


const users = [
    {
        name: 'satya',
        address: { pin: '1' },
        type: 'manager'
    },
    {
        name: 'sai',
        address: { pin: '2' },
        type: 'emp'
    },
    {
        name: 'ram',
        address: { pin: '3' },
        type: 'emp'
    },
    {
        name: 'ravi',
        address: { pin: '4' },
        type: 'emp'
    }
]


export default () => {

    const initialState = {
        users,
        changeStatue: false,
        someOtherProp: []
    }


    const reducer = (state, action) => {
        switch (action.type) {
            case 'UPDATE':
                return {
                    ...state,
                    changeStatue: true,
                    users: state.users.map(user => user.name === action.payload.name ? action.payload : user)
                }
            case 'RESET':
                return {
                    ...state,
                    changeStatue: true,
                    users
                }
            case 'REMOVE':

                return {
                    ...state,
                    changeStatue: true,
                    users: state.users.filter(user => user.name !== action.name)
                }

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleRemove = () => {
        dispatch({ type: 'REMOVE', name: 'sai' })
    }


    const handleReset = () => {
        dispatch({ type: 'RESET' })
    }

    const handleUpdate = () => {
        dispatch({
            type: 'UPDATE',
            payload: {
                name: 'ram',
                address: { pin: '4' }
            }
        })
    }

    // const manager = useMemo(() => {
    //    return  state.users.length && state.users.find(user => user.type === 'manager').name
    // }, [state]);


    return <div className='list'>
        {
            state.users.map(user => {
                return <div key={user.name}>{user.name} -- {user.address.pin}<br /></div>
            })
        }

        <button onClick={handleReset}> Reset</button>
        <button onClick={handleRemove}> Remove Sai</button>
        <button onClick={handleUpdate}> Update Ram's Pin</button>




        {/* <Actions handleReset={handleReset}/> */}
        <br />


    </div>
}