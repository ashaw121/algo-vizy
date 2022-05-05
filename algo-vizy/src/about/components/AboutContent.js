import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import './AboutContent.css';

function AboutContent(props) {
  return (
    <Card className='about__content'>
      <h2 className='about__title'>About</h2>
      <p>
        The purpose of this site is to act as a resource for anyone who is
        interested in learning about data structures and algorithms.
      </p>
      <p>
        This website was created by me (Austin Shaw) as a project to practice
        development using React.js, Express.js, Node.js, and MongoDB, typically
        referred to as the MERN stack. All of the code is freely available to
        view and use in{' '}
        <a
          href='https://github.com/ashaw121/algo-vizy'
          target='_blank'
          rel='noreferrer'
        >
          this github repository
        </a>
        . Feel free to review and comment on my code if you see something that
        could be improved.
      </p>
      <p>
        To contact me, you can email ashaw121@gmail.com or reach out on{' '}
        <a
          href='https://www.linkedin.com/in/austin-shaw-2724b58b/'
          target='_blank'
          rel='noreferrer'
        >
          LinkedIn
        </a>
        .
      </p>
    </Card>
  );
}

export default AboutContent;
