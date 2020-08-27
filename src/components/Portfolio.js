// Import packages.
import React, { Fragment } from 'react';
import Fade from 'react-reveal';
import Accordion from 'react-bootstrap/Accordion';

// Import components.
import BigHero from './BigHero';

const Portfolio = () => (
    <Fragment>
        <Fade top>
            <BigHero />
        </Fade>
        <Fade bottom>
            <div id='portfolio__flex-wrapper'>
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
        </Fade>
    </Fragment>
);

export default Portfolio;
