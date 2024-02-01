import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Templates from './components/Templates/Templates';
import NoteFound from './pages/NoteFound/NoteFound';
import MyMatrixRouts from './components/Routes/MyMatrixRouts';
import Cards from './pages/Cards/Cards';
import CardPage from './pages/CardPage/CardPage';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<NoteFound />} />
        <Route element={<Templates handleSearch={handleSearch} />}>
          <Route path='/' element={<Cards searchValue={searchValue} />} />
          <Route path='/card/:id' element={<CardPage />} />
          <Route path='/mymatrix/*' element={<MyMatrixRouts searchValue={searchValue} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
