// Import packages.
import React, { Fragment, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Accordion from 'react-bootstrap/Accordion';

// Import components.
import BigHero from './BigHero';

const Portfolio = () => {
    const portfolioRefIn = useRef(null);
    const bigHeroRefIn = useRef(null);

    useEffect(() => {
        gsap.from(portfolioRefIn.current, 0.8, {
            y: 150,
            delay: 0.8,
            ease: 'power1.out',
            opacity: 0,
        });
    }, []);

    useEffect(() => {
        gsap.from(bigHeroRefIn.current, 0.8, {
            y: -100,
            delay: 0.8,
            ease: 'power1.out',
            opacity: 0,
        });
    }, []);

    return (
        <Fragment>
            <div ref={bigHeroRefIn}>
                <BigHero />
            </div>

            <div ref={portfolioRefIn} id='portfolio__flex-wrapper'>
                <div className='portfolio__project'>
                    <h3 className='portfolio__project-title'>
                        <sup className='portfolio__project-num'>01</sup>
                        <a
                            href='https://bergc-snowbound.herokuapp.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='portfolio__project-link'
                        >
                            Snowbound
                        </a>
                    </h3>

                    <ul className='portfolio__frameworks'>
                        <li>Node.js</li>
                        <li>REACT</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>Sass</li>
                    </ul>
                </div>

                <div className='portfolio__project'>
                    <h3 className='portfolio__project-title'>
                        <sup className='portfolio__project-num'>02</sup>
                        <a
                            href='https://bergc-diamondcost.herokuapp.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='portfolio__project-link'
                        >
                            Diamonds Discovered
                        </a>
                    </h3>

                    <ul className='portfolio__frameworks'>
                        <li>Node.js</li>
                        <li>REACT</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>Sass</li>
                    </ul>
                </div>

                <div className='portfolio__project'>
                    <h3 className='portfolio__project-title'>
                        <sup className='portfolio__project-num'>04</sup>
                        <a
                            href='https://www.codewars.com/users/paosiehf'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='portfolio__project-link'
                        >
                            Code Wars
                        </a>
                    </h3>

                    <ul className='portfolio__frameworks'>
                        <li>JavaScript</li>
                        <li>Python</li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default Portfolio;
