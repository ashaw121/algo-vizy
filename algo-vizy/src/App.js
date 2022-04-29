import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Sections from './sections/pages/Sections';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Sorting from './sorting/pages/Sorting';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/' element={<Sections />} />
          <Route path='/sorting/' exact element={<Sorting />} />
          <Route path='*' element={<Sections />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
