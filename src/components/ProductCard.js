import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  // Use the first image from the images array or fallback to placeholder
  const productImage = product.images && product.images.length > 0 
    ? product.images[0] 
    : '/images/placeholder.jpg';

  return (
    <div className="product-card" data-testid="product-card">
      <div className="product-image">
        <img src={productImage} alt={product.name} />
        {product.isNew && <span className="badge new">New</span>}
        {product.compareAtPrice && (
          <span className="badge sale">Sale</span>
        )}
      </div>
      
      <div className="product-info">
        <span className="product-brand">{product.brand}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.categories.join(', ')}</p>
        
        <div className="product-meta">
          <div className="rating">
            <span className="stars">
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
            </span>
            <span className="review-count">({product.reviewCount})</span>
          </div>
        </div>
        
        <div className="product-price">
          <span className="current-price">${product.price.toFixed(2)}</span>
          {product.compareAtPrice && (
            <span className="compare-price">${product.compareAtPrice.toFixed(2)}</span>
          )}
        </div>
        
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;