import React, { Fragment } from 'react';
import Typewriter from 'typewriter-effect';

const BigHero = () => (
    <Fragment>
        <div className='bighero'>
            <h1 className='bighero__header'>
                <Typewriter
                    options={{
                        strings: [
                            'chris berg',
                            'skiier',
                            'developer',
                            'homemade ramen chef',
                            'beer brewer',
                            'mountain biker',
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h1>
        </div>

        <button className='bighero__button'>See Stuff</button>
    </Fragment>
);

export default BigHero;
