import React from 'react';
import Fade from 'react-reveal';

import BigHero from './BigHero';

const About = () => (
    <div className='about'>
        <Fade top>
            <BigHero />
        </Fade>

        <Fade bottom>
            <div className='wrapper__content'>
                <p className='about__text'>
                    While the majority of my middle school and high school
                    courses are a blur, I can vividly remember when my best
                    friend, who coincidentally also lives in Seattle, and I
                    filled a blank in our schedule with a Web Development class.
                    We were only introduced to the basics of HTML and CSS, but I
                    can remember the pride I felt building something with a
                    computer.
                </p>

                <p className='about__text'>
                    Time went on and I applied to college with no idea what I
                    wanted to do with my life. I defaulted to finance and
                    economics, though I spent my free time taking introductory
                    coding courses.
                </p>

                <p className='about__text'>
                    Within a year of graduating college I knew I wanted to
                    commit myself to a career change and began completing
                    regimented coding coursework. I would like to state that I
                    don't regret the path I took, my degree has provided me with
                    a steady income and the ability to work with hundreds of
                    brilliant founders and upper-level managers at startups
                    across the U.S.
                </p>

                <p className='about__text'>
                    Currently I'm spending my free time learning about
                    Artificial Neural Networks ("ANN") and how to build them
                    using Python. I'm fascinated by the potential of ANNs and I
                    have much to learn.
                </p>

                <p className='about__text'>
                    I'm driven to change my career and will succeed in my
                    pursuit of knowledge and happiness.
                </p>
            </div>
        </Fade>
    </div>
);

export default About;
