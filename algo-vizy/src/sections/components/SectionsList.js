import React from 'react';

import ListItem from './ListItem';
import './SectionsList.css';

function SectionsList(props) {
  if (props.items.length === 0) {
    return <h2>No Sections Found</h2>;
  }

  return (
    <ul className='sections-list'>
      {props.items.map(section => (
        <ListItem path={section.path} name={section.name} />
      ))}
    </ul>
  );
}

export default SectionsList;
