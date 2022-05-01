import React from 'react';

import SectionsList from '../components/SectionsList';

function Sections() {
  const SECTIONS = [
    {
      path: 'linked-lists',
      name: 'Linked Lists',
      items: [
        { path: 'singly-linked-list', name: 'Singly Linked Lists' },
        { path: 'doubly-linked-list', name: 'Doubly Linked Lists' },
      ],
    },
    {
      path: 'searching',
      name: 'Searching',
      items: [
        { path: 'binary-search', name: 'Binary Search' },
        { path: 'sequential-search', name: 'Sequential Search' },
      ],
    },
    {
      path: 'sorting',
      name: 'Sorting',
      items: [
        { path: 'bubble-sort', name: 'Bubble Sort' },
        { path: 'selection-sort', name: 'Selection Sort' },
      ],
    },
    {
      path: 'trees',
      name: 'Trees',
      items: [
        { path: 'tree-representation', name: 'Tree Representation' },
        { path: 'tree-traversals', name: 'Tree Traversals' },
      ],
    },
  ];

  return <SectionsList sections={SECTIONS} />;
}

export default Sections;
