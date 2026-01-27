import React from 'react';
import Layout from '../components/Layout';

const TermsConditions = () => {
  return (
    <Layout>
      <div className="section" style={{paddingTop: '120px'}}>
        <div className="container" style={{maxWidth: '800px'}}>
          <h1 className="section-title">Terms & Conditions</h1>
           <div className="policy-content" style={{background: 'white', padding: '2rem', borderRadius: '18px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)'}}>
            <p><strong>Last Updated:</strong> January 27, 2026</p>
            <br/>
            <p>These Terms and Conditions govern your use of the Sorigin/AMS website and services.</p>
            <br/>
            <h3>1. Acceptance of Terms</h3>
            <p>By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>
            <br/>
            <h3>2. Intellectual Property</h3>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Sorigin and its licensors.</p>
             <br/>
            <p><em>(This is generic placeholder text.)</em></p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsConditions;
