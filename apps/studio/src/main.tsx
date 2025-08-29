import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Home from './routes/Home';
import Library from './routes/Library';
import LibraryItem from './routes/LibraryItem';
import PromptsCreate from './routes/PromptsCreate';
import PromptsAdd from './routes/PromptsAdd';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="library" element={<Library />} />
          <Route path="library/:id" element={<LibraryItem />} />
          <Route path="prompts/create" element={<PromptsCreate />} />
          <Route path="prompts/add" element={<PromptsAdd />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
