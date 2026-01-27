import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/ui/Card';
import { Wind, Sun, Activity, Users, Map, Settings, Battery, BarChart } from 'lucide-react';
import './Home.css'; // Reusing Home styles for grid

const Services = () => {
  const services = [
    { icon: <Wind size={32} />, title: 'Wind Energy Solutions', description: 'End-to-end management of wind assets including development, construction, and operations.' },
    { icon: <Sun size={32} />, title: 'Solar Energy Solutions', description: 'Comprehensive solar power solutions from rooftop to utility-scale projects.' },
    { icon: <Activity size={32} />, title: 'Operations & Maintenance', description: '24/7 monitoring and maintenance to ensure optimal asset performance.' },
    { icon: <Users size={32} />, title: 'Consultancy Services', description: 'Expert advisory for renewable energy projects, policy framework, and regulatory compliance.' },
    { icon: <Map size={32} />, title: 'Asset Management', description: 'Maximizing ROI through strategic asset lifestyle management.' },
    { icon: <Settings size={32} />, title: 'Technical Advisory', description: 'Technical due diligence, feasibility studies, and grid connectivity analysis.' },
    { icon: <Battery size={32} />, title: 'Storage Solutions', description: 'Integration of battery energy storage systems for grid stability.' },
    { icon: <BarChart size={32} />, title: 'Performance Analytics', description: 'Data-driven insights to optimize energy generation and reduce downtime.' },
  ];

  return (
    <Layout>
      <div className="section" style={{paddingTop: '120px'}}> {/* Added padding for fixed/overlay header */}
        <div className="container">
          <h1 className="section-title">Our Services</h1>
          <div className="services-grid">
            {services.map((service, index) => (
              <Card key={index} className="service-card" style={{alignItems: 'flex-start', textAlign: 'left'}}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title" style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>{service.title}</h3>
                <p style={{fontSize: '0.9rem', color: 'var(--text-light)'}}>{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
