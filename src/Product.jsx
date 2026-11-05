import React, { useState } from "react";

export default function Product({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Inner Wear", "Party Wear", "Dhotis", "Casuals", "Ethnic", "Western"];

  const products = [
    {
      id: 1,
      name: "Inner Wear",
      category: "Inner Wear",
      price: 499,
      img: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&q=80"
    },
    {
      id: 2,
      name: "Party Gown",
      category: "Party Wear",
      price: 1999,
      img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&q=80"
    },
    {
      id: 3,
      name: "White Dhoti",
      category: "Dhotis",
      price: 799,
      img: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=400&q=80"
    },
    {
      id: 4,
      name: "Men Shirt",
      category: "Casuals",
      price: 1299,
      img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80"
    },
    {
      id: 5,
      name: "Casual Dress",
      category: "Casuals",
      price: 1499,
      img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80"
    },
    {
      id: 6,
      name: "Kurta Set",
      category: "Ethnic",
      price: 1999,
      img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80"
    },
    {
      id: 7,
      name: "Saree",
      category: "Ethnic",
      price: 2499,
      img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80"
    }
  ];

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="section-padding product-section">
      <div className="section-header">
        <span className="pink-subtitle">Our Products</span>
        <h2>Premium Collection</h2>
        <p className="section-description">
          Explore our latest collection of dresses and fashion wear.
        </p>
      </div>

      <div className="category-filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-chip ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((prod) => (
          <div key={prod.id} className="product-card">
            <div className="product-img-holder">
              <img src={prod.img} alt={prod.name} />
            </div>
            <div className="product-details">
              <h4>{prod.name}</h4>
              <div className="product-bottom">
                <span className="product-price">₹{prod.price.toLocaleString()}</span>
                <button className="cart-btn" onClick={() => onAddToCart(prod)}>
                  🛒
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}