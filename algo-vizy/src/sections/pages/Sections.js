import React from 'react';

import SectionsList from '../components/SectionsList';

function Sections() {
  const SECTIONS = [
    {
      path: 'sorting',
      name: 'Sorting',
    },
    {
      path: 'linked-lists',
      name: 'Linked List',
    },
    {
      path: 'trees',
      name: 'Trees',
    },
  ];

  return <SectionsList items={SECTIONS} />;
}

export default Sections;
