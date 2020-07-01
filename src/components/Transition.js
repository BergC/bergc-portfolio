import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import BigHero from './BigHero';
import Portfolio from './Portfolio';

const Transition = () => {
    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);

    return (
        <div id='content-wrapper'>
            <BigHero />

            {showButton && (
                <button
                    className='bighero__button'
                    onClick={() => setShowMessage(true)}
                >
                    See Stuff
                </button>
            )}

            <CSSTransition
                in={showMessage}
                timeout={300}
                unmountOnExit
                onEnter={() => setShowButton(false)}
                onExited={() => setShowButton(true)}
            >
                <Portfolio />
            </CSSTransition>
        </div>
    );
};

export default Transition;
