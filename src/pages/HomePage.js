import React, { useState, useEffect } from 'react';
import { getProducts, searchProducts } from '../services/productService';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import './HomePage.css';

import headphone from '../assets/images/headphone.jpg';
import laptop from '../assets/images/laptop.jpg';
import watch from '../assets/images/watch.jpg';
import camera from '../assets/images/camera.jpg';
import chair from '../assets/images/chair.jpg';
import securitecam from '../assets/images/securitecam.jpg';
import coffeemaker from '../assets/images/coffeemaker.jpg';
import charging from '../assets/images/charging.jpg';
import speaker from '../assets/images/speaker.jpg';
import oil from '../assets/images/oil.jpg';
import led from '../assets/images/LED.jpg';
import tab from '../assets/images/tab.jpg';
import yoga from '../assets/images/yogamat.jpg';
import smart from '../assets/images/smart.jpg';
import pan from '../assets/images/cookingpan.jpg';
import vaccum from '../assets/images/vaccum.jpg';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const imageArray = [
    headphone, laptop, watch, camera, chair, securitecam, coffeemaker,
    charging, speaker, oil, led, tab, yoga, smart, pan, vaccum
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();

      const dataWithImages = data.map((product, index) => ({
        ...product,
        images: [imageArray[index % imageArray.length]]
      }));

      setProducts(dataWithImages);

      const featured = dataWithImages.filter(product => product.isFeatured);
      setFeaturedProducts(featured);

      setLoading(false);
    };
    fetchProducts();
  }, [imageArray]); // ✅ Add imageArray to dependency array

  const handleSearch = async (query) => {
    setLoading(true);
    const results = await searchProducts(query);

    const resultsWithImages = results.map((product, index) => ({
      ...product,
      images: [imageArray[index % imageArray.length]]
    }));

    setProducts(resultsWithImages);
    setLoading(false);
  };

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Discover Premium Products</h1>
            <p>Explore our catalog of high-quality electronics, home goods, and more</p>
            <SearchBar onSearch={handleSearch} />
          </div>
        </section>

        {featuredProducts.length > 0 && (
          <section className="featured-section">
            <div className="section-header">
              <h2>Featured Products</h2>
              <a href="/featured" className="view-all">View All</a>
            </div>
            <div className="product-grid featured-grid">
              {featuredProducts.slice(0, 4).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        <section className="products-section">
          <div className="section-header">
            <h2>All Products</h2>
          </div>

          {loading ? (
            <div className="loading-container" data-testid="loading">
              <div className="loading-spinner"></div>
              <p>Loading products...</p>
            </div>
          ) : (
            <div className="product-grid" data-testid="product-grid">
              {products.length > 0 ? (
                products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <p className="no-products">No products found.</p>
              )}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
