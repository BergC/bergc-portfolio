import React from 'react';
import './App.scss';

import BigHero from './components/BigHero';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';

function App() {
    return (
        <div className='App'>
            <Nav />

            <div id='content-wrapper'>
                <BigHero />
                <Portfolio />
            </div>

            <Contact />
        </div>
    );
}

export default App;
