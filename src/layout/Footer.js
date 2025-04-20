import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/featured">Featured Products</a></li>
            <li><a href="/new">New Arrivals</a></li>
            <li><a href="/deals">Special Deals</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/shipping">Shipping & Returns</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li><a href="/about">Our Story</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/sustainability">Sustainability</a></li>
          </ul>
        </div>
        
        <div className="footer-section newsletter">
          <h3>Stay Connected</h3>
          <p>Subscribe to our newsletter for updates and deals</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook"><i className="fa fa-facebook"></i></a>
            <a href="https://twitter.com" aria-label="Twitter"><i className="fa fa-twitter"></i></a>
            <a href="https://instagram.com" aria-label="Instagram"><i className="fa fa-instagram"></i></a>
            <a href="https://pinterest.com" aria-label="Pinterest"><i className="fa fa-pinterest"></i></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} E-Commerce Catalog. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;