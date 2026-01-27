import React from 'react';
import Layout from '../components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="section" style={{paddingTop: '120px'}}>
        <div className="container" style={{maxWidth: '800px'}}>
          <h1 className="section-title">Privacy Policy</h1>
          <div className="policy-content" style={{background: 'white', padding: '2rem', borderRadius: '18px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)'}}>
            <p><strong>Effective Date:</strong> January 27, 2026</p>
            <br/>
            <p>[PLACEHOLDER CONTENT]</p>
            <p>
              Please replace this text with the content from your <code>privacy_policy.docx</code> file.
            </p>
            <br/>
            <h3>1. Introduction</h3>
            <p>Welcome to Sorigin/AMS. We are committed to protecting your privacy and ensuring your personal information is handled in a safe and responsible manner.</p>
            <br/>
            <h3>2. Data Collection</h3>
            <p>We collect information you provide directly to us, such as when you fill out a contact form or request services.</p>
            <br/>
            <h3>3. Use of Information</h3>
            <p>We use the information we collect to provide, maintain, and improve our services, and to communicate with you.</p>
             <br/>
            <p><em>(This is generic placeholder text.)</em></p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
