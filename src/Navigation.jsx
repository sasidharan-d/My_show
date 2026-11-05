import React, { useState } from "react";

export default function Navigation({ onOpenAuth, currentUser, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo" onClick={() => scrollToSection("home")}>
          <span className="hanger-icon">🥻</span> My Show
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("business")}>Business</li>
          <li onClick={() => scrollToSection("products")}>Products</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>

        <div className="auth-btns">
          {currentUser ? (
            <div className="user-profile-badge">
              <span>Hi, <b>{currentUser.name}</b></span>
              <button className="btn-small logout-btn" onClick={onLogout}>Logout</button>
            </div>
          ) : (
            <>
              <button className="btn-login" onClick={() => onOpenAuth("login")}>Login</button>
              <button className="btn-signup" onClick={() => onOpenAuth("signup")}>Sign Up</button>
            </>
          )}
          <button className="mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}