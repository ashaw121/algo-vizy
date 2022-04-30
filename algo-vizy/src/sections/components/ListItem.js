import React, { useState } from 'react';

import Card from '../../shared/components/UIElements/Card';
import SubSectionsList from './SubSectionsList';
import './ListItem.css';

function ListItem(props) {
  const [sectionIsOpen, setSectionIsOpen] = useState(false);
  const openSectionHandler = () => setSectionIsOpen(true);
  const closeSectionHandler = () => setSectionIsOpen(false);

  return (
    <li className='list-item'>
      <Card className='list-item__content' path={props.path}>
        <h3
          className='list-item__title'
          onClick={sectionIsOpen ? closeSectionHandler : openSectionHandler}
        >
          {props.name}
        </h3>

        {sectionIsOpen && <SubSectionsList />}
      </Card>
    </li>
  );
}

export default ListItem;
