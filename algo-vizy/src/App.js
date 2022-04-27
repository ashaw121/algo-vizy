import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Sorting from './sorting/pages/Sorting';

function App() {
  return (
    <React.Fragment>
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />

          <Route path='/sorting/' exact element={<Sorting />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
