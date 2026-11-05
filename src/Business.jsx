import React from "react";

export default function Business() {
  const images = [
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80",
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80",
    "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&q=80",
    "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=400&q=80",
    "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80"
  ];

  return (
    <section id="business" className="section-padding business-section">
      <div className="section-header">
        <span className="pink-subtitle">Our Business</span>
        <h2>Fashion Beyond Boundaries</h2>
        <p className="section-description">
          We bring fashion closer to you with premium quality, trendy designs, and a smooth shopping experience.
        </p>
      </div>

      <div className="business-animation-wrapper">
        <div className="center-badge-logo">
          <span className="hanger">🥻</span>
          <span>My Show</span>
        </div>
        <div className="animated-img-row">
          {images.map((url, idx) => (
            <div key={idx} className={`floating-img-card float-delay-${idx}`}>
              <img src={url} alt={`Store outlet ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="business-stats">
        <div className="b-stat">
          <span className="b-icon">👗</span>
          <div>
            <h3>500+</h3>
            <p>Fashion Products</p>
          </div>
        </div>
        <div className="b-stat">
          <span className="b-icon">👥</span>
          <div>
            <h3>50K+</h3>
            <p>Happy Customers</p>
          </div>
        </div>
        <div className="b-stat">
          <span className="b-icon">⭐</span>
          <div>
            <h3>99%</h3>
            <p>Customer Satisfaction</p>
          </div>
        </div>
        <div className="b-stat">
          <span className="b-icon">🎧</span>
          <div>
            <h3>24/7</h3>
            <p>Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}