import React from 'react';
import { Link } from 'react-router-dom';

import './ListItem.css';

function ListItem(props) {
  return (
    <li className='list-item'>
      <Link to={`/${props.path}`}>
        <h3 className='list-item__title'>{props.name}</h3>
      </Link>
    </li>
  );
}

export default ListItem;
