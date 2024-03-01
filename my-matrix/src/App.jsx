import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Templates from './components/Templates/Templates';
import NoteFound from './pages/NoteFound/NoteFound';
import MyMatrixRouts from './components/Routes/MyMatrixRouts';
import Cards from './pages/Cards/Cards';
import CardPage from './pages/CardPage/CardPage';
import store from './store';

function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<NoteFound />} />
          <Route element={<Templates />}>
            <Route path='/' element={<Cards />} />
            <Route path='/card/:id' element={<CardPage />} />
            <Route path='/mymatrix/*' element={<MyMatrixRouts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
