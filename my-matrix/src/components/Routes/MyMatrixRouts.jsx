import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cards from '../../pages/Cards/Cards';
import MatrixPage from '../../pages/MatrixPage/MatrixPage';
import NoteFound from '../../pages/NoteFound/NoteFound';
import FavoritePage from '../../pages/FavoritePage/FavoritePage';

const MyMatrixRouts = () => (
  <Routes>
    <Route path='/*' element={<NoteFound />} />
    <Route path='/cards' element={<Cards />} />
    <Route path='/matrix' element={<MatrixPage />} />
    <Route path='/favorite' element={<FavoritePage />} />
  </Routes>

);

export default MyMatrixRouts;
