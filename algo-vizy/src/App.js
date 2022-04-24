import { Route, Routes } from 'react-router-dom';

import './App.css';
import Sorting from './sorting/pages/Sorting';

function App() {
  return (
    <Routes>
      <Route path='/' element={<h1>Home</h1>} />

      <Route path='/sorting/' exact element={<Sorting />} />
    </Routes>
  );
}

export default App;
