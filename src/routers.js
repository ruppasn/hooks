import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import SecondPage from './components/SecondPage';
import { MyContext } from './components/MyContext';
import LastPage from './components/LastPage';

const Routes = () => {

    const [count, setCount] = useState  (0)

    return <MyContext.Provider value={{ count, setCount }}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/second" component={SecondPage} />
            <Route path="/last" component={LastPage} />
        </Switch>
    </MyContext.Provider>

}

export default Routes;