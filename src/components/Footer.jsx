import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-col footer-logo-block">
          {/* Logo Placeholder */}
          <div className="footer-logo">
             <span style={{fontSize: '2rem', fontWeight: '900', color: 'white'}}>AMS</span>
          </div>
          <div className="footer-socials">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link> {/* Placeholder */}
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Services</h4>
          <div className="footer-services">
            <Link to="/services">Wind Energy</Link>
            <Link to="/services">Solar Energy</Link>
            <Link to="/services">Operations</Link>
            <Link to="/services">Consultancy</Link>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Contact Us</h4>
          <div className="footer-contact">
             <div className="contact-row">
               <Phone size={16} />
               <span>+91 123 456 7890</span>
             </div>
             <div className="contact-row">
               <Mail size={16} />
               <span>info@sorigin.co</span>
             </div>
             <div className="contact-row">
               <MapPin size={16} />
               <span>123 Energy St, Solar City, India</span>
             </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
           <div className="copyright">
             &copy; {new Date().getFullYear()} AMS/Sorigin. All rights reserved.
           </div>
           <div className="footer-bottom-links">
             <Link to="/privacy-policy">Privacy Policy</Link>
             <Link to="/terms-conditions">Terms & Conditions</Link>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
