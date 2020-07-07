import React from 'react';
import Fade from 'react-reveal';

const Portfolio = () => (
    <div className='portfolio'>
        <Fade bottom>
            <div className='portfolio__project'>
                <h3 className='portfolio__project-title'>
                    <sup className='portfolio__project-num'>01</sup>
                    <a href='#' className='portfolio__project-link'>
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
                    <a href='#' className='portfolio__project-link'>
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
                    <a href='#' className='portfolio__project-link'>
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
        </Fade>
    </div>
);

export default Portfolio;
