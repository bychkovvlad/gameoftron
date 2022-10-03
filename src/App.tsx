import React from 'react';
import './App.scss';

import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FavoritesPage } from './pages/FavoritesPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
