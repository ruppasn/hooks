import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom'
import routers from './routers'

function App() {

  return <div className='app'>
    <BrowserRouter>
        <Route path="/" component={routers} />
      </BrowserRouter>
  </div>
}

export default App;
