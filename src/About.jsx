import React from "react";

export default function About() {
  const categories = [
    {
      title: "Our Company",
      sub: "My Show",
      icon: "🏢",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&q=80"
    },
    {
      title: "Dress Range",
      sub: "Party Wear, Dhotis, Casuals etc.",
      icon: "👗",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&q=80"
    },
    {
      title: "Men Collection",
      sub: "Stylish & Trendy",
      icon: "👔",
      img: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=500&q=80"
    },
    {
      title: "Women Collection",
      sub: "Elegant & Graceful",
      icon: "💃",
      img: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500&q=80"
    }
  ];

  return (
    <section id="about" className="section-padding about-bg">
      <div className="section-header">
        <span className="pink-subtitle">About Us</span>
        <h2>My Show - Where Fashion Meets Elegance</h2>
        <p className="section-description">
          My Show is a leading fashion brand, bringing you the latest trends in dresses, party wear, and more. We believe in style, confidence, and comfort.
        </p>
      </div>

      <div className="about-showcase">
        <div className="tilted-photo-frame">
          <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&q=80" alt="Fashion 1" className="frame frame-1" />
          <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80" alt="Fashion 2" className="frame frame-2" />
          <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&q=80" alt="Fashion 3" className="frame frame-3" />
        </div>
      </div>

      <div className="about-grid">
        {categories.map((item, index) => (
          <div key={index} className="about-card">
            <div className="about-card-img-wrapper">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="about-card-info">
              <span className="card-icon">{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}