import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card" data-testid="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="category">{product.category}</p>
      <p className="price">${product.price.toFixed(2)}</p>
      <p className="description">{product.description}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}

export default ProductCard;