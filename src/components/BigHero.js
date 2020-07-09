import React from 'react';
import { connect } from 'react-redux';
import Typewriter from 'typewriter-effect';

const BigHero = ({ showAbout }) => {
    return (
        <div
            className={showAbout ? 'bighero bighero--about-display' : 'bighero'}
        >
            <h1 className='bighero__header'>
                <Typewriter
                    options={{
                        strings: [
                            'chris berg',
                            'skiier',
                            'developer',
                            'ramen chef',
                            'beer brewer',
                            'mountain biker',
                            'gamer',
                            'water baby',
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h1>
        </div>
    );
};

const mapStateToProps = (state) => ({
    showAbout: state.display.showAbout,
});

export default connect(mapStateToProps)(BigHero);
