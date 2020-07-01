import React, { Fragment } from 'react';
import './App.scss';

// import BigHero from './components/BigHero';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Transition from './components/Transition';
// import Portfolio from './components/Portfolio';

function App() {
    return (
        <div className='App'>
            <Nav />

            <Transition />

            <Contact />
        </div>
    );
}

export default App;
