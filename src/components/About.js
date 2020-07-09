import React from 'react';
import Fade from 'react-reveal';

const About = () => (
    <div id='about'>
        <Fade bottom>
            <p className='about__text'>
                While the majority of my middle school and high school courses
                are a blur, I can vividly remember when my best friend, who
                coincidentally also lives in Seattle, and I filled a blank in
                our schedule with a Web Development class. We were only
                introduced to the basics of HTML and CSS, but I can remember the
                pride I felt building something with a computer.
            </p>

            <p className='about__text'>
                Time went on and I applied to college with no idea what I wanted
                to do with my life. I defaulted to finance and economics, which
                I don't regret as my degree has provided me with a steady income
                and the ability to work with hundreds of founders and venture
                capitalists along the western coast of the United States.
                Throughout college I spent my free time taking introductory
                coding courses.
            </p>

            <p className='about__text'>
                Within a year of graduating college I knew I wanted to commit
                myself to a career change.
            </p>

            <p className='about__text'>
                I'm driven to change my career and will succeed in my pursuit of
                knowledge and happiness.
            </p>
        </Fade>
    </div>
);

export default About;
