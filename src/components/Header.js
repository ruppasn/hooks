import React from 'react';
import { Link } from 'react-router-dom';
import Notifications from './Notifications';

export default () => {
    return <>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/second">Second Page</Link></li>
            <li><Link to="/last">Last Page</Link></li>
            <li style={{ float: 'right' }}>

                <Notifications/>

            </li>
        </ul>
    </>
}