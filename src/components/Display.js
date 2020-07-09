import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import About from './About';
import BigHero from './BigHero';
import Portfolio from './Portfolio';

const Display = ({ showPortfolio, showAbout, togglePortfolio }) => (
    <Fragment>
        <BigHero />

        {!showPortfolio && !showAbout && (
            <button
                className='bighero__button'
                onClick={() => togglePortfolio()}
            >
                See Stuff
            </button>
        )}

        {showPortfolio && <Portfolio />}

        {showAbout && <About />}
    </Fragment>
);

const mapStateToProps = (state) => ({
    showPortfolio: state.display.showPortfolio,
    showAbout: state.display.showAbout,
});

const mapDispatchToProps = (dispatch) => ({
    togglePortfolio: () => dispatch({ type: 'TOGGLE_PORTFOLIO' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Display);
