import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Quiz1 from './pages/Quiz1';
//import Quiz2 from './pages/Quiz2';
//import Quiz3 from './pages/Quiz3';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/quiz1" element={<Quiz1 />} />
        <Route path="*" element={<h1>ページが見つかりません</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);