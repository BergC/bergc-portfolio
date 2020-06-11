import React from 'react';
import './App.css';

import BigHero from './components/BigHero';
import Contact from './components/Contact';
import Nav from './components/Nav';

function App() {
    return (
        <div className='App'>
            <Nav />
            <BigHero />
            <Contact />
        </div>
    );
}

export default App;
