import React, { useState, useEffect } from "react";
import "./App.css";

import CustomCursor from "./CustomCursor"
import Navigation from "./Navigation";
import Hero from "./Home";
import About from "./About";
import Business from "./Business";
import Product from "./Product";
import Contact from "./Contact";
import AuthModal from "./Auth";

export default function App() {
  const [authModal, setAuthModal] = useState(null); // 'login' | 'signup' | null
  const [currentUser, setCurrentUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const savedUser = localStorage.getItem("myshow_current_user");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("myshow_current_user");
    setCurrentUser(null);
  };

  const handleAddToCart = (item) => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="app-main-wrapper">
      <CustomCursor />

      <Navigation
        onOpenAuth={(mode) => setAuthModal(mode)}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      <main>
        <Hero />
        <About />
        <Business />
        <Product onAddToCart={handleAddToCart} />
        <Contact />
      </main>

      {authModal && (
        <AuthModal
          activeTab={authModal}
          onClose={() => setAuthModal(null)}
          onAuthSuccess={(user) => setCurrentUser(user)}
        />
      )}

      <footer className="footer">
        <div className="footer-content">
          <p>© 2026 My Show. All rights reserved. | Ganapathy, Coimbatore</p>
        </div>
      </footer>
    </div>
  );
}