import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cards from '../../pages/Cards/Cards';
import MatrixPage from '../../pages/MatrixPage/MatrixPage';
import NoteFound from '../../pages/NoteFound/NoteFound';

const MyMatrixRouts = ({ searchValue }) => (
  <Routes>
    <Route path='/*' element={<NoteFound />} />
    <Route path='/cards' element={<Cards searchValue={searchValue} />} />
    <Route path='/matrix' element={<MatrixPage />} />
  </Routes>

);

export default MyMatrixRouts;
