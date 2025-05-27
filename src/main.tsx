import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import QuizH1 from './pages/QuizH1';
import QuizH2 from './pages/QuizH2';
import QuizV1 from './pages/QuizV1';
import QuizV3 from './pages/QuizV3';
import QuizH5 from './pages/QuizH5';
import QuizH6 from './pages/QuizH6';
import QuizV7 from './pages/QuizV7';
import QuizH8 from './pages/QuizH8';
import QuizV8 from './pages/QuizV8';
import QuizV9 from './pages/QuizV9';
import QuizH10 from './pages/QuizH10';
import QuizH11 from './pages/QuizH11';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/quizh1" element={<QuizH1 />} />
        <Route path="/quizh2" element={<QuizH2 />} />
        <Route path="/quizv1" element={<QuizV1 />} />
        <Route path="/quizv3" element={<QuizV3 />} />
        <Route path="/quizh5" element={<QuizH5 />} />
        <Route path="/quizh6" element={<QuizH6 />} />
        <Route path="/quizv7" element={<QuizV7 />} />
        <Route path="/quizh8" element={<QuizH8 />} />
        <Route path="/quizv8" element={<QuizV8 />} />
        <Route path="/quizv9" element={<QuizV9 />} />
        <Route path="/quizh10" element={<QuizH10 />} />
        <Route path="/quizh11" element={<QuizH11 />} />
        <Route path="*" element={<h1>ページが見つかりません</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);