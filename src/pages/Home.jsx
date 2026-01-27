import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Wind, Sun, Activity, Users, Map } from 'lucide-react';
import './Home.css';

const Home = () => {
  const stats = [
    { icon: <Wind size={32} />, number: '500 MW+', label: 'Wind Assets' },
    { icon: <Sun size={32} />, number: '1 GW+', label: 'Solar Assets' },
    { icon: <Activity size={32} />, number: '20 GW+', label: 'Pipeline & Advisory' },
    { icon: <Users size={32} />, number: '30+', label: 'Utility Clients' },
    { icon: <Map size={32} />, number: '22+', label: 'States in India' },
  ];

  const services = [
    { icon: <Wind size={32} />, title: 'Wind Energy' },
    { icon: <Sun size={32} />, title: 'Solar Energy' },
    { icon: <Activity size={32} />, title: 'Operations & Maintenance' },
    { icon: <Users size={32} />, title: 'Consultancy' },
    { icon: <Map size={32} />, title: 'Asset Management' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Driving the Future of <br/><span className="highlight">Renewable Energy</span></h1>
            <p>Empowering sustainable growth through innovative energy solutions and expert management.</p>
            <div className="hero-buttons">
              <Button to="/services" variant="primary">Explore Services</Button>
              <Button to="/contact" variant="outline">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <Card key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">Our Expertise</h2>
          <div className="services-grid">
             {services.map((service, index) => (
               <Card key={index} className="service-card">
                 <div className="service-icon">{service.icon}</div>
                 <h3 className="service-title">{service.title}</h3>
               </Card>
             ))}
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="section map-section">
        <div className="container map-content">
           <div className="map-visual">
             <div className="india-map">
               <img src="https://cdn.convrrt.com/apps/freshworks/31973958/1571f709-4f64-4ec6-bc66-f969bb4165fe.png" alt="India Map with Presence" style={{maxWidth: '100%', height: 'auto'}}/>
             </div>
           </div>
        </div>
      </section>

    </Layout>
  );
};

export default Home;
