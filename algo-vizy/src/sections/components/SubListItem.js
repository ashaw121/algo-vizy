import React from 'react';
import { Link } from 'react-router-dom';

function SubListItem(props) {
  return (
    <li className='sub-sections-list-item'>
      <Link to={`/${props.path}`}>
        <h4>{props.name}</h4>
      </Link>
    </li>
  );
}

export default SubListItem;
