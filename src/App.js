import React, { useState } from 'react';
import './App.scss';
import { Transition } from 'react-transition-group';

import BigHero from './components/BigHero';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

function App() {
    const [inProp, setInProp] = useState(false);

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
