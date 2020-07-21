import React, { Fragment } from 'react';
import Fade from 'react-reveal';

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
                        <sup className='portfolio__project-num'>03</sup>
                        <a
                            href='https://bergc-expensify.herokuapp.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='portfolio__project-link'
                        >
                            Expensify
                        </a>
                    </h3>

                    <ul className='portfolio__frameworks'>
                        <li>Node.js</li>
                        <li>REACT</li>
                        <li>Firebase</li>
                        <li>Express</li>
                        <li>Sass</li>
                    </ul>
                </div>
            </div>
        </Fade>
    </Fragment>
);

export default Portfolio;
