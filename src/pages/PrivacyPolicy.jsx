import React from 'react';
import Layout from '../components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="section" style={{paddingTop: '120px'}}>
        <div className="container" style={{maxWidth: '800px', margin: '0 auto'}}>
          <h1 className="section-title">Privacy Policy</h1>
          <div className="policy-content" style={{background: 'white', padding: '2rem', borderRadius: '18px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', lineHeight: '1.8'}}>
            
            <h2 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Sorigin AMS Mobile App</h2>
            <p><strong>Last Updated:</strong> September 2025</p>
            <br/>
            
            <div style={{background: 'rgba(255, 193, 7, 0.1)', borderLeft: '4px solid #ffc107', padding: '1rem', marginBottom: '2rem'}}>
              <p><strong>Important Notice:</strong> This Application is currently released as a Beta version. Features, functionality, and data availability may be subject to change, enhancement, or temporary limitations during the Beta phase.</p>
            </div>

            <p>Sorigin Insurance Brokers & Technology Services (<strong>“Sorigin”, “we”, “our”, or “us”</strong>), the publisher of the <strong>Sorigin Asset Management Services (AMS) Mobile Application</strong> (“Application” or “App”), is committed to protecting the privacy and security of personal data.</p>
            <br/>
            <p>This Privacy Policy explains how we collect, use, store, and protect personal data when you use the Application, in accordance with applicable data protection laws, including the <strong>General Data Protection Regulation (EU) 2016/679 (GDPR)</strong> and other applicable regulations.</p>
            <br/>
            <p>By using the Application, you acknowledge that you have read and understood this Privacy Policy and that you are accessing a <strong>Beta version of the Application</strong>.</p>
            <br/>

            <h3>1. Why Do We Process Your Data?</h3>
            <p>We process personal data strictly for legitimate and defined purposes related to asset monitoring, analytics, and support services, including:</p>
            <ul>
              <li>Creating and managing user accounts</li>
              <li>Authenticating users and securing access</li>
              <li>Providing wind, solar, and hybrid asset monitoring</li>
              <li>Displaying generation, revenue, carbon offset, and performance metrics</li>
              <li>Delivering analytics, forecasts, and comparisons</li>
              <li>Enabling asset-level issue reporting and support ticketing</li>
              <li>Providing chatbot-based assistance</li>
              <li>Sending alerts and notifications related to asset performance and system updates</li>
              <li>Enabling offline access and data synchronization</li>
              <li>Improving application performance, reliability, and user experience</li>
              <li>Ensuring application security and preventing misuse</li>
              <li>Responding to user queries and support requests</li>
              <li>Complying with legal and regulatory obligations</li>
            </ul>
            <p><strong>As this is a Beta version, certain features may be experimental, partially available, or subject to modification without prior notice.</strong></p>
            <p>Consent-based processing applies where required. You may withdraw your consent at any time through application or device settings, subject to legal and operational limitations.</p>
            <br/>

            <h3>2. Categories of Data We Process</h3>
            <p>We process only data that is necessary for the purposes outlined above.</p>
            
            <h4>A. Personal Information</h4>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Mobile number</li>
              <li>Role or user type (e.g., asset owner, operations user)</li>
              <li>Profile information and preferences</li>
            </ul>

            <h4>B. Asset & Usage Data</h4>
            <ul>
              <li>Project and asset associations (wind, solar, hybrid)</li>
              <li>Generation and performance data displayed in the app</li>
              <li>Analytics usage data (features accessed, filters applied)</li>
            </ul>

            <h4>C. Support & Ticketing Data</h4>
            <ul>
              <li>Issues raised through the Application</li>
              <li>Asset identifiers associated with tickets (e.g., turbine code)</li>
              <li>User-provided descriptions and attachments</li>
            </ul>

            <h4>D. Location Data (Where Applicable)</h4>
            <ul>
              <li>Approximate location used for asset context or support verification</li>
              <li>Location data is collected only when required and permitted</li>
            </ul>

            <h4>E. Media Data</h4>
            <ul>
              <li>Images uploaded for issue reporting or support purposes</li>
              <li>Metadata such as timestamps and asset references</li>
            </ul>

            <h4>F. Device & Technical Data</h4>
            <ul>
              <li>Device type and operating system</li>
              <li>Application usage logs and error logs</li>
              <li>Notification tokens</li>
            </ul>
            <p><strong>During the Beta phase, additional diagnostic or usage data may be temporarily collected to improve stability, performance, and user experience.</strong></p>
            <p>We do not collect unnecessary personal data and do not use personal data for advertising purposes.</p>
            <br/>

            <h3>3. Data Sharing and Third Parties</h3>
            <p>Your data is shared only where necessary to provide the Application services, including:</p>
            <ul>
              <li>Cloud hosting and infrastructure providers</li>
              <li>Notification delivery services (for example, Firebase Cloud Messaging)</li>
              <li>Security, monitoring, and analytics service providers</li>
            </ul>
            <p>These third parties process data solely on our behalf and are bound by contractual and legal confidentiality obligations.</p>
            <p>We do not sell personal data to third parties.</p>
            <br/>

            <h3>4. Cloud Hosting & Local Storage</h3>
            <h4>Cloud Infrastructure</h4>
            <ul>
              <li>Data may be stored and processed on secure cloud infrastructure located in multiple regions</li>
              <li>Data is encrypted in transit and at rest</li>
            </ul>
            <h4>Local Storage</h4>
            <ul>
              <li>Limited data may be stored locally on your device to support offline functionality</li>
              <li>Data is securely synchronized when connectivity is restored</li>
              <li>Device-level security remains the responsibility of the user</li>
            </ul>
            <p><strong>Offline behavior and synchronization reliability may vary during the Beta version.</strong></p>
            <br/>

            <h3>5. Notifications</h3>
            <p>We use push notifications to inform users about:</p>
            <ul>
              <li>Asset alerts and performance updates</li>
              <li>Support ticket status</li>
              <li>Important system or application updates</li>
            </ul>
            <p>You can manage notification preferences via application or device settings.</p>
            <br/>

            <h3>6. Data Retention</h3>
            <p>We retain personal data only for as long as necessary for operational, legal, and regulatory purposes:</p>
            <ul>
              <li>Account data: retained while the account is active and for a limited period after deactivation</li>
              <li>Asset and analytics data: retained in accordance with contractual and regulatory requirements</li>
              <li>Support and ticketing data: retained for audit and resolution tracking</li>
              <li>Log and security data: retained for troubleshooting and monitoring</li>
            </ul>
            <p>Data may be retained longer where required by law or to protect legal rights.</p>
            <br/>

            <h3>7. Data Security</h3>
            <p>We implement appropriate technical and organizational safeguards, including:</p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Role-based access controls</li>
              <li>Secure authentication mechanisms</li>
              <li>Regular monitoring and security reviews</li>
            </ul>
            <p><strong>As this is a Beta release, users acknowledge that absolute stability and security guarantees may evolve as the Application matures.</strong></p>
            <p>While reasonable measures are taken, no system can guarantee absolute security.</p>
            <br/>

            <h3>8. Your Rights</h3>
            <p>Subject to applicable law, you have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of personal data</li>
              <li>Object to or restrict processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent where processing is consent-based</li>
            </ul>
            <p>Requests can be made via in-app support or official communication channels. Identity verification may be required.</p>
            <br/>

            <h3>9. Children’s Privacy</h3>
            <p>The Application is not intended for users under 18 years of age. We do not knowingly collect data from minors.</p>
            <br/>

            <h3>10. International Data Transfers</h3>
            <p>Your data may be processed outside your country of residence. Appropriate safeguards are implemented in accordance with applicable data protection laws.</p>
            <br/>

            <h3>11. Third-Party Links</h3>
            <p>The Application may include links to third-party websites or services. Sorigin is not responsible for the privacy practices of such third parties.</p>
            <br/>

            <h3>12. Changes to This Privacy Policy</h3>
            <p>We may update this Privacy Policy from time to time. Material changes will be communicated through:</p>
            <ul>
              <li>In-app notifications</li>
              <li>Updated “Last Updated” date</li>
              <li>User acceptance prompts, where required</li>
            </ul>
            <p>Continued use of the Application, including during its <strong>Beta phase</strong>, indicates acceptance of the updated Privacy Policy.</p>
            <br/>

            <h3>13. Contact Information</h3>
            <p>For questions or requests regarding this Privacy Policy or personal data processing, please contact us through:</p>
            <ul>
              <li>In-app support</li>
              <li><a href="mailto:hello@sorigin.co" style={{color: 'var(--primary-green)'}}>hello@sorigin.co</a></li>
            </ul>
            <br/>

            <div style={{background: '#f7f9fa', padding: '1.5rem', borderRadius: '12px'}}>
              <h3>Acknowledgement</h3>
              <p>By using the <strong>Sorigin AMS Mobile App (Beta Version)</strong>, you confirm that you have read, understood, and agreed to this Privacy Policy.</p>
              <br/>
              <p>For questions or concerns, please contact us at <a href="mailto:hello@sorigin.co" style={{color: 'var(--primary-green)'}}>hello@sorigin.co</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
