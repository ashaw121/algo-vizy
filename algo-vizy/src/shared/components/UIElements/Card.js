import React from 'react';

import './Card.css';

function Card(props) {
  return (
    <div className={`card ${props.className} ${props.path}`}>
      {props.children}
    </div>
  );
}

export default Card;
