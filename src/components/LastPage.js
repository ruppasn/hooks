import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import ListContainer from './ListContainer';

const data = [
    {
        name: 'satya',
        type: 'ceo'
    },
    {
        name: 'sai',
        type: 'emp'
    },
    {
        name: 'ram',
        type: 'emp'
    },
    {
        name: 'ravi',
        type: 'emp'

    }
]

export default () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        //assume data came from backend
        setUsers(data)
    }, [])


    return <>
        <Header />
        CEO :  
        {
            users.length && users.find(user => user.type === 'ceo').name
        }
        <br />
        <Footer />
    </>
}