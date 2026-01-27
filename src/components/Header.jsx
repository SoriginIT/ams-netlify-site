import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Rules', path: '#' }, /* Placeholder from original */
    { name: 'Products', path: '#' }, /* Placeholder */
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
           {/* Using text or placeholder image if logo asset not available yet. 
               The original uses an img tag. I will use text for now to be safe. 
           */}
           <Link to="/">
             {/* Actual logo logic would go here. Using a placeholder style based on original code */}
             <div className="logo-placeholder">
               {/* <img src="/logo.png" alt="Sorigin" /> */}
               <span style={{color: 'var(--primary-teal)', fontWeight: '900', fontSize: '1.5rem'}}>AMS</span>
             </div>
           </Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button to="/login" variant="primary" className="header-login-btn">
            Login
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
