// Import packages.
import React, { Fragment, useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Portfolio = () => {
    // useRef hook used so that our GSAP transitions know what element to apply transitions to.
    const portfolioRefIn = useRef(null);

    // useEffect hook used to apply our GSAP transitions.
    useEffect(() => {
        gsap.from(portfolioRefIn.current, 0.8, {
            y: 150,
            delay: 0.7,
            ease: 'power1.out',
            opacity: 0,
        });
    }, []);

    // useState hook used to display / hide our portfolio accordion.
    const [isOpen, setOpen] = useState({
        snowboundOpen: false,
        diamondsOpen: false,
        codeWarsOpen: false,
    });

    const { snowboundOpen, diamondsOpen, codeWarsOpen } = isOpen;

    const onClick = (e) => {
        e.preventDefault();
        const target = e.target.innerHTML;

        if (target === 'Snowbound') {
            setOpen({
                ...isOpen,
                snowboundOpen: !snowboundOpen,
            });
        } else if (target === 'Diamonds Discovered') {
            setOpen({
                ...isOpen,
                diamondsOpen: !diamondsOpen,
            });
        } else if (target === 'Code Wars') {
            setOpen({
                ...isOpen,
                codeWarsOpen: !codeWarsOpen,
            });
        }
    };

    return (
        <Fragment>
            <div ref={portfolioRefIn} id='portfolio__wrapper'>
                <div className='portfolio__project'>
                    <h3 onClick={onClick}>
                        <sup className='portfolio__project-num'>01</sup>
                        <span
                            className={
                                snowboundOpen
                                    ? 'portfolio__project-title--open'
                                    : 'portfolio__project-title'
                            }
                        >
                            Snowbound
                        </span>
                    </h3>

                    {snowboundOpen ? (
                        <div className='portfolio__project-detail-wrapper'>
                            <div className='portfolio__project-detail'>
                                <h4>Purpose</h4>
                                <p>
                                    Fetch the snow and weather conditions for
                                    nearby mountains.
                                </p>
                            </div>

                            <div className='portfolio__project-detail'>
                                <h4>Inspiration</h4>
                                <p>
                                    I'm an avid skiier and have found that
                                    Washington has so many mountains in driving
                                    distance. I always disliked having to Google
                                    the conditions at every accessible mountain
                                    individually, so I decided to built a tool
                                    that would compile weather and snow data in
                                    a single location.
                                </p>
                            </div>

                            <div className='portfolio__project-detail'>
                                <h4>Tools</h4>
                                <p>
                                    Node.js | React.js | GSAP | Bootstrap |
                                    Express | MongoDB | mLab | Heroku | Sass |
                                    Mongoose | Axios | Redux | Font Awesome
                                </p>
                            </div>

                            <a
                                href='https://bergc-snowbound.herokuapp.com/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <button className='bighero__button'>Go</button>
                            </a>
                        </div>
                    ) : null}
                </div>

                <div className='portfolio__project'>
                    <h3 onClick={onClick}>
                        <sup className='portfolio__project-num'>02</sup>
                        <span
                            className={
                                diamondsOpen
                                    ? 'portfolio__project-title--open'
                                    : 'portfolio__project-title'
                            }
                        >
                            Diamonds Discovered
                        </span>
                    </h3>

                    {diamondsOpen ? (
                        <div className='portfolio__project-detail-wrapper'>
                            <div className='portfolio__project-detail'>
                                <h4>Purpose</h4>
                                <p>
                                    Fetch diamond prices from multiple sources
                                    based upon user provided criteria.
                                </p>
                            </div>

                            <div className='portfolio__project-detail'>
                                <h4>Inspiration</h4>
                                <p>
                                    I recently proposed to my girlfriend, but
                                    before proposing I had no idea how to buy a
                                    ring. More importantly, I had no idea how to
                                    buy a ring efficiently. I wanted the highest
                                    quality at the lowest cost. After reading up
                                    on the 4c's and snooping around several big
                                    name online wholesalers, I found there were
                                    discrepancies in price across the platforms
                                    despite displaying similarly graded
                                    diamonds. I wanted to be able to search them
                                    all simultaneously and figure out which was
                                    best priced.
                                </p>
                            </div>

                            <div className='portfolio__project-detail'>
                                <h4>Tools</h4>
                                <p>
                                    Node.js | React.js | Express | MongoDB |
                                    mLab | Heroku | Sass | Node Fetch | Axios |
                                    Mongoose | jQuery | Redux | Moment | Font
                                    Awesome
                                </p>
                            </div>

                            <a
                                href='https://bergc-diamondcost.herokuapp.com/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <button className='bighero__button'>Go</button>
                            </a>
                        </div>
                    ) : null}
                </div>

                <div className='portfolio__project'>
                    <h3 onClick={onClick}>
                        <sup className='portfolio__project-num'>03</sup>
                        <span
                            className={
                                codeWarsOpen
                                    ? 'portfolio__project-title--open'
                                    : 'portfolio__project-title'
                            }
                        >
                            Code Wars
                        </span>
                    </h3>

                    {codeWarsOpen ? (
                        <div className='portfolio__project-detail-wrapper'>
                            <div className='portfolio__project-detail'>
                                <h4>Purpose</h4>
                                <p>Practice my basic coding skills.</p>
                            </div>

                            <div className='portfolio__project-detail'>
                                <h4>Inspiration</h4>
                                <p>
                                    I wanted to make sure that I was taking time
                                    to challenge myself with problems created by
                                    others. I also wanted to ensure that I
                                    didn't forget what I was learning, after all
                                    practice makes perfect.
                                </p>
                            </div>

                            <div className='portfolio__project-detail'>
                                <h4>Tools</h4>
                                <p>JavaScrtipt | Python</p>
                            </div>

                            <a
                                href='https://www.codewars.com/users/paosiehf'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <button className='bighero__button'>Go</button>
                            </a>
                        </div>
                    ) : null}
                </div>
            </div>
        </Fragment>
    );
};

export default Portfolio;
