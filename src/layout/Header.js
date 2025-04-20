import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">E-Commerce Catalog</Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/featured">Featured</Link></li>
            <li><Link to="/new">New Arrivals</Link></li>
          </ul>
        </nav>
        <div className="header-actions">
          <button className="icon-button">
            <i className="fa fa-search"></i>
          </button>
          <button className="icon-button">
            <i className="fa fa-user"></i>
          </button>
          <button className="icon-button cart-button">
            <i className="fa fa-shopping-cart"></i>
            <span className="cart-count">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;