import React from 'react';

import ListItem from './ListItem';
import './SectionsList.css';

function SectionsList(props) {
  if (props.sections.length === 0) {
    return <h2>No Sections Found</h2>;
  }

  return (
    <ul className='sections-list'>
      {props.sections.map(section => (
        <ListItem
          key={section.path}
          path={section.path}
          name={section.name}
          items={section.items}
        />
      ))}
    </ul>
  );
}

export default SectionsList;
