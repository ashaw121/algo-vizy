import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Sections from './sections/pages/Sections';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import About from './about/pages/About';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/' element={<Sections />} />
          <Route path='/about/' exact element={<About />} />
          <Route path='*' element={<Sections />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
