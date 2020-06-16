import React from 'react';
import Typewriter from 'typewriter-effect';

const BigHero = () => (
    <div>
        <h1>
            I am
            <Typewriter
                options={{
                    strings: [
                        'Chris Berg',
                        'a skiier',
                        'a developer',
                        'a homemade ramen chef',
                        'a beer brewer',
                        'a mountain biker',
                    ],
                    autoStart: true,
                    loop: true,
                }}
            />
        </h1>
    </div>
);

export default BigHero;
