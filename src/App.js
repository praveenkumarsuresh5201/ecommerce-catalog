import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>E-Commerce Catalog</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* We can add more routes later */}
          </Routes>
        </main>
        <footer>
          <p>© 2025 E-Commerce Catalog</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;