import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import GlobalStyles from './styles/GlobalStyles';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root')
ReactDOM.render(
  <BrowserRouter>
    <GlobalStyles />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="board/:boardNo" element={<DetailPage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
