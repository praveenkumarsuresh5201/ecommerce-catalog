import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
// In src/index.js or App.js
import './styles.css'; // Importing the CSS file for styles

function App() {
  return (
    <Router>
      <div className="App">
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* We can add more routes later */}
          </Routes>
        </main>
        {/* <footer>
          <p>© 2025 E-Commerce Catalog</p>
        </footer> */}
      </div>
    </Router>
  );
}

export default App;