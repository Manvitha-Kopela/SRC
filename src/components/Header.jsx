import React, { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a className="wordmark" href="#">SRC</a>

        <nav 
          aria-label="Main navigation" 
          style={{ display: mobileMenuOpen ? 'flex' : undefined }}
        >
          <a href="#about">About</a>
          <a href="#council">Council</a>
          <a href="#contact">Contact</a>
        </nav>

        <button 
          className="mobile-menu" 
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
