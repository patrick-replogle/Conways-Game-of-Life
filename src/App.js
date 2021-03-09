import React from 'react';
import { Route } from 'react-router-dom';

import Game from './components/Game';
import About from './components/About';
import './App.scss';

const App = () => {
    return (
        <div className="App">
            <Route exact path="/">
                <Game />
            </Route>
            <Route path="/about">
                <About />
            </Route>
        </div>
    );
};

export default App;
