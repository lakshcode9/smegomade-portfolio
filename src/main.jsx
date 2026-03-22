import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import CoversPage from './pages/CoversPage.jsx';
import ClothingPage from './pages/ClothingPage.jsx';
import PostersPage from './pages/PostersPage.jsx';
import TypographyPage from './pages/TypographyPage.jsx';
import RetrogradniPage from './pages/RetrogradniPage.jsx';
import TwoDragonsPage from './pages/TwoDragonsPage.jsx';
import ColdMindsPage from './pages/ColdMindsPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/work/covers" element={<CoversPage />} />
        <Route path="/work/clothing" element={<ClothingPage />} />
        <Route path="/work/posters" element={<PostersPage />} />
        <Route path="/work/typography" element={<TypographyPage />} />
        <Route path="/work/retrogradni" element={<RetrogradniPage />} />
        <Route path="/work/2-dragons" element={<TwoDragonsPage />} />
        <Route path="/work/cold-minds" element={<ColdMindsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
