import React from "react";

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <span className="subtitle-badge">Welcome to My Show</span>
          <h1>Discover Your Perfect <span>Style</span></h1>
          <p>
            Trendy dresses, premium quality, and unbeatable style – all in one place.
          </p>
          <div className="hero-actions">
            <button className="btn-pink" onClick={scrollToProducts}>
              Shop Now →
            </button>
            <button className="btn-outline">
              <span>▶</span> Watch Video
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-main-card">
            <img 
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=700&q=80" 
              alt="Main Fashion" 
              className="hero-main-img" 
            />
          </div>
          <div className="hero-thumb-stack">
            <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=200&q=80" alt="Style 1" />
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&q=80" alt="Style 2" />
            <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=200&q=80" alt="Style 3" />
          </div>
        </div>
      </div>

      <div className="hero-stats-bar">
        <div className="stat-card">
          <span className="stat-icon">🛍️</span>
          <div>
            <h3>10K+</h3>
            <p>Happy Customers</p>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">⭐</span>
          <div>
            <h3>4.8</h3>
            <p>Customer Rating</p>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">🚚</span>
          <div>
            <h3>Free Shipping</h3>
            <p>All Over India</p>
          </div>
        </div>
      </div>
    </section>
  );
}