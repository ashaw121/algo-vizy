import React from 'react';
import { CSSTransition } from 'react-transition-group';

import SubListItem from './SubListItem';

function SubSectionsList(props) {
  return (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames='section-expand'
      mountOnEnter
      unmountOnExit
    >
      <ul className='sub-sections-list'>
        {props.items.map(item => (
          <SubListItem key={item.path} path={item.path} name={item.name} />
        ))}
      </ul>
    </CSSTransition>
  );
}

export default SubSectionsList;
