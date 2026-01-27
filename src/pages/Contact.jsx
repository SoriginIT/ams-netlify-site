import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/ui/Button';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! (Demo Only)');
  };

  return (
    <Layout>
      <div className="contact-page-wrapper">
        <div className="container">
          <div className="contact-header">
            <h1>Get in Touch</h1>
            <p>Have questions about our renewable energy solutions? We're here to help.</p>
          </div>

          <div className="contact-content">
            {/* Contact Info */}
            <div className="contact-info-section">
              <div className="info-card">
                <h3>Contact Information</h3>
                <div className="info-item">
                  <Phone className="info-icon" />
                  <div>
                    <label>Phone</label>
                    <p>+91 123 456 7890</p>
                  </div>
                </div>
                <div className="info-item">
                  <Mail className="info-icon" />
                  <div>
                    <label>Email</label>
                    <p>info@sorigin.co</p>
                  </div>
                </div>
                <div className="info-item">
                  <MapPin className="info-icon" />
                  <div>
                    <label>Address</label>
                    <p>123 Energy St, Solar City, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-section">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
                </div>
                <Button type="submit" variant="primary">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
