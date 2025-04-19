import React, { useState, useEffect } from 'react';
import { getProducts, searchProducts } from '../services/productService';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const handleSearch = async (query) => {
    setLoading(true);
    const results = await searchProducts(query);
    setProducts(results);
    setLoading(false);
  };

  return (
    <div className="home-page">
      <h1>Product Catalog</h1>
      <SearchBar onSearch={handleSearch} />
      
      {loading ? (
        <p data-testid="loading">Loading products...</p>
      ) : (
        <div className="product-grid" data-testid="product-grid">
          {products.length > 0 ? (
            products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default HomePage;