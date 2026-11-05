import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sentAlert, setSentAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSentAlert(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSentAlert(false), 4000);
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="section-header">
        <span className="pink-subtitle">Get in Touch</span>
        <h2>Contact Us</h2>
        <p className="section-description">We'd love to hear from you!</p>
      </div>

      <div className="contact-layout">
        {/* Info Column */}
        <div className="contact-info-col">
          <div className="contact-shopping-banner">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80" 
              alt="Shopping Girl" 
            />
          </div>
          <div className="contact-details-list">
            <p>📞 <strong>+91 9487422677</strong></p>
            <p>📍 <strong>Ganapathy, Coimbatore</strong></p>
            <p>✉️ <strong>support@myshow.com</strong></p>
          </div>

          <div className="our-presence">
            <h5>Our Presence</h5>
            <div className="presence-chips">
              <span>📍 Coimbatore</span>
              <span>📍 Chennai</span>
              <span>📍 Salem</span>
              <span>📍 Bangalore</span>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="contact-form-col">
          <form className="contact-card-form" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>
            
            {sentAlert && (
              <div className="success-banner">
                ✓ Message sent successfully! We will contact you soon.
              </div>
            )}

            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <textarea
                rows="4"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="btn-pink full-btn">
              Send Message →
            </button>
          </form>
        </div>

        {/* Map Preview Column */}
        <div className="contact-map-col">
          <div className="location-image-box">
            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400&q=80" alt="Map Location" />
            <div className="map-pin-overlay">
              📍 Ganapathy, Coimbatore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}