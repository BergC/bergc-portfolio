import React from 'react';

const Portfolio = () => (
    <div className='wrapper'>
        <div className='portfolio'>
            <h3 className='portfolio__project'>
                <sup className='portfolio__project-num'>01</sup>
                <a href='#' className='portfolio__project-link'>
                    Snowbound
                </a>
            </h3>

            <h3 className='portfolio__project'>
                <sup className='portfolio__project-num'>01</sup>
                <a href='#' className='portfolio__project-link'>
                    Diamonds Discovered
                </a>
            </h3>

            <h3 className='portfolio__project'>
                <sup className='portfolio__project-num'>01</sup>
                <a href='#' className='portfolio__project-link'>
                    Expensify
                </a>
            </h3>
        </div>
    </div>
);

export default Portfolio;
