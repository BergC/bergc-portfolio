import React from 'react';
import Typewriter from 'typewriter-effect';

const BigHero = () => {
    return (
        <div className='bighero'>
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

export default BigHero;
